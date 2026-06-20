"use client";

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
    <section style={{ padding: "80px 24px", background: "#F7F7F7" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 relative">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            style={{
              fontFamily: "'Inter', 'Cairo', sans-serif",
              fontSize: "clamp(50px, 10vw, 110px)",
              color: "rgba(255,255,255,0)",
              WebkitTextStroke: "1px rgba(51,51,105,0.08)",
              lineHeight: 1,
            }}
          >
            OCCASIONS
          </div>
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#C46878" }}>
            المناسبات
          </p>
          <h2 className="text-3xl font-black" style={{ color: "#3D3A5C", fontFamily: "'Cairo', 'Inter', sans-serif" }}>
            لكل مناسبة مسار مخصص
          </h2>
          <p className="mt-3" style={{ color: "#707070" }}>
            أكثر من ١٨ نوعاً من المناسبات جاهزة للتخطيط معك
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {OCCASIONS.map((occ) => (
            <span
              key={occ.label}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-sm font-bold cursor-pointer transition-all"
              style={{
                color: "#3D3A5C",
                border: "1px solid #e5e5e5",
                boxShadow: "0 0 20px rgba(158,158,158,0.15)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#3D3A5C";
                el.style.color = "#fff";
                el.style.borderColor = "#3D3A5C";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#fff";
                el.style.color = "#3D3A5C";
                el.style.borderColor = "#e5e5e5";
              }}
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
