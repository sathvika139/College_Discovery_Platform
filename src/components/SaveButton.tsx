"use client";

export default function SaveButton({ id, name }: { id: string; name: string }) {
  function saveCollege(e: React.MouseEvent) {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem("savedColleges") || "[]");

    const exists = saved.find((c: any) => c.id === id);

    if (!exists) {
      saved.push({ id, name });

      localStorage.setItem("savedColleges", JSON.stringify(saved));
    }

    alert("College Saved");
  }

  return (
    <button
      onClick={saveCollege}
      className="bg-green-900/30 text-green-400 px-5 py-3 rounded-xl"
    >
      🔖 Save
    </button>
  );
}
