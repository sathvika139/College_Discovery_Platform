"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CompareClient({
  colleges,
}: {
  colleges: {
    id: string;
    name: string;
  }[];
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  function toggle(id: string) {
    if (selected.includes(id)) {
      setSelected(selected.filter((x) => x !== id));
    } else if (selected.length < 3) {
      setSelected([...selected, id]);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">⚖️ Compare Colleges</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {colleges.map((college) => (
          <label
            key={college.id}
            className="bg-[#181818] px-4 py-3 rounded-xl cursor-pointer flex items-center gap-3"
          >
            <input
              type="checkbox"
              checked={selected.includes(college.id)}
              onChange={() => toggle(college.id)}
            />

            {college.name}
          </label>
        ))}
      </div>

      <button
        className="mt-5 bg-white text-black px-5 py-2.5 rounded-xl font-medium text-sm hover:scale-105 transition"
        onClick={() => router.push(`/compare?ids=${selected.join(",")}`)}
      >
        Compare Selected →
      </button>
    </div>
  );
}
