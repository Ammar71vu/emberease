"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Rocket,
  Globe2,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experienceHighlights = [
  {
    icon: Briefcase,
    title: "Cross-Channel E-Commerce",
    description:
      "Built and operated storefronts across eBay, Etsy, and Shopify — covering everything from product sourcing to listing SEO and conversion optimization.",
  },
  {
    icon: Globe2,
    title: "Multi-Market Operations",
    description:
      "Hands-on experience launching and scaling e-commerce in UK, US, Pakistan, and the GCC — including local payment setup, VAT compliance, and Arabic-ready storefronts.",
  },
  {
    icon: Rocket,
    title: "AI-Native Build Practice",
    description:
      "Every project ships with AI baked in — from agentic workflows that automate ops to chatbots that convert visitors 24/7. We don&apos;t bolt AI on; we build with it.",
  },
  {
    icon: Users,
    title: "Specialist Network",
    description:
      "A close-knit team of friends who are each an expert in their lane — e-commerce ops, full-stack dev, AI engineering, and creator marketing. No generalists winging it.",
  },
];

const milestones = [
  { year: "2024", label: "Founded EMBER EASE", detail: "Started as a Shopify-focused franchise network" },
  { year: "2025", label: "Expanded to GCC markets", detail: "Shopify setups across UAE, KSA & wider GCC" },
  { year: "2025", label: "Added AI practice", detail: "Agentic AI + custom chatbots as core services" },
  { year: "2026", label: "Full-stack agency", detail: "8 services across e-com, web, marketing & AI" },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-lime/5 blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <Badge
              variant="outline"
              className="bg-lime/10 border-lime text-lime mb-4"
            >
              <Award className="h-3.5 w-3.5 mr-1.5" />
              Our Experience
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Built from real{" "}
              <span className="text-gradient-lime">operator experience</span>
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              EMBER EASE didn&apos;t start as an agency — it started as a team
              of operators who built and scaled their own e-commerce stores,
              websites, and AI systems first. Every service we offer is one
              we&apos;ve run ourselves, not just read about.
            </p>

            {/* Milestone timeline */}
            <div className="mt-8 flex flex-col gap-3">
              {milestones.map((m, i) => (
                <motion.div
                  key={`${m.year}-${m.label}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-lime text-black font-mono text-xs font-bold rounded-md px-2 py-1">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px h-8 bg-gradient-to-b from-lime/40 to-transparent mt-1" />
                    )}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="text-sm font-semibold group-hover:text-lime transition-colors">
                      {m.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {m.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right highlights grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 lg:gap-6">
            {experienceHighlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  <div className="relative h-full glass rounded-2xl p-6 border-white/5 hover:border-lime/40 transition-all overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-32 h-32 rounded-full bg-lime/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity" />
                    <div className="relative">
                      <div className="bg-lime/10 border border-lime/30 rounded-xl p-3 mb-4 group-hover:bg-lime group-hover:border-lime transition-all">
                        <Icon
                          className="h-5 w-5 text-lime group-hover:text-black transition-colors"
                          strokeWidth={2.2}
                        />
                      </div>
                      <h3 className="text-base font-bold mb-2">{h.title}</h3>
                      <p
                        className="text-sm text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: h.description }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="sm:col-span-2"
            >
              <div className="relative glass-strong rounded-2xl p-6 border-lime/20 overflow-hidden">
                <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-lime/15 blur-3xl" />
                <div className="relative flex items-center gap-4">
                  <CheckCircle2
                    className="h-10 w-10 text-lime flex-shrink-0"
                    strokeWidth={2}
                  />
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      Every project backed by real operating history
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      No theory, no copy-paste playbooks. Just battle-tested
                      systems we&apos;ve run ourselves — and now ship for you.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
