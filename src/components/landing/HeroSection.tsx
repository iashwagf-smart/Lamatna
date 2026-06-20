"use client";

import Link from "next/link";
import Image from "next/image";

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

          {/* Logo + Slogan visual */}
          <div className="flex-1 flex flex-col items-center justify-center animate-slide-in gap-4">
            {/* Glowing ring behind logo */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute w-[280px] h-[280px] rounded-full animate-float"
                style={{
                  background: "radial-gradient(circle, rgba(196,104,120,0.25) 0%, rgba(224,120,64,0.1) 50%, transparent 70%)",
                  filter: "blur(16px)",
                }}
              />
              <div
                className="absolute w-[220px] h-[220px] rounded-full"
                style={{
                  border: "1.5px dashed rgba(255,255,255,0.15)",
                  animation: "spin 20s linear infinite",
                }}
              />
              <Image
                src="/logo.png"
                alt="لمتنا - الله لا يفرق جمعتنا"
                width={240}
                height={280}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </div>

            {/* Slogan displayed as a decorative strip */}
            <div
              className="mt-2 px-6 py-3 text-center"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="text-xl font-bold tracking-wide"
                style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'ExpoArabic', 'Cairo', sans-serif", letterSpacing: "0.05em" }}
              >
                الله لا يفرق جمعتنا
              </p>
              <div className="flex justify-center gap-1.5 mt-2">
                {["#C46878", "#E07840", "#F0C040", "#594E6A", "#3D3A5C"].map((c) => (
                  <span key={c} className="w-4 h-1" style={{ background: c }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
