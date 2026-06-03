"use client";

import { useState } from "react";
import Link from "next/link";

export default function ButtonPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex justify-center bg-background text-foreground">
      <div className="w-full max-w-3xl px-6 py-14">
        <h1 className="text-3xl font-bold mb-4">Button Page</h1>

        <p className="mb-2">Welcome to the Button Page</p>
        <p className="mb-8">This is a simple button page component.</p>

        {/* Table */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
            <tbody>
              <tr className="bg-gray-50">
                <td className="border px-4 py-3">Row 1, Cell 1</td>
                <td className="border px-4 py-3">Row 1, Cell 2</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Row 2, Cell 1</td>
                <td className="border px-4 py-3">Row 2, Cell 2</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Counter */}
        <h2 className="text-2xl font-semibold mb-4">
          Current Count: {count}
        </h2>

        <div className="flex gap-4 mb-8">
          <button
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
            onClick={() => setCount(count + 1)}
          >
            Increment Count
          </button>

          <button
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
            onClick={() => setCount(count - 1)}
          >
            Decrement Count
          </button>
        </div>

        <Link
          href="/"
          className="text-blue-500 hover:text-blue-700 hover:underline"
        >
          Go back to Home
        </Link>
      </div>
    </main>
  );
}