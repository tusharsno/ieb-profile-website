const stats = [
  { value: "15+", label: "Years of Professional Experience" },
  { value: "2", label: "International Degrees" },
  { value: "Research & Projects", label: "in ICT & Health Informatics" },
  { value: "Global Exposure", label: "Bangladesh | Sweden | UNDP | UNITAR" },
];

export default function StatsStrip() {
  return (
    <div className="w-full bg-[#e8f0f7] py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 divide-x divide-[#b8cfe0]">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center px-4 py-1">
              <span className="text-lg font-bold text-[#003d7a] leading-tight">{value}</span>
              <span className="text-xs text-[#4a6080] text-center mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
