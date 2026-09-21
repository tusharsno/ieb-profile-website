// import { Play, ImageIcon, Mail, Phone, MapPin, Link2, Globe } from "lucide-react";

// const galleryPlaceholders = Array.from({ length: 6 }, (_, i) => i + 1);

// export default function BottomMediaRow() {
//   return (
//     <section className="w-full bg-white py-4">
//       <div className="max-w-7xl mx-auto px-6 flex gap-4 items-start">

//         {/* Featured Video */}
//         <div className="flex-1 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
//           <div className="bg-[#003d7a] px-4 py-2 flex items-center gap-2">
//             <Play size={12} className="text-white" />
//             <h3 className="text-white font-semibold text-xs tracking-wide">Featured Video</h3>
//           </div>
//           <div className="bg-[#1a2a3a] aspect-video flex items-center justify-center relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#003d7a]/70 to-[#001a3a]/80" />
//             <div className="relative flex flex-col items-center gap-1.5">
//               <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
//                 <Play size={16} className="text-white ml-0.5" />
//               </div>
//               <p className="text-white/50 text-[12px]">[Video — asset pending]</p>
//             </div>
//           </div>
//         </div>

//         {/* Photo Gallery */}
//         <div className="flex-1 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
//           <div className="bg-[#003d7a] px-4 py-2 flex items-center gap-2">
//             <ImageIcon size={12} className="text-white" />
//             <h3 className="text-white font-semibold text-xs tracking-wide">Photo Gallery</h3>
//           </div>
//           <div className="p-2.5 bg-white">
//             <div className="grid grid-cols-3 gap-1.5">
//               {galleryPlaceholders.map((i) => (
//                 <div
//                   key={i}
//                   className="aspect-square bg-[#e8f0f7] rounded flex items-center justify-center cursor-pointer hover:bg-[#d4e6f5] transition-colors"
//                 >
//                   <ImageIcon size={13} className="text-[#003d7a]/30" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Connect With Me */}
//         <div className="w-60 shrink-0 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
//           <div className="bg-[#003d7a] px-4 py-2">
//             <h3 className="text-white font-semibold text-xs tracking-wide">Connect With Me</h3>
//           </div>
//           <div className="bg-white p-3 flex flex-col gap-2.5">
//             <ul className="flex flex-col gap-2">
//               <li className="flex items-start gap-2">
//                 <Phone size={11} className="text-[#003d7a] shrink-0 mt-0.5" />
//                 <span className="text-xs text-gray-600">+880 1XXX XXXXXXX</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Mail size={11} className="text-[#003d7a] shrink-0 mt-0.5" />
//                 <span className="text-xs text-gray-600 break-all">arif.chowdhury@ustc.ac.bd</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Link2 size={11} className="text-[#003d7a] shrink-0 mt-0.5" />
//                 <span className="text-xs text-gray-600">linkedin.com/in/arif-chowdhury</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Globe size={11} className="text-[#003d7a] shrink-0 mt-0.5" />
//                 <span className="text-xs text-gray-600">www.arifchowdhury.com</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <MapPin size={11} className="text-[#003d7a] shrink-0 mt-0.5" />
//                 <span className="text-xs text-gray-600">Chittagong, Bangladesh</span>
//               </li>
//             </ul>
//             <a
//               href="/contact"
//               className="block w-full text-center bg-[#003d7a] hover:bg-[#002d5a] text-white text-xs font-semibold py-1.5 rounded transition-colors"
//             >
//               Send a Message
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


import {
  ArrowRight,
  Globe,
  ImageIcon,
  Link2,
  Mail,
  MapPin,
  Phone,
  Play,
  Send,
} from "lucide-react";

const galleryPlaceholders = Array.from(
  { length: 6 },
  (_, index) => index + 1
);

const contactItems = [
  {
    icon: Phone,
    label: "+880 1XXX XXXXXXX",
    href: "tel:+8801XXXXXXXXX",
  },
  {
    icon: Mail,
    label: "arif.chowdhury@ustc.ac.bd",
    href: "mailto:arif.chowdhury@ustc.ac.bd",
  },
  {
    icon: Link2,
    label: "linkedin.com/in/arif-chowdhury",
    href: "https://linkedin.com/in/arif-chowdhury",
  },
  {
    icon: Globe,
    label: "www.arifchowdhury.com",
    href: "https://www.arifchowdhury.com",
  },
  {
    icon: MapPin,
    label: "Chittagong, Bangladesh",
    href: "#",
  },
];

export default function BottomMediaRow() {
  return (
    <section
      id="media"
      className="
        w-full
        bg-white
        py-[14px]
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          // max-w-7xl
          max-w-full lg:max-w-[1200px] xl:max-w-[1366px]
          grid-cols-1
          items-stretch
          gap-[14px]
          px-6

          md:grid-cols-2

          lg:grid-cols-[1fr_1.12fr_1fr]
        "
      >
        {/* =====================================================
            FEATURED VIDEO
        ====================================================== */}
        <article
          className="
            overflow-hidden
            rounded-[7px]
            border
            border-[#dce6ee]
            bg-white
            shadow-[0_2px_7px_rgba(18,61,94,0.07)]
          "
        >
          {/* Title */}
          <div
            className="
              flex
              h-[39px]
              items-center
              gap-[8px]
              px-[14px]
            "
          >
            <Play
              size={18}
              strokeWidth={2.25}
              aria-hidden="true"
              className="
                shrink-0
                text-[#07518a]
              "
            />

            <h2
              className="
                text-[16px]
                font-bold
                leading-none
                text-[#103f68]
              "
            >
              Featured Video
            </h2>
          </div>

          {/* Blank video area */}
          <div
            className="
              px-[13px]
              pb-[13px]
            "
          >
            <div
              className="
                relative
                flex
                h-[150px]
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-[5px]
                bg-[#dce8f1]
              "
            >
              {/* Neutral blank placeholder */}
              <div
                className="
                  flex
                  h-[50px]
                  w-[50px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#7fa3bf]
                  bg-white/70
                "
              >
                <Play
                  size={23}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="
                    ml-[3px]
                    text-[#07518a]
                  "
                />
              </div>
            </div>
          </div>
        </article>

        {/* =====================================================
            PHOTO GALLERY
        ====================================================== */}
        <article
          id="gallery"
          className="
            overflow-hidden
            rounded-[7px]
            border
            border-[#dce6ee]
            bg-white
            shadow-[0_2px_7px_rgba(18,61,94,0.07)]
          "
        >
          {/* Title + View all */}
          <div
            className="
              flex
              h-[39px]
              items-center
              justify-between
              px-[14px]
            "
          >
            <div
              className="
                flex
                items-center
                gap-[8px]
              "
            >
              <ImageIcon
                size={18}
                strokeWidth={2.2}
                aria-hidden="true"
                className="
                  shrink-0
                  text-[#07518a]
                "
              />

              <h2
                className="
                  text-[16px]
                  font-bold
                  leading-none
                  text-[#103f68]
                "
              >
                Photo Gallery
              </h2>
            </div>

            <a
              href="/media"
              className="
                flex
                items-center
                gap-[3px]
                text-[12px]
                font-semibold
                text-[#07518a]
                transition-colors
                hover:text-[#003d7a]
              "
            >
              <span>View All</span>

              <ArrowRight
                size={12}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Blank 3 × 2 gallery */}
          <div
            className="
              grid
              grid-cols-3
              gap-[6px]
              px-[11px]
              pb-[11px]
            "
          >
            {galleryPlaceholders.map((item) => (
              <div
                key={item}
                className="
                  flex
                  h-[72px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[4px]
                  bg-[#e5eef5]
                "
              >
                <ImageIcon
                  size={15}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="
                    text-[#8eb0ca]
                  "
                />
              </div>
            ))}
          </div>
        </article>

        {/* =====================================================
            CONNECT WITH ME
        ====================================================== */}
        <article
          className="
            overflow-hidden
            rounded-[7px]
            border
            border-[#dce6ee]
            bg-white
            shadow-[0_2px_7px_rgba(18,61,94,0.07)]
          "
        >
          {/* Header + social buttons */}
          <div
            className="
              flex
              min-h-[39px]
              items-center
              justify-between
              gap-3
              px-[14px]
              pt-[7px]
            "
          >
            <h2
              className="
                whitespace-nowrap
                text-[16px]
                font-bold
                leading-none
                text-[#103f68]
              "
            >
              Connect With Me
            </h2>

            <div
              className="
                flex
                shrink-0
                items-center
                gap-[5px]
              "
            >
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-[23px]
                  w-[23px]
                  items-center
                  justify-center
                  rounded-[3px]
                  bg-[#1769aa]
                  text-[15px]
                  font-bold
                  leading-none
                  text-white
                "
              >
                f
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/arif-chowdhury"
                aria-label="LinkedIn"
                className="
                  flex
                  h-[23px]
                  min-w-[23px]
                  items-center
                  justify-center
                  rounded-[3px]
                  bg-[#0a66c2]
                  px-[3px]
                  text-[11px]
                  font-bold
                  leading-none
                  text-white
                "
              >
                in
              </a>

              {/* Video / YouTube-style */}
              <a
                href="#"
                aria-label="Video channel"
                className="
                  flex
                  h-[23px]
                  w-[23px]
                  items-center
                  justify-center
                  rounded-[3px]
                  bg-[#e21b22]
                  text-white
                "
              >
                <Play
                  size={12}
                  strokeWidth={2.6}
                  fill="currentColor"
                  aria-hidden="true"
                />
              </a>

              {/* X */}
              <a
                href="#"
                aria-label="X"
                className="
                  flex
                  h-[23px]
                  w-[23px]
                  items-center
                  justify-center
                  rounded-[3px]
                  bg-black
                  text-[12px]
                  font-semibold
                  text-white
                "
              >
                X
              </a>
            </div>
          </div>

          {/* Contact details */}
          <div
            className="
              flex
              flex-col
              px-[14px]
              pb-[11px]
              pt-[7px]
            "
          >
            <ul
              className="
                flex
                flex-col
                gap-[6px]
              "
            >
              {contactItems.map(
                ({ icon: Icon, label, href }) => (
                  <li
                    key={label}
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-[7px]
                    "
                  >
                    <Icon
                      size={13}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="
                        mt-[1px]
                        shrink-0
                        text-[#07518a]
                      "
                    />

                    {href === "#" ? (
                      <span
                        className="
                          min-w-0
                          text-[12px]
                          leading-[1.25]
                          text-[#354e62]
                        "
                      >
                        {label}
                      </span>
                    ) : (
                      <a
                        href={href}
                        className="
                          min-w-0
                          break-all
                          text-[12px]
                          leading-[1.25]
                          text-[#354e62]
                          transition-colors
                          hover:text-[#07518a]
                        "
                      >
                        {label}
                      </a>
                    )}
                  </li>
                )
              )}
            </ul>

            {/* Send message */}
            <a
              href="/contact"
              className="
                mt-[9px]
                flex
                h-[30px]
                w-full
                items-center
                justify-center
                gap-[6px]
                rounded-[3px]
                bg-[#07518a]
                text-[12.5px]
                font-semibold
                text-white
                transition-colors
                hover:bg-[#043e70]
              "
            >
              <Send
                size={12}
                strokeWidth={2.1}
                aria-hidden="true"
              />

              <span>Send a Message</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}