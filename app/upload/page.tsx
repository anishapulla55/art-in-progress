"use client";

import { db, auth } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function CreatePostPage() {
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [title, setTitle] = useState("");
  const handleUpload = async () => {
    if (!image) {
      alert("Select an image first");
      return;
    }

    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", "art_in_progress_upload");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dwuyvnpdo/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      
      await addDoc(collection(db, "posts"), {
        title,
        caption,
        imageUrl: data.secure_url,
        userId: auth.currentUser?.uid,
        createdAt: new Date(),
    });
      console.log(data.secure_url);

      alert("Upload successful!");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
  <div className="min-h-screen bg-[#0f0c08] text-[#d4b483]">

    <Navbar />

    <div className="max-w-4xl mx-auto px-8 py-16">

      <h1 className="text-6xl font-serif tracking-[0.15em] mb-8">
        Upload Artwork
      </h1>

      <div className="w-48 h-px bg-[#8b6b3f] mb-10"></div>

      <div className="border border-[#8b6b3f] bg-[#17120d] rounded-xl p-8">

        <label className="block text-xl mb-3">
          Select Artwork
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImage(
              e.target.files
                ? e.target.files[0]
                : null
            )
          }
          className="mb-8"
        />

        <label className="block text-xl mb-3">
            Title
        </label>

        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name your artwork"
            className="w-full bg-transparent border border-[#8b6b3f] rounded-lg p-4 mb-8 text-white"
        />

        <textarea
          value={caption}
          onChange={(e) =>
            setCaption(e.target.value)
          }
          rows={5}
          placeholder="Tell us about your creative process..."
          className="w-full bg-transparent border border-[#8b6b3f] rounded-lg p-4 mb-8 text-white"
        />

        <button
          onClick={handleUpload}
          className="w-full bg-[#4b1f18] hover:bg-[#5e281f] border border-[#8b6b3f] py-4 text-xl tracking-wide transition"
        >
          Publish to Gallery
        </button>

      </div>

    </div>

  </div>
);
}