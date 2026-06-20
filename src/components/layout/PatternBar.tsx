export function PatternBar({ className = "" }: { className?: string }) {
  const colors = [
    "#3D3A5C", "#594E6A", "#C46878", "#E07840", "#F0C040",
    "#3D3A5C", "#594E6A", "#C46878", "#E07840", "#F0C040",
    "#3D3A5C", "#C46878",
  ];
  return (
    <div className={`flex h-[6px] w-full ${className}`}>
      {colors.map((color, i) => (
        <span key={i} className="flex-1" style={{ background: color }} />
      ))}
    </div>
  );
}
