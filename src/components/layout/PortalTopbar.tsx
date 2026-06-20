"use client";

interface PortalTopbarProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export function PortalTopbar({ title, subtitle, actions }: PortalTopbarProps) {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between shadow-sm">
      <div>
        <h1 className="font-black text-lg" style={{ color: "#3D3A5C" }}>
          {title}
        </h1>
        {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </header>
  );
}
