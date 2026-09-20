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
      <div className="max-w-7xl mx-auto px-6 py-7">
        <div className="flex gap-10 items-start">
          {/* Brand */}
          <div className="w-52 shrink-0">
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/images/branding/ieb-logo.png"
                alt="IEB logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <div>
                <p className="text-white font-semibold text-xs leading-tight">
                  Institution of Engineers, Bangladesh
                </p>
                <p className="text-white/50 text-[10px]">IEB</p>
              </div>
            </div>
            <p className="text-white/40 text-[10px] leading-relaxed">
              Professionals for a Better Bangladesh
            </p>
          </div>

          {/* Nav links */}
          <div className="flex-1">
            <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/60 text-xs hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right slogan */}
          <div className="w-44 shrink-0 text-right">
            <p className="text-white/70 text-xs font-semibold leading-snug">
              Engineering for a Better Tomorrow
            </p>
            <p className="text-white/30 text-[10px] mt-1">
              IEB Local Council — Chittagong
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <p className="text-white/30 text-[10px]">
            &copy; {new Date().getFullYear()} Institution of Engineers, Bangladesh. All rights reserved.
          </p>
          <p className="text-white/20 text-[10px]">Professionals for a Better Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
