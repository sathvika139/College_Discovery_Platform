"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CompareSelector() {
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");

  const router = useRouter();

  return (
    <div className="border p-4 rounded mb-6">
      <h2 className="text-xl font-bold mb-4">Compare Colleges</h2>

      <input
        placeholder="College ID 1"
        className="border p-2 w-full mb-3 text-white"
        value={id1}
        onChange={(e) => setId1(e.target.value)}
      />

      <input
        placeholder="College ID 2"
        className="border p-2 w-full mb-3 text-white"
        value={id2}
        onChange={(e) => setId2(e.target.value)}
      />

      <button
        className="border px-4 py-2 rounded"
        onClick={() => router.push(`/compare?id1=${id1}&id2=${id2}`)}
      >
        Compare
      </button>
    </div>
  );
}
