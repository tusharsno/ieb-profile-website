import { Shield, TrendingUp, Link2, Users, MessageSquare, Globe } from "lucide-react";

const commitments = [
  {
    icon: Shield,
    title: "Engineers' Rights, Dignity & Recognition",
    body: "Advocate for the rights and professional dignity of all IEB members.",
  },
  {
    icon: TrendingUp,
    title: "Professional Development",
    body: "Support continuous learning, certification, and career advancement for engineers.",
  },
  {
    icon: Link2,
    title: "Industry–Academia–Government Collaboration",
    body: "Build bridges between engineering institutions, universities, and government bodies.",
  },
  {
    icon: Users,
    title: "Young Engineers' Participation",
    body: "Create meaningful pathways for young engineers to engage with and lead in IEB.",
  },
  {
    icon: MessageSquare,
    title: "Member Engagement & Transparency",
    body: "Ensure open communication, accountability, and active member participation in IEB governance.",
  },
  {
    icon: Globe,
    title: "Inclusive Professional Representation",
    body: "Represent engineers from all disciplines, regions, and backgrounds within the IEB.",
  },
];

export default function StrategicCommitment() {
  return (
    <section className="w-full bg-[#f4f7fb] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-6 bg-[#003d7a] rounded" />
          <h2 className="text-base font-bold text-[#003d7a]">My Strategic Commitment to IEB</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {commitments.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#e8f0f7] flex items-center justify-center shrink-0">
                <Icon size={14} className="text-[#003d7a]" />
              </div>
              <div>
                <h3 className="text-[#003d7a] font-semibold text-xs mb-1">{title}</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
