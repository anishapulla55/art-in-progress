"use client";

import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async () => {
    try {   
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(
      doc(db, "users", userCredential.user.uid),
      {
        email: email,
        createdAt: new Date(),
      }
    );
    alert("Account created!");
    } catch (error) {
    console.error(error);
    alert("Something went wrong");
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
          Where artists evolve.
        </p>
      </div>

      <div className="border border-[#8b6b3f] rounded-2xl bg-[#17120d] max-w-xl mx-auto p-10 shadow-2xl">
        <h2 className="text-5xl text-center font-serif mb-10">
          Sign Up
        </h2>

        <label className="block uppercase tracking-wider mb-2">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg transparent border border-[#8b6b3f] p-4 rounded-lg mb-8 text-white" 
        />
        <label className="block uppercase tracking-wider mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-transparent border border-[#8b6b3f] p-4 rounded-lg mb-10 text-white" 
        />

        <button
          onClick={handleSignup}
          className="flex md:block relative z-99 w-full bg-[#4b1f18] hover:bg-[#5e281f] border border-[#8b6b3f] py-4 text-xl tracking-wide transition"
        >
          Create Account
        </button>

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-[#8b6b3f]"></div>
          <span>OR</span>
          <div className="flex-1 h-px bg-[#8b6b3f]"></div>
        </div>

        <p className="text-center">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#c9a56a] hover:underline"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  </div>
);

}


    /*
    <div>
      <h1>Signup</h1>

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

        <button onClick={handleSignup}>
            Create Account
        </button>
    </div>
  );



  </div>
 
      
      
     
      <h2 className="text-4xl text-center font-semibold">
        Welcome!
      </h2>

      <p className="text-center text-xl mt-2 mb-10">
        Create an Account Today
      </p>

      
      <div className="bg-rose-200 rounded-[40px] border-4 border-blue-400 p-8 max-w-md mx-auto">

        <h2 className="text-4xl font-bold text-center mb-8">
          Sign Up
        </h2>

        
        <label className="block text-2xl mb-2">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-2 border-purple-500 rounded-md p-3 mb-8 bg-white"
        />

        
        <label className="block text-2xl mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-2 border-purple-500 rounded-md p-3 mb-8 bg-white"
        />

        
        <div className="flex justify-center">
          <button
            onClick={handleSignup}
            className="bg-blue-200 hover:bg-blue-300 border border-black rounded-xl px-8 py-3 text-2xl font-semibold transition"
          >
            Create Account
          </button>
        </div>

      </div>

      
      <p className="text-center mt-10 text-xl">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Log In
        </a>
      </p>

  */

