// // import { GraduationCap, Briefcase, Star, type LucideIcon } from "lucide-react";

// // const educationItems = [
// //   { degree: "Ph.D. Fellow",                                          institution: "Jahangirnagar University",                          period: "" },
// //   { degree: "M.Sc. in Engineering and Management of Information Systems", institution: "KTH Royal Institute of Technology, Stockholm, Sweden", period: "2008" },
// //   { degree: "B.Sc. in Computer Science and Engineering",             institution: "International Islamic University Chittagong",        period: "2003" },
// //   { degree: "Additional Coursework in ICT4D and Health Informatics", institution: "Sweden",                                            period: "" },
// // ];

// // const experienceItems = [
// //   { role: "Assistant Professor, Dept. of CSE, USTC",              period: "2024 – Present" },
// //   { role: "Assistant Professor, Southern University Bangladesh",   period: "2021 – 2024" },
// //   { role: "Lecturer, Southern University Bangladesh",              period: "2017 – 2021" },
// //   { role: "Lecturer, Cox's Bazar International University",        period: "2015 – 2017" },
// //   { role: "Assistant Project Manager, Tetraadev Consulting, Sweden", period: "2012 – 2014" },
// //   { role: "Engagements with UNDP and UNITAR",                      period: "" },
// // ];

// // const leadershipItems = [
// //   "Council Member, IEB (2025 – Present)",
// //   "Member Secretary, AERS, Chittagong",
// //   "Undergraduate Program Coordinator, USTC",
// //   "Convener, USTC-CSE Alumni Organization Committee",
// //   "Academic supervision, workshops, seminars, and community engagement",
// // ];

// // function CardHeader({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
// //   return (
// //     <div className="flex items-center gap-2 bg-[#003d7a] px-4 py-2">
// //       <Icon size={13} className="text-white" />
// //       <h3 className="text-white font-semibold text-xs tracking-wide">{title}</h3>
// //     </div>
// //   );
// // }

// // export default function ExperienceCards() {
// //   return (
// //     <section className="w-full bg-white py-5">
// //       <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-4">
// //         {/* Education */}
// //         <div className="rounded-lg shadow-sm overflow-hidden border border-gray-100">
// //           <CardHeader icon={GraduationCap} title="My Education" />
// //           <ul className="divide-y divide-gray-100 bg-white">
// //             {educationItems.map(({ degree, institution, period }) => (
// //               <li key={degree} className="px-4 py-2.5">
// //                 <p className="text-[#003d7a] font-semibold text-xs leading-snug">{degree}</p>
// //                 <p className="text-gray-500 text-[11px] mt-0.5">{institution}</p>
// //                 {period && <p className="text-gray-400 text-[11px] mt-0.5">{period}</p>}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Professional Experience */}
// //         <div className="rounded-lg shadow-sm overflow-hidden border border-gray-100">
// //           <CardHeader icon={Briefcase} title="My Professional Experience" />
// //           <ul className="divide-y divide-gray-100 bg-white">
// //             {experienceItems.map(({ role, period }) => (
// //               <li key={role} className="px-4 py-2.5">
// //                 <p className="text-gray-700 text-xs leading-snug">{role}</p>
// //                 {period && <p className="text-gray-400 text-[11px] mt-0.5">{period}</p>}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Leadership & Social Engagement */}
// //         <div className="rounded-lg shadow-sm overflow-hidden border border-gray-100">
// //           <CardHeader icon={Star} title="Leadership & Social Engagement" />
// //           <ul className="divide-y divide-gray-100 bg-white">
// //             {leadershipItems.map((item) => (
// //               <li key={item} className="px-4 py-2.5 flex items-start gap-2">
// //                 <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#003d7a] shrink-0" />
// //                 <p className="text-gray-600 text-xs leading-snug">{item}</p>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import {
//   BriefcaseBusiness,
//   GraduationCap,
//   Users,
//   type LucideIcon,
// } from "lucide-react";

// type EducationItem = {
//   degree: string;
//   institution: string;
//   period?: string;
// };

// type ExperienceItem = {
//   role: string;
//   period?: string;
// };

// const educationItems: EducationItem[] = [
//   {
//     degree: "Ph.D. Fellow",
//     institution: "Jahangirnagar University",
//   },
//   {
//     degree: "M.Sc. in Engineering and Management of Information Systems",
//     institution: "KTH Royal Institute of Technology, Stockholm, Sweden",
//     period: "2008",
//   },
//   {
//     degree: "B.Sc. in Computer Science and Engineering",
//     institution: "International Islamic University Chittagong",
//     period: "2003",
//   },
//   {
//     degree: "Additional Coursework in ICT4D and Health Informatics",
//     institution: "Sweden",
//   },
// ];

// const experienceItems: ExperienceItem[] = [
//   {
//     role: "Assistant Professor, Department of CSE, USTC",
//     period: "2024 – Present",
//   },
//   {
//     role: "Assistant Professor, Southern University Bangladesh",
//     period: "2021 – 2024",
//   },
//   {
//     role: "Lecturer, Southern University Bangladesh",
//     period: "2017 – 2021",
//   },
//   {
//     role: "Lecturer, Cox's Bazar International University",
//     period: "2015 – 2017",
//   },
//   {
//     role: "Assistant Project Manager, Tetraadev Consulting, Sweden",
//     period: "2012 – 2014",
//   },
//   {
//     role: "Engagements with UNDP and UNITAR",
//   },
// ];

// const leadershipItems = [
//   "Council Member, IEB (2025 – Present)",
//   "Member Secretary, AERS, Chittagong",
//   "Undergraduate Program Coordinator, USTC",
//   "Convener, USTC-CSE Alumni Organization Committee",
//   "Academic supervision, workshops, seminars, and community engagement",
// ];

// function CardHeader({
//   icon: Icon,
//   title,
// }: {
//   icon: LucideIcon;
//   title: string;
// }) {
//   return (
//     <div
//       className="
//         flex h-[42px]
//         items-center
//         gap-[9px]
//         px-[14px]
//       "
//     >
//       <Icon
//         size={23}
//         strokeWidth={2.35}
//         aria-hidden="true"
//         className="shrink-0 text-[#07518a]"
//       />

//       <h3
//         className="
//           text-[13px]
//           font-bold
//           leading-none
//           text-[#103f68]
//         "
//       >
//         {title}
//       </h3>
//     </div>
//   );
// }

// export default function ExperienceCards() {
//   return (
//     <section className="w-full bg-[#f4f8fb] py-[12px]">
//       <div
//         className="
//           mx-auto
//           grid w-full
//           max-w-[1180px]
//           grid-cols-1
//           gap-[12px]
//           px-5

//           md:grid-cols-3
//         "
//       >
//         {/* =====================================================
//             EDUCATION
//         ====================================================== */}
//         <article
//           id="education"
//           className="
//             overflow-hidden
//             rounded-[6px]
//             border border-[#dce6ee]
//             bg-white
//             shadow-[0_2px_6px_rgba(15,58,91,0.07)]
//           "
//         >
//           <CardHeader
//             icon={GraduationCap}
//             title="My Education"
//           />

//           <div
//             className="
//               relative
//               px-[14px]
//               pb-[12px]
//               pt-[1px]
//             "
//           >
//             {/* Timeline line */}
//             <span
//               aria-hidden="true"
//               className="
//                 absolute
//                 bottom-[18px]
//                 left-[19px]
//                 top-[10px]
//                 w-px
//                 bg-[#78a9ce]
//               "
//             />

//             <div className="relative flex flex-col">
//               {educationItems.map(
//                 ({ degree, institution, period }, index) => (
//                   <div
//                     key={degree}
//                     className={`
//                       relative
//                       pl-[24px]
//                       pr-[2px]

//                       ${
//                         index === 0
//                           ? "pb-[9px]"
//                           : index === educationItems.length - 1
//                             ? "pt-[6px]"
//                             : "py-[6px]"
//                       }
//                     `}
//                   >
//                     {/* Timeline dot */}
//                     <span
//                       aria-hidden="true"
//                       className="
//                         absolute
//                         left-[1px]
//                         top-[9px]
//                         z-10
//                         h-[7px]
//                         w-[7px]
//                         rounded-full
//                         bg-[#0871b7]
//                       "
//                     />

//                     <p
//                       className="
//                         text-[10.5px]
//                         font-bold
//                         leading-[1.25]
//                         text-[#103f68]
//                       "
//                     >
//                       {degree}
//                     </p>

//                     <p
//                       className="
//                         mt-[1px]
//                         text-[9.5px]
//                         leading-[1.3]
//                         text-[#40576a]
//                       "
//                     >
//                       {institution}
//                       {period ? ` (${period})` : ""}
//                     </p>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </article>

//         {/* =====================================================
//             PROFESSIONAL EXPERIENCE
//         ====================================================== */}
//         <article
//           id="experience"
//           className="
//             overflow-hidden
//             rounded-[6px]
//             border border-[#dce6ee]
//             bg-white
//             shadow-[0_2px_6px_rgba(15,58,91,0.07)]
//           "
//         >
//           <CardHeader
//             icon={BriefcaseBusiness}
//             title="My Professional Experience"
//           />

//           <div
//             className="
//               relative
//               px-[14px]
//               pb-[12px]
//               pt-[1px]
//             "
//           >
//             {/* Timeline line */}
//             <span
//               aria-hidden="true"
//               className="
//                 absolute
//                 bottom-[18px]
//                 left-[19px]
//                 top-[10px]
//                 w-px
//                 bg-[#78a9ce]
//               "
//             />

//             <div className="relative flex flex-col">
//               {experienceItems.map(({ role, period }, index) => (
//                 <div
//                   key={role}
//                   className={`
//                     relative
//                     pl-[24px]
//                     pr-[2px]

//                     ${
//                       index === 0
//                         ? "pb-[6px]"
//                         : index === experienceItems.length - 1
//                           ? "pt-[5px]"
//                           : "py-[5px]"
//                     }
//                   `}
//                 >
//                   {/* Timeline dot */}
//                   <span
//                     aria-hidden="true"
//                     className="
//                       absolute
//                       left-[1px]
//                       top-[8px]
//                       z-10
//                       h-[7px]
//                       w-[7px]
//                       rounded-full
//                       bg-[#0871b7]
//                     "
//                   />

//                   <p
//                     className="
//                       text-[9.6px]
//                       font-medium
//                       leading-[1.28]
//                       text-[#263e52]
//                     "
//                   >
//                     {role}
//                     {period ? ` (${period})` : ""}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </article>

//         {/* =====================================================
//             LEADERSHIP & SOCIAL ENGAGEMENT
//         ====================================================== */}
//         <article
//           id="leadership"
//           className="
//             overflow-hidden
//             rounded-[6px]
//             border border-[#dce6ee]
//             bg-white
//             shadow-[0_2px_6px_rgba(15,58,91,0.07)]
//           "
//         >
//           <CardHeader
//             icon={Users}
//             title="Leadership and Social Engagement"
//           />

//           <ul
//             className="
//               px-[15px]
//               pb-[12px]
//               pt-[2px]
//             "
//           >
//             {leadershipItems.map((item, index) => (
//               <li
//                 key={item}
//                 className={`
//                   relative
//                   flex
//                   items-start
//                   gap-[9px]
//                   pl-[1px]

//                   ${
//                     index === 0
//                       ? "pb-[9px]"
//                       : index === leadershipItems.length - 1
//                         ? "pt-[7px]"
//                         : "py-[7px]"
//                   }
//                 `}
//               >
//                 <span
//                   aria-hidden="true"
//                   className="
//                     mt-[4px]
//                     h-[7px]
//                     w-[7px]
//                     shrink-0
//                     rounded-full
//                     bg-[#0871b7]
//                   "
//                 />

//                 <p
//                   className="
//                     text-[9.8px]
//                     leading-[1.3]
//                     text-[#31495d]
//                   "
//                 >
//                   {item}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </article>
//       </div>
//     </section>
//   );
// }


import {
  BriefcaseBusiness,
  Globe2,
  GraduationCap,
  Link2,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

type EducationItem = {
  degree: string;
  institution: string;
  period?: string;
};

type ExperienceItem = {
  role: string;
  period?: string;
};

type StrategicItem = {
  icon: LucideIcon;
  title: string;
};

const educationItems: EducationItem[] = [
  {
    degree: "Ph.D. Fellow",
    institution: "Jahangirnagar University",
  },
  {
    degree: "M.Sc. in Engineering and Management of Information Systems",
    institution: "KTH Royal Institute of Technology, Stockholm, Sweden",
    period: "2008",
  },
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "International Islamic University Chittagong",
    period: "2003",
  },
  {
    degree: "Additional Coursework in ICT4D and Health Informatics",
    institution: "Sweden",
  },
];

const experienceItems: ExperienceItem[] = [
  {
    role: "Assistant Professor, Dept. of CSE, USTC",
    period: "2024 – Present",
  },
  {
    role: "Assistant Professor, Southern University Bangladesh",
    period: "2021 – 2024",
  },
  {
    role: "Lecturer, Southern University Bangladesh",
    period: "2017 – 2021",
  },
  {
    role: "Lecturer, Cox's Bazar International University",
    period: "2015 – 2017",
  },
  {
    role: "Assistant Project Manager, Tetraadev Consulting, Sweden",
    period: "2012 – 2014",
  },
  {
    role: "Engagements with UNDP and UNITAR",
  },
];

const leadershipItems = [
  "Council Member, IEB (2025 – Present)",
  "Member Secretary, AERS, Chittagong",
  "Undergraduate Program Coordinator, USTC",
  "Convener, USTC-CSE Alumni Organization Committee",
  "Academic supervision, workshops, seminars, and community engagement",
];

const strategicItems: StrategicItem[] = [
  {
    icon: ShieldCheck,
    title: "Engineers' Rights, Dignity & Recognition",
  },
  {
    icon: TrendingUp,
    title: "Professional Development & Knowledge Sharing",
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
    icon: MessageSquare,
    title: "Member Engagement & Transparency",
  },
  {
    icon: Globe2,
    title: "Inclusive Professional Representation",
  },
];

type CardHeaderProps = {
  icon: LucideIcon;
  title: string;
};

function CardHeader({
  icon: Icon,
  title,
}: CardHeaderProps) {
  return (
    <div
      className="
        flex
        min-h-[45px]
        items-center
        gap-[9px]
        px-[14px]
        pt-[11px]
        pb-[8px]
      "
    >
      <Icon
        size={26}
        strokeWidth={3.4}
        aria-hidden="true"
        className="
          shrink-0
          text-[#07518a]
        "
      />

      <h3
        className="
          text-[14px]
          font-bold
          leading-[1.18]
          text-[#0b3f6c]
        "
      >
        {title}
      </h3>
    </div>
  );
}

export default function ExperienceCards() {
  return (
    <section
      className="
        w-full
        bg-[#f7fafc]
        py-[13px]
      "
      aria-label="Education, professional experience, leadership and strategic commitments"
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-full lg:max-w-[1200px] xl:max-w-[1366px]
          grid-cols-1
          items-stretch
          gap-[14px]
          px-6

          sm:grid-cols-2

          lg:grid-cols-4
        "
      >
        {/* =====================================================
            MY EDUCATION
        ====================================================== */}
        <article
          id="education"
          className="
            h-full
            overflow-hidden
            rounded-[8px]
            border
            border-[#dce6ee]
            bg-white
            shadow-[0_2px_7px_rgba(18,61,94,0.07)]
          "
        >
          <CardHeader
            icon={GraduationCap}
            title="My Education"
          />

          <div
            className="
              relative
              px-[14px]
              pb-[13px]
              pt-[1px]
            "
          >
            {/* Timeline */}
            <span
              aria-hidden="true"
              className="
                absolute
                bottom-[24px]
                left-[18px]
                top-[8px]
                w-px
                bg-[#7fb4d7]
              "
            />

            <div className="relative">
              {educationItems.map(
                ({ degree, institution, period }, index) => (
                  <div
                    key={degree}
                    className={`
                      relative
                      pl-[24px]
                      pr-[2px]

                      ${
                        index === 0
                          ? "pb-[10px]"
                          : index === educationItems.length - 1
                            ? "pt-[7px]"
                            : "py-[7px]"
                      }
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        left-[1px]
                        top-[5px]
                        z-10
                        h-[7px]
                        w-[7px]
                        rounded-full
                        bg-[#0878bb]
                      "
                    />

                    <p
                      className="
                        text-[12.5px]
                        font-bold
                        leading-[1.25]
                        text-[#0b416e]
                      "
                    >
                      {degree}
                    </p>

                    <p
                      className="
                        mt-[2px]
                        text-[11.3px]
                        leading-[1.3]
                        text-[#51677a]
                      "
                    >
                      {institution}
                      {period ? ` (${period})` : ""}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </article>

        {/* =====================================================
            MY PROFESSIONAL EXPERIENCE
        ====================================================== */}
        <article
          id="experience"
          className="
            h-full
            overflow-hidden
            rounded-[8px]
            border
            border-[#dce6ee]
            bg-white
            shadow-[0_2px_7px_rgba(18,61,94,0.07)]
          "
        >
          <CardHeader
            icon={BriefcaseBusiness}
            title="My Professional Experience"
          />

          <div
            className="
              relative
              px-[14px]
              pb-[13px]
              pt-[1px]
            "
          >
            {/* Timeline */}
            <span
              aria-hidden="true"
              className="
                absolute
                bottom-[24px]
                left-[18px]
                top-[8px]
                w-px
                bg-[#7fb4d7]
              "
            />

            <div className="relative">
              {experienceItems.map(
                ({ role, period }, index) => (
                  <div
                    key={role}
                    className={`
                      relative
                      pl-[24px]
                      pr-[2px]

                      ${
                        index === 0
                          ? "pb-[7px]"
                          : index === experienceItems.length - 1
                            ? "pt-[6px]"
                            : "py-[6px]"
                      }
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        left-[1px]
                        top-[5px]
                        z-10
                        h-[7px]
                        w-[7px]
                        rounded-full
                        bg-[#0878bb]
                      "
                    />

                    <p
                      className="
                        text-[11.5px]
                        font-medium
                        leading-[1.28]
                        text-[#31495d]
                      "
                    >
                      {role}
                      {period ? ` (${period})` : ""}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </article>

        {/* =====================================================
            LEADERSHIP & SOCIAL ENGAGEMENT
        ====================================================== */}
        <article
          id="leadership"
          className="
            h-full
            overflow-hidden
            rounded-[8px]
            border
            border-[#dce6ee]
            bg-white
            shadow-[0_2px_7px_rgba(18,61,94,0.07)]
          "
        >
          <CardHeader
            icon={Users}
            title="Leadership and Social Engagement"
          />

          <ul
            className="
              px-[15px]
              pb-[13px]
              pt-[2px]
            "
          >
            {leadershipItems.map((item, index) => (
              <li
                key={item}
                className={`
                  flex
                  items-start
                  gap-[9px]

                  ${
                    index === 0
                      ? "pb-[9px]"
                      : index === leadershipItems.length - 1
                        ? "pt-[7px]"
                        : "py-[7px]"
                  }
                `}
              >
                <span
                  aria-hidden="true"
                  className="
                    mt-[4px]
                    h-[7px]
                    w-[7px]
                    shrink-0
                    rounded-full
                    bg-[#0878bb]
                  "
                />

                <p
                  className="
                    text-[11.5px]
                    leading-[1.32]
                    text-[#31495d]
                  "
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </article>

        {/* =====================================================
            MY STRATEGIC COMMITMENT TO IEB
        ====================================================== */}
        <article
          id="strategic-commitment"
          className="
            h-full
            overflow-hidden
            rounded-[8px]
            border
            border-[#dce6ee]
            bg-white
            shadow-[0_2px_7px_rgba(18,61,94,0.07)]
          "
        >
          <CardHeader
            icon={ShieldCheck}
            title="My Strategic Commitment to IEB"
          />

          <div
            className="
              grid
              grid-cols-2
              gap-[7px]
              px-[10px]
              pb-[11px]
              pt-[1px]
            "
          >
            {strategicItems.map(
              ({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="
                    flex
                    min-h-[69px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[4px]
                    bg-[#f3f8fc]
                    px-[6px]
                    py-[7px]
                    text-center
                  "
                >
                  <Icon
                    size={24}
                    strokeWidth={2.35}
                    aria-hidden="true"
                    className="
                      mb-[4px]
                      shrink-0
                      text-[#07518a]
                    "
                  />

                  <p
                    className="
                      text-[10.7px]
                      font-semibold
                      leading-[1.22]
                      text-[#173f62]
                    "
                  >
                    {title}
                  </p>
                </div>
              )
            )}
          </div>
        </article>
      </div>
    </section>
  );
}