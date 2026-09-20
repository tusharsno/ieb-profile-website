import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex" style={{ minHeight: "275px" }}>
      {/* Left column — portrait area, dark navy background */}
      <div className="relative w-[33%] bg-[#003d7a] flex items-end justify-center overflow-hidden shrink-0">
        <Image
          src="/images/profile/arif-hasan-chowdhury.png"
          alt="Candidate portrait"
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-contain object-bottom scale-110 origin-bottom"
          priority
        />
      </div>

      {/* Center column — main candidate content area */}
      <div className="flex-1 bg-[#f0f6ff] flex items-center px-10 py-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#003d7a] bg-[#003d7a]/10 px-3 py-1 rounded-full">
              IEB Council Candidate
            </span>
          </div>
          <h1 className="text-3xl font-bold text-[#003d7a] leading-tight">
            Arif Hasan Chowdhury
          </h1>
          <p className="text-[#4a6080] text-sm leading-relaxed max-w-md">
            A dedicated engineer committed to advancing the Institution of Engineers, Bangladesh and serving the engineering community with integrity and vision.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="/support"
              className="bg-[#003d7a] hover:bg-[#002d5a] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            >
              Support My Campaign
            </a>
            <a
              href="/about"
              className="border border-[#003d7a] text-[#003d7a] hover:bg-[#003d7a]/5 text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Right column — bridge / slogan visual area, light blue gradient */}
      <div
        className="w-[24%] shrink-0 flex items-center justify-center"
        style={{
          background: "linear-gradient(to right, #ddeeff, #c8dff5)",
        }}
      >
        {/* Bridge/slogan visual — placeholder until asset is available */}
        <div className="text-[#003d7a]/30 text-xs text-center px-4 select-none">
          [visual area]
        </div>
      </div>
    </section>
  );
}
