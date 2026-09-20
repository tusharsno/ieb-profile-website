import QuickInfo from "./QuickInfo";
import MessageSection from "./MessageSection";
import VisionPriorities from "./VisionPriorities";

export default function MainInfoSection() {
  return (
    <section className="w-full bg-[#f4f7fb] py-8">
      <div className="max-w-7xl mx-auto px-6 flex gap-5 items-start">
        <QuickInfo />
        <MessageSection />
        <VisionPriorities />
      </div>
    </section>
  );
}
