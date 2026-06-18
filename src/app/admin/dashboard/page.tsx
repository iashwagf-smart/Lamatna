import { PortalTopbar } from "@/components/layout/PortalTopbar";

const KPIs = [
  { label: "إجمالي المبيعات (GMV)", value: "٤٢٠٬٠٠٠ ر.س", icon: "💹", color: "#3D3B6E", delta: "+١٢% هذا الشهر" },
  { label: "ضمانات نشطة", value: "٢٣", icon: "🔒", color: "#F05A7E", delta: "٦ تنتهي قريباً" },
  { label: "نزاعات مفتوحة", value: "٢", icon: "⚖️", color: "#FFD040", delta: "ضمن ٤٨ ساعة" },
  { label: "موردون ينتظرون", value: "٧", icon: "🏪", color: "#00C5D7", delta: "بانتظار المراجعة" },
  { label: "فعاليات هذا الشهر", value: "٨٤", icon: "🎉", color: "#E91E8C", delta: "+٢٣% عن الشهر الماضي" },
  { label: "العملاء النشطون", value: "٢٬٣٤١", icon: "👥", color: "#FF6B35", delta: "١٢٣ جديد هذا الأسبوع" },
];

const RECENT_EVENTS = [
  { title: "حفل تخرج نوف", type: "تخرج", amount: "١٥٬٠٠٠", status: "LOCKED", date: "٢٥ يونيو" },
  { title: "زفاف محمد وريم", type: "زفاف", amount: "٤٢٬٠٠٠", status: "ACTIVE", date: "٣٠ يونيو" },
  { title: "يوم مؤسسي - أرامكو", type: "مؤسسي", amount: "٨٠٬٠٠٠", status: "PLANNING", date: "٥ يوليو" },
];

export default function AdminDashboard() {
  return (
    <>
      <PortalTopbar
        title="لوحة القيادة"
        subtitle="مراقبة المنصة في الوقت الفعلي"
        actions={
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block" />
            نشط
          </div>
        }
      />
      <div className="p-6 space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {KPIs.map((k) => (
            <div
              key={k.label}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
              style={{ borderRight: `4px solid ${k.color}` }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-xs text-gray-400 mb-1">{k.label}</div>
                  <div className="text-2xl font-black" style={{ color: k.color }}>{k.value}</div>
                </div>
                <span className="text-2xl">{k.icon}</span>
              </div>
              <div className="text-xs text-gray-400">{k.delta}</div>
            </div>
          ))}
        </div>

        {/* Pending Vendor Approvals */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-black text-lg" style={{ color: "#3D3B6E" }}>
              موردون ينتظرون الموافقة
            </h2>
            <span className="bg-[#F05A7E] text-white text-xs font-bold px-3 py-1 rounded-full">
              ٧ طلبات
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: "استوديو نور للتصوير", category: "تصوير", city: "الرياض", applied: "منذ يومين" },
              { name: "قاعة الأميرة", category: "قاعات", city: "جدة", applied: "منذ ٣ أيام" },
              { name: "تميم للضيافة", category: "ضيافة", city: "الدمام", applied: "منذ يوم" },
            ].map((v) => (
              <div key={v.name} className="bg-white rounded-2xl p-4 border border-gray-100 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg"
                  style={{ background: "linear-gradient(135deg, #3D3B6E, #5552A0)" }}
                >
                  {v.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm" style={{ color: "#3D3B6E" }}>{v.name}</div>
                  <div className="text-xs text-gray-400">{v.category} · {v.city} · {v.applied}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="text-xs font-bold text-white px-3 py-1.5 rounded-lg"
                    style={{ background: "#3D3B6E" }}
                  >
                    موافقة
                  </button>
                  <button className="text-xs font-bold text-red-500 px-3 py-1.5 rounded-lg border border-red-200">
                    رفض
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Events */}
        <section>
          <h2 className="font-black text-lg mb-4" style={{ color: "#3D3B6E" }}>
            فعاليات حديثة
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F8F5FF]">
                  <th className="text-right px-4 py-3 font-bold text-gray-600">الفعالية</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-600">النوع</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-600">القيمة</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-600">الحالة</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-600">التاريخ</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_EVENTS.map((ev) => (
                  <tr key={ev.title} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-semibold" style={{ color: "#3D3B6E" }}>{ev.title}</td>
                    <td className="px-4 py-3 text-gray-500">{ev.type}</td>
                    <td className="px-4 py-3 font-bold text-gray-700">{ev.amount} ر.س</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        ev.status === "ACTIVE" ? "bg-[#F05A7E]/10 text-[#F05A7E]" :
                        ev.status === "LOCKED" ? "bg-[#3D3B6E]/10 text-[#3D3B6E]" :
                        "bg-[#00C5D7]/10 text-[#00C5D7]"
                      }`}>
                        {ev.status === "ACTIVE" ? "نشط" : ev.status === "LOCKED" ? "مقفل" : "قيد التخطيط"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400">{ev.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
