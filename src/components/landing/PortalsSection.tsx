import Link from "next/link";

const PORTALS = [
  {
    icon: "👨‍👩‍👧",
    title: "تطبيق العملاء",
    desc: "خطّط فعاليتك، صوّت مع مجموعتك، واجمع التكاليف بـ «قطّة».",
    href: "/user/dashboard",
    color: "#3D3B6E",
    bg: "#F8F5FF",
    cta: "ابدأ التخطيط",
  },
  {
    icon: "🏪",
    title: "بوابة الشركاء",
    desc: "اعرض خدماتك لآلاف العملاء وادر طلباتك وأرباحك بكل سهولة.",
    href: "/partner/dashboard",
    color: "#F05A7E",
    bg: "#FFF0F4",
    cta: "انضم كشريك",
  },
  {
    icon: "⚙️",
    title: "لوحة الإدارة",
    desc: "تحكّم في المنصة، راجع الموردين، وحلّ النزاعات من مكان واحد.",
    href: "/admin/dashboard",
    color: "#00C5D7",
    bg: "#F0FDFF",
    cta: "لوحة التحكم",
  },
];

export function PortalsSection() {
  return (
    <section className="py-16 px-6" style={{ background: "#3D3B6E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white mb-3">
            ثلاث بوابات، منظومة متكاملة
          </h2>
          <p className="text-white/60">كل طرف يجد ما يحتاجه في مكانه</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTALS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-8 flex flex-col items-center text-center"
              style={{ background: p.bg }}
            >
              <div className="text-5xl mb-4">{p.icon}</div>
              <h3 className="font-black text-xl mb-2" style={{ color: p.color }}>
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.desc}</p>
              <Link
                href={p.href}
                className="text-sm font-bold text-white px-6 py-2.5 rounded-full transition-transform hover:scale-105"
                style={{ background: p.color }}
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
