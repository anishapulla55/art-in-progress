"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

import { auth, db } from "@/lib/firebase";

import { onAuthStateChanged } from "firebase/auth";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import {
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

export default function ProfilePage() {
  const [userData, setUserData] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (!user) {
          setLoading(false);
          return;
        }

        try {
          // Get user document
          const userDoc = await getDoc(
            doc(db, "users", user.uid)
          );

          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }

          // Get all posts
          const querySnapshot = await getDocs(
            collection(db, "posts")
          );

          const userPosts = querySnapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
            .filter(
              (post: any) =>
                post.userId === user.uid
            );

          setPosts(userPosts);
        } catch (error) {
          console.error(error);
        }

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLogout = async () => {
  try {
    await signOut(auth);
    router.push("/login");
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="min-h-screen bg-[#0f0c08] text-[#d4b483]">
      <Navbar />

      <div className="max-w-5xl mx-auto px-8 py-16">

        <h1 className="text-6xl font-serif tracking-[0.15em] mb-8">
          MY PROFILE
        </h1>

        <div className="flex justify-end">
            <button
                onClick={handleLogout}
                className="px-6 py-3 bg-[#4b1f18] hover:bg-[#5e281f] border border-[#8b6b3f] rounded-lg transition"
            >
            Logout
            </button>
        </div>
        
        <div className="w-48 h-px bg-[#8b6b3f] mb-10"></div>

        {/* Profile Info */}
        <div className="border border-[#8b6b3f] bg-[#17120d] rounded-xl p-8 mb-12">

          <div className="space-y-6">

            <div>
              <h2 className="text-[#b99760] uppercase">
                Email
              </h2>

              <p className="text-xl">
                {userData?.email}
              </p>
            </div>

            <div>
              <h2 className="text-[#b99760] uppercase">
                Member Since
              </h2>

              <p className="text-xl">
                {userData?.createdAt?.toDate
                  ? userData.createdAt
                      .toDate()
                      .toLocaleDateString()
                  : "Unknown"}
              </p>
            </div>

            <div>
              <h2 className="text-[#b99760] uppercase">
                Artwork Count
              </h2>

              <p className="text-xl">
                {posts.length}
              </p>
            </div>

          </div>
        </div>

        {/* Gallery */}
        <h2 className="text-4xl font-serif mb-8">
          My Gallery
        </h2>

        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-[#8b6b3f] bg-[#17120d] rounded-xl p-6 mb-10"
          >
            <img
              src={post.imageUrl}
              alt="artwork"
              className="w-3/4 mx-auto max-h-[500px] object-contain rounded-lg mb-6"
            />

            <h3 className="text-xl mb-3">
              Artist Notes
            </h3>

            <p className="mb-4">
              {post.caption}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}