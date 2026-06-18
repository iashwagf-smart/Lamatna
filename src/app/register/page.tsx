"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PatternBar } from "@/components/layout/PatternBar";

type Role = "CLIENT" | "VENDOR";

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState<"role" | "details" | "otp">("role");
  const [role, setRole] = useState<Role>("CLIENT");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmitDetails() {
    if (!name || !phone) return;
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, role }),
    });
    setLoading(false);
    if (res.ok) setStep("otp");
    else {
      const data = await res.json();
      setError(data.error || "حدث خطأ");
    }
  }

  async function handleVerifyOtp() {
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, otp }),
    });
    setLoading(false);
    if (res.ok) {
      router.push(role === "VENDOR" ? "/partner/dashboard" : "/user/dashboard");
    } else {
      setError("الرمز غير صحيح");
    }
  }

  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col">
      <PatternBar />
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 justify-center">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-2xl"
                style={{ background: "linear-gradient(to right, #3A3089, #333369)" }}
              >
                ل
              </div>
              <span className="font-black text-2xl" style={{ color: "#333369" }}>لمتنا</span>
            </Link>
            <h1 className="text-xl font-black mt-4" style={{ color: "#333369" }}>
              إنشاء حساب جديد
            </h1>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3 mb-4">{error}</div>
          )}

          {step === "role" && (
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-700 text-center mb-2">أنا...</p>
              <div className="grid grid-cols-2 gap-3">
                {([
                  { value: "CLIENT", emoji: "🎉", label: "مُقيم فعاليات", desc: "أخطط لمناسبة مع مجموعتي" },
                  { value: "VENDOR", emoji: "🏪", label: "مُزوّد خدمات", desc: "أعرض خدماتي للعملاء" },
                ] as const).map((r) => (
                  <button
                    key={r.value}
                    onClick={() => setRole(r.value)}
                    className={`rounded-2xl p-5 border-2 text-center transition-all ${
                      role === r.value
                        ? "border-[#333369] bg-[#F7F7F7]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="text-3xl mb-2">{r.emoji}</div>
                    <div className="font-bold text-sm" style={{ color: "#333369" }}>{r.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{r.desc}</div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep("details")}
                className="w-full py-3 rounded-2xl font-bold text-white"
                style={{ background: "linear-gradient(to right, #3A3089, #333369)" }}
              >
                التالي
              </button>
            </div>
          )}

          {step === "details" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">الاسم الكامل</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="محمد العبدالله"
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#333369]"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">رقم الجوال</label>
                <input
                  type="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+966 5X XXX XXXX"
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-center font-mono focus:outline-none focus:border-[#333369]"
                />
              </div>
              <button
                onClick={handleSubmitDetails}
                disabled={loading || !name || !phone}
                className="w-full py-3 rounded-2xl font-bold text-white disabled:opacity-50"
                style={{ background: "linear-gradient(to right, #3A3089, #C83F74)" }}
              >
                {loading ? "جارٍ..." : "إرسال رمز التحقق"}
              </button>
            </div>
          )}

          {step === "otp" && (
            <div className="space-y-4">
              <p className="text-sm text-gray-500 text-center">
                تم إرسال رمز التحقق إلى <strong dir="ltr">{phone}</strong>
              </p>
              <input
                type="text"
                dir="ltr"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="XXXXXX"
                maxLength={6}
                className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-center font-mono text-2xl tracking-widest focus:outline-none focus:border-[#333369]"
              />
              <button
                onClick={handleVerifyOtp}
                disabled={loading || otp.length !== 6}
                className="w-full py-3 rounded-2xl font-bold text-white disabled:opacity-50"
                style={{ background: "linear-gradient(to right, #3A3089, #333369)" }}
              >
                {loading ? "جارٍ التحقق..." : "إنشاء الحساب"}
              </button>
            </div>
          )}

          <p className="text-center text-sm text-gray-500 mt-6">
            لديك حساب بالفعل؟{" "}
            <Link href="/login" className="font-bold" style={{ color: "#F8669E" }}>
              سجّل الدخول
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
