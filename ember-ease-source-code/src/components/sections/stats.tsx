"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Globe2, Layers, Bot } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: 8,
    suffix: "",
    prefix: "",
    label: "Core Services",
    sublabel: "Full-stack coverage",
  },
  {
    icon: Globe2,
    value: 4,
    suffix: "",
    prefix: "",
    label: "Active Markets",
    sublabel: "UK · US · GCC · Pakistan",
  },
  {
    icon: Layers,
    value: 30,
    suffix: "+",
    prefix: "",
    label: "Store Launches",
    sublabel: "E-commerce builds shipped",
  },
  {
    icon: Bot,
    value: 100,
    suffix: "%",
    prefix: "",
    label: "AI-Native",
    sublabel: "Every project AI-augmented",
  },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const duration = 1500;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-16 lg:py-20 border-y border-white/5 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="glass rounded-2xl p-5 lg:p-6 border-white/5 hover:border-lime/40 transition-all hover:shadow-lime">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-lime rounded-lg p-2 shadow-lime">
                      <Icon className="h-4 w-4 text-black" />
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gradient-lime tracking-tight">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-sm font-medium mt-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
