"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") || "1");

  const search = searchParams.get("search") || "";

  return (
    <div className="flex justify-center gap-4 mt-10">
      <button
        className="bg-[#111] px-5 py-3 rounded-xl"
        disabled={page === 1}
        onClick={() => router.push(`/home?search=${search}&page=${page - 1}`)}
      >
        ← Previous
      </button>

      <div className="bg-indigo-600 px-5 py-3 rounded-xl">{page}</div>

      <button
        className="bg-[#111] px-5 py-3 rounded-xl"
        onClick={() => router.push(`/home?search=${search}&page=${page + 1}`)}
      >
        Next →
      </button>
    </div>
  );
}
