import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

"use client";

import { useState } from "react";

const handleSignup = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created!");
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
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
}