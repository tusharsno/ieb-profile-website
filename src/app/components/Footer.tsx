// import Image from "next/image";
// import Link from "next/link";

// const footerLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Vision & Priorities", href: "/vision-priorities" },
//   { label: "Experience", href: "/experience" },
//   { label: "Media", href: "/media" },
//   { label: "News", href: "/news" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#0a2c4f] text-white">
//       <div className="max-w-7xl mx-auto px-6 py-5">
//         <div className="flex items-center gap-8">
//           {/* Brand */}
//           <div className="flex items-center gap-2.5 shrink-0">
//             <Image
//               src="/images/branding/ieb-logo.png"
//               alt="IEB logo"
//               width={32}
//               height={32}
//               className="object-contain"
//             />
//             <div>
//               <p className="text-white font-semibold text-xs leading-tight">
//                 Institution of Engineers, Bangladesh
//               </p>
//               <p className="text-white/50 text-[12px]">IEB</p>
//             </div>
//           </div>

//           {/* Nav links */}
//           <ul className="flex flex-wrap gap-x-5 gap-y-1">
//             {footerLinks.map(({ label, href }) => (
//               <li key={href}>
//                 <Link
//                   href={href}
//                   className="text-white/60 text-xs hover:text-white transition-colors whitespace-nowrap"
//                 >
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Right slogan */}
//           <div className="ml-auto shrink-0 text-right">
//             <p className="text-white/70 text-xs font-semibold leading-snug">
//               Engineering for a Better Tomorrow
//             </p>
//             <p className="text-white/40 text-[12px] mt-0.5">
//               IEB Local Council — Chittagong
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["600"] });

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision", href: "/vision-priorities" },
  { label: "Experience", href: "/experience" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-[#07345b]
        text-white
      "
    >
      {/* =====================================================
          MAIN FOOTER ROW
      ====================================================== */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-full lg:max-w-[1200px] xl:max-w-[1370px]
          grid-cols-1
          items-center
          gap-6
          px-6
          pb-[17px]
          pt-[18px]

          md:grid-cols-[360px_minmax(0,1fr)_245px]
          md:gap-5
        "
      >
        {/* ===================================================
            LEFT — IEB BRAND
        ==================================================== */}
        <div
          className="
            flex
            items-center
            gap-[11px]
          "
        >
          <div
            className="
              flex
              h-[68px]
              w-[68px]
              shrink-0
              items-center
              justify-center
            "
          >
            <Image
              src="/images/branding/ieb-logo1.png"
              alt="Institution of Engineers, Bangladesh logo"
              width={58}
              height={58}
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>

          <div className="min-w-0">
            <p
              className="
                text-[13px]
                font-semibold
                leading-[1.25]
                text-white
              "
            >
              Institution of Engineers, Bangladesh (IEB)
            </p>

            <p
              className="
                mt-[3px]
                text-[11px]
                leading-[1.25]
                text-white/70
              "
            >
              Professionals for a Better Bangladesh
            </p>
          </div>
        </div>

        {/* ===================================================
            CENTER — NAVIGATION
        ==================================================== */}
        <nav
          aria-label="Footer navigation"
          className="
            flex
            justify-start

            md:justify-center
          "
        >
          <ul
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-y-2
            "
          >
            {footerLinks.map(({ label, href }, index) => (
              <li
                key={href}
                className="
                  flex
                  items-center
                "
              >
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="
                      mx-[10px]
                      text-[12px]
                      text-white/45
                    "
                  >
                    |
                  </span>
                )}

                <Link
                  href={href}
                  className="
                    whitespace-nowrap
                    text-[12px]
                    font-medium
                    text-white/85
                    transition-colors
                    hover:text-white
                  "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ===================================================
            RIGHT — SLOGAN
        ==================================================== */}
        <div
          className="
            flex
            justify-start

            md:justify-end
          "
        >
          <div
            className="
              text-left

              md:text-right
            "
          >
            <p
              className={`${dancingScript.className} text-white`}
              style={{
                fontSize: "clamp(18px, 1.55vw, 25px)",
                lineHeight: 1.04,
                fontWeight: 600,
                textShadow: "0 1px 2px rgba(0,0,0,0.18)",
              }}
            >
              Engineering
              <br />
              for a Better Tomorrow
            </p>

            <div
              aria-hidden="true"
              className="
                mt-[7px]
                h-[2px]
                w-[34px]
                bg-white/75

                md:ml-auto
              "
            />
          </div>
        </div>
      </div>
    </footer>
  );
}