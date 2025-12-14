"use client";

import API from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePage() {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      await API.post("/posts", { imageUrl, caption });
      router.push("/feed");
    } catch (err) {
      alert("Post creation failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Create Card */}
      <div className="w-full max-w-[420px] bg-black border border-gray-800 rounded-xl p-6">
        
        <h2 className="text-white text-lg font-semibold text-center mb-6">
          Create new post
        </h2>

        {/* Image URL */}
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full mb-4 px-4 py-2 bg-black border border-gray-700 rounded-md text-sm text-white outline-none focus:border-pink-500"
        />

        {/* Caption */}
        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          rows={3}
          className="w-full mb-6 px-4 py-2 bg-black border border-gray-700 rounded-md text-sm text-white outline-none resize-none focus:border-pink-500"
        />

        {/* Share Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-full bg-pink-500 text-white font-semibold text-sm hover:bg-pink-600 transition"
        >
          Share
        </button>
      </div>
    </div>
  );
}
