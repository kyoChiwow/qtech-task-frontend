import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export function CompaniesName() {
  const companies = ['Vodafone', 'Intel', 'Tesla', 'AMD', 'Talkit'];

  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <p className={`${epilogue.className} font-[400px] text-[18px] text-[#202430] mb-4`}>Companies we helped grow</p>
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8 text-gray-400 font-bold text-lg md:text-2xl">
          {companies.map((company) => (
            <span key={company}>{company}</span>
          ))}
        </div>
      </div>
    </div>
  );
}