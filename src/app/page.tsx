"use client";

import React from "react";

export default function HomePage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js App 🚀</h1>
      <p className="text-lg text-gray-600">
        This is the default <code>page.tsx</code> rendered inside{" "}
        <code>RootLayout</code>.
      </p>

      <div className="mt-6">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">
          Get Started
        </button>
      </div>
    </div>
  );
}
