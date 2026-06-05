import Predictor from "@/components/Predictor";
import Link from "next/link";

export default function PredictorPage() {
  return (
    <main className="p-8">
      <Link href="/home" className="border px-3 py-2 rounded text-sm">
        ← Back
      </Link>

      <div className="mt-6">
        <Predictor />
      </div>
    </main>
  );
}
