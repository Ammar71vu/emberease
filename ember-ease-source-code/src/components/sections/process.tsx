"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Audit",
    description:
      "We map your business, audience, and current stack. Identify the highest-leverage channel — e-commerce, web, or AI automation — and define measurable goals.",
    duration: "Week 1",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Strategy & Build",
    description:
      "Specialists design and build the solution: storefront, website, or AI agent. We integrate payment, fulfillment, and analytics before launch — not after.",
    duration: "Weeks 2–3",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Activate",
    description:
      "We ship to production. TikTok creator pipelines go live, chatbots deploy to your site, and AI agents start automating — monitored daily by your dedicated team.",
    duration: "Week 4",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Scale & Optimize",
    description:
      "Once unit economics validate, we expand — new markets (GCC, US, UK), new channels, more automations. Quarterly strategy reviews keep growth compounding.",
    duration: "Ongoing",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-20 lg:py-28 overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12 lg:mb-16"
        >
          <Badge
            variant="outline"
            className="bg-lime/10 border-lime text-lime mb-4"
          >
            How We Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            A four-step path from{" "}
            <span className="text-gradient-lime">idea to scale</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Every project follows the same battle-tested process — built to ship
            fast and scale predictably.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
          {/* Connection line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 border-white/5 hover:border-lime/40 transition-all h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-lime rounded-xl blur-md opacity-30 animate-pulse-glow" />
                      <div className="relative bg-lime rounded-xl p-3 shadow-lime">
                        <Icon
                          className="h-5 w-5 text-black"
                          strokeWidth={2.2}
                        />
                      </div>
                    </div>
                    <span className="font-mono text-2xl font-bold text-lime/30">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {step.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="text-xs font-mono text-lime">
                      {step.duration}
                    </span>
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
