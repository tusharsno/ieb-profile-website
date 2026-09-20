import { GraduationCap, Briefcase, Star, type LucideIcon } from "lucide-react";

const educationItems = [
  {
    degree: "Ph.D. Fellow",
    institution: "Jahangirnagar University",
    period: "",
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
    period: "",
  },
];

const experienceItems = [
  { role: "Assistant Professor, Dept. of CSE, USTC", period: "2024 – Present" },
  { role: "Assistant Professor, Southern University Bangladesh", period: "2021 – 2024" },
  { role: "Lecturer, Southern University Bangladesh", period: "2017 – 2021" },
  { role: "Lecturer, Cox's Bazar International University", period: "2015 – 2017" },
  { role: "Assistant Project Manager, Tetraadev Consulting, Sweden", period: "2012 – 2014" },
  { role: "Engagements with UNDP and UNITAR", period: "" },
];

const leadershipItems = [
  "Council Member, IEB (2025 – Present)",
  "Member Secretary, AERS, Chittagong",
  "Undergraduate Program Coordinator, USTC",
  "Convener, USTC-CSE Alumni Organization Committee",
  "Academic supervision, workshops, seminars, and community engagement",
];

function CardHeader({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-2 bg-[#003d7a] px-4 py-2.5">
      <Icon size={14} className="text-white" />
      <h3 className="text-white font-semibold text-xs tracking-wide">{title}</h3>
    </div>
  );
}

export default function ExperienceCards() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-5">
        {/* Education */}
        <div className="rounded-lg shadow-sm overflow-hidden border border-gray-100">
          <CardHeader icon={GraduationCap} title="My Education" />
          <ul className="divide-y divide-gray-100 bg-white">
            {educationItems.map(({ degree, institution, period }) => (
              <li key={degree} className="px-4 py-3">
                <p className="text-[#003d7a] font-semibold text-xs leading-snug">{degree}</p>
                <p className="text-gray-500 text-[11px] mt-0.5">{institution}</p>
                {period && <p className="text-gray-400 text-[11px] mt-0.5">{period}</p>}
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Experience */}
        <div className="rounded-lg shadow-sm overflow-hidden border border-gray-100">
          <CardHeader icon={Briefcase} title="My Professional Experience" />
          <ul className="divide-y divide-gray-100 bg-white">
            {experienceItems.map(({ role, period }) => (
              <li key={role} className="px-4 py-3">
                <p className="text-gray-700 text-xs leading-snug">{role}</p>
                {period && <p className="text-gray-400 text-[11px] mt-0.5">{period}</p>}
              </li>
            ))}
          </ul>
        </div>

        {/* Leadership & Social Engagement */}
        <div className="rounded-lg shadow-sm overflow-hidden border border-gray-100">
          <CardHeader icon={Star} title="Leadership & Social Engagement" />
          <ul className="divide-y divide-gray-100 bg-white">
            {leadershipItems.map((item) => (
              <li key={item} className="px-4 py-3 flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#003d7a] shrink-0" />
                <p className="text-gray-600 text-xs leading-snug">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
