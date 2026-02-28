import { ArrowRight } from "lucide-react";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import CategoryCard from "./components/CategoryCard";
import { CompaniesName } from "./components/CompaniesNames";
import FeaturedJobCard from "./components/FeatureJobCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LatestJobItem from "./components/LatestJobItem";
import { fetchJobs } from "./lib/api";
import { Job } from "./types";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default async function HomePage() {
  let jobs: Job[] = [];
  try {
    jobs = await fetchJobs();
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
  }

  const categories = [
    { name: "Design", count: 235 },
    { name: "Sales", count: 756 },
    { name: "Marketing", count: 140 },
    { name: "Finance", count: 325 },
    { name: "Technology", count: 436 },
    { name: "Engineering", count: 542 },
    { name: "Business", count: 211 },
    { name: "Human Resource", count: 346 },
  ];

  const featuredJobs = jobs.slice(0, 6);
  const latestJobs = jobs;

  return (
    <>
      {/* Hero section */}
      <section>
        <Hero />
      </section>
      {/* Hero Section */}

      {/* Companies Names */}
      <section>
        <CompaniesName />
      </section>
      {/* Companies Names */}

      {/* Explore by category */}
      <section className=" px-4 py-16 bg-white">
        <div className="container mx-auto">
          <h2
            className={`text-[48px] font-bold text-[#25324B] mb-8 ${epilogue.className}`}
          >
            Explore by <span className="text-[#26A4FF]">category</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(0, 4).map((cat) => (
              <CategoryCard
                key={cat.name}
                name={cat.name}
                jobCount={cat.count}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Explore by category */}

      {/* Start posting jobs today */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/ad.png"
            alt="Discover more than 5000+ Jobs"
            width={1400}
            height={414}
          />
        </div>
      </section>
      {/* Start posting jobs today */}

      {/* Featured jobs */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2
              className={`text-[48px] font-bold text-[#25324B] ${epilogue.className}`}
            >
              Featured <span className="text-[#26A4FF]">jobs</span>
            </h2>
            <a
              href="/jobs"
              className={`text-[#4640DE] hover:text-blue-800 font-bold ${epilogue.className} lg:flex items-center gap-2 hidden`}
            >
              Show all jobs{" "}
              <span>
                <ArrowRight />
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.length > 0
              ? featuredJobs.map((job) => (
                  <FeaturedJobCard key={job._id} job={job} />
                ))
              : Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-lg border border-[#D6DDEB] p-6 h-48 animate-pulse"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
          </div>
        </div>
      </section>
      {/* Featured jobs */}

      {/* Latest jobs open */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 ">
          <div className="flex justify-between items-center mb-8">
            <h2 className={`text-[48px] font-bold text-[#25324B] ${epilogue.className}`}>
              Latest <span className="text-[#26A4FF]">jobs open</span>
            </h2>
            <a
              href="/jobs"
              className={`text-[#4640DE] hover:text-blue-800 font-bold ${epilogue.className} lg:flex items-center gap-2 hidden`}
            >
              Show all jobs{" "}
              <span>
                <ArrowRight />
              </span>
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            {latestJobs.length > 0 ? (
              latestJobs.map((job) => <LatestJobItem key={job._id} job={job} />)
            ) : (
              <p className="text-gray-500">No jobs available at the moment.</p>
            )}
          </div>
        </div>
      </section>
      {/* Latest jobs open */}

      {/* Footer */}
      <section className="bg-[#202430]">
        <Footer />
      </section>
      {/* Footer */}
    </>
  );
}
