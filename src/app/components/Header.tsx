import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision & Priorities", href: "/vision-priorities" },
  { label: "Experience", href: "/experience" },
  { label: "Media", href: "/media" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Branding */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/branding/ieb-logo.png"
            alt="IEB logo"
            width={76}
            height={76}
            className="object-contain block"
          />
          <span className="text-[#003d7a] leading-tight hidden sm:block">
            <span className="block font-semibold text-sm">Institution of Engineers, Bangladesh (IEB)</span>
            <span className="block text-xs text-gray-500">Professionals for a Better Bangladesh</span>
          </span>
        </Link>

        {/* Nav + CTA */}
        <div className="flex items-center gap-6">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-5 list-none m-0 p-0">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-[#1a1a2e] text-sm font-medium hover:text-[#003d7a] transition-colors whitespace-nowrap${
                      label === "Home"
                        ? " border-y-2 border-[#4b4f59] py-0.5"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/support"
            className="shrink-0 bg-[#003d7a] hover:bg-[#002d5a] text-white text-sm font-semibold px-4 py-2 rounded transition-colors whitespace-nowrap flex items-center gap-1.5 mr-20 ml-20"
          >
            <Send size={14} className="shrink-0" />
            Support My Campaign
          </Link>
        </div>
      </div>
    </header>
  );
}
