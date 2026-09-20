import { Quote } from "lucide-react";

export default function MessageSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-[#003d7a] rounded" />
          <h2 className="text-2xl font-bold text-[#003d7a]">
            A Message to Fellow Engineers
          </h2>
        </div>

        <div className="flex gap-8">
          {/* Left — quote block */}
          <div className="w-[38%] shrink-0">
            <div className="bg-[#003d7a] rounded-lg p-7 h-full flex flex-col justify-between">
              <Quote size={32} className="text-white/40 mb-4" />
              <p className="text-white text-sm leading-relaxed italic">
                &ldquo;As engineers, we have a unique responsibility to shape the future of Bangladesh through innovation, integrity, and service. Together, we can build a stronger institution and a better nation.&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-white font-semibold text-sm">Arif Hasan Chowdhury</p>
                <p className="text-white/60 text-xs mt-0.5">Candidate, IEB Council</p>
              </div>
            </div>
          </div>

          {/* Right — message body */}
          <div className="flex-1 flex flex-col gap-4 text-gray-600 text-sm leading-relaxed">
            <p>
              Dear Fellow Engineers, I am honoured to present myself as a candidate for the IEB Council. Throughout my career, I have remained committed to the highest standards of engineering practice and professional development.
            </p>
            <p>
              The Institution of Engineers, Bangladesh plays a vital role in advancing our profession and contributing to national development. I believe that with collective effort and strong leadership, we can elevate the standing of engineers in our society.
            </p>
            <p>
              My vision is to strengthen the IEB&apos;s capacity to serve its members, foster collaboration between engineers across disciplines, and advocate for policies that support sustainable infrastructure development in Bangladesh.
            </p>
            <p>
              I humbly seek your support and trust. Together, we will work for a better Bangladesh &mdash; built on the foundations of engineering excellence and professional integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
