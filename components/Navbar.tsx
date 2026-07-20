"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-[#8b6b3f] bg-[#0f0c08] text-[#d4b483]">

      <div className="
        max-w-7xl
        mx-auto
        px-4
        py-4
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
      ">

        <h1 className="text-2xl font-serif tracking-[0.2em]">
          Art in Progress
        </h1>

        <div className="
          flex
          flex-wrap
          justify-center
          gap-4
          md:gap-8
          text-sm
          md:text-base
        ">
          <Link href="/feed">Feed</Link>
          <Link href="/upload">Upload</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/about">About</Link>
          <Link href="/notifications">Notifications</Link>
        </div>

      </div>

    </nav>
  );
}