import Link from "next/link";

const PORTALS = [
  {
    icon: "👨‍👩‍👧",
    title: "تطبيق العملاء",
    desc: "خطّط فعاليتك، صوّت مع مجموعتك، واجمع التكاليف بـ «قطّة».",
    href: "/user/dashboard",
    accent: "#C46878",
    cta: "ابدأ التخطيط",
  },
  {
    icon: "🏪",
    title: "بوابة الشركاء",
    desc: "اعرض خدماتك لآلاف العملاء وادر طلباتك وأرباحك بكل سهولة.",
    href: "/partner/dashboard",
    accent: "#fff",
    cta: "انضم كشريك",
  },
  {
    icon: "⚙️",
    title: "لوحة الإدارة",
    desc: "تحكّم في المنصة، راجع الموردين، وحلّ النزاعات من مكان واحد.",
    href: "/admin/dashboard",
    accent: "#C46878",
    cta: "لوحة التحكم",
  },
];

export function PortalsSection() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #3D3A5C 0%, #3D3A5C 60%, #1a1040 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#C46878" }}>
            البوابات
          </p>
          <h2
            className="text-3xl font-black text-white"
            style={{ fontFamily: "'Cairo', 'Inter', sans-serif" }}
          >
            ثلاث بوابات، منظومة متكاملة
          </h2>
          <p className="mt-3" style={{ color: "rgba(255,255,255,0.6)" }}>كل طرف يجد ما يحتاجه في مكانه</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTALS.map((p, i) => (
            <div
              key={p.title}
              className="p-8 flex flex-col items-center text-center transition-all duration-300"
              style={{
                background: i === 1 ? "rgba(248,102,158,0.15)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${i === 1 ? "rgba(248,102,158,0.4)" : "rgba(255,255,255,0.1)"}`,
                borderTop: `4px solid ${i === 1 ? "#C46878" : "rgba(255,255,255,0.2)"}`,
              }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center text-3xl mb-6"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                {p.icon}
              </div>
              <h3
                className="font-black text-xl mb-3 text-white"
                style={{ fontFamily: "'Cairo', 'Inter', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>{p.desc}</p>
              <Link
                href={p.href}
                className="nir-btn text-sm"
                style={i === 1 ? { background: "#C46878" } : {}}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
