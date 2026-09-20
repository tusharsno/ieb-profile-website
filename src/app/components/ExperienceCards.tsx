import { GraduationCap, Briefcase, Star, type LucideIcon } from "lucide-react";

const educationItems = [
  { degree: "B.Sc. in Civil Engineering", institution: "Bangladesh University of Engineering and Technology (BUET)", year: "—" },
  { degree: "M.Sc. in Structural Engineering", institution: "—", year: "—" },
];

const experienceItems = [
  { role: "Senior Engineer", org: "—", period: "—" },
  { role: "Project Director", org: "—", period: "—" },
  { role: "Chief Engineer", org: "—", period: "—" },
];

const leadershipItems = [
  "Member, IEB General Council",
  "Fellow, Institution of Engineers, Bangladesh",
  "Active contributor to national engineering standards committees",
  "Mentor to emerging engineers across Bangladesh",
];

function CardHeader({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-3 bg-[#003d7a] px-5 py-3 rounded-t-lg">
      <Icon size={16} className="text-white" />
      <h3 className="text-white font-semibold text-sm tracking-wide">{title}</h3>
    </div>
  );
}

export default function ExperienceCards() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-6">
        {/* Education */}
        <div className="rounded-lg shadow-md overflow-hidden border border-gray-100">
          <CardHeader icon={GraduationCap} title="Education" />
          <ul className="divide-y divide-gray-100 bg-white">
            {educationItems.map(({ degree, institution, year }) => (
              <li key={degree} className="px-5 py-4">
                <p className="text-[#003d7a] font-semibold text-sm">{degree}</p>
                <p className="text-gray-500 text-xs mt-0.5">{institution}</p>
                {year !== "—" && <p className="text-gray-400 text-xs mt-0.5">{year}</p>}
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Experience */}
        <div className="rounded-lg shadow-md overflow-hidden border border-gray-100">
          <CardHeader icon={Briefcase} title="Professional Experience" />
          <ul className="divide-y divide-gray-100 bg-white">
            {experienceItems.map(({ role, org, period }) => (
              <li key={role} className="px-5 py-4">
                <p className="text-[#003d7a] font-semibold text-sm">{role}</p>
                <p className="text-gray-500 text-xs mt-0.5">{org}</p>
                <p className="text-gray-400 text-xs mt-0.5">{period}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Leadership & Social Engagement */}
        <div className="rounded-lg shadow-md overflow-hidden border border-gray-100">
          <CardHeader icon={Star} title="Leadership & Social Engagement" />
          <ul className="divide-y divide-gray-100 bg-white">
            {leadershipItems.map((item) => (
              <li key={item} className="px-5 py-4 flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#003d7a] shrink-0" />
                <p className="text-gray-600 text-sm leading-snug">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
