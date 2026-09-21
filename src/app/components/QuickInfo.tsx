// import { User, Award, Users, MapPin, Briefcase, BookOpen } from "lucide-react";

// const infoItems = [
//   { icon: User,      label: "Name",         value: "Engr. Mohammed Arif Hasan Chowdhury" },
//   { icon: Award,     label: "Position",     value: "Local Council Member" },
//   { icon: Award,     label: "Membership",   value: "F14663 (Fellow)" },
//   { icon: Users,     label: "Panel",        value: "AEB Panel" },
//   { icon: MapPin,    label: "IEB Centre",   value: "Chittagong" },
//   { icon: Briefcase, label: "Profession",   value: "Academic & IT Professional" },
//   { icon: Briefcase, label: "Current Role", value: "Assistant Professor, Dept. of CSE, USTC" },
//   { icon: Award,     label: "Experience",   value: "15+ Years" },
//   { icon: BookOpen,  label: "Expertise",    value: "Software Engineering, Health Informatics, Business Intelligence, ML" },
// ];

// export default function QuickInfo() {
//   return (
//     <div className="w-64 shrink-0 rounded-lg overflow-hidden shadow-sm bg-white flex flex-col border border-gray-100">
//       <div className="bg-[#003d7a] px-4 py-2">
//         <h2 className="text-white font-semibold text-[11px] tracking-wide uppercase">
//           Quick Information
//         </h2>
//       </div>
//       <ul className="divide-y divide-gray-100 flex-1">
//         {infoItems.map(({ icon: Icon, label, value }) => (
//           <li key={label} className="flex items-start gap-2 px-3 py-2">
//             <Icon size={12} className="text-[#003d7a] shrink-0 mt-0.5" />
//             <div className="min-w-0">
//               <p className="text-[9px] text-gray-400 uppercase tracking-wide leading-none mb-0.5">{label}</p>
//               <p className="text-[11px] text-gray-700 font-medium leading-snug">{value}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className="px-3 py-2.5 bg-gray-50 border-t border-gray-100">
//         <a
//           href="/contact"
//           className="block w-full text-center bg-[#003d7a] hover:bg-[#002d5a] text-white text-[11px] font-semibold py-1.5 rounded transition-colors"
//         >
//           Get in Touch
//         </a>
//       </div>
//     </div>
//   );
// }


import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  User,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type InfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const infoItems: InfoItem[] = [
  {
    icon: User,
    label: "Name",
    value: "Engr. Mohammed Arif Hasan Chowdhury",
  },
  {
    icon: Award,
    label: "Position",
    value: "Local Council Member",
  },
  {
    icon: Award,
    label: "Membership",
    value: "F14663 (Fellow)",
  },
  {
    icon: Users,
    label: "Panel",
    value: "AEB Panel",
  },
  {
    icon: MapPin,
    label: "IEB Centre",
    value: "Chittagong",
  },
  {
    icon: Briefcase,
    label: "Profession",
    value: "Academic & IT Professional",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "Ph.D. Fellow (JU), M.Sc. Sweden, B.Sc. (IIUC)",
  },
  {
    icon: Briefcase,
    label: "Current Role",
    value: "Assistant Professor, Dept. of CSE, USTC",
  },
  {
    icon: Award,
    label: "Experience",
    value: "15+ Years",
  },
  {
    icon: BookOpen,
    label: "Expertise",
    value:
      "Software Engineering, Health Informatics, Business Intelligence, ML",
  },
];

export default function QuickInfo() {
  return (
    <aside
      className="
        h-full
        overflow-hidden
        rounded-[5px]
        border border-[#d9e4ed]
        bg-white
        shadow-[0_2px_6px_rgba(15,58,91,0.08)]
      "
      aria-labelledby="quick-information-heading"
    >
      {/* Header */}
      <div
        className="
          flex h-[42px]
          items-center
          bg-[#07518a]
          px-[14px]
        "
      >
        <h2
          id="quick-information-heading"
          className="
            text-[16px]
            font-bold
            leading-none
            text-white
          "
        >
          Quick Information
        </h2>
      </div>

      {/* Information rows */}
      <div>
        {infoItems.map(({ icon: Icon, label, value }, index) => (
          <div
            key={label}
            className={`
              grid
              grid-cols-[18px_minmax(80px,100px)_minmax(0,1fr)]
              items-start
              gap-x-[6px]
              px-[12px]
              py-[7px]

              ${
                index < infoItems.length - 1
                  ? "border-b border-[#e4ebf1]"
                  : ""
              }
            `}
          >
            <Icon
              size={14}
              strokeWidth={2.2}
              aria-hidden="true"
              className="
                mt-[1px]
                shrink-0
                text-[#07518a]
              "
            />

            <span
              className="
                pt-[1px]
                text-[15px]
                font-semibold
                leading-[1.25]
                text-[#21384d]
              "
            >
              {label}
            </span>

            <span
              className="
                min-w-0
                text-[14px]
                font-medium
                leading-[1.3]
                text-[#263b4d]
              "
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Contact button */}
      <div className="px-[12px] pb-[9px] pt-[6px]">
        <a
          href="/contact"
          className="
            flex h-[29px]
            w-full
            items-center
            justify-center
            gap-[6px]
            rounded-[3px]
            bg-[#07518a]
            text-[15.5px]
            font-semibold
            text-white
            transition-colors
            hover:bg-[#043f70]
          "
        >
          <Mail
            size={12}
            strokeWidth={2.2}
            aria-hidden="true"
          />

          <span>Get in Touch</span>
        </a>
      </div>
    </aside>
  );
}