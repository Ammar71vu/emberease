"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Globe2, MapPin, Plane, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const markets = [
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    role: "European HQ",
    description:
      "Registered UK Ltd. European market access with GBP & EUR processing.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    flag: "🇺🇸",
    name: "United States",
    role: "Primary market",
    description:
      "USD multi-currency processing, US fulfillment routes, and US/CA market expansion.",
    color: "from-rose-400 to-ember-500",
  },
  {
    flag: "🇵🇰",
    name: "Pakistan",
    role: "Operations hub",
    description:
      "Member of Multan Chamber of Commerce & Industry. Cost-efficient remote operations base.",
    color: "from-emerald-400 to-teal-500",
  },
];

export function GlobalSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-ember-500/8 blur-[140px]" />
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
            Global Footprint
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            One operating partner,{" "}
            <span className="text-gradient-ember">three markets</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            EMBER EASE is registered across UK & Pakistan, with cross-border
            operations active in three primary markets.
          </p>
        </motion.div>

        {/* Markets grid */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12">
          {markets.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="relative h-full glass rounded-2xl p-6 border-ember/30 hover:border-ember transition-all overflow-hidden">
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${m.color} opacity-10 group-hover:opacity-20 blur-3xl transition-opacity`}
                />
                <div className="relative">
                  <div className="text-4xl mb-3">{m.flag}</div>
                  <div className="text-xs uppercase tracking-widest text-ember-400 font-semibold mb-1">
                    {m.role}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{m.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cross-border feature row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-strong rounded-2xl p-6 lg:p-8 border-ember/30"
        >
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-ember-gradient rounded-xl p-3 shadow-ember flex-shrink-0">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Multi-Currency</h4>
                <p className="text-xs text-muted-foreground">
                  GBP, EUR, USD, PKR processing — localized checkout for every
                  market.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-ember-gradient rounded-xl p-3 shadow-ember flex-shrink-0">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Fulfillment Routes</h4>
                <p className="text-xs text-muted-foreground">
                  Pre-negotiated cross-border logistics across UK, US & Pakistan.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-ember-gradient rounded-xl p-3 shadow-ember flex-shrink-0">
                <Globe2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Market Access</h4>
                <p className="text-xs text-muted-foreground">
                  US/UK consumer market entry from day one — no market research
                  needed.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
