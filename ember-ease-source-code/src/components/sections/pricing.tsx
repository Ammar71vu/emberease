"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Crown, Star, Rocket, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tiers = [
  {
    id: "silver",
    name: "Silver Plan",
    icon: Star,
    tagline: "Launch Tier",
    description:
      "Entry-level storefront build with fundamental creator marketing workflows. Perfect for first-time founders testing cross-border waters.",
    price: "Launch",
    priceNote: "Entry-level investment",
    accent: "from-slate-300 to-slate-500",
    border: "border-slate-400/30",
    glow: "bg-slate-400/10",
    features: [
      "Shopify storefront build",
      "Fundamental creator workflows",
      "Basic store management",
      "Single market setup",
      "Email & chat support",
      "Foundational analytics",
    ],
    cta: "Start with Silver",
    highlighted: false,
  },
  {
    id: "gold",
    name: "Gold Plan",
    icon: Rocket,
    tagline: "Scaling Tier",
    description:
      "Complete scaling tier with advanced systems and dedicated remote backend teams. For operators ready to compound growth across markets.",
    price: "Scale",
    priceNote: "Most popular for operators",
    accent: "from-amber-300 to-ember-500",
    border: "border-ember",
    glow: "bg-ember-500/15",
    features: [
      "Everything in Silver",
      "Advanced Shopify systems",
      "Dedicated remote backend team",
      "Multi-market expansion",
      "TikTok creator pipeline (active)",
      "Priority support & ops reviews",
      "Conversion optimization sprints",
    ],
    cta: "Scale with Gold",
    highlighted: true,
  },
  {
    id: "platinum",
    name: "Platinum Plan",
    icon: Crown,
    tagline: "Turnkey Global",
    description:
      "Full-service operational model designed for turnkey global expansion. The complete franchise — ready to run a multi-market empire.",
    price: "Empire",
    priceNote: "Full turnkey franchise",
    accent: "from-ember-400 to-rose-500",
    border: "border-rose-500/40",
    glow: "bg-rose-500/10",
    features: [
      "Everything in Gold",
      "Full-service operational model",
      "Turnkey global expansion",
      "Dedicated cross-border team",
      "Custom app development",
      "Multi-currency optimization",
      "Quarterly strategy reviews",
      "Direct founder-level access",
    ],
    cta: "Go Platinum",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section
      id="franchise"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-ember-500/10 blur-[140px]" />
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
            className="bg-ember-500/10 border-ember text-ember-300 mb-4"
          >
            Structured Growth Frameworks
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            Tailored{" "}
            <span className="text-gradient-ember">investment & scaling</span>{" "}
            plans
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Three tiers — Silver, Gold, Platinum — each a complete operational
            model, not just a price tag. Choose the entry point that matches
            your ambition.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative",
                  tier.highlighted && "lg:-mt-4 lg:mb-4"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-ember-gradient text-white shadow-ember border-0 px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={cn(
                    "relative h-full overflow-hidden p-6 lg:p-8 transition-all",
                    tier.border,
                    tier.highlighted
                      ? "glass-strong shadow-ember-lg"
                      : "glass hover:border-ember/60"
                  )}
                >
                  {/* Background glow */}
                  <div
                    className={cn(
                      "absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-40",
                      tier.glow
                    )}
                  />

                  <div className="relative flex flex-col gap-5 h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={cn(
                          "bg-gradient-to-br rounded-xl p-3 shadow-ember",
                          tier.accent
                        )}
                      >
                        <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
                      </div>
                      <div className="text-right">
                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                          {tier.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Name & description */}
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed min-h-[60px]">
                        {tier.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="border-y border-border py-4 my-1">
                      <div className="flex items-baseline gap-2">
                        <span
                          className={cn(
                            "text-3xl font-bold bg-gradient-to-br bg-clip-text text-transparent",
                            tier.accent
                          )}
                        >
                          {tier.price}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {tier.priceNote}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <div
                            className={cn(
                              "bg-gradient-to-br rounded-full p-0.5 flex-shrink-0 mt-0.5",
                              tier.accent
                            )}
                          >
                            <Check
                              className="h-3 w-3 text-white"
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      asChild
                      className={cn(
                        "w-full group",
                        tier.highlighted
                          ? "bg-ember-gradient hover:opacity-90 text-white shadow-ember"
                          : "border-ember text-foreground hover:bg-ember-500/10"
                      )}
                      variant={tier.highlighted ? "default" : "outline"}
                    >
                      <a href="#contact">
                        {tier.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          All tiers include the operational turnkey framework. Pricing &
          investment details shared during consultation.
        </motion.p>
      </div>
    </section>
  );
}
