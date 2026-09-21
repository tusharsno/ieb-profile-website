import { Users, GraduationCap, FileText, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Users,          value: "15+",                label: "Years of Professional Experience" },
  { icon: GraduationCap, value: "2",                   label: "International Degrees" },
  { icon: FileText,       value: "Research & Projects", label: "in ICT & Health Informatics" },
  { icon: Globe,          value: "Global Exposure",     label: "Bangladesh | Sweden | UNDP | UNITAR" },
];

export default function StatsStrip() {
  return (
    <div className="w-full bg-[#eef5fb]" style={{ height: "90px" }}>
      <div className="h-full grid grid-cols-4">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className="flex items-center gap-3 px-16 h-full relative"
          >
            {i < 3 && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-px bg-[#b8cfe0]" style={{ height: '60%' }} />
            )}
            <Icon size={45} strokeWidth={2.5} color="#0b2545" className="shrink-0" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#0b2545] leading-snug">{value}</span>
              <span className="text-[13px] text-[#4a6080] leading-snug">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
