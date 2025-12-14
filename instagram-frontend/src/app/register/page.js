"use client";
import API from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await API.post("/auth/signup", {
        username,
        email,
        password,
      });

      router.push("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 w-80 border">
        <h1 className="text-3xl font-bold text-center mb-6">Instagram</h1>

        <input
          className="w-full mb-3 p-2 border text-sm"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full mb-3 p-2 border text-sm"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-3 p-2 border text-sm"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white py-2 rounded text-sm"
        >
          Sign Up
        </button>

        <p className="text-xs text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
