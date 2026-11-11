"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users2,
  Workflow,
  LineChart,
  ArrowRight,
  Network,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const agencySteps = [
  {
    icon: Building2,
    step: "01",
    title: "Brand & Store Architecture",
    description:
      "We design and build your Shopify storefront from the ground up — brand identity, conversion UX, custom apps, and checkout flows optimized for your target market.",
  },
  {
    icon: Users2,
    step: "02",
    title: "Dedicated Remote Team",
    description:
      "A dedicated backend team is assigned to your storefront — fulfillment coordination, customer support, inventory management, and daily ops handled end-to-end.",
  },
  {
    icon: Workflow,
    step: "03",
    title: "Creator Marketing Pipeline",
    description:
      "TikTok creator outreach and UGC content systems go live. We build the organic engine that drives sustainable traffic — no ad burn, no inflated CAC.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Scale & Cross-Border",
    description:
      "Once unit economics are validated, we expand into new markets with multi-currency processing and cross-border fulfillment routes across UK, US & Pakistan.",
  },
];

export function AgencySection() {
  return (
    <section
      id="agency"
      className="relative py-20 lg:py-28 overflow-hidden border-y border-ember/30"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

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
              className="bg-ember-500/10 border-ember text-ember-300 mb-4"
            >
              Agency Model
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              The operational layer behind{" "}
              <span className="text-gradient-ember">
                fast-growing storefronts
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              EMBER EASE combines technology, remote operational teams, and
              international retail frameworks. We connect store development,
              creator marketing pipelines, multi-currency processing, and
              dedicated backend execution into one operating partner.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="glass rounded-xl p-4 border-ember/30">
                <Network className="h-5 w-5 text-ember-400 mb-2" />
                <div className="text-sm font-semibold">Single Partner</div>
                <div className="text-xs text-muted-foreground">
                  End-to-end operations
                </div>
              </div>
              <div className="glass rounded-xl p-4 border-ember/30">
                <Workflow className="h-5 w-5 text-ember-400 mb-2" />
                <div className="text-sm font-semibold">Structured SOPs</div>
                <div className="text-xs text-muted-foreground">
                  Validated playbooks
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right steps */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {agencySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="glass rounded-2xl p-6 border-ember/30 hover:border-ember transition-all flex items-start gap-5">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-ember-gradient rounded-xl blur-md opacity-30 group-hover:opacity-60 transition-opacity" />
                      <div className="relative bg-ember-gradient rounded-xl p-3 shadow-ember">
                        <Icon
                          className="h-5 w-5 text-white"
                          strokeWidth={2.2}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-ember-400 font-bold">
                          {step.step}
                        </span>
                        <div className="h-px flex-1 bg-border" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-ember-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
