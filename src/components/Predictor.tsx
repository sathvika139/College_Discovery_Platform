"use client";

import { useState } from "react";

export default function Predictor() {
  const [rank, setRank] = useState("");
  const [college, setCollege] = useState<any>(null);

  function predict() {
    const r = Number(rank);

    if (r <= 2000) {
      setCollege({
        name: "IIT Hyderabad",
        rating: 4.8,
        avg: "18 LPA",
        fees: "₹250000",
      });
    } else if (r <= 10000) {
      setCollege({
        name: "NIT Warangal",
        rating: 4.6,
        avg: "14 LPA",
        fees: "₹180000",
      });
    } else {
      setCollege({
        name: "JNTUH",
        rating: 4.2,
        avg: "8 LPA",
        fees: "₹120000",
      });
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-[#111] rounded-3xl p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          College Predictor
        </h2>

        <p className="text-center text-gray-400 mb-8">
          Enter your EAMCET rank to get college suggestions
        </p>

        <input
          type="number"
          placeholder="Enter EAMCET Rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#1a1a1a] border border-[#222] text-white mb-5"
        />

        <button
          onClick={predict}
          className="w-full bg-white text-black py-4 rounded-xl font-semibold"
        >
          Predict
        </button>

        {college && (
          <div className="mt-8 bg-[#1a1a1a] rounded-2xl p-6">
            <p className="text-gray-400 text-center mb-2">
              Recommended College
            </p>

            <h3 className="text-4xl font-bold text-center mb-6">
              {college.name}
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#111] p-4 rounded-xl text-center">
                <p className="text-gray-400 text-sm">Rating</p>

                <h4 className="text-2xl font-bold mt-2">⭐ {college.rating}</h4>
              </div>

              <div className="bg-[#111] p-4 rounded-xl text-center">
                <p className="text-gray-400 text-sm">Average CTC</p>

                <h4 className="text-2xl font-bold mt-2">{college.avg}</h4>
              </div>

              <div className="bg-[#111] p-4 rounded-xl text-center">
                <p className="text-gray-400 text-sm">Fees</p>

                <h4 className="text-2xl font-bold mt-2">{college.fees}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
