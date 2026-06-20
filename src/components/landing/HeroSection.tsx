"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-16 pb-24 px-6"
      style={{ background: "linear-gradient(135deg, #3D3A5C 0%, #3D3A5C 60%, #1a1040 100%)" }}
    >
      {/* Ghost large text */}
      <div
        className="absolute top-0 left-0 right-0 text-center select-none pointer-events-none overflow-hidden leading-none"
        style={{
          fontFamily: "'Inter', 'Cairo', sans-serif",
          fontSize: "clamp(80px, 18vw, 200px)",
          color: "rgba(255,255,255,0)",
          WebkitTextStroke: "1px rgba(255,255,255,0.07)",
          lineHeight: 1,
          top: "-20px",
        }}
      >
        LAMATNA
      </div>

      {/* Decorative blobs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(248,102,158,0.15), transparent)" }}
      />
      <div
        className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,63,116,0.2), transparent)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-right animate-fade-in-up">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 mb-8"
              style={{ background: "rgba(248,102,158,0.2)", color: "#C46878", borderLeft: "3px solid #C46878" }}
            >
              ✨ منصة التخطيط الجماعي الأولى في المملكة
            </div>

            <h1
              className="font-black leading-tight mb-6 text-white"
              style={{ fontSize: "clamp(36px, 6vw, 70px)", fontFamily: "'Cairo', 'Inter', sans-serif" }}
            >
              فعاليتك المثالية{" "}
              <span style={{ color: "#C46878" }}>معاً</span>
            </h1>

            <p className="text-lg mb-10 leading-relaxed max-w-lg mx-auto md:mx-0" style={{ color: "rgba(255,255,255,0.7)" }}>
              نظّم أجمل مناسباتك مع عائلتك وأصدقائك — اختر الموردين، صوّت على الخيارات، واجمع التكاليف بسهولة تامة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/register" className="nir-btn text-base">
                ابدأ تخطيط فعاليتك ←
              </Link>
              <Link
                href="/services"
                className="text-base font-bold px-8 py-3 transition-all"
                style={{
                  color: "#fff",
                  border: "2px solid rgba(255,255,255,0.4)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                استكشف المسارات
              </Link>
            </div>

            {/* App Stores */}
            <div className="mt-10 flex items-center gap-4 justify-center md:justify-start">
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>قريباً على:</span>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 bg-black/40 text-white px-3 py-1.5 text-xs font-semibold" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                  🍎 App Store
                </div>
                <div className="flex items-center gap-2 bg-black/40 text-white px-3 py-1.5 text-xs font-semibold" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                  ▶ Google Play
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center animate-slide-in">
            <div
              className="relative w-64 h-[520px] shadow-2xl overflow-hidden"
              style={{
                background: "#fff",
                border: "8px solid rgba(255,255,255,0.15)",
                borderRadius: "32px",
              }}
            >
              {/* Status bar */}
              <div className="h-8 flex items-center justify-center" style={{ background: "linear-gradient(to right, #3D3A5C, #C46878)" }}>
                <div className="w-20 h-2 bg-white/20 rounded-full" />
              </div>
              {/* App content mockup */}
              <div className="p-4 space-y-3" style={{ background: "#F7F7F7" }}>
                <div className="bg-white p-4 shadow-sm" style={{ borderRadius: "10px", boxShadow: "0 0 20px rgba(158,158,158,0.27)" }}>
                  <div className="text-xs font-bold mb-1" style={{ color: "#3D3A5C" }}>حفل تخرج نوف 🎓</div>
                  <div className="h-2 rounded-none overflow-hidden" style={{ background: "#F7F7F7" }}>
                    <div className="h-full w-3/4" style={{ background: "linear-gradient(to right, #3D3A5C, #C46878)" }} />
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#707070" }}>٧٥٪ مكتمل</div>
                </div>

                <div className="bg-white p-4 shadow-sm" style={{ borderRadius: "10px", boxShadow: "0 0 20px rgba(158,158,158,0.27)" }}>
                  <div className="text-xs font-bold mb-2" style={{ color: "#C46878" }}>تصويت جاري 🗳️</div>
                  <div className="space-y-1.5">
                    {["قاعة النخيل", "فندق الريتز", "قاعة الأميرة"].map((v, i) => (
                      <div key={v} className="flex items-center gap-2">
                        <div className="h-5 flex-1 overflow-hidden" style={{ background: "#F7F7F7" }}>
                          <div
                            className="h-full"
                            style={{
                              width: `${[65, 25, 10][i]}%`,
                              background: ["#3D3A5C", "#C46878", "#3D3A5C"][i],
                            }}
                          />
                        </div>
                        <span className="text-xs w-6" style={{ color: "#707070" }}>{[65, 25, 10][i]}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 text-white" style={{ background: "linear-gradient(to right, #3D3A5C, #C46878)", borderRadius: "10px" }}>
                  <div className="text-xs opacity-70 mb-1">الميزانية المجمّعة</div>
                  <div className="text-lg font-black">١٢٬٥٠٠ ر.س</div>
                  <div className="text-xs opacity-60 mt-1">من ٨ مشاركين</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
