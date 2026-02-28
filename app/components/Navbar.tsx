"use client";

import { Menu, X } from "lucide-react";
import { Epilogue, Red_Hat_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="flex justify-between items-center py-4">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          <Image src="/Frame 3.png" alt="Logo" width={32} height={32} />
          <h1
            className={`${redHatDisplay.className} text-xl font-bold text-[#25324B]`}
          >
            QuickHire
          </h1>
        </div>

        {/* DESKTOP MENU (>=1024px) */}
        <div className="hidden lg:flex items-center gap-16">
          <div className="flex gap-6">
            <Link
              href="/jobs"
              className={`${epilogue.className} text-[#515B6F] hover:text-[#25324B] font-medium`}
            >
              Find Jobs
            </Link>

            <Link
              href="/browse"
              className={`${epilogue.className} text-[#515B6F] hover:text-[#25324B] font-medium`}
            >
              Browse Jobs
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className={`${epilogue.className} text-[#4640DE] font-bold`}
            >
              Login
            </Link>

            <Link
              href="/signup"
              className={`${epilogue.className} px-6 py-3 bg-[#4640DE] text-white font-medium`}
            >
              Signup
            </Link>
          </div>
        </div>

        {/* HAMBURGER BUTTON (<1024px) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden flex flex-col gap-6 pb-6">
          <Link
            href="/jobs"
            className={`${epilogue.className} text-[#515B6F] font-medium`}
            onClick={() => setOpen(false)}
          >
            Find Jobs
          </Link>

          <Link
            href="/browse"
            className={`${epilogue.className} text-[#515B6F] font-medium`}
            onClick={() => setOpen(false)}
          >
            Browse Jobs
          </Link>

          <Link
            href="/login"
            className={`${epilogue.className} text-[#4640DE] font-bold`}
            onClick={() => setOpen(false)}
          >
            Login
          </Link>

          <Link
            href="/signup"
            className={`${epilogue.className} px-6 py-3 bg-[#4640DE] text-white font-medium w-fit`}
            onClick={() => setOpen(false)}
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
}