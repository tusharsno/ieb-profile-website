// // // // import Image from "next/image";
// // // // import { ThumbsUp, Download, Send } from "lucide-react";

// // // // export default function Hero() {
// // // //   return (
// // // //     <section className="w-full flex relative" style={{ height: "271px" }}>

// // // //       {/* Left column — portrait + vertical quote */}
// // // //       <div
// // // //         className="relative w-[25.6%] shrink-0 overflow-hidden"
// // // //         style={{ background: "#0b2545" }}
// // // //       >
// // // //         {/* Vertical quote — far left strip */}
// // // //         <div
// // // //           className="absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center"
// // // //           style={{ width: "22px", background: "rgba(0,21,58,0.72)" }}
// // // //         >
// // // //           <p
// // // //             className="text-white text-[8px] italic tracking-widest whitespace-nowrap"
// // // //             style={{
// // // //               writingMode: "vertical-rl",
// // // //               transform: "rotate(180deg)",
// // // //               fontFamily: "Georgia, 'Times New Roman', serif",
// // // //             }}
// // // //           >
// // // //             &ldquo;Engineers Build A Better Bangladesh&rdquo;
// // // //           </p>
// // // //         </div>
// // // //         {/* Two-color diagonal background: top-right navy, bottom-left #f5faff */}
// // // //         <div className="absolute inset-0" style={{ left: "22px", background: "#0b2545" }} />
// // // //         <div className="absolute inset-0" style={{ left: "22px", background: "#f5faff", clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
// // // //         <div className="absolute top-0 bottom-0 right-0" style={{ left: "22px" }}>
// // // //           <Image
// // // //             src="/images/profile/arif-hasan-chowdhury.png"
// // // //             alt="Engr. Mohammed Arif Hasan Chowdhury"
// // // //             fill
// // // //             sizes="(min-width: 1024px) 26vw, 100vw"
// // // //             className="object-contain object-bottom"
// // // //             priority
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       {/* Center column — candidate details */}
// // // //       <div className="w-[26%] shrink-0 bg-[#f5faff] flex items-center px-8 py-4 overflow-visible relative z-10">
// // // //         <div className="flex flex-col gap-2.5">
// // // //           <p className="text-[#003d7a] text-xs font-bold tracking-[0.2em] uppercase">
// // // //             UNITY &bull; DIGNITY &bull; PROFESSIONAL EXCELLENCE
// // // //           </p>
// // // //           <h1 className="text-2xl font-bold text-[#003d7a] leading-tight">
// // // //             ENGR. MOHAMMED ARIF HASAN CHOWDHURY
// // // //           </h1>
// // // //           <div className="flex flex-col gap-1">
// // // //             <p className="text-[#003d7a] font-semibold text-base">LOCAL COUNCIL MEMBER</p>
// // // //             <p className="text-gray-600 text-sm">Institution of Engineers, Bangladesh (IEB)</p>
// // // //             <p className="text-gray-500 text-sm">
// // // //               Association of Engineers Bangladesh (AEB) Panel &nbsp;|&nbsp; IEB Fellow, F14663
// // // //             </p>
// // // //             <p className="text-gray-500 text-sm">
// // // //               IEB Centre: Chittagong &nbsp;|&nbsp; Election Year: 26-27
// // // //             </p>
// // // //           </div>
// // // //           {/* CTA Buttons — overflow rightward onto bridge */}
// // // //           <div className="flex gap-2 mt-1 flex-nowrap">
// // // //             <a
// // // //               href="/support"
// // // //               className="bg-[#0b2545] hover:bg-[#082040] text-white text-xs font-semibold px-4 py-1.5 rounded transition-colors flex items-center gap-1.5 shrink-0 px-4 py-3"
// // // //             >
// // // //               <ThumbsUp size={12} className="shrink-0" />
// // // //               Support Me
// // // //             </a>
// // // //             <a
// // // //               href="/profile.pdf"
// // // //               className="bg-white border border-[#0b2545] text-[#0b2545] hover:bg-[#f0f6ff] text-xs font-semibold px-4 py-1.5 rounded transition-colors flex items-center gap-1.5 shrink-0"
// // // //             >
// // // //               <Download size={12} className="shrink-0" />
// // // //               Download Profile (PDF)
// // // //             </a>
// // // //             <a
// // // //               href="/contact"
// // // //               className="bg-white border border-[#0b2545] text-[#0b2545] hover:bg-[#f0f6ff] text-xs font-semibold px-4 py-1.5 rounded transition-colors flex items-center gap-1.5 shrink-0"
// // // //             >
// // // //               <Send size={12} className="shrink-0" />
// // // //               Contact Me
// // // //             </a>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Right column — bridge bg + cursive slogan */}
// // // //       <div className="flex-1 shrink-0 relative z-0 overflow-hidden">
// // // //         <Image
// // // //           src="/images/hero/bridge-bg.png"
// // // //           alt="Bridge background"
// // // //           fill
// // // //           sizes="(min-width: 1024px) 29vw, 100vw"
// // // //           className="object-cover object-center"
// // // //         />
// // // //         {/* Left-to-right + top-to-bottom gradient overlay matching reference */}
// // // //         <div
// // // //           className="absolute inset-0"
// // // //           style={{
// // // //             background: "linear-gradient(to right, rgba(245,250,255,1) 0%, rgba(245,250,255,0.9) 8%, rgba(225,240,253,0.4) 25%, rgba(210,232,253,0.15) 50%, rgba(190,220,248,0) 70%)"
// // // //           }}
// // // //         />
// // // //         {/* Additional top fade */}
// // // //         <div
// // // //           className="absolute inset-0"
// // // //           style={{
// // // //             background: "linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 55%)"
// // // //           }}
// // // //         />
// // // //         <div className="absolute inset-0 flex items-center justify-center px-8">
// // // //           <p
// // // //             className="text-[#0b2545] text-center leading-loose"
// // // //             style={{
// // // //               fontFamily: "Georgia, 'Times New Roman', serif",
// // // //               fontStyle: "italic",
// // // //               fontSize: "1rem",
// // // //               fontWeight: 600,
// // // //             }}
// // // //           >
// // // //             Together<br />
// // // //             for a Stronger<br />
// // // //             Engineering<br />
// // // //             Community
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }


// // // import Image from "next/image";
// // // import {
// // //   ThumbsUp,
// // //   Download,
// // //   Send,
// // //   MapPin,
// // //   CalendarDays,
// // // } from "lucide-react";

// // // export default function Hero() {
// // //   return (
// // //     <section className="relative flex h-[271px] w-full overflow-hidden bg-[#f4f9fe]">
// // //       {/* =========================================================
// // //           LEFT — PORTRAIT / QUOTE
// // //       ========================================================== */}
// // //       <div className="relative w-[33%] shrink-0 overflow-hidden bg-[#0b4f86]">
// // //         {/* Main blue background */}
// // //         <div className="absolute inset-0 bg-gradient-to-r from-[#0a477b] via-[#185f96] to-[#4384b8]" />

// // //         {/* Light diagonal shape behind portrait */}
// // //         <div
// // //           className="absolute inset-0 bg-[#f4f9fe]"
// // //           style={{
// // //             clipPath: "polygon(27% 0, 100% 0, 100% 100%, 82% 100%)",
// // //           }}
// // //         />

// // //         {/* Subtle blue overlay toward portrait */}
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{
// // //             background:
// // //               "linear-gradient(90deg, rgba(4,66,120,0.95) 0%, rgba(17,87,143,0.78) 31%, rgba(68,132,184,0.20) 57%, rgba(255,255,255,0) 75%)",
// // //           }}
// // //         />

// // //         {/* Quote — horizontal, matching reference */}
// // //         <div className="absolute left-[7%] top-[28%] z-20 w-[31%]">
// // //           <p
// // //             className="text-white"
// // //             style={{
// // //               fontFamily:
// // //                 "'Brush Script MT', 'Segoe Script', 'URW Chancery L', cursive",
// // //               fontStyle: "italic",
// // //               fontSize: "clamp(16px, 1.45vw, 24px)",
// // //               lineHeight: 1.2,
// // //               textShadow: "0 1px 2px rgba(0,0,0,0.18)",
// // //             }}
// // //           >
// // //             Engineers
// // //             <br />
// // //             Build
// // //             <br />A Better
// // //             <br />
// // //             Bangladesh
// // //           </p>

// // //           <div className="mt-3 h-[2px] w-7 bg-white/90" />
// // //         </div>

// // //         {/* Candidate portrait */}
// // //         <div className="absolute bottom-0 right-[1%] z-10 h-[103%] w-[73%]">
// // //           <Image
// // //             src="/images/profile/arif-hasan-chowdhury.png"
// // //             alt="Engr. Mohammed Arif Hasan Chowdhury"
// // //             fill
// // //             priority
// // //             sizes="33vw"
// // //             className="object-contain object-bottom"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* =========================================================
// // //           CENTER + RIGHT — ONE CONTINUOUS HERO BACKGROUND
// // //       ========================================================== */}
// // //       <div className="relative flex-1 overflow-hidden">
// // //         {/* Bridge runs underneath the whole remaining hero */}
// // //         <Image
// // //           src="/images/hero/bridge-bg.png"
// // //           alt=""
// // //           fill
// // //           priority
// // //           sizes="67vw"
// // //           className="object-cover"
// // //           style={{
// // //             objectPosition: "center 62%",
// // //           }}
// // //         />

// // //         {/* Main fade:
// // //             clean text area on left → visible bridge on right
// // //         */}
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{
// // //             background:
// // //               "linear-gradient(90deg, rgba(246,250,254,0.995) 0%, rgba(246,250,254,0.99) 36%, rgba(243,248,253,0.94) 49%, rgba(237,245,252,0.72) 61%, rgba(226,240,252,0.30) 75%, rgba(218,235,250,0.08) 100%)",
// // //           }}
// // //         />

// // //         {/* Soft top wash from reference */}
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{
// // //             background:
// // //               "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.08) 48%, rgba(255,255,255,0) 100%)",
// // //           }}
// // //         />

// // //         {/* =====================================================
// // //             CENTER INFORMATION
// // //         ====================================================== */}
// // //         <div className="absolute inset-y-0 left-0 z-20 flex w-[67%] items-center">
// // //           <div className="w-full px-[5.5%] pb-3 pt-2">
// // //             {/* Tagline */}
// // //             <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.19em] text-[#064c82]">
// // //               UNITY&nbsp;&nbsp;•&nbsp;&nbsp;DIGNITY&nbsp;&nbsp;•&nbsp;&nbsp;
// // //               PROFESSIONAL EXCELLENCE
// // //             </p>

// // //             {/* Name */}
// // //             <h1 className="mb-1.5 text-[25px] font-extrabold leading-[1.05] text-[#06477d]">
// // //               ENGR. MOHAMMED ARIF HASAN
// // //               <br />
// // //               CHOWDHURY
// // //             </h1>

// // //             {/* Role badge */}
// // //             <div className="mb-1.5">
// // //               <span className="inline-flex rounded-[5px] bg-[#064c82] px-3 py-[3px] text-[14px] font-bold leading-5 text-white">
// // //                 LOCAL COUNCIL MEMBER
// // //               </span>
// // //             </div>

// // //             {/* Institution */}
// // //             <p className="text-[13px] font-medium leading-[1.45] text-[#23384c]">
// // //               Institution of Engineers, Bangladesh (IEB)
// // //             </p>

// // //             <p className="text-[12px] font-semibold leading-[1.45] text-[#164c78]">
// // //               Association of Engineers Bangladesh (AEB) Panel
// // //               <span className="mx-2 text-[#8094a7]">|</span>
// // //               IEB Fellow, F14663
// // //             </p>

// // //             {/* Metadata */}
// // //             <div className="mt-1.5 flex items-center gap-8 text-[12px] font-semibold text-[#16476f]">
// // //               <div className="flex items-center gap-1.5">
// // //                 <MapPin
// // //                   size={15}
// // //                   strokeWidth={2.7}
// // //                   className="text-[#07518a]"
// // //                 />
// // //                 <span>
// // //                   IEB Centre: <strong>Chittagong</strong>
// // //                 </span>
// // //               </div>

// // //               <div className="flex items-center gap-1.5">
// // //                 <CalendarDays
// // //                   size={15}
// // //                   strokeWidth={2.7}
// // //                   className="text-[#07518a]"
// // //                 />
// // //                 <span>
// // //                   Election Year: <strong>26-27</strong>
// // //                 </span>
// // //               </div>
// // //             </div>

// // //             {/* CTA buttons — reference order */}
// // //             <div className="mt-3 flex flex-nowrap items-center gap-2.5">
// // //               <a
// // //                 href="/support"
// // //                 className="flex h-[38px] shrink-0 items-center gap-2 rounded-[5px] bg-[#07518a] px-5 text-[12px] font-bold text-white transition-colors hover:bg-[#043f70]"
// // //               >
// // //                 <ThumbsUp size={14} strokeWidth={2.4} />
// // //                 Support Me
// // //               </a>

// // //               <a
// // //                 href="/profile.pdf"
// // //                 className="flex h-[38px] shrink-0 items-center gap-2 rounded-[5px] border border-[#175887] bg-white/90 px-5 text-[12px] font-bold text-[#124c78] transition-colors hover:bg-white"
// // //               >
// // //                 <Download size={14} strokeWidth={2.4} />
// // //                 Download Profile (PDD)
// // //               </a>

// // //               <a
// // //                 href="/contact"
// // //                 className="flex h-[38px] shrink-0 items-center gap-2 rounded-[5px] border border-[#175887] bg-white/90 px-5 text-[12px] font-bold text-[#124c78] transition-colors hover:bg-white"
// // //               >
// // //                 <Send size={14} strokeWidth={2.4} />
// // //                 Contact Me
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* =====================================================
// // //             RIGHT SLOGAN
// // //         ====================================================== */}
// // //         <div className="absolute bottom-[23%] right-[5.5%] top-[7%] z-20 flex w-[25%] justify-center">
// // //           <div className="text-center">
// // //             <p
// // //               className="text-[#0b355e]"
// // //               style={{
// // //                 fontFamily:
// // //                   "'Brush Script MT', 'Segoe Script', 'URW Chancery L', cursive",
// // //                 fontStyle: "italic",
// // //                 fontWeight: 600,
// // //                 fontSize: "clamp(18px, 1.5vw, 27px)",
// // //                 lineHeight: 1.24,
// // //                 textShadow: "0 1px 1px rgba(255,255,255,0.55)",
// // //               }}
// // //             >
// // //               Together
// // //               <br />
// // //               for a Stronger
// // //               <br />
// // //               Engineering
// // //               <br />
// // //               Community
// // //             </p>

// // //             <div className="mx-auto mt-3 h-[2px] w-8 bg-[#0b4b7f]" />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import Image from "next/image";
// // import { Dancing_Script } from "next/font/google";
// // import {
// //   CalendarDays,
// //   Download,
// //   MapPin,
// //   Send,
// //   ThumbsUp,
// // } from "lucide-react";

// // const dancingScript = Dancing_Script({
// //   subsets: ["latin"],
// //   weight: ["500", "600", "700"],
// //   display: "swap",
// // });

// // export default function Hero() {
// //   return (
// //     <section
// //       className="
// //         relative w-full overflow-hidden
// //         bg-[#f3f8fd]
// //         lg:flex lg:h-[271px]
// //       "
// //     >
// //       {/* =========================================================
// //           LEFT: PORTRAIT + QUOTE
// //       ========================================================= */}
// //       <div
// //         className="
// //           relative h-[300px] w-full overflow-hidden
// //           bg-[#07518a]
// //           lg:h-full lg:w-[33%] lg:shrink-0
// //         "
// //       >
// //         {/* Base blue background */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "linear-gradient(135deg, #0a4b83 0%, #17649e 48%, #4e8cba 100%)",
// //           }}
// //         />

// //         {/* Light diagonal panel behind portrait */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background: "#f4f9fe",
// //             clipPath: "polygon(28% 0, 100% 0, 100% 100%, 84% 100%)",
// //           }}
// //         />

// //         {/* Blue wash so portrait integrates with reference */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "linear-gradient(90deg, rgba(4,67,120,0.97) 0%, rgba(13,82,139,0.88) 29%, rgba(35,107,163,0.34) 52%, rgba(255,255,255,0) 73%)",
// //           }}
// //         />

// //         {/* Left handwritten quote */}
// //         <div
// //           className="
// //             absolute left-[7%] top-[28%] z-20
// //             hidden w-[32%]
// //             lg:block
// //           "
// //         >
// //           <p
// //             className={`
// //               ${dancingScript.className}
// //               text-white
// //             `}
// //             style={{
// //               fontSize: "clamp(18px, 1.55vw, 25px)",
// //               lineHeight: 1.04,
// //               fontWeight: 600,
// //               textShadow: "0 1px 2px rgba(0,0,0,0.18)",
// //             }}
// //           >
// //             “Engineers
// //             <br />
// //             Build
// //             <br />A Better
// //             <br />
// //             Bangladesh”
// //           </p>

// //           <div
// //             className="mt-3 h-[2px] w-7"
// //             style={{
// //               background: "rgba(255,255,255,0.92)",
// //             }}
// //           />
// //         </div>

// //         {/* Candidate portrait */}
// //         <div
// //           className="
// //             absolute bottom-0 right-[1%] z-10
// //             h-[102%] w-[76%]
// //             lg:h-[103%] lg:w-[73%]
// //           "
// //         >
// //           <Image
// //             src="/images/profile/arif-hasan-chowdhury.png"
// //             alt="Engr. Mohammed Arif Hasan Chowdhury"
// //             fill
// //             priority
// //             sizes="(min-width: 1024px) 25vw, 76vw"
// //             className="object-contain object-bottom"
// //           />
// //         </div>
// //       </div>

// //       {/* =========================================================
// //           CENTER + RIGHT: CONTINUOUS HERO BACKGROUND
// //       ========================================================= */}
// //       <div
// //         className="
// //           relative flex-1 overflow-hidden
// //           min-h-[360px]
// //           lg:min-h-0
// //         "
// //       >
// //         {/* Bridge background */}
// //         <Image
// //           src="/images/hero/bridge-bg.png"
// //           alt=""
// //           fill
// //           priority
// //           sizes="(min-width: 1024px) 67vw, 100vw"
// //           className="object-cover"
// //           style={{
// //             objectPosition: "56% 58%",
// //           }}
// //         />

// //         {/* Strong left fade for readable center content */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "linear-gradient(90deg, rgba(246,250,254,1) 0%, rgba(246,250,254,0.995) 35%, rgba(244,249,254,0.96) 48%, rgba(235,245,253,0.78) 59%, rgba(218,237,252,0.40) 72%, rgba(205,229,248,0.08) 100%)",
// //           }}
// //         />

// //         {/* Soft top wash */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0) 100%)",
// //           }}
// //         />

// //         {/* =====================================================
// //             CENTER CONTENT
// //         ====================================================== */}
// //         <div
// //           className="
// //             relative z-20
// //             flex min-h-[360px] items-center
// //             px-6 py-7
// //             lg:absolute lg:inset-y-0 lg:left-0
// //             lg:min-h-0 lg:w-[67%]
// //             lg:px-[5.5%] lg:py-0
// //           "
// //         >
// //           <div className="w-full">
// //             {/* Top tagline */}
// //             <p
// //               className="
// //                 mb-[7px]
// //                 text-[10px] font-extrabold uppercase
// //                 tracking-[0.20em]
// //                 text-[#07518a]
// //                 lg:text-[11px]
// //               "
// //             >
// //               UNITY&nbsp;&nbsp;•&nbsp;&nbsp;DIGNITY&nbsp;&nbsp;•&nbsp;&nbsp;
// //               PROFESSIONAL EXCELLENCE
// //             </p>

// //             {/* Candidate name */}
// //             <h1
// //               className="
// //                 mb-[7px]
// //                 text-[24px] font-extrabold
// //                 leading-[1.05]
// //                 text-[#06477d]
// //                 lg:text-[25px]
// //               "
// //             >
// //               ENGR. MOHAMMED ARIF HASAN
// //               <br />
// //               CHOWDHURY
// //             </h1>

// //             {/* Role badge */}
// //             <div className="mb-[5px]">
// //               <span
// //                 className="
// //                   inline-flex items-center
// //                   rounded-[4px]
// //                   bg-[#07518a]
// //                   px-[11px] py-[2px]
// //                   text-[13px] font-bold
// //                   leading-[20px]
// //                   text-white
// //                 "
// //               >
// //                 LOCAL COUNCIL MEMBER
// //               </span>
// //             </div>

// //             {/* Institution */}
// //             <p
// //               className="
// //                 text-[12px] font-medium
// //                 leading-[1.4]
// //                 text-[#293c4e]
// //                 lg:text-[13px]
// //               "
// //             >
// //               Institution of Engineers, Bangladesh (IEB)
// //             </p>

// //             {/* AEB / Fellow line */}
// //             <p
// //               className="
// //                 mt-[1px]
// //                 text-[11px] font-semibold
// //                 leading-[1.4]
// //                 text-[#174e79]
// //                 lg:text-[12px]
// //               "
// //             >
// //               Association of Engineers Bangladesh (AEB) Panel
// //               <span className="mx-[7px] text-[#8194a6]">|</span>
// //               IEB Fellow, F14663
// //             </p>

// //             {/* Location + election */}
// //             <div
// //               className="
// //                 mt-[5px]
// //                 flex flex-wrap items-center
// //                 gap-x-7 gap-y-1
// //                 text-[11px] font-semibold
// //                 text-[#164b75]
// //                 lg:text-[12px]
// //               "
// //             >
// //               <div className="flex items-center gap-[5px]">
// //                 <MapPin
// //                   size={15}
// //                   strokeWidth={2.6}
// //                   className="shrink-0 text-[#07518a]"
// //                 />

// //                 <span>
// //                   IEB Centre: <strong>Chittagong</strong>
// //                 </span>
// //               </div>

// //               <div className="flex items-center gap-[5px]">
// //                 <CalendarDays
// //                   size={15}
// //                   strokeWidth={2.6}
// //                   className="shrink-0 text-[#07518a]"
// //                 />

// //                 <span>
// //                   Election Year: <strong>26-27</strong>
// //                 </span>
// //               </div>
// //             </div>

// //             {/* CTA buttons */}
// //             <div
// //               className="
// //                 mt-[11px]
// //                 flex flex-wrap items-center gap-2
// //                 lg:flex-nowrap lg:gap-[9px]
// //               "
// //             >
// //               <a
// //                 href="/support"
// //                 className="
// //                   flex h-[37px] shrink-0
// //                   items-center justify-center gap-[7px]
// //                   rounded-[4px]
// //                   bg-[#07518a]
// //                   px-[18px]
// //                   text-[12px] font-bold
// //                   text-white
// //                   transition-colors
// //                   hover:bg-[#043f70]
// //                 "
// //               >
// //                 <ThumbsUp size={14} strokeWidth={2.3} />
// //                 Support Me
// //               </a>

// //               <a
// //                 href="/profile.pdf"
// //                 className="
// //                   flex h-[37px] shrink-0
// //                   items-center justify-center gap-[7px]
// //                   rounded-[4px]
// //                   border border-[#175887]
// //                   bg-white/90
// //                   px-[18px]
// //                   text-[12px] font-bold
// //                   text-[#124c78]
// //                   transition-colors
// //                   hover:bg-white
// //                 "
// //               >
// //                 <Download size={14} strokeWidth={2.3} />
// //                 Download Profile (PDD)
// //               </a>

// //               <a
// //                 href="/contact"
// //                 className="
// //                   flex h-[37px] shrink-0
// //                   items-center justify-center gap-[7px]
// //                   rounded-[4px]
// //                   border border-[#175887]
// //                   bg-white/90
// //                   px-[18px]
// //                   text-[12px] font-bold
// //                   text-[#124c78]
// //                   transition-colors
// //                   hover:bg-white
// //                 "
// //               >
// //                 <Send size={14} strokeWidth={2.3} />
// //                 Contact Me
// //               </a>
// //             </div>
// //           </div>
// //         </div>

// //         {/* =====================================================
// //             RIGHT HANDWRITTEN SLOGAN
// //         ====================================================== */}
// //         <div
// //           className="
// //             pointer-events-none
// //             absolute right-[4.5%] top-[7%] z-20
// //             hidden w-[25%]
// //             justify-center
// //             lg:flex
// //           "
// //         >
// //           <div className="text-center">
// //             <p
// //               className={`
// //                 ${dancingScript.className}
// //                 text-[#123f73]
// //               `}
// //               style={{
// //                 fontSize: "clamp(20px, 1.55vw, 27px)",
// //                 lineHeight: 1.18,
// //                 fontWeight: 600,
// //                 textShadow: "0 1px 1px rgba(255,255,255,0.60)",
// //               }}
// //             >
// //               Together
// //               <br />
// //               for a Stronger
// //               <br />
// //               Engineering
// //               <br />
// //               Community
// //             </p>

// //             <div
// //               className="mx-auto mt-[9px] h-[2px] w-8"
// //               style={{
// //                 background: "#164c78",
// //               }}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import Image from "next/image";
// import { Dancing_Script } from "next/font/google";
// import {
//   CalendarDays,
//   Download,
//   MapPin,
//   Send,
//   ThumbsUp,
// } from "lucide-react";

// /**
//  * Handwritten-style font used only for the two decorative slogans
//  * visible in the reference design.
//  *
//  * next/font handles loading and optimisation automatically,
//  * so no additional package installation is required.
//  */
// const dancingScript = Dancing_Script({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   display: "swap",
// });

// export default function Hero() {
//   return (
//     <section
//       className="
//         relative w-full overflow-hidden
//         bg-[#f3f8fd]
//         lg:flex lg:h-[271px]
//       "
//     >
//       {/* =========================================================
//           LEFT AREA
//           Portrait + blue background + decorative quote
//       ========================================================== */}
//       <div
//         className="
//           relative h-[300px] w-full overflow-hidden
//           bg-[#07518a]
//           lg:h-full lg:w-[33%] lg:shrink-0
//         "
//       >
//         {/* Base blue background */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(135deg, #0a4b83 0%, #17649e 48%, #4e8cba 100%)",
//           }}
//         />

//         {/* Light diagonal shape behind the portrait */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: "#f4f9fe",
//             clipPath:
//               "polygon(28% 0, 100% 0, 100% 100%, 84% 100%)",
//           }}
//         />

//         {/* Blue transition overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(90deg, rgba(4,67,120,0.97) 0%, rgba(13,82,139,0.88) 29%, rgba(35,107,163,0.34) 52%, rgba(255,255,255,0) 73%)",
//           }}
//         />

//         {/* Left handwritten quote */}
//         <div
//           className="
//             absolute left-[7%] top-[28%] z-20
//             hidden w-[32%]
//             lg:block
//           "
//         >
//           <p
//             className={`${dancingScript.className} text-white`}
//             style={{
//               fontSize: "clamp(18px, 1.55vw, 25px)",
//               lineHeight: 1.04,
//               fontWeight: 600,
//               textShadow: "0 1px 2px rgba(0,0,0,0.18)",
//             }}
//           >
//             “Engineers
//             <br />
//             Build
//             <br />
//             A Better
//             <br />
//             Bangladesh”
//           </p>

//           {/* Small underline below quote */}
//           <div
//             className="mt-3 h-[2px] w-7"
//             style={{
//               background: "rgba(255,255,255,0.92)",
//             }}
//           />
//         </div>

//         {/* Candidate portrait */}
//         <div
//           className="
//             absolute bottom-0 right-[1%] z-10
//             h-[102%] w-[76%]
//             lg:h-[103%] lg:w-[73%]
//           "
//         >
//           <Image
//             src="/images/profile/arif-hasan-chowdhury.png"
//             alt="Engr. Mohammed Arif Hasan Chowdhury"
//             fill
//             priority
//             sizes="(min-width: 1024px) 25vw, 76vw"
//             className="object-contain object-bottom"
//           />
//         </div>
//       </div>

//       {/* =========================================================
//           CENTER + RIGHT AREA
//           Candidate information over continuous bridge background
//       ========================================================== */}
//       <div
//         className="
//           relative flex-1 overflow-hidden
//           min-h-[360px]
//           lg:min-h-0
//         "
//       >
//         {/* =====================================================
//             BRIDGE BACKGROUND

//             Slight saturation/contrast enhancement is intentional.
//             It keeps the right side clearer and closer to the
//             reference instead of looking washed out.
//         ====================================================== */}
//         <Image
//           src="/images/hero/bridge-bg.png"
//           alt=""
//           fill
//           priority
//           sizes="(min-width: 1024px) 67vw, 100vw"
//           className="object-cover"
//           style={{
//             objectPosition: "58% 60%",
//             filter:
//               "saturate(1.08) contrast(1.05) brightness(0.98)",
//           }}
//         />

//         {/* =====================================================
//             LEFT-TO-RIGHT FADE

//             Strong white/light-blue on the information side,
//             gradually becoming almost transparent toward the
//             bridge and skyline.
//         ====================================================== */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(90deg, rgba(246,250,254,1) 0%, rgba(246,250,254,0.995) 34%, rgba(244,249,254,0.93) 46%, rgba(235,245,253,0.62) 57%, rgba(218,237,252,0.22) 68%, rgba(205,229,248,0.04) 78%, rgba(205,229,248,0) 100%)",
//           }}
//         />

//         {/* Very light top wash */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.05) 42%, rgba(255,255,255,0) 68%)",
//           }}
//         />

//         {/* =====================================================
//             CENTER INFORMATION
//         ====================================================== */}
//         <div
//           className="
//             relative z-20
//             flex min-h-[360px] items-center
//             px-6 py-7
//             lg:absolute lg:inset-y-0 lg:left-0
//             lg:min-h-0 lg:w-[67%]
//             lg:px-[5.5%] lg:py-0
//           "
//         >
//           <div className="w-full">
//             {/* Top tagline */}
//             <p
//               className="
//                 mb-[7px]
//                 text-[10px] font-extrabold uppercase
//                 tracking-[0.20em]
//                 text-[#07518a]
//                 lg:text-[11px]
//               "
//             >
//               UNITY&nbsp;&nbsp;•&nbsp;&nbsp;
//               DIGNITY&nbsp;&nbsp;•&nbsp;&nbsp;
//               PROFESSIONAL EXCELLENCE
//             </p>

//             {/* Candidate name */}
//             <h1
//               className="
//                 mb-[7px]
//                 text-[24px] font-extrabold
//                 leading-[1.05]
//                 text-[#06477d]
//                 lg:text-[25px]
//               "
//             >
//               ENGR. MOHAMMED ARIF HASAN
//               <br />
//               CHOWDHURY
//             </h1>

//             {/* Position badge */}
//             <div className="mb-[5px]">
//               <span
//                 className="
//                   inline-flex items-center
//                   rounded-[4px]
//                   bg-[#07518a]
//                   px-[11px] py-[2px]
//                   text-[13px] font-bold
//                   leading-[20px]
//                   text-white
//                 "
//               >
//                 LOCAL COUNCIL MEMBER
//               </span>
//             </div>

//             {/* Institution */}
//             <p
//               className="
//                 text-[12px] font-medium
//                 leading-[1.4]
//                 text-[#293c4e]
//                 lg:text-[13px]
//               "
//             >
//               Institution of Engineers, Bangladesh (IEB)
//             </p>

//             {/* Panel and fellowship */}
//             <p
//               className="
//                 mt-[1px]
//                 text-[11px] font-semibold
//                 leading-[1.4]
//                 text-[#174e79]
//                 lg:text-[12px]
//               "
//             >
//               Association of Engineers Bangladesh (AEB) Panel
//               <span className="mx-[7px] text-[#8194a6]">
//                 |
//               </span>
//               IEB Fellow, F14663
//             </p>

//             {/* Centre + election year */}
//             <div
//               className="
//                 mt-[5px]
//                 flex flex-wrap items-center
//                 gap-x-7 gap-y-1
//                 text-[11px] font-semibold
//                 text-[#164b75]
//                 lg:text-[12px]
//               "
//             >
//               <div className="flex items-center gap-[5px]">
//                 <MapPin
//                   size={15}
//                   strokeWidth={2.6}
//                   className="shrink-0 text-[#07518a]"
//                 />

//                 <span>
//                   IEB Centre: <strong>Chittagong</strong>
//                 </span>
//               </div>

//               <div className="flex items-center gap-[5px]">
//                 <CalendarDays
//                   size={15}
//                   strokeWidth={2.6}
//                   className="shrink-0 text-[#07518a]"
//                 />

//                 <span>
//                   Election Year: <strong>26-27</strong>
//                 </span>
//               </div>
//             </div>

//             {/* =================================================
//                 CTA BUTTONS
//                 Reference order:
//                 Support → Download → Contact
//             ================================================== */}
//             <div
//               className="
//                 mt-[11px]
//                 flex flex-wrap items-center gap-2
//                 lg:flex-nowrap lg:gap-[9px]
//               "
//             >
//               {/* Support */}
//               <a
//                 href="/support"
//                 className="
//                   flex h-[37px] shrink-0
//                   items-center justify-center gap-[7px]
//                   rounded-[4px]
//                   bg-[#07518a]
//                   px-[18px]
//                   text-[12px] font-bold
//                   text-white
//                   transition-colors
//                   hover:bg-[#043f70]
//                 "
//               >
//                 <ThumbsUp
//                   size={14}
//                   strokeWidth={2.3}
//                   className="shrink-0"
//                 />
//                 Support Me
//               </a>

//               {/* Download */}
//               <a
//                 href="/profile.pdf"
//                 className="
//                   flex h-[37px] shrink-0
//                   items-center justify-center gap-[7px]
//                   rounded-[4px]
//                   border border-[#175887]
//                   bg-white/90
//                   px-[18px]
//                   text-[12px] font-bold
//                   text-[#124c78]
//                   transition-colors
//                   hover:bg-white
//                 "
//               >
//                 <Download
//                   size={14}
//                   strokeWidth={2.3}
//                   className="shrink-0"
//                 />
//                 Download Profile (PDD)
//               </a>

//               {/* Contact */}
//               <a
//                 href="/contact"
//                 className="
//                   flex h-[37px] shrink-0
//                   items-center justify-center gap-[7px]
//                   rounded-[4px]
//                   border border-[#175887]
//                   bg-white/90
//                   px-[18px]
//                   text-[12px] font-bold
//                   text-[#124c78]
//                   transition-colors
//                   hover:bg-white
//                 "
//               >
//                 <Send
//                   size={14}
//                   strokeWidth={2.3}
//                   className="shrink-0"
//                 />
//                 Contact Me
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             RIGHT HANDWRITTEN SLOGAN
//         ====================================================== */}
//         <div
//           className="
//             pointer-events-none
//             absolute right-[4.5%] top-[7%] z-20
//             hidden w-[25%]
//             justify-center
//             lg:flex
//           "
//         >
//           <div className="text-center">
//             <p
//               className={`${dancingScript.className} text-[#123f73]`}
//               style={{
//                 fontSize: "clamp(20px, 1.55vw, 27px)",
//                 lineHeight: 1.18,
//                 fontWeight: 600,
//                 textShadow:
//                   "0 1px 1px rgba(255,255,255,0.60)",
//               }}
//             >
//               Together
//               <br />
//               for a Stronger
//               <br />
//               Engineering
//               <br />
//               Community
//             </p>

//             {/* Small underline */}
//             <div
//               className="mx-auto mt-[9px] h-[2px] w-8"
//               style={{
//                 background: "#164c78",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import {
  CalendarDays,
  Download,
  MapPin,
  Send,
  ThumbsUp,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function Hero() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[#f3f8fd]
        lg:flex lg:h-[361px]
      "
    >
      {/* =========================================================
          LEFT AREA
          Portrait + blue background + decorative quotation
      ========================================================== */}
      <div
        className="
          relative h-[300px] w-full overflow-hidden
          bg-[#07518a]
          lg:h-full lg:w-[33%] lg:shrink-0
        "
      >
        {/* Base blue background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0a4b83 0%, #17649e 48%, #4e8cba 100%)",
          }}
        />

        {/* Light diagonal region behind portrait */}
        <div
          className="absolute inset-0"
          style={{
            background: "#f4f9fe",
            clipPath:
              "polygon(28% 0, 100% 0, 100% 100%, 84% 100%)",
          }}
        />

        {/* Blue transition overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,67,120,0.97) 0%, rgba(13,82,139,0.88) 29%, rgba(35,107,163,0.34) 52%, rgba(255,255,255,0) 73%)",
          }}
        />

        {/* Handwritten quotation */}
        <div
          className="
            absolute left-[7%] top-[28%] z-20
            hidden w-[32%]
            lg:block
          "
        >
          <p
            className={`${dancingScript.className} text-white`}
            style={{
              fontSize: "clamp(18px, 1.55vw, 25px)",
              lineHeight: 1.04,
              fontWeight: 600,
              textShadow: "0 1px 2px rgba(0,0,0,0.18)",
            }}
          >
            “Engineers
            <br />
            Build
            <br />
            A Better
            <br />
            Bangladesh”
          </p>

          <div
            className="mt-3 h-[2px] w-7"
            style={{
              background: "rgba(255,255,255,0.92)",
            }}
          />
        </div>

        {/* Candidate portrait */}
        <div
          className="
            absolute bottom-0 right-[1%] z-10
            h-[102%] w-[76%]
            lg:h-[103%] lg:w-[73%]
          "
        >
          <Image
            src="/images/profile/arif-hasan-chowdhury.png"
            alt="Engr. Mohammed Arif Hasan Chowdhury"
            fill
            priority
            sizes="(min-width: 1024px) 25vw, 76vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* =========================================================
          CENTER + RIGHT
          Continuous bridge background
      ========================================================== */}
      <div
        className="
          relative min-h-[360px] flex-1 overflow-hidden
          lg:min-h-0
        "
      >
        {/* Bridge image */}
        <Image
          src="/images/hero/bridge-bg.png"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 67vw, 100vw"
          className="object-cover"
          style={{
            objectPosition: "58% 60%",
            filter:
              "saturate(1.08) contrast(1.05) brightness(0.98)",
          }}
        />

        {/* Horizontal readability fade

            Left/center remains clean for text.
            Fade falls away quickly before the bridge-right region,
            keeping the bridge clearer and deeper.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247,251,255,1) 0%, rgba(247,251,255,1) 35%, rgba(246,250,254,0.985) 46%, rgba(242,248,253,0.90) 53%, rgba(233,244,252,0.68) 60%, rgba(219,237,251,0.29) 68%, rgba(207,230,248,0.07) 77%, rgba(207,230,248,0) 100%)",
          }}
        />

        {/* Soft top lighting */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 42%, rgba(255,255,255,0) 68%)",
          }}
        />

        {/* =====================================================
            MIDDLE INFORMATION BLOCK
        ====================================================== */}
        <div
          className="
            relative z-20
            flex min-h-[360px] items-center
            px-6 py-7

            lg:absolute
            lg:inset-y-0
            lg:left-0
            lg:min-h-0
            lg:w-[67%]
            lg:px-[5.2%]
            lg:py-0
          "
        >
          <div className="w-full">
            {/* -----------------------------------------------
                Tagline
                Reference uses small but strongly defined
                uppercase lettering with generous tracking.
            ------------------------------------------------ */}
            <p
              className="
                mb-[7px]
                whitespace-nowrap
                text-[12px]
                font-bold
                uppercase
                tracking-[0.19em]
                text-[#07518a]

                lg:text-[13.5px]
              "
            >
              •&nbsp;&nbsp;UNITY&nbsp;&nbsp;•&nbsp;&nbsp;
              DIGNITY&nbsp;&nbsp;•&nbsp;&nbsp;
              PROFESSIONAL EXCELLENCE
            </p>

            {/* -----------------------------------------------
                Candidate name
                Main visual hierarchy of center column
            ------------------------------------------------ */}
            <h1
              className="
                mb-[7px]
                max-w-[560px]
                text-[35px]
                font-extrabold
                leading-[1.04]
                tracking-[-0.015em]
                text-[#06477d]

                lg:text-[29px]
              "
            >
              ENGR. MOHAMMED ARIF HASAN
              <br />
              CHOWDHURY
            </h1>

            {/* -----------------------------------------------
                Position badge
            ------------------------------------------------ */}
            <div className="mb-[6px]">
              <span
                className="
                  inline-flex
                  min-h-[36px]
                  items-center
                  rounded-[4px]
                  bg-[#07518a]
                  px-[16px]
                  py-[2px]
                  text-[15px]
                  font-extrabold
                  leading-[20px]
                  tracking-[0.01em]
                  text-white

                  lg:text-[16px]
                "
              >
                LOCAL COUNCIL MEMBER
              </span>
            </div>

            {/* -----------------------------------------------
                Institution
            ------------------------------------------------ */}
            <p
              className="
                text-[12px]
                font-semibold
                leading-[1.35]
                text-[#253d52]

                lg:text-[15.5px]
              "
            >
              Institution of Engineers, Bangladesh (IEB)
            </p>

            {/* -----------------------------------------------
                Panel + Fellowship
            ------------------------------------------------ */}
            <p
              className="
                mt-[2px]
                text-[11px]
                font-semibold
                leading-[1.35]
                text-[#174e79]

                lg:text-[14.5px]
              "
            >
              <strong className="font-bold">
                Association of Engineers Bangladesh (AEB) Panel
              </strong>

              <span className="mx-[8px] font-normal text-[#71899c]">
                |
              </span>

              <strong className="font-bold">
                IEB Fellow, F14663
              </strong>
            </p>

            {/* -----------------------------------------------
                Centre + Election Year
            ------------------------------------------------ */}
            <div
              className="
                mt-[20px]
                flex flex-wrap
                items-center
                gap-x-[28px]
                gap-y-1
                text-[11px]
                font-semibold
                leading-none
                text-[#164b75]

                lg:text-[14.5px]
              "
            >
              {/* Centre */}
              <div className="flex items-center gap-[6px]">
                <MapPin
                  size={16}
                  strokeWidth={2.7}
                  className="shrink-0 text-[#07518a]"
                />

                <span>
                  IEB Centre:{" "}
                  <strong className="font-extrabold text-[#104875]">
                    Chittagong
                  </strong>
                </span>
              </div>

              {/* Election */}
              <div className="flex items-center gap-[6px]">
                <CalendarDays
                  size={16}
                  strokeWidth={2.7}
                  className="shrink-0 text-[#07518a]"
                />

                <span>
                  Election Year:{" "}
                  <strong className="font-extrabold text-[#104875]">
                    26-27
                  </strong>
                </span>
              </div>
            </div>

            {/* =================================================
                CTA BUTTONS
                Reference:
                Support → Download → Contact
            ================================================== */}
            <div
              className="
                mt-[20px]
                flex flex-wrap
                items-center
                gap-[9px]

                lg:flex-nowrap
              "
            >
              {/* Support */}
              <a
                href="/support"
                className="
                  flex
                  h-[39px]
                  shrink-0
                  items-center
                  justify-center
                  gap-[7px]
                  rounded-[4px]
                  bg-[#07518a]
                  px-[20px]
                  text-[12px]
                  font-bold
                  text-white
                  transition-colors
                  hover:bg-[#043f70]

                  lg:text-[13px]
                "
              >
                <ThumbsUp
                  size={15}
                  strokeWidth={2.35}
                  className="shrink-0"
                />

                <span>Support Me</span>
              </a>

              {/* Download */}
              <a
                href="/profile.pdf"
                className="
                  flex
                  h-[39px]
                  shrink-0
                  items-center
                  justify-center
                  gap-[8px]
                  rounded-[4px]
                  border
                  border-[#175887]
                  bg-white/90
                  px-[20px]
                  text-[12px]
                  font-bold
                  text-[#124c78]
                  transition-colors
                  hover:bg-white

                  lg:text-[13px]
                "
              >
                <Download
                  size={15}
                  strokeWidth={2.35}
                  className="shrink-0"
                />

                <span>Download Profile (PDD)</span>
              </a>

              {/* Contact */}
              <a
                href="/contact"
                className="
                  flex
                  h-[39px]
                  shrink-0
                  items-center
                  justify-center
                  gap-[8px]
                  rounded-[4px]
                  border
                  border-[#175887]
                  bg-white/90
                  px-[20px]
                  text-[12px]
                  font-bold
                  text-[#124c78]
                  transition-colors
                  hover:bg-white

                  lg:text-[13px]
                "
              >
                <Send
                  size={15}
                  strokeWidth={2.35}
                  className="shrink-0"
                />

                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT HANDWRITTEN SLOGAN
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            right-[4.5%]
            top-[7%]
            z-20
            hidden
            w-[25%]
            justify-center

            lg:flex
          "
        >
          <div className="text-center ml-auto pr-2">
            <p
              className={`${dancingScript.className} text-[#123f73]`}
              style={{
                fontSize: "clamp(20px, 1.55vw, 27px)",
                lineHeight: 1.18,
                fontWeight: 600,
                textShadow:
                  "0 1px 1px rgba(255,255,255,0.60)",
              }}
            >
              Together
              <br />
              for a Stronger
              <br />
              Engineering
              <br />
              Community
            </p>

            <div
              className="mx-auto mt-[9px] h-[2px] w-8"
              style={{
                background: "#164c78",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}