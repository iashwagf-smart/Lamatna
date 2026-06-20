"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CorporatePage() {
  const [form, setForm] = useState({
    company: "", contact: "", phone: "", email: "",
    eventType: "", budget: "", cadence: "", employees: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function submit() {
    setLoading(true);
    await fetch("/api/corporate-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-16">
        {!submitted ? (
          <>
            <div className="text-center mb-10">
              <div className="text-5xl mb-4">💼</div>
              <h1 className="text-3xl font-black" style={{ color: "#3D3A5C" }}>حلول الفعاليات المؤسسية</h1>
              <p className="text-gray-500 mt-2 max-w-lg mx-auto">
                دعنا نتولى تخطيط وتنفيذ جميع فعالياتكم المؤسسية طوال العام بأسعار تنافسية وجودة عالية.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: "📅", title: "تقويم سنوي", desc: "نخطط فعالياتكم طوال العام" },
                { icon: "💰", title: "أسعار مجمّعة", desc: "خصومات على الحجوزات المتعددة" },
                { icon: "🤝", title: "مدير حساب", desc: "مدير مخصص لشركتكم" },
              ].map((b) => (
                <div key={b.title} className="bg-[#F7F7F7] rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">{b.icon}</div>
                  <div className="font-bold text-sm" style={{ color: "#3D3A5C" }}>{b.title}</div>
                  <div className="text-xs text-gray-400 mt-1">{b.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">اسم الشركة *</label>
                  <input value={form.company} onChange={(e) => update("company", e.target.value)}
                    placeholder="شركة الأفق" className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">اسم المسؤول *</label>
                  <input value={form.contact} onChange={(e) => update("contact", e.target.value)}
                    placeholder="فهد السليم" className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">الجوال *</label>
                  <input type="tel" dir="ltr" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                    placeholder="+966..." className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C] text-center font-mono" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">البريد الإلكتروني</label>
                  <input type="email" dir="ltr" value={form.email} onChange={(e) => update("email", e.target.value)}
                    placeholder="hr@company.com" className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C] text-center" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">نوع الفعالية</label>
                  <select value={form.eventType} onChange={(e) => update("eventType", e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C] bg-white">
                    <option value="">اختر...</option>
                    {["يوم مؤسسي", "احتفال نهاية السنة", "تكريم الموظفين", "إطلاق منتج", "مؤتمر", "أخرى"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">عدد الموظفين</label>
                  <input type="number" value={form.employees} onChange={(e) => update("employees", e.target.value)}
                    placeholder="٢٠٠" className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C]" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">الميزانية التقريبية (ر.س)</label>
                <input type="number" value={form.budget} onChange={(e) => update("budget", e.target.value)}
                  placeholder="٥٠٬٠٠٠" className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C]" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">تكرار الفعاليات</label>
                <div className="flex flex-wrap gap-2">
                  {["مرة واحدة", "ربع سنوي", "نصف سنوي", "سنوي"].map((c) => (
                    <button key={c} onClick={() => update("cadence", c)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${form.cadence === c ? "border-[#3D3A5C] bg-[#F7F7F7] text-[#3D3A5C]" : "border-gray-200 text-gray-500"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">ملاحظات</label>
                <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)}
                  rows={3} placeholder="أي تفاصيل إضافية..." className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C] resize-none" />
              </div>
              <button onClick={submit} disabled={loading || !form.company || !form.contact || !form.phone}
                className="w-full py-4 rounded-2xl font-black text-white text-lg disabled:opacity-50"
                style={{ background: "linear-gradient(to right, #3D3A5C, #3D3A5C)" }}>
                {loading ? "جارٍ الإرسال..." : "طلب عرض سعر"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-2xl font-black mb-3" style={{ color: "#3D3A5C" }}>تم استلام طلبكم!</h2>
            <p className="text-gray-500">سيتواصل معكم مدير الحسابات خلال يوم عمل واحد لمناقشة التفاصيل.</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
