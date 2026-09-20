export default function MessageSection() {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-1 h-6 bg-[#003d7a] rounded" />
        <h2 className="text-base font-bold text-[#003d7a]">A Message to Fellow Engineers</h2>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 flex flex-col gap-3 text-gray-600 text-xs leading-relaxed">
        <p>
          Dear Fellow Engineers, I am honoured to seek your support as a candidate for the IEB Local Council, Chittagong Centre. My commitment is to serve the engineering community with dedication, transparency, and professionalism.
        </p>
        <p>
          As an Academic and IT Professional with over 15 years of experience, I bring a unique perspective to the IEB Council — bridging academia, industry, and international exposure to strengthen our institution.
        </p>
        <p>
          I believe every engineer deserves recognition, support, and a strong professional community. With your trust, I will work tirelessly to uphold the dignity of our profession and advance the goals of the Institution of Engineers, Bangladesh.
        </p>
        <p className="font-medium text-[#003d7a]">
          — Engr. Mohammed Arif Hasan Chowdhury
        </p>
      </div>
    </div>
  );
}
