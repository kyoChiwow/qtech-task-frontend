import CategoryCard from "./components/CategoryCard";
import FeaturedJobCard from "./components/FeatureJobCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LatestJobItem from "./components/LatestJobItem";
import { fetchJobs } from "./lib/api";
import { Job } from "./types";

export default async function HomePage() {
  let jobs: Job[] = [];
  try {
    jobs = await fetchJobs();
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
  }

  const categories = [
    { name: 'Design', count: 235 },
    { name: 'Sales', count: 756 },
    { name: 'Marketing', count: 140 },
    { name: 'Finance', count: 325 },
    { name: 'Technology', count: 436 },
    { name: 'Engineering', count: 542 },
    { name: 'Business', count: 211 },
    { name: 'Human Resource', count: 346 },
  ];

  const featuredJobs = jobs.slice(0, 6);
  const latestJobs = jobs;

  return (
    <>
      <Hero />
      {/* Explore by category */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore by category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(0, 4).map((cat) => (
            <CategoryCard key={cat.name} name={cat.name} jobCount={cat.count} />
          ))}
        </div>
      </section>

      {/* Start posting jobs today */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start posting jobs today</h2>
          <p className="text-xl mb-6">Start posting jobs for only $10.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Sign Up For Free
          </button>
        </div>
      </section>

      {/* Featured jobs */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured jobs</h2>
          <a href="/jobs" className="text-blue-600 hover:text-blue-800 font-medium">Show all jobs →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.length > 0 ? (
            featuredJobs.map((job) => <FeaturedJobCard key={job._id} job={job} />)
          ) : (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-6 h-48 animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Latest jobs open */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest jobs open</h2>
          <a href="/jobs" className="text-blue-600 hover:text-blue-800 font-medium">Show all jobs →</a>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          {latestJobs.length > 0 ? (
            latestJobs.map((job) => <LatestJobItem key={job._id} job={job} />)
          ) : (
            <p className="text-gray-500">No jobs available at the moment.</p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}