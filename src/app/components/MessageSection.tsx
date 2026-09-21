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
        flex min-h-0
        min-w-0
        flex-col
      "
      aria-labelledby="message-heading"
    >
      {/* Section heading */}
      <div className="mb-[10px] flex items-center gap-[10px]">
        <div className="h-[3px] w-[28px] rounded-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad)" }} />
        <h2
          id="message-heading"
          className="text-[16px] font-bold leading-none text-[#0b3f6c]"
        >
          A Message to Fellow Engineers
        </h2>
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
        className="min-w-0 overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
      >
        {/* Letter top accent */}
        <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />

        <div className="px-[16px] pb-[14px] pt-[13px]">
          <p className="text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">Dear Fellow Engineers,</p>

          <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">Assalamu Alaikum and warm greetings.</p>

          <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">
            I am presenting my candidacy for Central Council Member of the Institution of Engineers, Bangladesh, with a sincere commitment to listening to members and contributing to a more connected, inclusive, and professionally supportive IEB. Engineers across every discipline, sector, and career stage deserve respect, meaningful recognition, and opportunity to grow.
          </p>

          <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">
            As an academic and IT professional, and as an IEB Fellow and Council Member since 2025, I hope to bring a collaborative approach, international professional exposure, and a strong commitment to engineering education and professional engagement. I welcome your ideas and concerns — and will work constructively with fellow members and council colleagues to advance shared priorities.
          </p>

          <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">I seek your trust and support.</p>

          {/* Signature space */}
          <div className="mt-[10px] border-t border-[#e2eaf0] pt-[7px]">
            <div className="h-[90px]" />
            <p className="text-[14px] font-semibold text-[#07518a]">
              — Engr. Mohammed Arif Hasan Chowdhury
            </p>
          </div>
        </div>
      </div>

      {/* Navigation row */}
      <nav aria-label="Profile sections" className="mt-auto pt-[12px]">
        <div className="overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_5px_rgba(15,58,91,0.06)]">
          {tabs.map(({ icon: Icon, label, href }, index) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-[12px] px-[14px] py-[11px] transition-all hover:bg-[#f0f6fb]"
              style={{
                borderBottom: index < tabs.length - 1 ? "1px solid #e8eef4" : "none",
              }}
            >
              {/* Left accent bar */}
              <span
                aria-hidden="true"
                className="shrink-0 rounded-full transition-all duration-200"
                style={{ width:3, height:28, background:"linear-gradient(180deg,#07518a,#1a7fc1)", opacity:0.18 }}
              />
              {/* Icon */}
              <div
                className="flex shrink-0 items-center justify-center rounded-[7px] transition-all duration-200 group-hover:scale-105"
                style={{ width:32, height:32, background:"linear-gradient(145deg,#07518a,#0d6fad)", boxShadow:"0 2px 8px rgba(7,81,138,0.22),inset 0 1px 0 rgba(255,255,255,0.15)" }}
              >
                <Icon size={15} strokeWidth={2.1} aria-hidden="true" color="#fff" />
              </div>
              {/* Label */}
              <span className="flex-1 text-[14px] font-semibold leading-none text-[#0d3a5c] transition-colors group-hover:text-[#07518a]">
                {label}
              </span>
              {/* Arrow */}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#b0c8dc] transition-all duration-200 group-hover:translate-x-[2px] group-hover:text-[#07518a]">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
}
