"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { PatternBar } from "./PatternBar";

type NavItem = { href: string; icon: string; label: string };

interface PortalSidebarProps {
  navItems: NavItem[];
  portalLabel: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export function PortalSidebar({
  navItems,
  portalLabel,
  accentColor,
  gradientFrom,
  gradientTo,
}: PortalSidebarProps) {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <aside
      className="fixed top-0 right-0 bottom-0 w-[260px] flex flex-col z-30 shadow-lg"
      style={{ background: "white", borderLeft: `1px solid #EDE8E0` }}
    >
      <PatternBar />
      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl"
          style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
        >
          ل
        </div>
        <div>
          <div className="font-black text-lg" style={{ color: "#3D3A5C" }}>لمتنا</div>
          <div className="text-xs text-gray-400">{portalLabel}</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 overflow-y-auto">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-sm font-semibold transition-all",
                active
                  ? "text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              )}
              style={
                active
                  ? { background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }
                  : {}
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
            style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
          >
            {session?.user?.name?.charAt(0) ?? "م"}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm truncate" style={{ color: "#3D3A5C" }}>
              {session?.user?.name ?? "المستخدم"}
            </div>
            <div className="text-xs text-gray-400 truncate">{session?.user?.email ?? ""}</div>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full text-xs text-gray-400 hover:text-red-500 transition-colors py-1"
        >
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}
