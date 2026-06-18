const OCCASIONS = [
  { emoji: "🎓", label: "تخرج" },
  { emoji: "💍", label: "زفاف" },
  { emoji: "🎂", label: "عيد ميلاد" },
  { emoji: "👶", label: "مولود" },
  { emoji: "🏠", label: "تشييد منزل" },
  { emoji: "💼", label: "فعالية مؤسسية" },
  { emoji: "🎉", label: "احتفال عائلي" },
  { emoji: "🎗️", label: "خطوبة" },
  { emoji: "🍽️", label: "عزيمة" },
  { emoji: "🌙", label: "سهرة رمضانية" },
  { emoji: "🏆", label: "تكريم" },
  { emoji: "🎊", label: "نجاح" },
  { emoji: "🌸", label: "حناء" },
  { emoji: "📚", label: "حفل قرآن" },
  { emoji: "🎭", label: "حفل فني" },
  { emoji: "⚽", label: "حفلة رياضية" },
  { emoji: "🧳", label: "وداع سفر" },
  { emoji: "🎪", label: "يوم ترفيهي" },
];

export function OccasionsSection() {
  return (
    <section className="py-16 px-6 bg-[#F8F5FF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-3" style={{ color: "#3D3B6E" }}>
            لكل مناسبة مسار مخصص
          </h2>
          <p className="text-gray-500">
            أكثر من ١٨ نوعاً من المناسبات جاهزة للتخطيط معك
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {OCCASIONS.map((occ) => (
            <span
              key={occ.label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sm font-bold cursor-pointer border border-gray-100 hover:border-[#F05A7E] hover:text-[#F05A7E] transition-all shadow-sm"
            >
              <span>{occ.emoji}</span>
              <span>{occ.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
