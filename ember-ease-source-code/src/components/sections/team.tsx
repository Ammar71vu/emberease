"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Linkedin,
  Twitter,
  Crown,
  Briefcase,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Nazim Hussain",
    role: "Founder & CEO · EMBER EASE (Pvt.) Ltd.",
    initials: "NH",
    photo: "/founder-nazim-office.webp",
    expertise: [
      "E-Commerce Strategy",
      "Global Business Growth",
      "AI-Powered Operations",
      "Cross-Border Expansion",
    ],
    bio: "Leading innovation in e-commerce, empowering entrepreneurs, and building opportunities for global business growth. Founded EMBER EASE to give entrepreneurs from any background the infrastructure to build, scale, and compete globally — without leaving home.",
    isFounder: true,
  },
  {
    name: "Full-Stack Engineer",
    role: "Web & Engineering",
    initials: "FS",
    expertise: [
      "Next.js / React",
      "TypeScript",
      "Database & API Design",
      "Production DevOps",
    ],
    bio: "Specialist in modern web apps — from landing pages to SaaS dashboards. Ships production code with clean architecture and AI-augmented workflows.",
  },
  {
    name: "AI Engineer",
    role: "Agentic AI & Chatbots",
    initials: "AI",
    expertise: [
      "LLM Integration",
      "Custom AI Agents",
      "Chatbot Architecture",
      "Workflow Automation",
    ],
    bio: "Builds custom AI agents and chatbots that automate ops, qualify leads, and convert visitors. Every automation is measured against real business metrics.",
  },
  {
    name: "TikTok Marketing Lead",
    role: "Creator Marketing",
    initials: "TM",
    expertise: [
      "Creator Pipelines",
      "UGC Content Systems",
      "Trend Strategy",
      "Organic Growth",
    ],
    bio: "Runs organic TikTok growth through micro-influencer outreach and UGC content systems. Sustainable traffic without inflated ad spend.",
  },
  {
    name: "E-Commerce Ops Lead",
    role: "Store Management",
    initials: "EO",
    expertise: [
      "Listing Optimization",
      "Catalog Management",
      "Fulfillment Coordination",
      "Seller Metrics",
    ],
    bio: "Manages day-to-day store operations across eBay, Etsy, and Shopify. Handles fulfillment coordination, customer support ops, and seller health.",
  },
  {
    name: "GCC Market Specialist",
    role: "GCC Expansion",
    initials: "GS",
    expertise: [
      "UAE & KSA Entry",
      "Local Payment Gateways",
      "VAT & Compliance",
      "Arabic Storefronts",
    ],
    bio: "Specialist in Shopify GCC market entry — local payment rails, VAT configuration, and Arabic-ready storefronts across UAE, KSA, Qatar, Kuwait, Bahrain, Oman.",
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-20 lg:py-28 overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-lime/8 blur-[120px]" />
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
            className="bg-lime/10 border-lime text-lime mb-4"
          >
            <Users className="h-3.5 w-3.5 mr-1.5" />
            The Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            A founder plus a{" "}
            <span className="text-gradient-lime">network of specialists</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            EMBER EASE is a founder-led collective of friends who are each
            experts in their lane. Every project gets matched to the right
            specialist — no generalists, no outsourced talent.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div
                className={`relative h-full glass rounded-2xl p-6 border transition-all overflow-hidden ${
                  member.isFounder
                    ? "border-lime/40 shadow-lime"
                    : "border-white/5 hover:border-lime/40"
                }`}
              >
                <div className="absolute -top-20 -right-20 w-32 h-32 rounded-full bg-lime/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity" />

                {member.isFounder && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-lime text-black border-0 hover:bg-lime">
                      <Crown className="h-3 w-3 mr-1" />
                      Founder
                    </Badge>
                  </div>
                )}

                <div className="relative flex flex-col gap-4">
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-lime rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition-opacity" />
                      {member.photo ? (
                        <div className="relative rounded-2xl h-14 w-14 overflow-hidden border-2 border-lime/30">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="h-full w-full object-cover"
                            width={56}
                            height={56}
                          />
                        </div>
                      ) : (
                        <div className="relative bg-lime-gradient rounded-2xl h-14 w-14 flex items-center justify-center font-bold text-black text-lg">
                          {member.initials}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold leading-tight">{member.name}</h3>
                      <div className="text-xs text-lime font-medium mt-0.5 flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {member.role}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise chips */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {member.expertise.map((e) => (
                      <span
                        key={e}
                        className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5"
                      >
                        {e}
                      </span>
                    ))}
                  </div>

                  {/* Socials */}
                  <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                    <a
                      href="#contact"
                      className="text-muted-foreground hover:text-lime transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#contact"
                      className="text-muted-foreground hover:text-lime transition-colors"
                      aria-label={`${member.name} on Twitter`}
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about adding more members */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            <span className="text-lime">Note:</span> Specialist roles (Full-Stack
            Engineer, AI Engineer, etc.) use placeholder profiles. Replace with
            real names, photos, and bios of your friends — and add as many more
            specialists as your network grows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
