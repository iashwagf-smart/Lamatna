import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-white" style={{ background: "#101010", marginTop: 0 }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center font-black text-xl"
                style={{ background: "linear-gradient(to right, #3D3A5C, #C46878)", color: "#fff" }}
              >
                ل
              </div>
              <span className="font-black text-2xl" style={{ fontFamily: "'Cairo', sans-serif" }}>لمتنا</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              منصة رائدة لتنظيم الفعاليات الاجتماعية والعائلية والمؤسسية بأسلوب تشاركي مبتكر.
            </p>
            <p className="text-white/50 text-xs mt-3">
              شركة بهجة ولمتنا للفعاليات
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white/90">المنصة</h4>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "المسارات" },
                { href: "/partner-apply", label: "انضم كشريك" },
                { href: "/corporate", label: "الشركات" },
                { href: "/register", label: "إنشاء حساب" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-white/90">الدعم</h4>
            <ul className="space-y-2">
              {["مركز المساعدة", "سياسة الخصوصية", "الشروط والأحكام", "تواصل معنا"].map((l) => (
                <li key={l}>
                  <span className="text-white/60 text-sm cursor-pointer hover:text-white transition-colors">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} لمتنا. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span>🇸🇦 المملكة العربية السعودية</span>
          </div>
        </div>
      </div>
      {/* Bottom gradient bar */}
      <div className="h-[5px]" style={{ background: "linear-gradient(to right, #3D3A5C, #C46878)" }} />
    </footer>
  );
}
