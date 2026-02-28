/* eslint-disable @typescript-eslint/no-unused-vars */
// app/jobs/[id]/page.tsx
import ApplyForm from "@/app/components/ApplyForm";
import { fetchJob } from "@/app/lib/api";
import { Building2, MapPin } from "lucide-react";
import { Epilogue } from "next/font/google";
import { notFound } from "next/navigation";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface JobDetailPageProps {
  params: { id: string };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = await params;
  let job;
  try {
    job = await fetchJob(id);
  } catch (error) {
    notFound();
  }

  if (!job) notFound();

  return (
    <main className={`bg-gray-50 min-h-screen py-12 ${epilogue.className}`}>
      <div className="container mx-auto px-4">
        {/* Job Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full shrink-0"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" /> {job.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {job.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full">
                Full-Time
              </span>
            </div>
          </div>
        </div>

        {/* Two column layout: Description + Apply Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Job Description */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Job Description
            </h2>
            <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
              {job.description}
            </div>
          </div>

          {/* Right column - Apply Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Apply for this position
              </h3>
              <ApplyForm jobId={job._id} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
