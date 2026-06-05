import Link from "next/link";

type SearchParams = Promise<{
  ids?: string;
}>;

async function getComparedColleges(ids: string[]) {
  const res = await fetch("http://localhost:3000/api/compare", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ids,
    }),
    cache: "no-store",
  });

  return res.json();
}

export default async function ComparePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  const ids = params.ids?.split(",") || [];

  const colleges = await getComparedColleges(ids);

  return (
    <main className="max-w-7xl mx-auto p-8">
      <Link
        href="/home"
        className="inline-block bg-[#111] px-4 py-2 rounded-xl mb-8 hover:bg-[#181818]"
      >
        ← Back
      </Link>

      <div className="bg-[#111] rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">Compare Colleges</h1>

        <p className="text-center text-gray-400 mb-8">
          Compare features across selected colleges
        </p>

        <div className="overflow-x-auto">
          <table className="w-full overflow-hidden rounded-2xl">
            <thead>
              <tr className="bg-[#1a1a1a]">
                <th className="p-5 text-left">Feature</th>

                {colleges.map((college: any) => (
                  <th key={college.id} className="p-5 text-center">
                    {college.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-[#222]">
                <td className="p-5 font-semibold">Location</td>

                {colleges.map((college: any) => (
                  <td
                    key={college.id}
                    className="p-5 text-center text-gray-300"
                  >
                    {college.location}
                  </td>
                ))}
              </tr>

              <tr className="border-t border-[#222]">
                <td className="p-5 font-semibold">Fees</td>

                {colleges.map((college: any) => (
                  <td key={college.id} className="p-5 text-center">
                    ₹{college.fees}
                  </td>
                ))}
              </tr>

              <tr className="border-t border-[#222]">
                <td className="p-5 font-semibold">Rating</td>

                {colleges.map((college: any) => (
                  <td key={college.id} className="p-5 text-center">
                    ⭐ {college.rating}
                  </td>
                ))}
              </tr>

              <tr className="border-t border-[#222]">
                <td className="p-5 font-semibold">Average CTC</td>

                {colleges.map((college: any) => (
                  <td key={college.id} className="p-5 text-center">
                    {college.placements?.[0]?.averageCTC ?? "N/A"} LPA
                  </td>
                ))}
              </tr>

              <tr className="border-t border-[#222]">
                <td className="p-5 font-semibold">Winner</td>

                {colleges.map((college: any) => (
                  <td key={college.id} className="p-5 text-center">
                    {college.rating >= 4.8 ? "🏆 Top Choice" : "✅ Good"}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
