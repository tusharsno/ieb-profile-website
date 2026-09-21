// import { Shield, TrendingUp, Link2, Users, MessageSquare, Globe } from "lucide-react";

// const priorities = [
//   { icon: Shield,       title: "Engineers' Rights & Dignity" },
//   { icon: TrendingUp,   title: "Professional Development" },
//   { icon: Users,        title: "Young Engineers' Participation" },
//   { icon: Link2,        title: "Industry–Academia Collaboration" },
//   { icon: MessageSquare,title: "Transparency & Engagement" },
//   { icon: Globe,        title: "Inclusive Representation" },
// ];

// export default function VisionPriorities() {
//   return (
//     <div className="w-64 shrink-0 flex flex-col gap-3">
//       {/* Vision card */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3">
//         <div className="flex items-center gap-2 mb-2">
//           <div className="w-1 h-4 bg-[#003d7a] rounded" />
//           <h3 className="text-sm font-bold text-[#003d7a]">My Vision for IEB</h3>
//         </div>
//         <p className="text-gray-600 text-xs leading-relaxed">
//           &ldquo;To contribute to a united, inclusive, and professionally empowered engineering community where every engineer is respected, recognized, and supported.&rdquo;
//         </p>
//       </div>

//       {/* Key Priorities */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex-1">
//         <div className="flex items-center gap-2 mb-2">
//           <div className="w-1 h-4 bg-[#003d7a] rounded" />
//           <h3 className="text-sm font-bold text-[#003d7a]">Key Priorities</h3>
//         </div>
//         <ul className="flex flex-col gap-1.5">
//           {priorities.map(({ icon: Icon, title }) => (
//             <li key={title} className="flex items-start gap-2">
//               <Icon size={11} className="text-[#003d7a] shrink-0 mt-0.5" />
//               <span className="text-[11px] text-gray-600 leading-snug">{title}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


import {
  Globe2,
  Link2,
  Settings,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type PriorityItem = {
  icon: LucideIcon;
  title: string;
};

const priorities: PriorityItem[] = [
  {
    icon: Users,
    title: "Engineers' Rights, Dignity & Recognition",
  },
  {
    icon: TrendingUp,
    title: "Professional Development",
  },
  {
    icon: Link2,
    title: "Industry–Academia–Government Collaboration",
  },
  {
    icon: Users,
    title: "Young Engineers' Participation",
  },
  {
    icon: ShieldCheck,
    title: "Member Engagement & Transparency",
  },
  {
    icon: Globe2,
    title: "Inclusive Professional Representation",
  },
];

export default function VisionPriorities() {
  return (
    <aside
      className="
        flex h-full
        flex-col
        gap-[12px]
      "
    >
      {/* =====================================================
          VISION CARD
      ====================================================== */}
      <section
        className="
          min-h-[146px]
          rounded-[6px]
          bg-[#eaf4fb]
          px-[17px]
          py-[13px]
        "
        aria-labelledby="vision-heading"
      >
        <div className="flex items-start gap-[10px]">
          <Target
            size={30}
            strokeWidth={2.4}
            aria-hidden="true"
            className="
              mt-[-1px]
              shrink-0
              text-[#07518a]
            "
          />

          <div>
            <h2
              id="vision-heading"
              className="
                text-[16px]
                font-bold
                leading-[1.15]
                text-[#103f68]
              "
            >
              My Vision for IEB
            </h2>

            <div
              aria-hidden="true"
              className="
                mt-[7px]
                h-[2px]
                w-[31px]
                bg-[#527c9e]
              "
            />
          </div>
        </div>

        <p
          className="
            mx-auto
            mt-[10px]
            max-w-[280px]
            text-center
            text-[13px]
            font-semibold
            italic
            leading-[1.43]
            text-[#173b5c]
          "
        >
          &ldquo;To contribute to a united, inclusive, and professionally
          empowered engineering community where every engineer is respected,
          recognized, and supported.&rdquo;
        </p>

        <div
          aria-hidden="true"
          className="
            mx-auto
            mt-[8px]
            h-[2px]
            w-[30px]
            bg-[#527c9e]
          "
        />
      </section>

      {/* =====================================================
          PRIORITIES CARD
      ====================================================== */}
      <section
        className="
          flex-1
          rounded-[6px]
          bg-[#eaf4fb]
          px-[17px]
          py-[13px]
        "
        aria-labelledby="priorities-heading"
      >
        <div className="flex items-start gap-[10px]">
          <Settings
            size={29}
            strokeWidth={2.4}
            aria-hidden="true"
            className="
              mt-[-1px]
              shrink-0
              text-[#07518a]
            "
          />

          <div>
            <h2
              id="priorities-heading"
              className="
                text-[16px]
                font-bold
                leading-[1.15]
                text-[#103f68]
              "
            >
              My Key Priorities
            </h2>

            <div
              aria-hidden="true"
              className="
                mt-[7px]
                h-[2px]
                w-[31px]
                bg-[#527c9e]
              "
            />
          </div>
        </div>

        <div
          className="
            mt-[12px]
            grid
            grid-cols-1
            gap-x-[28px]
            gap-y-[23px]

            sm:grid-cols-2
          "
        >
          {priorities.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="
                grid
                grid-cols-[32px_minmax(0,1fr)]
                items-center
                gap-[8px]
              "
            >
              <div
                className="
                  flex h-[30px] w-[32px]
                  items-center
                  justify-center
                  text-[#07518a]
                "
              >
                <Icon
                  size={26}
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </div>

              <p
                className="
                  text-[11.5px]
                  font-semibold
                  leading-[1.25]
                  text-[#173b5c]
                "
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
