"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Globe2,
  Bot,
  Users2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Zap,
    title: "AI-Native by Default",
    description:
      "Every project ships with AI baked in — agents automate ops, chatbots convert visitors, and workflows run 24/7. Not a bolt-on, a foundation.",
  },
  {
    icon: Globe2,
    title: "Cross-Border Ready",
    description:
      "Active in UK, US, GCC & Pakistan. We handle local payment rails, VAT compliance, multi-currency, and Arabic storefronts out of the box.",
  },
  {
    icon: Bot,
    title: "Specialist-Only Team",
    description:
      "No generalists winging it. Each service is run by a dedicated expert — eBay, Shopify, AI engineering, full-stack dev, creator marketing.",
  },
  {
    icon: Users2,
    title: "Founder-Led Collective",
    description:
      "A tight-knit team of friends who each run their lane. You work directly with the operator, not an account manager reading a script.",
  },
  {
    icon: ShieldCheck,
    title: "Built on Real Ops",
    description:
      "Every service is one we&apos;ve run ourselves first. No copy-paste playbooks, no theory — just battle-tested systems shipped for you.",
  },
  {
    icon: Sparkles,
    title: "Eight Services, One Team",
    description:
      "Stack e-commerce, web, marketing, and AI into a single growth engine — or pick one. Either way, one partner, one contract, one Slack channel.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-lime/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-lime/5 blur-[120px]" />
      </div>

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
            Why EMBER EASE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            An agency built like a{" "}
            <span className="text-gradient-lime">modern startup</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            We don&apos;t look or operate like a traditional agency. We look
            like the in-house team you wish you could hire — without the
            overhead.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className="relative h-full glass rounded-2xl p-6 border-white/5 hover:border-lime/40 transition-all overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-lime/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500" />

                  <div className="relative">
                    <div className="inline-flex bg-lime/10 border border-lime/30 rounded-xl p-3 mb-4 group-hover:bg-lime group-hover:border-lime transition-all">
                      <Icon
                        className="h-5 w-5 text-lime group-hover:text-black transition-colors"
                        strokeWidth={2.2}
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: feature.description,
                      }}
                    />
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
