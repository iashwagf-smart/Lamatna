import { PortalSidebar } from "@/components/layout/PortalSidebar";

const NAV = [
  { href: "/user/dashboard", icon: "🏠", label: "الرئيسية" },
  { href: "/user/events/new", icon: "➕", label: "فعالية جديدة" },
  { href: "/user/events", icon: "🎉", label: "فعالياتي" },
  { href: "/user/favorites", icon: "❤️", label: "المفضلة" },
  { href: "/user/notifications", icon: "🔔", label: "الإشعارات" },
  { href: "/user/profile", icon: "👤", label: "حسابي" },
];

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F7F7F7]">
      <PortalSidebar
        navItems={NAV}
        portalLabel="بوابة العملاء"
        accentColor="#333369"
        gradientFrom="#333369"
        gradientTo="#3A3089"
      />
      <div className="flex-1 mr-[260px] flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
