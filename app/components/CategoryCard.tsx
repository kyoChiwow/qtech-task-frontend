import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  jobCount: number;
}

export default function CategoryCard({ name, jobCount }: CategoryCardProps) {
  return (
    <Link href={`/jobs?category=${encodeURIComponent(name)}`} className="block group">
      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">{name}</h3>
        <p className="text-gray-500 mt-2">{jobCount} jobs available</p>
        <div className="mt-4 flex items-center text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}