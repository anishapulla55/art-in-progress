"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log(auth.currentUser);
    alert("Login successful!");
    } catch (error) {
    console.error(error);
    alert("Something went wrong");
    }
};
  return (
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