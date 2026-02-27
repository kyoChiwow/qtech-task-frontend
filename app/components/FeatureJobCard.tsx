import { Job } from "../types";

interface FeaturedJobCardProps {
  job: Job;
}

export default function FeaturedJobCard({ job }: FeaturedJobCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
      <div className="flex items-start gap-4">
        {/* Company Logo Placeholder */}
        <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0"></div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <p className="text-gray-600 text-sm mt-1">
            {job.company} • {job.location}
          </p>
          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {job.description}
          </p>
          <div className="flex gap-2 mt-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              {job.category}
            </span>
            {/* Optionally a second tag, maybe hardcoded for design */}
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
              Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
