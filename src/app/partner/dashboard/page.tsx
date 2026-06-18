import { PortalTopbar } from "@/components/layout/PortalTopbar";

const MOCK_ORDERS = [
  {
    id: "o1",
    event: "حفل تخرج نوف",
    client: "سارة الأحمد",
    service: "تصوير فوتوغرافي",
    amount: 2800,
    date: "٢٥ يونيو",
    status: "CONFIRMED",
  },
  {
    id: "o2",
    event: "عيد ميلاد ريما",
    client: "فاطمة العلي",
    service: "تزيين الحفلات",
    amount: 1500,
    date: "١٠ يوليو",
    status: "PENDING",
  },
  {
    id: "o3",
    event: "زفاف محمد",
    client: "خالد العمر",
    service: "تصوير فوتوغرافي",
    amount: 6500,
    date: "٢ أغسطس",
    status: "LOCKED",
  },
];

const STATUS: Record<string, { label: string; color: string }> = {
  PENDING: { label: "بانتظار القبول", color: "#FFD040" },
  CONFIRMED: { label: "مؤكد", color: "#00C5D7" },
  LOCKED: { label: "ضمان مقفل 🔒", color: "#3D3B6E" },
  DELIVERED: { label: "تم التسليم", color: "#7CB342" },
};

export default function PartnerDashboard() {
  return (
    <>
      <PortalTopbar title="لوحة الشريك" subtitle="إدارة طلباتك وأرباحك" />
      <div className="p-6 space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "📦", label: "طلبات جارية", value: "٣", color: "#F05A7E" },
            { icon: "💰", label: "أرباح هذا الشهر", value: "١٠٬٨٠٠ ر.س", color: "#3D3B6E" },
            { icon: "🔒", label: "في الضمان", value: "٦٬٥٠٠ ر.س", color: "#00C5D7" },
            { icon: "⭐", label: "تقييمي", value: "٤.٨", color: "#FFD040" },
          ].map((k) => (
            <div key={k.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-2">{k.icon}</div>
              <div className="text-xl font-black" style={{ color: k.color }}>{k.value}</div>
              <div className="text-xs text-gray-400 mt-1">{k.label}</div>
            </div>
          ))}
        </div>

        {/* Orders */}
        <section>
          <h2 className="font-black text-lg mb-4" style={{ color: "#3D3B6E" }}>
            الطلبات الحديثة
          </h2>
          <div className="space-y-3">
            {MOCK_ORDERS.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4"
              >
                <div className="flex-1">
                  <div className="font-bold" style={{ color: "#3D3B6E" }}>{order.event}</div>
                  <div className="text-xs text-gray-400">{order.client} · {order.service} · {order.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-base" style={{ color: "#3D3B6E" }}>
                    {order.amount.toLocaleString("ar")} ر.س
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white mt-1 inline-block"
                    style={{ background: STATUS[order.status]?.color }}
                  >
                    {STATUS[order.status]?.label}
                  </span>
                </div>
                {order.status === "PENDING" && (
                  <button
                    className="text-sm font-bold text-white px-4 py-2 rounded-xl"
                    style={{ background: "#3D3B6E" }}
                  >
                    قبول
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Escrow Status */}
        <section className="bg-[#3D3B6E] rounded-2xl p-6 text-white">
          <h2 className="font-black text-lg mb-4">حالة الضمان</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-black">٦٬٥٠٠</div>
              <div className="text-xs opacity-60 mt-1">مقفل (ر.س)</div>
            </div>
            <div>
              <div className="text-2xl font-black">١٠٬٨٠٠</div>
              <div className="text-xs opacity-60 mt-1">محرَّر (ر.س)</div>
            </div>
            <div>
              <div className="text-2xl font-black">٠</div>
              <div className="text-xs opacity-60 mt-1">نزاعات</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
