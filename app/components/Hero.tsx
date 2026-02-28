"use client";

import { Epilogue } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./Navbar";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="bg-[#F8F8FD] to-white pt-10">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      <div className="container mx-auto px-4">
        {/* Two‑column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column – content */}
          <div className="flex-1">
            <Image
              src="/Title.png"
              alt="Discover more than 5000+ Jobs"
              width={530}
              height={282}
            />

            <p
              className={`text-gray-600 mt-4 text-lg max-w-xl ${epilogue.className}`}
            >
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
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
              <button className="bg-blue-600 text-white px-10 py-3.5 rounded-md hover:bg-blue-700 transition">
                Search My Job
              </button>
            </div>

            {/* Popular Searches */}
            <div className={`mt-4 text-sm text-gray-500 ${epilogue.className} mb-8`}>
              Popular: UI Designer, UX Researcher, Android, Admin
            </div>
          </div>

          {/* Right column – pattern + person */}
          <div className="lg:flex-1 lg:relative hidden lg:flex">
            {/* Pattern background */}
            <div className="absolute inset-0">
              <Image
                src="/Pattern.png"
                alt="background pattern"
                fill
                className="object-cover"
              />
            </div>
            {/* Person illustration */}
            <div className="relative z-10 left-58">
              <Image
                src="/Pic.png"
                alt="Person illustration"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
