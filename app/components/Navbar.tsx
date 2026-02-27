import { Epilogue, Red_Hat_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 mb-10 flex justify-between items-center">
      {/* Navbar Left Side */}
      <div className="flex items-center gap-16">
        {/* Logo Here */}
        <div className="flex gap-2 items-center">
          <Image src="/Frame 3.png" alt="Logo" width={32} height={32} />
          <h1
            className={`${redHatDisplay.className} text-xl font-bold text-[#25324B]`}
          >
            QuickHire
          </h1>
        </div>
        {/* Logo Here */}

        {/* Options */}
        <div className="mt-0.5 flex items-center gap-6">
          <Link
            href="/jobs"
            className={`text-[#515B6F] hover:text-[#25324B] font-medium ${epilogue.className}`}
          >
            Find Jobs
          </Link>
          <Link
            href="/browse"
            className={`text-[#515B6F] hover:text-[#25324B] font-medium ${epilogue.className}`}
          >
            Browse Jobs
          </Link>
        </div>
        {/* Options */}
      </div>
      {/* Navbar Left Side */}

      {/* Navbar Right Side */}
      <div className="mt-0.5 flex items-center gap-6">
        <Link
          href="/login"
          className={`text-[#4640DE] hover:text-[#25324B] font-bold ${epilogue.className}`}
        >
          Login
        </Link>
        <Link
          href="/Signup"
          className={`text-white hover:text-[#25324B] font-medium ${epilogue.className} px-6 py-3 bg-[#4640DE]`}
        >
          Signup
        </Link>
      </div>
      {/* Navbar Right Side */}
    </div>
  );
}
