const STEPS = [
  {
    num: "١",
    title: "أنشئ دائرتك",
    desc: "اختر نوع المناسبة وادعُ عائلتك وأصدقاءك للانضمام بدور محدد.",
    color: "#3D3B6E",
  },
  {
    num: "٢",
    title: "حدد المسار",
    desc: "المنصة تولّد خارطة طريق بالمراحل الأساسية — قاعة، ضيافة، تصوير وأكثر.",
    color: "#F05A7E",
  },
  {
    num: "٣",
    title: "صوّت معاً",
    desc: "أضف خيارات الموردين لصندوق التصويت، ودع المجموعة تختار الأفضل.",
    color: "#00C5D7",
  },
  {
    num: "٤",
    title: "اجمع بـ «قطّة»",
    desc: "وزّع التكلفة بالتساوي أو افتح رابط تبرع مفتوح لجميع المدعوين.",
    color: "#FFD040",
  },
  {
    num: "٥",
    title: "أغلق بالضمان",
    desc: "الأموال محفوظة في الضمان ولا تُحرَّر للمورد إلا بعد تأكيد التسليم.",
    color: "#E91E8C",
  },
  {
    num: "٦",
    title: "استمتع وقيّم",
    desc: "تابع كل شيء يوم الفعالية وأطلق المدفوعات مع نجاح كل مرحلة.",
    color: "#FF6B35",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-3" style={{ color: "#3D3B6E" }}>
            كيف تعمل لمتنا؟
          </h2>
          <p className="text-gray-500">ستة خطوات بسيطة تحوّل فكرتك لفعالية لا تُنسى</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-4"
                style={{ background: step.color }}
              >
                {step.num}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#3D3B6E" }}>
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
