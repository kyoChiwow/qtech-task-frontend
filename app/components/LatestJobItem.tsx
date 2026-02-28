import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Job } from "../types";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface LatestJobItemProps {
  job: Job;
}

export default function LatestJobItem({ job }: LatestJobItemProps) {
  return (
    <div className="lg:flex items-start gap-4 py-4 border-b border-gray-100 last:border-0">
      <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0"></div>
      <div className="flex-1">
        <Link
          href={`/jobs/${job._id}`}
          className="text-lg font-semibold text-gray-900 hover:text-blue-600"
        >
          {job.title}
        </Link>
        <p className="text-gray-600 text-sm">
          {job.company} • {job.location}
        </p>
        <div className="flex gap-2 mt-2">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            Full-Time
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {job.category}
          </span>
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
            Design
          </span>
        </div>
      </div>
      <Link
        href={`/jobs/${job._id}`}
        className={`text-[#4640DE] hover:text-blue-800 font-medium text-sm flex items-center gap-2 mt-4 lg:mt-0 ${epilogue.className}`}
      >
        Apply{" "}
        <span>
          <ArrowRight />
        </span>
      </Link>
    </div>
  );
}
