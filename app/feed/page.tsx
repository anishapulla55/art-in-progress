
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { auth, db } from "@/lib/firebase";

import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

import Navbar from "@/components/Navbar";

export default function FeedPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);

  // Authentication check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Fetch posts from Firestore
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "posts")
        );

        const postData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

return (
  <div className="min-h-screen bg-[#0f0c08] text-[#d4b483]">
    <Navbar />
      <div className="max-w-5xl mx-auto p-8">

        <h1 className="text-5xl font-serif mb-3">
          Curated Feed
        </h1>

        <p className="text-[#b99760] mb-10 italic">
          Growth over perfection.
        </p>

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

          <h2 className="text-2xl font-serif mb-3">
            {post.title}
          </h2>

          <p>{post.caption}</p>

          <p className="mb-4 text-[#e0d3b8]">
            {post.caption}
          </p>

          <hr />
        </div>
      ))}
    </div>
  </div>
  );
} 