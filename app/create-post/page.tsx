/*
"use client";

import { db, auth } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function CreatePostPage() {
  const handleCreatePost = async () => {
  try {
    await addDoc(collection(db, "posts"), {
      caption: "My first post",
      imageUrl: "test-image",
      userId: auth.currentUser?.uid,
      createdAt: new Date(),
    });

    alert("Post created!");
  } catch (error) {
    console.error(error);
    alert("Failed to create post");
  }
};
  return (
    <div>
      <h1>Create Post</h1>

      <button onClick={handleCreatePost}>
        Create Test Post
      </button>
    </div>
  );
}
*/

"use client";

import { db, auth } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

export default function CreatePostPage() {
  const [image, setImage] = useState<File | null>(null);

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
        caption: "Test artwork upload",
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
    <div>
      <h1>Create Post</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setImage(e.target.files ? e.target.files[0] : null)
        }
      />

      <br />
      <br />

      <button onClick={handleUpload}>
        Upload Image
      </button>
    </div>
  );
}