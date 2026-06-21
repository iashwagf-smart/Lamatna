"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { PatternBar } from "@/components/layout/PatternBar";

export function LoginForm() {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/user/dashboard";

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendOtp() {
    if (!email) return;
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setLoading(false);
    if (res.ok) {
      setStep("otp");
    } else {
      const data = await res.json();
      setError(data.error || "تعذّر إرسال الرمز");
    }
  }

  async function verifyOtp() {
    setLoading(true);
    setError("");
    // Let NextAuth handle redirect — it will go to callbackUrl on success, /login on error
    await signIn("email-otp", { email, otp, callbackUrl });
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
                style={{ background: "linear-gradient(to right, #3D3A5C, #C46878)" }}
              >
                ل
              </div>
              <span className="font-black text-2xl" style={{ color: "#3D3A5C" }}>لمتنا</span>
            </Link>
            <h1 className="text-xl font-black mt-4" style={{ color: "#3D3A5C" }}>مرحباً بك</h1>
            <p className="text-gray-500 text-sm mt-1">سجّل دخولك للمتابعة</p>
          </div>

          <button
            onClick={() => signIn("google", { callbackUrl })}
            className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 rounded-2xl py-3 font-semibold text-gray-700 hover:border-[#3D3A5C] transition-colors mb-4"
          >
            <span className="text-xl">🔵</span>
            <span>المتابعة بـ Google</span>
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">أو بالبريد الإلكتروني</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {params.get("error") && (
            <div className="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3 mb-4">
              الرمز غير صحيح أو منتهي الصلاحية
            </div>
          )}
          {error && (
            <div className="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3 mb-4">{error}</div>
          )}

          {step === "email" ? (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">البريد الإلكتروني</label>
                <input
                  type="email" dir="ltr" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendOtp()}
                  placeholder="example@email.com"
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-center font-mono focus:outline-none focus:border-[#3D3A5C] transition-colors"
                />
              </div>
              <button
                onClick={sendOtp} disabled={loading || !email}
                className="w-full py-3 rounded-2xl font-bold text-white disabled:opacity-50"
                style={{ background: "linear-gradient(to right, #3D3A5C, #C46878)" }}
              >
                {loading ? "جارٍ الإرسال..." : "إرسال رمز التحقق"}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-gray-500 text-center">
                تم إرسال رمز التحقق إلى <strong dir="ltr">{email}</strong>
              </p>
              <input
                type="text" dir="ltr" value={otp}
                onChange={(e) => setOtp(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && otp.length === 6 && verifyOtp()}
                placeholder="XXXXXX" maxLength={6}
                className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-center font-mono text-2xl tracking-widest focus:outline-none focus:border-[#3D3A5C]"
              />
              <button
                onClick={verifyOtp} disabled={loading || otp.length !== 6}
                className="w-full py-3 rounded-2xl font-bold text-white disabled:opacity-50"
                style={{ background: "linear-gradient(to right, #3D3A5C, #C46878)" }}
              >
                {loading ? "جارٍ التحقق..." : "دخول"}
              </button>
              <button onClick={() => setStep("email")} className="w-full text-sm text-gray-500 hover:text-[#3D3A5C]">
                تعديل البريد الإلكتروني
              </button>
            </div>
          )}

          <p className="text-center text-sm text-gray-500 mt-6">
            ليس لديك حساب؟{" "}
            <Link href="/register" className="font-bold" style={{ color: "#C46878" }}>
              أنشئ حساباً الآن
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
