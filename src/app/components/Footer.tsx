import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision & Priorities", href: "/vision-priorities" },
  { label: "Experience", href: "/experience" },
  { label: "Media", href: "/media" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a2d52] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-12">
          {/* Brand */}
          <div className="w-64 shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/branding/ieb-logo.png"
                alt="IEB logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <div>
                <p className="text-white font-semibold text-sm leading-tight">
                  Institution of Engineers, Bangladesh
                </p>
                <p className="text-white/50 text-xs">IEB</p>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              Professionals for a Better Bangladesh
            </p>
          </div>

          {/* Nav links */}
          <div className="flex-1">
            <h4 className="text-white/70 text-xs uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support CTA */}
          <div className="w-48 shrink-0 flex flex-col items-start justify-start gap-3">
            <h4 className="text-white/70 text-xs uppercase tracking-widest">Campaign</h4>
            <Link
              href="/support"
              className="bg-white text-[#003d7a] text-sm font-semibold px-5 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Support My Campaign
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Institution of Engineers, Bangladesh. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">Professionals for a Better Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
