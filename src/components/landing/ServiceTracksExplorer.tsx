"use client";

import { useState } from "react";

const TRACKS = [
  {
    id: "graduation",
    emoji: "🎓",
    title: "حفل التخرج",
    desc: "مسار متكامل لاحتفالية التخرج مع أفضل موردي التصوير والضيافة والقاعات.",
    base: 8000,
    milestones: ["قاعة الحفل", "تصوير فوتوغرافي", "تصوير فيديو", "ضيافة", "ديكور", "ضيوف VIP"],
    color: "#3D3A5C",
  },
  {
    id: "wedding",
    emoji: "💍",
    title: "الزفاف",
    desc: "يومك الأميز — مسار الزفاف الشامل من القاعة حتى الحناء.",
    base: 35000,
    milestones: ["قاعة الزفاف", "الكاتيرينج", "تصوير", "ديكور وزهور", "موسيقى", "مصمم أزياء"],
    color: "#C46878",
  },
  {
    id: "birthday",
    emoji: "🎂",
    title: "عيد الميلاد",
    desc: "احتفل بأجواء مميزة — كيكة، ترفيه، وذكريات لا تُنسى.",
    base: 3000,
    milestones: ["المكان", "الكيكة", "ترفيه أطفال", "ديكور", "مصور"],
    color: "#C46878",
  },
  {
    id: "corporate",
    emoji: "💼",
    title: "الفعالية المؤسسية",
    desc: "يوم مؤسسي احترافي — عروض، ضيافة، وتنظيم على أعلى مستوى.",
    base: 25000,
    milestones: ["قاعة مؤتمرات", "ضيافة ومطعم", "تقنيات عرض", "تسجيل فيديو", "هدايا تذكارية"],
    color: "#3D3A5C",
  },
];

export function ServiceTracksExplorer() {
  const [selected, setSelected] = useState(TRACKS[0]);
  const [guests, setGuests] = useState(50);

  const estimatedBudget = Math.floor(selected.base + guests * 80);

  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black mb-3" style={{ color: "#3D3A5C" }}>
            مسارات المناسبات
          </h1>
          <p className="text-gray-500 text-lg">
            كل مناسبة لها مساراً مخصصاً بمراحل واضحة وموردين متخصصين
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Track List */}
          <div className="space-y-3">
            {TRACKS.map((track) => (
              <button
                key={track.id}
                onClick={() => setSelected(track)}
                className={`w-full text-right p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                  selected.id === track.id
                    ? "border-[#3D3A5C] bg-[#F7F7F7]"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <span className="text-3xl">{track.emoji}</span>
                <div>
                  <div className="font-bold text-sm" style={{ color: "#3D3A5C" }}>{track.title}</div>
                  <div className="text-xs text-gray-400">من {track.base.toLocaleString("ar")} ر.س</div>
                </div>
              </button>
            ))}
          </div>

          {/* Track Detail */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: `${selected.color}18` }}
              >
                {selected.emoji}
              </div>
              <div>
                <h2 className="font-black text-2xl" style={{ color: selected.color }}>
                  {selected.title}
                </h2>
                <p className="text-gray-500 text-sm">{selected.desc}</p>
              </div>
            </div>

            {/* Milestones */}
            <div className="mb-8">
              <h3 className="font-bold text-sm text-gray-500 mb-3">مراحل المسار</h3>
              <div className="flex flex-wrap gap-2">
                {selected.milestones.map((m, i) => (
                  <span
                    key={m}
                    className="text-sm font-semibold px-4 py-2 rounded-full text-white"
                    style={{ background: selected.color, opacity: 0.7 + i * 0.04 }}
                  >
                    {i + 1}. {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Estimation Calculator */}
            <div className="bg-[#F7F7F7] rounded-2xl p-6">
              <h3 className="font-bold text-[#3D3A5C] mb-4">🧮 حاسبة الميزانية التقريبية</h3>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-600 block mb-2">
                  عدد الضيوف: <strong style={{ color: selected.color }}>{guests}</strong>
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full accent-[#3D3A5C]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>١٠</span><span>٢٥٠</span><span>٥٠٠</span>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-xs text-gray-400 mb-1">الميزانية التقريبية</div>
                <div className="text-4xl font-black" style={{ color: selected.color }}>
                  {estimatedBudget.toLocaleString("ar")} ر.س
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  * تقدير أولي — الأسعار النهائية تعتمد على الموردين المختارين
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
