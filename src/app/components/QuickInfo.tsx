import { User, Award, Users, MapPin, Briefcase, BookOpen } from "lucide-react";

const infoItems = [
  { icon: User, label: "Name", value: "Engr. Mohammed Arif Hasan Chowdhury" },
  { icon: Award, label: "Position", value: "Local Council Member" },
  { icon: Award, label: "Membership", value: "F14663 (Fellow)" },
  { icon: Users, label: "Panel", value: "AEB Panel" },
  { icon: MapPin, label: "IEB Centre", value: "Chittagong" },
  { icon: Briefcase, label: "Profession", value: "Academic & IT Professional" },
  { icon: Briefcase, label: "Current Role", value: "Assistant Professor, Dept. of CSE, USTC" },
  { icon: Award, label: "Experience", value: "15+ Years" },
  { icon: BookOpen, label: "Expertise", value: "Software Engineering, Health Informatics, Business Intelligence, ML" },
];

export default function QuickInfo() {
  return (
    <div className="w-64 shrink-0 rounded-lg overflow-hidden shadow-md bg-white self-start">
      <div className="bg-[#003d7a] px-4 py-2.5">
        <h2 className="text-white font-semibold text-xs tracking-wide uppercase">
          Quick Information
        </h2>
      </div>
      <ul className="divide-y divide-gray-100">
        {infoItems.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex items-start gap-2.5 px-4 py-2.5">
            <Icon size={13} className="text-[#003d7a] shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="text-[9px] text-gray-400 uppercase tracking-wide leading-none mb-0.5">{label}</p>
              <p className="text-xs text-gray-700 font-medium leading-snug">{value}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
        <a
          href="/contact"
          className="block w-full text-center bg-[#003d7a] hover:bg-[#002d5a] text-white text-xs font-semibold py-2 rounded transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
