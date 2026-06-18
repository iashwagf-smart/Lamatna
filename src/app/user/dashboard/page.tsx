import { PortalTopbar } from "@/components/layout/PortalTopbar";
import Link from "next/link";

const MOCK_EVENTS = [
  {
    id: "1",
    title: "حفل تخرج نوف",
    type: "تخرج 🎓",
    date: "٢٥ يونيو ٢٠٢٦",
    progress: 75,
    members: 6,
    budget: 15000,
    raised: 11250,
    status: "PLANNING",
  },
  {
    id: "2",
    title: "عيد ميلاد ريما",
    type: "عيد ميلاد 🎂",
    date: "١٠ يوليو ٢٠٢٦",
    progress: 30,
    members: 4,
    budget: 8000,
    raised: 2400,
    status: "DRAFT",
  },
];

const STATUS_COLORS: Record<string, string> = {
  DRAFT: "#C83F74",
  PLANNING: "#3A3089",
  LOCKED: "#333369",
  ACTIVE: "#F8669E",
  COMPLETED: "#7CB342",
};
const STATUS_LABELS: Record<string, string> = {
  DRAFT: "مسودة",
  PLANNING: "جارٍ التخطيط",
  LOCKED: "مقفل",
  ACTIVE: "نشط",
  COMPLETED: "مكتمل",
};

export default function UserDashboard() {
  return (
    <>
      <PortalTopbar
        title="مساء الخير! 👋"
        subtitle="إدارة فعالياتك ودوائرك"
        actions={
          <Link
            href="/user/events/new"
            className="text-sm font-bold text-white px-5 py-2 rounded-full"
            style={{ background: "linear-gradient(135deg, #F8669E, #C83F74)" }}
          >
            + فعالية جديدة
          </Link>
        }
      />

      <div className="p-6 space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "فعاليات نشطة", value: "٢", color: "#333369", icon: "🎉" },
            { label: "إجمالي المجموعات", value: "١٠", color: "#F8669E", icon: "👥" },
            { label: "تم جمعه", value: "١٣٬٦٥٠ ر.س", color: "#3A3089", icon: "💰" },
            { label: "تقييمي", value: "٤.٩ ⭐", color: "#C83F74", icon: "🏆" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-xl font-black" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Active Events */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-black text-lg" style={{ color: "#333369" }}>
              دوائري النشطة
            </h2>
            <Link href="/user/events" className="text-sm text-[#F8669E] font-semibold">
              عرض الكل
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_EVENTS.map((ev) => (
              <Link
                key={ev.id}
                href={`/user/events/${ev.id}`}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-base" style={{ color: "#333369" }}>{ev.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{ev.type} · {ev.date}</p>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: STATUS_COLORS[ev.status] }}
                  >
                    {STATUS_LABELS[ev.status]}
                  </span>
                </div>

                {/* Progress */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>التقدم</span>
                    <span>{ev.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${ev.progress}%`, background: "linear-gradient(90deg, #333369, #3A3089)" }}
                    />
                  </div>
                </div>

                {/* Gattah */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400">القطّة</div>
                    <div className="text-sm font-bold" style={{ color: "#333369" }}>
                      {ev.raised.toLocaleString("ar")} / {ev.budget.toLocaleString("ar")} ر.س
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>👥</span>
                    <span>{ev.members} أعضاء</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="font-black text-lg mb-4" style={{ color: "#333369" }}>
            إجراءات سريعة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "🎉", label: "فعالية جديدة", href: "/user/events/new", color: "#333369" },
              { icon: "🔗", label: "دعوة أصدقاء", href: "#", color: "#F8669E" },
              { icon: "🏪", label: "تصفح الموردين", href: "#", color: "#3A3089" },
              { icon: "💰", label: "إدارة القطّة", href: "#", color: "#C83F74" },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="bg-white rounded-2xl p-5 border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{action.icon}</div>
                <div className="text-xs font-bold" style={{ color: action.color }}>
                  {action.label}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
