import { Target, Lightbulb, Users, Building2, BookOpen, Globe } from "lucide-react";

const priorities = [
  {
    icon: Target,
    title: "Professional Development",
    body: "Enhance training programmes and certification pathways for engineers at all career stages.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Research",
    body: "Promote engineering research and innovation to address Bangladesh's infrastructure challenges.",
  },
  {
    icon: Users,
    title: "Member Welfare",
    body: "Strengthen support systems and welfare programmes for IEB members across the country.",
  },
  {
    icon: Building2,
    title: "Infrastructure Advocacy",
    body: "Advocate for sound engineering practices in national infrastructure planning and execution.",
  },
  {
    icon: BookOpen,
    title: "Education & Standards",
    body: "Raise engineering education standards and align curricula with international best practices.",
  },
  {
    icon: Globe,
    title: "International Engagement",
    body: "Strengthen IEB's ties with international engineering bodies and professional networks.",
  },
];

export default function VisionPriorities() {
  return (
    <section className="w-full bg-[#f4f7fb] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Vision card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-7 bg-[#003d7a] rounded" />
            <h2 className="text-xl font-bold text-[#003d7a]">Vision</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
            To build a dynamic, inclusive, and forward-looking Institution of Engineers, Bangladesh — one that empowers its members, drives engineering excellence, and contributes meaningfully to the sustainable development of the nation.
          </p>
        </div>

        {/* Key Priorities */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-7 bg-[#003d7a] rounded" />
          <h2 className="text-xl font-bold text-[#003d7a]">Key Priorities</h2>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {priorities.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-[#e8f0f7] flex items-center justify-center mb-4">
                <Icon size={18} className="text-[#003d7a]" />
              </div>
              <h3 className="text-[#003d7a] font-semibold text-sm mb-2">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
