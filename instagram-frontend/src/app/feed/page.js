"use client";

import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import RightSidebar from "@/components/RightSidebar";
import API from "@/lib/api";
import { useEffect, useState } from "react";

export default function FeedPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const res = await API.get("/posts/feed");
      setPosts(res.data);
    };
    fetchFeed();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-6 mt-6 grid grid-cols-[220px_1fr_300px] gap-10">
        
        {/* Left Menu */}
        <LeftSidebar />

        {/* Feed */}
        <div className="max-w-[470px] mx-auto">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>

        {/* Suggestions */}
        <RightSidebar />
      </div>
    </>
  );
}
