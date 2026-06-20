"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PortalTopbar } from "@/components/layout/PortalTopbar";

const EVENT_TYPES = [
  { value: "GRADUATION", emoji: "🎓", label: "تخرج" },
  { value: "WEDDING", emoji: "💍", label: "زفاف" },
  { value: "BIRTHDAY", emoji: "🎂", label: "عيد ميلاد" },
  { value: "CORPORATE", emoji: "💼", label: "مؤسسي" },
  { value: "FAMILY_GATHERING", emoji: "🏠", label: "تجمع عائلي" },
  { value: "CUSTOM", emoji: "🎊", label: "أخرى" },
];

export default function NewEventPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    type: "",
    title: "",
    date: "",
    budget: "",
    headcount: "",
    locationText: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function handleCreate() {
    setLoading(true);
    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const data = await res.json();
      router.push(`/user/events/${data.id}/masar`);
    }
    setLoading(false);
  }

  return (
    <>
      <PortalTopbar title="فعالية جديدة" subtitle="اتبع الخطوات لإنشاء دائرتك" />
      <div className="p-6 max-w-2xl mx-auto w-full">
        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-8">
          {["نوع الفعالية", "التفاصيل", "الميزانية"].map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                style={{
                  background: step > i + 1 ? "#3D3A5C" : step === i + 1 ? "#C46878" : "#E5E7EB",
                  color: step >= i + 1 ? "white" : "#9CA3AF",
                }}
              >
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <span className={`text-xs font-semibold hidden md:block ${step === i + 1 ? "text-[#3D3A5C]" : "text-gray-400"}`}>
                {s}
              </span>
              {i < 2 && <div className="flex-1 h-0.5 bg-gray-200" />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          {/* Step 1: Event Type */}
          {step === 1 && (
            <div>
              <h2 className="font-black text-xl mb-6" style={{ color: "#3D3A5C" }}>
                ما نوع المناسبة؟
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {EVENT_TYPES.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => update("type", t.value)}
                    className={`rounded-2xl p-4 border-2 text-center transition-all ${
                      form.type === t.value
                        ? "border-[#C46878] bg-[#FFF0F4]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="text-3xl mb-1">{t.emoji}</div>
                    <div className="text-xs font-bold" style={{ color: "#3D3A5C" }}>{t.label}</div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!form.type}
                className="mt-6 w-full py-3 rounded-2xl font-bold text-white disabled:opacity-50"
                style={{ background: "linear-gradient(135deg, #3D3A5C, #3D3A5C)" }}
              >
                التالي
              </button>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-black text-xl mb-2" style={{ color: "#3D3A5C" }}>
                تفاصيل الفعالية
              </h2>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">اسم الفعالية</label>
                <input
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
                  placeholder="مثل: حفل تخرج نوف"
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C]"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">التاريخ</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C]"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">المدينة / الموقع</label>
                <input
                  value={form.locationText}
                  onChange={(e) => update("locationText", e.target.value)}
                  placeholder="الرياض، حي النخيل"
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C]"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">عدد المدعوين المتوقع</label>
                <input
                  type="number"
                  value={form.headcount}
                  onChange={(e) => update("headcount", e.target.value)}
                  placeholder="٥٠"
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#3D3A5C]"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-2xl font-bold border-2 border-gray-200 text-gray-600"
                >
                  رجوع
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!form.title || !form.date}
                  className="flex-1 py-3 rounded-2xl font-bold text-white disabled:opacity-50"
                  style={{ background: "linear-gradient(135deg, #3D3A5C, #3D3A5C)" }}
                >
                  التالي
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Budget */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="font-black text-xl mb-2" style={{ color: "#3D3A5C" }}>
                ما الميزانية الإجمالية؟
              </h2>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  الميزانية (ريال سعودي)
                </label>
                <input
                  type="number"
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  placeholder="١٥٬٠٠٠"
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-2xl font-bold text-center focus:outline-none focus:border-[#3D3A5C]"
                />
                <p className="text-xs text-gray-400 text-center mt-2">
                  ستقوم المنصة بتوزيع الميزانية على المراحل تلقائياً
                </p>
              </div>

              {/* Budget Preview */}
              {form.budget && (
                <div className="bg-[#F7F7F7] rounded-2xl p-4 space-y-2">
                  <div className="text-xs font-bold text-[#3D3A5C] mb-3">توزيع تقريبي مقترح</div>
                  {[
                    { label: "القاعة", pct: 40 },
                    { label: "الضيافة", pct: 30 },
                    { label: "التصوير", pct: 15 },
                    { label: "الديكور", pct: 10 },
                    { label: "ترفيه", pct: 5 },
                  ].map((l) => (
                    <div key={l.label} className="flex items-center gap-3">
                      <div className="w-16 text-xs text-gray-500">{l.label}</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${l.pct}%`,
                            background: "linear-gradient(90deg, #3D3A5C, #3D3A5C)",
                          }}
                        />
                      </div>
                      <div className="text-xs font-bold text-gray-600 w-16 text-left">
                        {Math.floor((Number(form.budget) * l.pct) / 100).toLocaleString("ar")} ر.س
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 rounded-2xl font-bold border-2 border-gray-200 text-gray-600"
                >
                  رجوع
                </button>
                <button
                  onClick={handleCreate}
                  disabled={!form.budget || loading}
                  className="flex-1 py-3 rounded-2xl font-bold text-white disabled:opacity-50"
                  style={{ background: "linear-gradient(135deg, #C46878, #C46878)" }}
                >
                  {loading ? "جارٍ الإنشاء..." : "إنشاء الفعالية 🎉"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
