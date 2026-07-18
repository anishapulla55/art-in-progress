"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      alert("Login successful!");

      console.log(userCredential.user);

      router.push("/feed");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };
  return (
    <div className="min-h-screen bg-[#0f0c08] flex items-center justify-center text-[#d4b483]">

      <div className="w-full max-w-5xl px-8">

        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="text-6xl font-serif tracking-[0.2em]">
            Art in Progress
          </h1>

          <div className="w-48 h-px bg-[#8b6b3f] mx-auto my-6"></div>

          <p className="italic text-xl text-[#c9a56a]">
            Continue your artistic journey.
          </p>
        </div>

        {/* Login Card */}
        <div className="border border-[#8b6b3f] rounded-2xl bg-[#17120d] max-w-xl mx-auto p-10 shadow-2xl">

          <h2 className="text-5xl text-center font-serif mb-3">
            Welcome Back
          </h2>

          <p className="text-center text-[#b99760] mb-10">
            Sign in to your gallery.
          </p>

          {/* Email */}
          <label className="block uppercase tracking-wider mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-transparent border border-[#8b6b3f] p-4 rounded-lg mb-8 text-white"
          />

          {/* Password */}
          <label className="block uppercase tracking-wider mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-transparent border border-[#8b6b3f] p-4 rounded-lg mb-10 text-white"
          />

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#1f2b35] hover:bg-[#263745] border border-[#8b6b3f] py-4 text-xl tracking-wide transition"
          >
            Enter Gallery
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-[#8b6b3f]"></div>
            <span>OR</span>
            <div className="flex-1 h-px bg-[#8b6b3f]"></div>
          </div>

          {/* Signup Link */}
          <p className="text-center">
            New to Art in Progress?{" "}
            <a
              href="/signup"
              className="text-[#c9a56a] hover:underline"
            >
              Create an Account
            </a>
          </p>

        </div>

      </div>

    </div>
  );
}



  /*
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

        <button onClick={handleLogin}>
            Login
        </button>
    </div>
  );
} 

*/