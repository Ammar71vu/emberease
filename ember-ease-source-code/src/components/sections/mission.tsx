"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Globe2,
  Rocket,
  Eye,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function MissionSection() {
  return (
    <section
      id="mission"
      className="relative py-20 lg:py-32 overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-lime/5 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-lime/5 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* === HERO STATEMENT === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 lg:mb-24"
        >
          <Badge
            variant="outline"
            className="bg-lime/10 border-lime text-lime mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            Our Mission
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl">
            We believe global business shouldn&apos;t require a{" "}
            <span className="text-gradient-lime">visa.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            For too long, entrepreneurs in emerging markets had one path to
            global e-commerce: move to the West. We&apos;re building a different
            path.
          </p>
        </motion.div>

        {/* === OUR FOUNDER === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 lg:mb-24"
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-lime font-bold mb-8">
            Our Founder
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-4xl">
            {/* Photo */}
            <div className="relative mx-auto">
              <div className="absolute inset-0 bg-lime/20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-lime/20 shadow-lime-lg">
                <img
                  src="/founder-nazim-office.webp"
                  alt="Nazim Hussain — Founder & CEO of EMBER EASE"
                  className="w-full max-w-sm mx-auto block"
                  width={600}
                  height={750}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">Nazim Hussain</h3>
                <p className="text-lime font-semibold text-sm mt-1">
                  Founder &amp; Chief Executive Officer (CEO)
                </p>
                <p className="text-muted-foreground text-sm mt-0.5">
                  EMBER EASE (Pvt.) Ltd.
                </p>
              </div>
              <blockquote className="text-base lg:text-lg text-foreground/90 leading-relaxed border-l-2 border-lime pl-4 italic text-left">
                &ldquo;Leading innovation in e-commerce, empowering
                entrepreneurs, and building opportunities for global business
                growth.&rdquo;
              </blockquote>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Nazim founded EMBER EASE with a simple conviction: talent is
                everywhere, but opportunity isn&apos;t. By combining AI, modern
                e-commerce infrastructure, and dedicated remote operations, he&apos;s
                building a platform where entrepreneurs from any background can
                build, scale, and compete globally — without leaving home.
              </p>
            </div>
          </div>
        </motion.div>

        {/* === THE PROBLEM === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">
              The Problem
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            The Fragmented E-Commerce Stack
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Founders juggle five different tools, three agencies, and zero
            integrated operations. E-commerce becomes a puzzle of disconnected
            pieces — Shopify here, marketing there, fulfillment somewhere else.
            Most give up before they scale.
          </p>
        </motion.div>

        {/* === WHAT WE'RE BUILDING === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">
              What We&apos;re Building
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            EMBER EASE isn&apos;t just an agency.{" "}
            <span className="text-gradient-lime">
              It&apos;s an operating system for global e-commerce.
            </span>
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            We&apos;re creating a new wave of cross-border entrepreneurs. One
            team. Every layer of the stack — e-commerce platforms, marketing,
            web development, AI automation. Built from here. Sold everywhere.
            Where founders don&apos;t dream of moving to the West — they dream
            of building global empires from here.
          </p>
        </motion.div>

        {/* === OUR VISION === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">
              Our Vision
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
            In 10 years, when people talk about e-commerce franchise networks...
            <br />
            <span className="text-gradient-lime">
              They&apos;ll mention the ecosystem that started at EMBER EASE.
            </span>
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Hundreds of storefronts built by our operators. Entrepreneurs who
            don&apos;t migrate for opportunities — they create them. A world
            where the next generation of digital retail brands is built from
            Pakistan, the GCC, and beyond — not just Silicon Valley.
          </p>
        </motion.div>

        {/* === OUR NAME === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">
              Our Name
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            EMBER EASE means{" "}
            <span className="text-gradient-lime">
              &ldquo;the spark made effortless.&rdquo;
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <div className="glass rounded-xl p-5 border-lime/20">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="h-5 w-5 text-lime" />
                <span className="font-bold text-lime">Ember</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The spark that ignites every great business. The fire that
                keeps it growing.
              </p>
            </div>
            <div className="glass rounded-xl p-5 border-lime/20">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-lime" />
                <span className="font-bold text-lime">Ease</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The operational simplicity that lets it scale. No friction, no
                fragmentation.
              </p>
            </div>
          </div>
          <p className="text-base lg:text-lg text-foreground mt-6 font-medium">
            Two words. One mission:{" "}
            <span className="text-lime">Your global growth.</span>
          </p>
        </motion.div>

        {/* === CTA === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl">
            Come with us. Build the future.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-lime hover:bg-lime-300 text-black font-semibold shadow-lime group rounded-xl"
          >
            <Link href="#contact">
              Start Building With Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
