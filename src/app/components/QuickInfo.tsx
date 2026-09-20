import { MapPin, Phone, Mail, Globe, Calendar, Award } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
  { icon: Phone, label: "Phone", value: "—" },
  { icon: Mail, label: "Email", value: "—" },
  { icon: Globe, label: "Website", value: "—" },
  { icon: Calendar, label: "Election", value: "—" },
  { icon: Award, label: "Position", value: "IEB Council Member" },
];

const highlights = [
  {
    title: "Professional Background",
    body: "A distinguished engineer with decades of experience in infrastructure development and technical leadership across Bangladesh.",
  },
  {
    title: "IEB Involvement",
    body: "Active member of the Institution of Engineers, Bangladesh, contributing to the advancement of the engineering profession.",
  },
  {
    title: "Community Commitment",
    body: "Dedicated to fostering a stronger, more connected engineering community for the benefit of Bangladesh.",
  },
];

export default function QuickInfo() {
  return (
    <section className="w-full bg-[#f4f7fb] py-10">
      <div className="max-w-7xl mx-auto px-6 flex gap-6">
        {/* Left card */}
        <div className="w-72 shrink-0 rounded-lg overflow-hidden shadow-md bg-white">
          {/* Card header */}
          <div className="bg-[#003d7a] px-5 py-3">
            <h2 className="text-white font-semibold text-sm tracking-wide uppercase">
              Quick Information
            </h2>
          </div>
          {/* Card body */}
          <ul className="divide-y divide-gray-100">
            {infoItems.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-3 px-5 py-3">
                <Icon size={15} className="text-[#003d7a] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">{label}</p>
                  <p className="text-sm text-gray-700 font-medium truncate">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right content */}
        <div className="flex-1 flex flex-col gap-5">
          {highlights.map(({ title, body }) => (
            <div key={title} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#003d7a]">
              <h3 className="text-[#003d7a] font-semibold text-base mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
