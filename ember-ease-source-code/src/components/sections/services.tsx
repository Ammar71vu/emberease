"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Store,
  Globe,
  Video,
  Code2,
  Bot,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useServicesStore } from "@/store/services-store";

const categories = [
  {
    label: "E-Commerce Platforms",
    accent: "text-lime",
    services: [
      {
        icon: ShoppingCart,
        name: "eBay Store Setup",
        description:
          "Full eBay store design, listing optimization, SEO-friendly titles, and product catalog management for sustainable organic sales.",
        features: [
          "Store design & branding",
          "Listing optimization",
          "Catalog management",
          "Seller metrics growth",
        ],
      },
      {
        icon: Store,
        name: "Etsy Shop Setup",
        description:
          "Handmade and digital product storefronts on Etsy — keyword research, listing SEO, shop branding, and conversion-tuned product photography guidance.",
        features: [
          "Shop branding",
          "Listing SEO",
          "Keyword research",
          "Digital product setup",
        ],
      },
      {
        icon: Globe,
        name: "Shopify Development",
        description:
          "Custom Shopify builds — themes, apps, checkout optimization, multi-currency, and conversion-optimized UX for scale-ready storefronts.",
        features: [
          "Custom theme dev",
          "App integration",
          "Checkout optimization",
          "Multi-currency setup",
        ],
      },
      {
        icon: Globe,
        name: "Shopify GCC Setup",
        description:
          "Shopify business setup across GCC countries — UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman. Local payment rails, VAT compliance, and Arabic-ready storefronts.",
        features: [
          "UAE & KSA market entry",
          "Local payment gateways",
          "VAT & compliance config",
          "Arabic storefront option",
        ],
      },
    ],
  },
  {
    label: "Marketing & Growth",
    accent: "text-lime",
    services: [
      {
        icon: Video,
        name: "TikTok Marketing",
        description:
          "Organic TikTok growth through creator pipelines, UGC content systems, and trend-driven content strategy — sustainable traffic with zero ad burn.",
        features: [
          "Creator pipeline",
          "UGC content systems",
          "Trend strategy",
          "Performance analytics",
        ],
      },
    ],
  },
  {
    label: "Web & Engineering",
    accent: "text-lime",
    services: [
      {
        icon: Code2,
        name: "Full-Stack Website Creation",
        description:
          "Production websites and web apps built with modern stacks — Next.js, React, TypeScript, Tailwind, and databases. From landing pages to SaaS dashboards.",
        features: [
          "Next.js / React apps",
          "SaaS dashboards",
          "API & backend",
          "Database design",
        ],
      },
    ],
  },
  {
    label: "AI & Automation",
    accent: "text-lime",
    services: [
      {
        icon: Bot,
        name: "Agentic AI",
        description:
          "Custom AI agents that automate workflows — lead research, customer outreach, content generation, and ops tasks running 24/7 in the background.",
        features: [
          "Custom AI agents",
          "Workflow automation",
          "Lead & outreach bots",
          "Content pipelines",
        ],
      },
      {
        icon: MessageSquare,
        name: "Chatbot Creation",
        description:
          "AI-powered chatbots for websites that scale any business — handle support, qualify leads, recommend products, and convert visitors 24/7.",
        features: [
          "Website chatbots",
          "Lead qualification",
          "Product recommendations",
          "Support automation",
        ],
      },
    ],
  },
];

export function ServicesSection() {
  const openServices = useServicesStore((s) => s.open);

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

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
            className="bg-lime/10 border-lime text-lime mb-4"
          >
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            Eight ways we{" "}
            <span className="text-gradient-lime">scale a business</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            From storefronts to AI agents — pick a single service or stack them
            into a full growth engine. Each one is run by a dedicated specialist.
          </p>
        </motion.div>

        {/* Category groups */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-lime">
                    0{ci + 1}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold">
                    {cat.label}
                  </h3>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-lime/40 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {cat.services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="group relative"
                    >
                      <div className="relative h-full glass rounded-2xl p-6 border-white/5 hover:border-lime/40 transition-all overflow-hidden">
                        {/* Hover glow */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-lime/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500" />

                        <div className="relative flex flex-col gap-4 h-full">
                          <div className="flex items-start justify-between gap-4">
                            <div className="bg-lime/10 border border-lime/30 rounded-xl p-3 group-hover:bg-lime group-hover:border-lime transition-all">
                              <Icon
                                className="h-5 w-5 text-lime group-hover:text-black transition-colors"
                                strokeWidth={2.2}
                              />
                            </div>
                            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-lime group-hover:rotate-45 transition-all" />
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mb-2">
                              {service.name}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mt-auto pt-2">
                            {service.features.map((f) => (
                              <div
                                key={f}
                                className="flex items-center gap-2 text-xs text-muted-foreground"
                              >
                                <div className="bg-lime/15 rounded-full p-0.5">
                                  <Check
                                    className="h-3 w-3 text-lime"
                                    strokeWidth={3}
                                  />
                                </div>
                                {f}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mt-12 lg:mt-16"
        >
          <p className="text-sm text-muted-foreground mb-4 max-w-xl">
            Plus 4 more services — Product Sourcing (China & UK), Payment
            Gateway Integration, and Business Setup in Europe.
          </p>
          <Button
            onClick={openServices}
            size="lg"
            className="bg-lime hover:bg-lime-300 text-black font-semibold shadow-lime group rounded-xl"
          >
            View All 12 Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
