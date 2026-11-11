"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  X,
  ArrowRight,
  ShoppingCart,
  Store,
  Globe,
  Video,
  Code2,
  Bot,
  MessageSquare,
  Package,
  CreditCard,
  Building2,
  Check,
  ArrowLeft,
} from "lucide-react";
import { useServicesStore } from "@/store/services-store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    label: "E-Commerce Platforms",
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
    label: "Sourcing & Supply Chain",
    services: [
      {
        icon: Package,
        name: "Product Sourcing — China Suppliers",
        description:
          "Direct sourcing from verified Chinese manufacturers and wholesale markets. We handle supplier vetting, price negotiation, sample quality checks, quality control, and shipping logistics — so you get the right product at the right price.",
        features: [
          "Supplier vetting & verification",
          "Price negotiation",
          "Sample quality control",
          "Shipping & customs handling",
        ],
      },
      {
        icon: Package,
        name: "Product Sourcing — UK Suppliers",
        description:
          "Sourcing from UK-based suppliers and wholesalers for faster domestic fulfillment, lower shipping times, and access to UK-exclusive product lines. Ideal for eBay UK, Etsy UK, and Shopify UK storefronts.",
        features: [
          "UK wholesale network",
          "Domestic fulfillment routes",
          "UK-exclusive product lines",
          "Faster delivery times",
        ],
      },
    ],
  },
  {
    label: "Payments & Integration",
    services: [
      {
        icon: CreditCard,
        name: "Shopify Third-Party Payment Gateway Integration",
        description:
          "Integration of third-party payment gateways into your Shopify store — Stripe, PayPal, Klarna, Razorpay, Telr, Tap, Moyasar, and regional gateways. Multi-currency checkout, subscription billing, and fraud protection configured end-to-end.",
        features: [
          "Stripe, PayPal, Klarna setup",
          "Regional gateways (Telr, Tap, Moyasar)",
          "Multi-currency checkout",
          "Subscription & fraud protection",
        ],
      },
    ],
  },
  {
    label: "Business Setup & Legal",
    services: [
      {
        icon: Building2,
        name: "Business Setup in Europe",
        description:
          "Complete company formation and business setup across European markets — UK Ltd, Estonia e-Residency, Germany GmbH, and more. VAT registration, EORI numbers, bank account opening assistance, and compliance with EU regulations.",
        features: [
          "UK Ltd company formation",
          "Estonia e-Residency setup",
          "VAT & EORI registration",
          "EU compliance & bank accounts",
        ],
      },
    ],
  },
  {
    label: "Marketing & Growth",
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

export function ServicesOverlay() {
  const { isOpen, close } = useServicesStore();

  // Lock body scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-xl overflow-y-auto"
        >
          {/* Top bar */}
          <div className="sticky top-0 z-10 glass-strong border-b border-white/10">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 lg:h-20">
                <button
                  onClick={close}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-medium">Back to Home</span>
                </button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-lime font-semibold">All Services</span>
                  <span className="text-white/20">·</span>
                  <span>{categories.reduce((a, c) => a + c.services.length, 0)} services</span>
                </div>
                <button
                  onClick={close}
                  className="glass rounded-xl p-2 text-muted-foreground hover:text-foreground hover:border-lime/40 transition-all"
                  aria-label="Close services page"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center mb-12 lg:mb-16"
            >
              <Badge
                variant="outline"
                className="bg-lime/10 border-lime text-lime mb-4"
              >
                Full Service Catalog
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
                Everything you need to{" "}
                <span className="text-gradient-lime">scale a business</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl text-base lg:text-lg">
                12 services across 7 categories — from product sourcing and
                payment integration to business setup in Europe, AI agents, and
                custom chatbots. Pick one or stack them all.
              </p>
            </motion.div>

            {/* Category sections */}
            <div className="flex flex-col gap-12 lg:gap-16">
              {categories.map((cat, ci) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: ci * 0.05 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-lime">
                        0{ci + 1}
                      </span>
                      <h2 className="text-xl lg:text-2xl font-bold">
                        {cat.label}
                      </h2>
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
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: ci * 0.05 + i * 0.05 }}
                          whileHover={{ y: -4 }}
                          className="group relative"
                        >
                          <div className="relative h-full glass rounded-2xl p-6 border-white/5 hover:border-lime/40 transition-all overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-lime/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500" />

                            <div className="relative flex flex-col gap-4 h-full">
                              <div className="flex items-start justify-between gap-4">
                                <div className="bg-lime/10 border border-lime/30 rounded-xl p-3 group-hover:bg-lime group-hover:border-lime transition-all">
                                  <Icon
                                    className="h-5 w-5 text-lime group-hover:text-black transition-colors"
                                    strokeWidth={2.2}
                                  />
                                </div>
                              </div>

                              <div>
                                <h3 className="text-lg font-bold mb-2">
                                  {service.name}
                                </h3>
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

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 lg:mt-20 flex flex-col items-center text-center"
            >
              <div className="glass-strong rounded-2xl p-8 lg:p-10 border-lime/20 max-w-2xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                  Not sure which services you need?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book a free consultation. We&apos;ll map the right combination
                  of services to your business goals and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={close}
                    asChild
                    size="lg"
                    className="bg-lime hover:bg-lime-300 text-black font-semibold shadow-lime group rounded-xl"
                  >
                    <Link href="#contact" onClick={close}>
                      Book a Consultation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    onClick={close}
                    variant="outline"
                    size="lg"
                    className="border-white/15 text-foreground hover:bg-white/5 rounded-xl"
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
