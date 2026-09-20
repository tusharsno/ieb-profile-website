import { Shield, TrendingUp, Link2, Users, MessageSquare, Globe } from "lucide-react";

const priorities = [
  { icon: Shield, title: "Engineers' Rights, Dignity & Recognition" },
  { icon: TrendingUp, title: "Professional Development" },
  { icon: Link2, title: "Industry–Academia–Government Collaboration" },
  { icon: Users, title: "Young Engineers' Participation" },
  { icon: MessageSquare, title: "Member Engagement & Transparency" },
  { icon: Globe, title: "Inclusive Professional Representation" },
];

export default function VisionPriorities() {
  return (
    <div className="w-72 shrink-0 flex flex-col gap-4 self-start">
      {/* Vision card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-5 bg-[#003d7a] rounded" />
          <h3 className="text-sm font-bold text-[#003d7a]">My Vision for IEB</h3>
        </div>
        <p className="text-gray-600 text-xs leading-relaxed">
          &ldquo;To contribute to a united, inclusive, and professionally empowered engineering community where every engineer is respected, recognized, and supported.&rdquo;
        </p>
      </div>

      {/* Key Priorities */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-5 bg-[#003d7a] rounded" />
          <h3 className="text-sm font-bold text-[#003d7a]">Key Priorities</h3>
        </div>
        <ul className="flex flex-col gap-2">
          {priorities.map(({ icon: Icon, title }) => (
            <li key={title} className="flex items-start gap-2">
              <Icon size={12} className="text-[#003d7a] shrink-0 mt-0.5" />
              <span className="text-xs text-gray-600 leading-snug">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
