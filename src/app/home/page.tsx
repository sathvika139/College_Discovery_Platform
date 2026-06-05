import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import CompareClient from "@/components/CompareClient";
import SaveButton from "@/components/SaveButton";
import { prisma } from "@/lib/prisma";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
};

async function getColleges(search: string, page: string) {
  const limit = 2;

  return prisma.college.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    skip: (Number(page) - 1) * limit,
    take: limit,
  });
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; page?: string }>;
}) {
  const params = await searchParams;

  const colleges = await getColleges(params.search || "", params.page || "1");

  return (
    <main className="w-full max-w-[1400px] mx-auto px-8 py-10">
      {/* Header */}

      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-7xl font-bold">College Discovery Platform</h1>

          <p className="text-gray-400 text-xl mt-3">
            Discover, Compare and Predict Colleges
          </p>
        </div>

        <Link
          href="/"
          className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Logout
        </Link>
      </div>

      {/* Navigation */}

      <div className="flex gap-4 mb-8">
        <Link
          href="/predictor"
          className="bg-[#111] px-6 py-4 rounded-2xl hover:bg-[#181818]"
        >
          🎮 Predictor
        </Link>

        <Link
          href="/saved"
          className="bg-[#111] px-6 py-4 rounded-2xl hover:bg-[#181818]"
        >
          🔖 Saved
        </Link>

        <Link
          href="/discussions"
          className="bg-[#111] px-6 py-4 rounded-2xl hover:bg-[#181818]"
        >
          💬 Discussions
        </Link>
      </div>

      {/* Compare */}

      <div className="bg-[#0f0f0f] rounded-3xl p-8 mb-8">
        <CompareClient
          colleges={colleges.map((c: College) => ({
            id: c.id,
            name: c.name,
          }))}
        />
      </div>

      {/* Search */}

      <div className="mb-8">
        <SearchBar />
      </div>

      {/* Cards */}

      <div className="space-y-5">
        {colleges.map((college: College) => (
          <div
            key={college.id}
            className="bg-[#0f0f0f] rounded-3xl p-8 hover:bg-[#151515] transition"
          >
            <Link href={`/college/${college.id}`}>
              <h2 className="text-2xl font-semibold mb-2">{college.name}</h2>

              <p className="text-xl text-gray-400 mb-4">
                📍 {college.location}
              </p>

              <div className="flex gap-4">
                <span className="bg-[#181818] text-green-400 px-4 py-2 rounded-full">
                  💰 ₹{college.fees}
                </span>

                <span className="bg-[#181818] text-yellow-400 px-4 py-2 rounded-full">
                  ⭐ {college.rating}
                </span>
              </div>
            </Link>

            <div className="flex gap-3 mt-6">
              <button className="bg-[#181818] px-5 py-3 rounded-xl">
                ⚖️ Add To Compare
              </button>

              <SaveButton id={college.id} name={college.name} />
            </div>
          </div>
        ))}
      </div>

      <Pagination />
    </main>
  );
}
