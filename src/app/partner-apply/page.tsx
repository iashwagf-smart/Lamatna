"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const CATEGORIES = [
  "CATERING", "VENUE", "PHOTOGRAPHY", "DECORATION",
  "MUSIC", "TRANSPORT", "FLOWERS", "CAKE", "ENTERTAINMENT", "OTHER"
];
const CATEGORY_LABELS: Record<string, string> = {
  CATERING: "ضيافة وكاتيرينج", VENUE: "قاعات وأماكن",
  PHOTOGRAPHY: "تصوير", DECORATION: "ديكور وزينة",
  MUSIC: "موسيقى وفنون", TRANSPORT: "نقل",
  FLOWERS: "زهور", CAKE: "كيك وحلوى",
  ENTERTAINMENT: "ترفيه", OTHER: "أخرى",
};

export default function PartnerApplyPage() {
  const [form, setForm] = useState({
    businessName: "", contactName: "", phone: "", email: "",
    category: "", city: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function submit() {
    setLoading(true);
    await fetch("/api/partner-apply", {
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
      <div className="max-w-2xl mx-auto px-6 py-16">
        {!submitted ? (
          <>
            <div className="text-center mb-10">
              <div className="text-5xl mb-4">🏪</div>
              <h1 className="text-3xl font-black" style={{ color: "#333369" }}>
                انضم كشريك في لمتنا
              </h1>
              <p className="text-gray-500 mt-2">
                اعرض خدماتك لآلاف العملاء وادر عملياتك بسهولة تامة
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: "📈", title: "نمو الأعمال", desc: "وصول لقاعدة عملاء واسعة" },
                { icon: "🔒", title: "ضمان مدفوعات", desc: "أموالك محمية بنظام الضمان" },
                { icon: "📊", title: "تحليلات", desc: "تقارير وإحصاءات مفصلة" },
              ].map((b) => (
                <div key={b.title} className="bg-[#F7F7F7] rounded-2xl p-4 text-center">
                  <div className="text-2xl mb-2">{b.icon}</div>
                  <div className="font-bold text-xs" style={{ color: "#333369" }}>{b.title}</div>
                  <div className="text-xs text-gray-400 mt-1">{b.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">اسم المنشأة *</label>
                  <input value={form.businessName} onChange={(e) => update("businessName", e.target.value)}
                    placeholder="استوديو نور" className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#333369]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">اسم المسؤول *</label>
                  <input value={form.contactName} onChange={(e) => update("contactName", e.target.value)}
                    placeholder="أحمد النور" className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#333369]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">الجوال *</label>
                  <input type="tel" dir="ltr" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                    placeholder="+966..." className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#333369] text-center font-mono" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">البريد الإلكتروني</label>
                  <input type="email" dir="ltr" value={form.email} onChange={(e) => update("email", e.target.value)}
                    placeholder="info@example.com" className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#333369] text-center" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">التخصص *</label>
                <div className="grid grid-cols-3 gap-2">
                  {CATEGORIES.map((c) => (
                    <button key={c} onClick={() => update("category", c)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border-2 transition-all ${form.category === c ? "border-[#F8669E] bg-[#FFF0F4] text-[#F8669E]" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}>
                      {CATEGORY_LABELS[c]}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">المدينة</label>
                <input value={form.city} onChange={(e) => update("city", e.target.value)}
                  placeholder="الرياض" className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#333369]" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">ملاحظات إضافية</label>
                <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)}
                  rows={3} placeholder="صِف خدماتك..." className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#333369] resize-none" />
              </div>
              <button onClick={submit} disabled={loading || !form.businessName || !form.phone || !form.category}
                className="w-full py-4 rounded-2xl font-black text-white text-lg disabled:opacity-50 transition-transform hover:scale-[1.02]"
                style={{ background: "linear-gradient(to right, #3A3089, #C83F74)" }}>
                {loading ? "جارٍ الإرسال..." : "أرسل الطلب الآن"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-2xl font-black mb-3" style={{ color: "#333369" }}>طلبك وصلنا!</h2>
            <p className="text-gray-500">سيتواصل معك فريقنا خلال ٢٤-٤٨ ساعة. شكراً لاهتمامك بالانضمام لمنصة لمتنا.</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
