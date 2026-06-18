"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "فعالية مُنظَّمة", value: 1200, suffix: "+" },
  { label: "شريك موثوق", value: 340, suffix: "+" },
  { label: "مدينة مغطاة", value: 28, suffix: "" },
  { label: "نجمة متوسط التقييم", value: 4.9, suffix: "", decimals: 1 },
];

function Counter({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(current);
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString("ar")}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section style={{ padding: "60px 24px", background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="ev-card p-6 text-center"
              style={{ borderTop: `4px solid ${i % 2 === 0 ? "#333369" : "#F8669E"}` }}
            >
              <div
                className="text-3xl md:text-4xl font-black mb-2"
                style={{ color: i % 2 === 0 ? "#333369" : "#F8669E", fontFamily: "'Cairo', 'Inter', sans-serif" }}
              >
                <Counter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-sm font-medium" style={{ color: "#707070" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
