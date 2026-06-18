export function PatternBar({ className = "" }: { className?: string }) {
  const colors = [
    "#333369", "#F8669E", "#3A3089", "#C83F74",
    "#333369", "#F8669E", "#3A3089", "#C83F74",
    "#333369", "#F8669E", "#3A3089", "#C83F74",
  ];
  return (
    <div className={`flex h-[6px] w-full ${className}`}>
      {colors.map((color, i) => (
        <span key={i} className="flex-1" style={{ background: color }} />
      ))}
    </div>
  );
}
