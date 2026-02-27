'use client';

import { useState } from 'react';
import Navbar from './Navbar';

export default function Hero() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="bg-linear-to-br from-blue-50 to-white py-10">
        {/* Navbar Here */}
        <div>
            <Navbar />
        </div>
        {/* Navbar Here */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl">
          Discover more than <span className="text-blue-600">5000+ Jobs</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-xl">
          Great platform for the job seeker that searching for new career heights and passionate about startups.
        </p>

        {/* Search Form */}
        <div className="mt-8 bg-white p-2 rounded-lg shadow-md flex flex-col md:flex-row gap-2 max-w-3xl">
          <input
            type="text"
            placeholder="Job title or keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Florence, Italy"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>

        {/* Popular Searches */}
        <div className="mt-4 text-sm text-gray-500">
          Popular: UI Designer, UX Researcher, Android, Admin
        </div>

        {/* Company Logos */}
        <div className="mt-12">
          <p className="text-gray-500 mb-4">Companies we helped grow</p>
          <div className="flex gap-8 items-center">
            <span className="text-2xl font-bold text-gray-400">vodafore</span>
            <span className="text-2xl font-bold text-gray-400">intel</span>
          </div>
        </div>
      </div>
    </section>
  );
}