// import { GraduationCap, Briefcase, Star, ImageIcon } from "lucide-react";

// const tabs = [
//   { icon: GraduationCap, label: "Education",            href: "#education" },
//   { icon: Briefcase,     label: "Professional Journey", href: "#experience" },
//   { icon: Star,          label: "Leadership",           href: "#leadership" },
//   { icon: ImageIcon,     label: "Media Gallery",        href: "#gallery" },
// ];

// export default function MessageSection() {
//   return (
//     <div className="flex-1 flex flex-col gap-2.5">
//       <div className="flex items-center gap-2">
//         <div className="w-1 h-4 bg-[#003d7a] rounded" />
//         <h2 className="text-sm font-bold text-[#003d7a]">A Message to Fellow Engineers</h2>
//       </div>

//       <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col gap-2 text-gray-600 text-xs leading-relaxed flex-1">
//         <p>
//           Dear Fellow Engineers, I am honoured to present myself as a candidate for the IEB
//           {" "}Council, Chittagong Centre.
//         </p>
//         <p>
//           I am an Academic and IT Professional with 15+ years of experience in Software Engineering,
//           Health Informatics, and Business Intelligence. I hold an M.Sc. from KTH Royal Institute of
//           Technology, Stockholm, Sweden, and have engaged with UNDP and UNITAR.
//         </p>
//         <p>
//           I believe in a united, inclusive, and professionally empowered engineering community.
//           I am committed to advocating for engineers&apos; rights, dignity, and recognition, and to
//           strengthening the IEB for the benefit of all its members.
//         </p>
//         <p>I seek your trust and support.</p>
//         <p className="font-medium text-[#003d7a] pt-1 border-t border-gray-100">
//           — Engr. Mohammed Arif Hasan Chowdhury
//         </p>
//       </div>

//       {/* Navigation tabs */}
//       <div className="grid grid-cols-4 gap-2">
//         {tabs.map(({ icon: Icon, label, href }) => (
//           <a
//             key={label}
//             href={href}
//             className="flex flex-col items-center gap-1 bg-white border border-gray-100 rounded-lg py-2 px-2 shadow-sm hover:border-[#003d7a]/30 hover:shadow-md transition-all group"
//           >
//             <div className="w-6 h-6 rounded-full bg-[#e8f0f7] flex items-center justify-center group-hover:bg-[#003d7a]/10 transition-colors">
//               <Icon size={12} className="text-[#003d7a]" />
//             </div>
//             <span className="text-[10px] font-medium text-[#003d7a] text-center leading-tight">{label}</span>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

import { Briefcase, GraduationCap, ImageIcon, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavigationItem = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const tabs: NavigationItem[] = [
  {
    icon: GraduationCap,
    label: "Education",
    href: "#education",
  },
  {
    icon: Briefcase,
    label: "Professional Journey",
    href: "#experience",
  },
  {
    icon: Users,
    label: "Leadership",
    href: "#leadership",
  },
  {
    icon: ImageIcon,
    label: "Media Gallery",
    href: "#gallery",
  },
];

export default function MessageSection() {
  return (
    <section
      className="
        flex h-full
        min-w-0
        flex-col
      "
      aria-labelledby="message-heading"
    >
      {/* Section heading */}
      <div className="mb-[8px]">
        <h2
          id="message-heading"
          className="
            text-[17px]
            font-bold
            leading-[1.15]
            text-[#103f68]
          "
        >
          A Message to Fellow Engineers
        </h2>

        <div
          aria-hidden="true"
          className="
            mt-[7px]
            h-[2px]
            w-[31px]
            bg-[#07518a]
          "
        />
      </div>

      {/* Message body */}
      {/* <div
        className="
          min-w-0
          text-[11px]
          leading-[1.42]
          text-[#32495d]

          lg:text-[11.5px]
        "
      >
        <p>
          Dear Fellow Engineers, I am honoured to present myself as a candidate
          for the IEB Council, Chittagong Centre.
        </p>

        <p className="mt-[8px]">
          I am an Academic and IT Professional with 15+ years of experience in
          Software Engineering, Health Informatics, and Business Intelligence.
          I hold an M.Sc. from KTH Royal Institute of Technology, Stockholm,
          Sweden, and have engaged with UNDP and UNITAR.
        </p>

        <p className="mt-[8px]">
          I believe in a united, inclusive, and professionally empowered
          engineering community. I am committed to advocating for
          engineers&apos; rights, dignity, and recognition, and to
          strengthening the IEB for the benefit of all its members.
        </p>

        <p className="mt-[8px]">
          I seek your trust and support.
        </p>

        <div
          className="
            mt-[10px]
            border-t border-[#e2eaf0]
            pt-[7px]
          "
        >
          <p
            className="
              text-[11px]
              font-semibold
              text-[#07518a]
              mt-[100px]
            "
          >
            — Engr. Mohammed Arif Hasan Chowdhury
          </p>
        </div>
      </div> */}
      {/* Message body */}
      <div
        className="
    min-w-0
    text-[11px]
    leading-[1.42]
    text-[#32495d]

    lg:text-[13.5px]
  "
      >
        <p>Dear Fellow Engineers,</p>

        <p className="mt-[8px]">Assalamu Alaikum and warm greetings.</p>

        <p className="mt-[8px]">
          I am presenting my candidacy for Central Council Member of the
          Institution of Engineers, Bangladesh, with a sincere commitment to
          listening to members and contributing to a more connected, inclusive,
          and professionally supportive IEB. Engineers across every discipline,
          sector, and career stage deserve respect, meaningful recognition, and opportunity to grow.
        </p>

        <p className="mt-[8px]">As an academic and IT professional, and as an IEB Fellow and Council Member since 2025, I hope to bring a collaborative approach, international professional exposure, and a strong commitment to engineering education and professional engagement. I welcome your ideas and concerns-and will work constructively with fellow members and council collagues to advance shared priorities.</p>

        <div
          className="
      mt-[10px]
      border-t border-[#e2eaf0]
      pt-[7px]
    "
        >
          <p
            className="
        text-[13px]
        font-semibold
        text-[#07518a]
        mt-[100px]
      "
          >
            — Engr. Mohammed Arif Hasan Chowdhury
          </p>
        </div>
      </div>

      {/* Navigation row */}
      <nav
        aria-label="Profile sections"
        className="
          mt-auto
          pt-[12px]
        "
      >
        <div
          className="
            grid
            min-h-[59px]
            grid-cols-2
            overflow-hidden
            rounded-[5px]
            border border-[#dce6ee]
            bg-white
            shadow-[0_2px_5px_rgba(15,58,91,0.06)]

            sm:grid-cols-4
          "
        >
          {tabs.map(({ icon: Icon, label, href }, index) => (
            <a
              key={label}
              href={href}
              className={`
                group
                flex
                min-h-[59px]
                flex-col
                items-center
                justify-center
                gap-[4px]
                px-2
                text-center
                transition-colors
                hover:bg-[#f6f9fc]

                ${
                  index < tabs.length - 1
                    ? "sm:border-r sm:border-[#e5edf3]"
                    : ""
                }
              `}
            >
              <Icon
                size={19}
                strokeWidth={2.2}
                aria-hidden="true"
                className="
                  text-[#07518a]
                  transition-transform
                  group-hover:-translate-y-px
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[11.5px]
                  font-semibold
                  leading-none
                  text-[#17466f]
                "
              >
                {label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
}
