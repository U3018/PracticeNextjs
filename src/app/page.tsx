"use client";

import Link from "next/link";

export default function Mypage() {
  return (
    <main className="min-h-screen flex items-left  bg-background text-foreground">
      <div className="max-w-2xl text-left px-6 py-14">
        <p>Welcome to the Home Page</p>
        <p>This is a simple home pagecomponent.</p>
        <Link
          href="/button"
          className="text-blue-500 hover:underline border px-4 py-2 rounded-md bg-green-500"
          style={{ marginTop: "20px", display: "inline-block" }}
        >
          Go to Button Page
        </Link>
        <Link
          href="/todo"
          className="text-blue-500 hover:underline border px-4 py-2 rounded-md bg-yellow-500"
          style={{ marginTop: "20px", display: "inline-block" }}
        >
          Go to Todo Page
        </Link>
        <Link
          href="/train"
          className="text-blue-500 hover:underline border px-4 py-2 rounded-md bg-red-500"
          style={{ marginTop: "20px", display: "inline-block" }}
        >
          Go to Train Page
        </Link>
      </div>
    </main>
  );
}
