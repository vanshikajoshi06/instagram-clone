"use client";
import API from "@/lib/api";
import { useEffect, useState } from "react";

export default function CommentBox({ postId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const fetchComments = async () => {
    const res = await API.get(`/comments/${postId}`);
    setComments(res.data);
  };

  const addComment = async () => {
    if (!text.trim()) return;
    await API.post(`/comments/${postId}`, { text });
    setText("");
    fetchComments();
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="px-4 pb-4">
      {comments.map((c) => (
        <p key={c._id} className="text-sm text-gray-300">
          <span className="font-semibold text-white">{c.user.username}</span>{" "}
          {c.text}
        </p>
      ))}

      <div className="flex mt-3 border-t border-gray-700 pt-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 bg-black outline-none text-sm"
          placeholder="Add a comment..."
        />
        <button
          onClick={addComment}
          className="text-pink-500 font-semibold text-sm"
        >
          Post
        </button>
      </div>
    </div>
  );
}
