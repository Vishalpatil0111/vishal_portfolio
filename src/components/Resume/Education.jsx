export default function EducationCard() {
  return (
    <div className="w-full flex justify-center py-10 px-6">
      <div className="w-full max-w-[1400px] bg-[#1A1A1A] rounded-[40px] p-10 md:p-14 border border-white/10 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* LEFT LABEL */}
          <span className="bg-[#BEE7FF] text-black px-10 py-4 rounded-full font-semibold text-lg whitespace-nowrap">
            EDUCATION
          </span>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
              Bachelor’s of Computer Engineering
            </h2>

            <p className="text-gray-300 text-base font-medium">
              GES R.H.Sapat College of engineering
            </p>

            {/* Batch tag */}
            <span className="bg-[#F7A8D8] text-black px-6 py-2 mt-3 rounded-full text-sm font-semibold w-max">
              BATCH 2021 - 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
