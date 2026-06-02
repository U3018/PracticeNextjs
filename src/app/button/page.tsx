"use client";

import{ useState }from "react";
import Link from 'next/link';


export default function ButtonPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex items-left  bg-background text-foreground">
      <div className="max-w-2xl text-left px-6 py-14">
        <p>Welcome to the Button Page</p>
        <p>This is a simple button pagecomponent.</p>
        <p className="hanging-indent"> </p>

        <h1>Current Count: {count} </h1>
        {/*4count変数を表示*/}
        <p className="flex gap-4 mt-4">
        <button 
        className="border px-4 py-2 rounded-md bg-blue-500 text-white"
        onClick={() => setCount(count + 1)}>Increment Count</button>
        <button 
        className="border px-4 py-2 rounded-md bg-red-500 text-white"
        onClick={() => setCount(count - 1)}>Decrement Count</button>
        </p>
        <p className="hanging-indent"> </p>

        <Link href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </main>
  );
}




