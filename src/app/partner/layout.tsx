import { PortalSidebar } from "@/components/layout/PortalSidebar";

const NAV = [
  { href: "/partner/dashboard", icon: "📊", label: "لوحة التحكم" },
  { href: "/partner/orders", icon: "📦", label: "الطلبات" },
  { href: "/partner/catalog", icon: "🛍️", label: "الكتالوج" },
  { href: "/partner/chat", icon: "💬", label: "المحادثات" },
  { href: "/partner/earnings", icon: "💰", label: "الأرباح" },
  { href: "/partner/profile", icon: "🏪", label: "ملفي التجاري" },
];

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen" style={{ background: "#FFF5F7" }}>
      <PortalSidebar
        navItems={NAV}
        portalLabel="بوابة الشركاء"
        accentColor="#C46878"
        gradientFrom="#C46878"
        gradientTo="#C46878"
      />
      <div className="flex-1 mr-[260px] flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
