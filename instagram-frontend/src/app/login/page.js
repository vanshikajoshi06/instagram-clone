"use client";
import API from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      router.push("/feed");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 w-80 border">
        <h1 className="text-3xl font-bold text-center mb-6">Instagram</h1>

        <input
          className="w-full mb-3 p-2 border"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-3 p-2 border"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
