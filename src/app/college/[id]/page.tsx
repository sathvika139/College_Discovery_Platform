import { headers } from "next/headers";
type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;

  courses: {
    id: string;
    name: string;
    duration: string;
  }[];

  placements: {
    id: string;
    averageCTC: number;
    highestCTC: number;
  }[];

  reviews: {
    id: string;
    userName: string;
    comment: string;
    rating: number;
  }[];
};

async function getCollege(id: string) {
  const headersList = await headers();

  const host = headersList.get("host");

  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/colleges/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function CollegePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college: College = await getCollege(id);

  return (
    <main className="max-w-7xl mx-auto p-8">
      <a
        href="/home"
        className="inline-block bg-[#111] px-4 py-2 rounded-xl mb-8 hover:bg-[#181818]"
      >
        ← Back
      </a>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 bg-[#111] rounded-3xl p-8">
          <h1 className="text-5xl font-bold mb-4">{college.name}</h1>

          <p className="text-gray-400 mb-5">📍 {college.location}</p>

          <div className="flex gap-3 mb-8">
            <span className="bg-[#1a1a1a] px-4 py-2 rounded-full">
              Fees: ₹{college.fees}
            </span>

            <span className="bg-[#1a1a1a] px-4 py-2 rounded-full">
              Rating: ⭐ {college.rating}
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-4">Courses</h2>

          <div className="flex flex-wrap gap-3 mb-10">
            {college.courses.map((course) => (
              <div
                key={course.id}
                className="bg-[#1a1a1a] px-4 py-2 rounded-full"
              >
                {course.name} ({course.duration})
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Placements</h2>

          {college.placements.map((placement) => (
            <div key={placement.id} className="grid grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] p-5 rounded-2xl">
                <p className="text-gray-400 text-sm">Average CTC</p>

                <h3 className="text-3xl font-bold mt-2">
                  {placement.averageCTC} LPA
                </h3>
              </div>

              <div className="bg-[#1a1a1a] p-5 rounded-2xl">
                <p className="text-gray-400 text-sm">Highest CTC</p>

                <h3 className="text-3xl font-bold mt-2">
                  {placement.highestCTC} LPA
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="bg-[#111] rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-5">Reviews</h2>

          <div className="space-y-4">
            {college.reviews.map((review) => (
              <div key={review.id} className="bg-[#1a1a1a] p-4 rounded-2xl">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{review.userName}</h3>

                  <span>⭐ {review.rating}</span>
                </div>

                <p className="text-gray-400 mt-3">{review.comment}</p>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 bg-[#1a1a1a] py-3 rounded-xl hover:bg-[#222]">
            View All Reviews
          </button>
        </div>
      </div>
    </main>
  );
}
