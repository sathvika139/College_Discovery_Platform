import Link from "next/link";

export default function DiscussionsPage() {
  const discussions = [
    {
      question: "How are placements in IIT Hyderabad?",
      answer: "Placements are excellent with strong average packages.",
    },
    {
      question: "Is NIT Warangal good for CSE?",
      answer: "Yes, it has strong academics and placements.",
    },
    {
      question: "Which college is better: IIT Hyderabad or IIIT Hyderabad?",
      answer:
        "Both are excellent. IIT offers broader opportunities while IIIT is highly focused on technology.",
    },
    {
      question: "What is the average package at BITS Pilani?",
      answer: "It is among the highest private college packages in India.",
    },
    {
      question: "Is Osmania University affordable?",
      answer: "Yes, it offers quality education at comparatively low fees.",
    },
    {
      question: "Which college has the best ROI?",
      answer: "NITs and government universities generally provide strong ROI.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto p-8">
      <Link
        href="/home"
        className="inline-block bg-[#111] px-4 py-2 rounded-xl mb-8 hover:bg-[#181818]"
      >
        ← Back
      </Link>

      <div className="bg-[#111] rounded-3xl p-8">
        <h1 className="text-3xl font-semibold mb-8">Discussions & Q&A</h1>

        <p className="text-center text-gray-400 mb-10">
          Browse common questions asked by students
        </p>

        <div className="space-y-5">
          {discussions.map((d, i) => (
            <div key={i} className="bg-[#1a1a1a] rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl">❓</div>

                <div>
                  <h2 className="font-semibold">{d.question}</h2>

                  <p className="text-gray-400 leading-7">{d.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#1a1a1a] rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Ask a Question</h2>

          <p className="text-gray-400">
            Discussion posting can be added in the next version.
          </p>
        </div>
      </div>
    </main>
  );
}
