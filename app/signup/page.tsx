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