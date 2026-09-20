import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex" style={{ minHeight: "275px" }}>
      {/* Left column — portrait + quote */}
      <div className="relative w-[33%] bg-[#003d7a] flex flex-col items-center justify-end overflow-hidden shrink-0">
        <Image
          src="/images/profile/arif-hasan-chowdhury.png"
          alt="Engr. Mohammed Arif Hasan Chowdhury"
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-contain object-bottom scale-110 origin-bottom"
          priority
        />
        {/* Quote overlay at bottom */}
        <div className="relative z-10 w-full bg-[#002d5a]/80 px-4 py-2 text-center">
          <p className="text-white text-xs italic leading-snug">
            &ldquo;Engineers Build A Better Bangladesh&rdquo;
          </p>
        </div>
      </div>

      {/* Center column — candidate details */}
      <div className="flex-1 bg-[#f0f6ff] flex items-center px-8 py-6">
        <div className="flex flex-col gap-3">
          <p className="text-[#003d7a] text-xs font-bold tracking-[0.2em] uppercase">
            UNITY &bull; DIGNITY &bull; PROFESSIONAL EXCELLENCE
          </p>
          <h1 className="text-2xl font-bold text-[#003d7a] leading-tight">
            ENGR. MOHAMMED ARIF HASAN CHOWDHURY
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-[#003d7a] font-semibold text-sm">LOCAL COUNCIL MEMBER</p>
            <p className="text-gray-600 text-xs">Institution of Engineers, Bangladesh (IEB)</p>
            <p className="text-gray-500 text-xs">
              Association of Engineers Bangladesh (AEB) Panel &nbsp;|&nbsp; IEB Fellow, F14663
            </p>
            <p className="text-gray-500 text-xs">
              IEB Centre: Chittagong &nbsp;|&nbsp; Election Year: 26-27
            </p>
          </div>
          <div className="flex gap-2 mt-1 flex-wrap">
            <a
              href="/support"
              className="bg-[#003d7a] hover:bg-[#002d5a] text-white text-xs font-semibold px-4 py-2 rounded transition-colors"
            >
              Support Me
            </a>
            <a
              href="/profile.pdf"
              className="border border-[#003d7a] text-[#003d7a] hover:bg-[#003d7a]/5 text-xs font-semibold px-4 py-2 rounded transition-colors"
            >
              Download Profile (PDF)
            </a>
            <a
              href="/contact"
              className="border border-[#003d7a] text-[#003d7a] hover:bg-[#003d7a]/5 text-xs font-semibold px-4 py-2 rounded transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Right column — slogan / bridge visual placeholder */}
      <div
        className="w-[24%] shrink-0 flex flex-col items-center justify-center gap-4 px-6"
        style={{ background: "linear-gradient(to right, #ddeeff, #c8dff5)" }}
      >
        {/* Bridge image placeholder — replace when asset is available */}
        <div className="w-full h-32 bg-[#003d7a]/10 rounded flex items-center justify-center border border-[#003d7a]/10">
          <span className="text-[#003d7a]/30 text-[10px] text-center px-2 select-none">
            [Bridge image — asset pending]
          </span>
        </div>
        <p className="text-[#003d7a] text-xs font-semibold text-center leading-snug">
          Together for a Stronger Engineering Community
        </p>
      </div>
    </section>
  );
}
