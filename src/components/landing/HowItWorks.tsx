const STEPS = [
  {
    num: "١",
    title: "أنشئ دائرتك",
    desc: "اختر نوع المناسبة وادعُ عائلتك وأصدقاءك للانضمام بدور محدد.",
    accent: "#333369",
  },
  {
    num: "٢",
    title: "حدد المسار",
    desc: "المنصة تولّد خارطة طريق بالمراحل الأساسية — قاعة، ضيافة، تصوير وأكثر.",
    accent: "#F8669E",
  },
  {
    num: "٣",
    title: "صوّت معاً",
    desc: "أضف خيارات الموردين لصندوق التصويت، ودع المجموعة تختار الأفضل.",
    accent: "#3A3089",
  },
  {
    num: "٤",
    title: "اجمع بـ «قطّة»",
    desc: "وزّع التكلفة بالتساوي أو افتح رابط تبرع مفتوح لجميع المدعوين.",
    accent: "#C83F74",
  },
  {
    num: "٥",
    title: "أغلق بالضمان",
    desc: "الأموال محفوظة في الضمان ولا تُحرَّر للمورد إلا بعد تأكيد التسليم.",
    accent: "#333369",
  },
  {
    num: "٦",
    title: "استمتع وقيّم",
    desc: "تابع كل شيء يوم الفعالية وأطلق المدفوعات مع نجاح كل مرحلة.",
    accent: "#F8669E",
  },
];

export function HowItWorks() {
  return (
    <section style={{ padding: "80px 24px", background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 relative">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            style={{
              fontFamily: "'Inter', 'Cairo', sans-serif",
              fontSize: "clamp(50px, 10vw, 110px)",
              color: "rgba(255,255,255,0)",
              WebkitTextStroke: "1px rgba(51,51,105,0.07)",
              lineHeight: 1,
            }}
          >
            HOW IT WORKS
          </div>
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#F8669E" }}>
            آلية العمل
          </p>
          <h2 className="text-3xl font-black" style={{ color: "#333369", fontFamily: "'Cairo', 'Inter', sans-serif" }}>
            كيف تعمل لمتنا؟
          </h2>
          <p className="mt-3" style={{ color: "#707070" }}>ستة خطوات بسيطة تحوّل فكرتك لفعالية لا تُنسى</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="ev-card p-6 group cursor-default"
              style={{ borderBottom: `3px solid ${step.accent}` }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center text-white font-black text-xl mb-4"
                style={{ background: step.accent }}
              >
                {step.num}
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "#333369", fontFamily: "'Cairo', 'Inter', sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
