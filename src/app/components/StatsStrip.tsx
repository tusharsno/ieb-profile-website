const stats = [
  { value: "35+", label: "Years of Engineering Experience" },
  { value: "50+", label: "Major Projects Completed" },
  { value: "1000+", label: "Engineers Mentored" },
  { value: "15+", label: "Leadership Roles Held" },
];

export default function StatsStrip() {
  return (
    <div className="w-full bg-[#e8f0f7] py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 divide-x divide-[#b8cfe0]">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center px-6 py-2">
              <span className="text-3xl font-bold text-[#003d7a]">{value}</span>
              <span className="text-sm text-[#4a6080] text-center mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
