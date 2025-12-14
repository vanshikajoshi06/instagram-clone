"use client";

import API from "@/lib/api";
import { useState } from "react";
import CommentBox from "./CommentBox";

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(post.likes.length);

  const likePost = async () => {
    await API.post(`/posts/${post._id}/like`);
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white border rounded-sm mb-6">
      {/* Header */}
      <div className="px-4 py-3 font-semibold text-sm">
        {post.user?.username}
      </div>

      {/* Image */}
      <div className="w-full aspect-square bg-black">
        <img
          src={post.image}
          alt="post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="px-4 pt-3">
        <button
          onClick={likePost}
          className="text-sm font-semibold"
        >
          ❤️ {likes} likes
        </button>

        {/* Caption */}
        <p className="mt-2 text-sm">
          <span className="font-semibold mr-1">
            {post.user?.username}
          </span>
          {post.caption}
        </p>
      </div>

      {/* Comments */}
      <CommentBox postId={post._id} />
    </div>
  );
}
