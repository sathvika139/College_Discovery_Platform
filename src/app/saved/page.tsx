"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SavedPage() {
  const [saved, setSaved] = useState<any[]>([]);

  useEffect(() => {
    const colleges = JSON.parse(localStorage.getItem("savedColleges") || "[]");

    setSaved(colleges);
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-8">
      <Link
        href="/home"
        className="inline-block bg-[#111] px-4 py-2 rounded-xl mb-8 hover:bg-[#181818]"
      >
        ← Back
      </Link>

      <div className="bg-[#111] rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">Saved Colleges</h1>

        <p className="text-center text-gray-400 mb-10">
          Your bookmarked colleges
        </p>

        {saved.length === 0 && (
          <div className="bg-[#1a1a1a] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold">No Saved Colleges</h2>

            <p className="text-gray-400 mt-2">Save colleges from Home Page</p>
          </div>
        )}

        <div className="space-y-4">
          {saved.map((college) => (
            <div
              key={college.id}
              className="bg-[#1a1a1a] rounded-2xl p-5 flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold">{college.name}</h2>

                <p className="text-gray-400 mt-1">Saved College</p>
              </div>

              <div className="text-2xl">🔖</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
