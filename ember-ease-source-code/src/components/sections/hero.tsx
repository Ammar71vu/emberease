"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Bot,
  ShoppingCart,
  Code2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const serviceChips = [
  { icon: ShoppingCart, label: "eBay · Etsy · Shopify" },
  { icon: Code2, label: "Full-Stack Web" },
  { icon: Bot, label: "Agentic AI" },
  { icon: Zap, label: "Chatbots" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* Transparent base — lets the fixed AmbientGlow show through */}
        <div className="absolute inset-0 bg-transparent" />

        {/* One subtle accent orb (top-right only, doesn't compete with corner glow) */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-lime-500/8 blur-[120px]"
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        {/* Top fade only — bottom stays transparent so AmbientGlow shows through */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="bg-lime/10 border-lime text-lime px-4 py-1.5 text-xs font-medium"
              >
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Full-Stack Digital Agency · UK · US · Pakistan
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              Scale any business with{" "}
              <span className="text-gradient-lime animate-gradient-x">
                AI, e-commerce
              </span>{" "}
              & automation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              EMBER EASE builds and scales modern businesses end-to-end —
              eBay, Etsy, Shopify (incl. GCC), TikTok marketing, full-stack
              websites, agentic AI, and custom chatbots. One team, every layer
              of your growth.
            </motion.p>

            {/* Service chips */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {serviceChips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={chip.label}
                    className="glass rounded-full px-3 py-1.5 text-xs flex items-center gap-1.5 text-muted-foreground hover:text-foreground hover:border-lime/40 transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5 text-lime" />
                    {chip.label}
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                asChild
                size="lg"
                className="bg-lime hover:bg-lime-300 text-black font-semibold shadow-lime group rounded-xl"
              >
                <Link href="#contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 text-foreground hover:bg-white/5 group rounded-xl"
              >
                <Link href="#services">
                  <Play className="mr-2 h-4 w-4" />
                  Explore Services
                </Link>
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full bg-gradient-to-br from-lime-300 to-lime-500 border-2 border-black flex items-center justify-center"
                  >
                    <Zap
                      className="h-4 w-4 text-black"
                      strokeWidth={2.5}
                      fill="black"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-lime text-lime"
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground mt-0.5">
                  Founders scaling across UK · US · GCC · Pakistan
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Floating capability card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative glass-strong rounded-2xl p-6 shadow-lime-lg border-lime/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-lime rounded-lg p-2">
                      <Bot className="h-4 w-4 text-black" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      What We Ship
                    </span>
                  </div>
                  <Badge className="bg-lime/15 text-lime border-lime/30 hover:bg-lime/20">
                    8 services
                  </Badge>
                </div>

                {/* Service grid mini */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "eBay Stores",
                    "Etsy Shops",
                    "Shopify Builds",
                    "Shopify GCC",
                    "TikTok Marketing",
                    "Full-Stack Web",
                    "Agentic AI",
                    "Custom Chatbots",
                  ].map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="glass rounded-lg px-3 py-2 text-xs flex items-center gap-2 hover:border-lime/40 transition-colors"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-lime" />
                      {s}
                    </motion.div>
                  ))}
                </div>

                {/* Bottom stat */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Avg. time-to-launch
                    </div>
                    <div className="text-lg font-bold text-gradient-lime">
                      2–4 weeks
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">
                      Markets
                    </div>
                    <div className="text-lg font-bold">UK · US · GCC · PK</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating mini cards */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -top-6 -left-6 glass rounded-xl p-3 shadow-lime border-lime/20 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-lime" />
                  <div>
                    <div className="text-xs font-semibold">Multi-Channel</div>
                    <div className="text-[10px] text-muted-foreground">
                      eBay · Etsy · Shopify
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -right-6 glass rounded-xl p-3 shadow-lime border-lime/20 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-lime" />
                  <div>
                    <div className="text-xs font-semibold">AI-Native</div>
                    <div className="text-[10px] text-muted-foreground">
                      Agents + chatbots
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-lime/60 to-transparent" />
      </motion.div>
    </section>
  );
}
