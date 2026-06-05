"use client";

import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  return (
    <input
      type="text"
      placeholder="🔍 Search colleges..."
      className="w-full p-5 rounded-3xl bg-[#0f0f0f] text-xl outline-none"
      onChange={(e) => router.push(`/home?search=${e.target.value}`)}
    />
  );
}
