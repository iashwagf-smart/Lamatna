import { PortalSidebar } from "@/components/layout/PortalSidebar";

const NAV = [
  { href: "/admin/dashboard", icon: "📊", label: "لوحة القيادة" },
  { href: "/admin/vendors", icon: "🏪", label: "مراجعة الموردين" },
  { href: "/admin/tracks", icon: "🗺️", label: "بناء المسارات" },
  { href: "/admin/escrow", icon: "🔒", label: "سجل الضمان" },
  { href: "/admin/disputes", icon: "⚖️", label: "النزاعات" },
  { href: "/admin/ads", icon: "📢", label: "الإعلانات" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen" style={{ background: "#F0F4FF" }}>
      <PortalSidebar
        navItems={NAV}
        portalLabel="لوحة الإدارة"
        accentColor="#3D3A5C"
        gradientFrom="#3D3A5C"
        gradientTo="#3D3A5C"
      />
      <div className="flex-1 mr-[260px] flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
