"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Layers, Plane, Server, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    icon: Target,
    label: "Our Mission",
    title: "Simplifying E-Commerce Operations Worldwide",
    description:
      "We strip the complexity out of running a global storefront. Every operational layer — from product photography to cross-border logistics — is engineered to remove friction so founders can focus on brand and growth.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    title: "The Preferred Operating Partner for Retail Founders",
    description:
      "We exist to be the invisible backbone behind the next generation of digital retail brands — the team founders trust to handle the back office while they build the front of brand.",
  },
];

const frameworkSteps = [
  {
    icon: Layers,
    title: "Remove Backend Friction",
    description:
      "Pre-built operational workflows for fulfillment, support, inventory, and finance — no building from scratch.",
  },
  {
    icon: Plane,
    title: "Cross-Border Market Scale",
    description:
      "Multi-market infrastructure for UK, US & Pakistan, with localized payment rails and fulfillment routes.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We operate as your dedicated team — not an agency on a clock. Our success is tied to your storefront's performance.",
  },
];

export function PhilosophySection() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 overflow-hidden border-y border-ember/30"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-ember-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12 lg:mb-16"
        >
          <Badge
            variant="outline"
            className="bg-ember-500/10 border-ember text-ember-300 mb-4"
          >
            Core Philosophy & Vision
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            Driven by{" "}
            <span className="text-gradient-ember">
              operational excellence
            </span>
            , built for global brands
          </h2>
        </motion.div>

        {/* Mission & Vision cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-12 lg:mb-16">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full glass-strong rounded-2xl p-6 lg:p-8 border-ember/30 hover:border-ember transition-all overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-ember-500/10 blur-3xl rounded-full" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-ember-gradient rounded-xl p-3 shadow-ember">
                        <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-ember-400 font-semibold">
                        {p.label}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cross-border framework */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl lg:text-3xl font-bold">
            Cross-Border Ready in{" "}
            <span className="text-gradient-ember">UK, US & Pakistan</span>
          </h3>
          <p className="text-muted-foreground mt-2">
            A three-step operational framework powering every franchise we ship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent" />

          {frameworkSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-ember-gradient rounded-2xl blur-md opacity-50 animate-pulse-glow" />
                    <div className="relative bg-ember-gradient rounded-2xl p-4 shadow-ember-lg">
                      <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-background border border-ember rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold text-ember-400">
                      {i + 1}
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
