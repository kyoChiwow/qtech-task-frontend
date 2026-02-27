import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  jobCount: number;
}

export default function CategoryCard({ name, jobCount }: CategoryCardProps) {
  return (
    <Link href={`/jobs?category=${encodeURIComponent(name)}`} className="block group">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-500 mt-2">{jobCount} jobs available</p>
        <div className="mt-4 flex items-center text-blue-600 group-hover:translate-x-1 transition-transform">
          <span className="font-medium">→</span>
        </div>
      </div>
    </Link>
  );
}