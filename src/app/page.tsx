"use client";

import Link from 'next/link';

export default function Mypage() {


  return (
    <main className="min-h-screen flex items-left  bg-background text-foreground">
      <div className="max-w-2xl text-left px-6 py-14">
        <p>Welcome to the Home Page</p>
        <p>This is a simple home pagecomponent.</p>
        <Link href="/button" className="text-blue-500 hover:underline">
          Go to Button Page
        </Link>
      </div>
    </main>
  );
}

