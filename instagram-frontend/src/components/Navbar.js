"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="flex justify-between items-center px-8 py-4">
        
        {/* Instagram logo - extreme left */}
        <h1 className="text-2xl font-bold text-pink-500">
          Instagram
        </h1>

        {/* Right side buttons */}
        <div className="flex items-center gap-6">
          <Link
            href="/create"
            className="px-5 py-2 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition"
          >
            Create
          </Link>

          <button
            onClick={logout}
            className="px-5 py-2 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
