import Link from "next/link";
import { PatternBar } from "./PatternBar";

export function Footer() {
  return (
    <footer className="bg-[#3D3B6E] text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#3D3B6E] font-black text-xl">
                ل
              </div>
              <span className="font-black text-2xl">لمتنا</span>
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

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} لمتنا. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span>🇸🇦 المملكة العربية السعودية</span>
          </div>
        </div>
      </div>
      <PatternBar />
    </footer>
  );
}
