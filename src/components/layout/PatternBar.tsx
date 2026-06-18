export function PatternBar({ className = "" }: { className?: string }) {
  const colors = [
    "#3D3B6E", "#F05A7E", "#00C5D7", "#FFD040",
    "#E91E8C", "#FF6B35", "#3D3B6E", "#F05A7E",
    "#00C5D7", "#FFD040", "#E91E8C", "#FF6B35",
  ];
  return (
    <div className={`flex h-[6px] w-full ${className}`}>
      {colors.map((color, i) => (
        <span key={i} className="flex-1" style={{ background: color }} />
      ))}
    </div>
  );
}
