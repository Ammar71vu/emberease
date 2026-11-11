"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, MapPin, Building, Globe2, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { useServicesStore } from "@/store/services-store";

const services = [
  { label: "eBay Store Setup" },
  { label: "Etsy Shop Setup" },
  { label: "Shopify Development" },
  { label: "Shopify GCC Setup" },
  { label: "Product Sourcing (China/UK)" },
  { label: "Payment Gateway Integration" },
  { label: "Business Setup in Europe" },
  { label: "TikTok Marketing" },
  { label: "Full-Stack Websites" },
  { label: "Agentic AI" },
  { label: "Chatbot Creation" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Mission", href: "#mission" },
  { label: "Experience", href: "#experience" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
];

const legal = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const socials = [
  {
    label: "TikTok",
    href: "#", // Replace with your TikTok URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#", // Replace with your Instagram URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.12 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.12-1.38 5.9 5.9 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.12A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#", // Replace with your Facebook URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#", // Replace with your LinkedIn URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  const openServices = useServicesStore((s) => s.open);

  return (
    <footer className="relative mt-auto border-t border-white/5 bg-transparent">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-lime/5 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link
              href="#home"
              className="flex items-center w-fit group text-foreground"
            >
              <BrandLogo
                className="transition-transform group-hover:scale-105"
                showGlow={false}
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              A full-stack digital agency scaling businesses with AI-powered
              e-commerce, web development, and automation. eBay · Etsy ·
              Shopify · TikTok · Full-Stack · Agentic AI · Chatbots.
            </p>
            <a
              href="mailto:contact@emberease.com"
              className="inline-flex items-center gap-2 text-sm text-lime hover:text-lime-300 transition-colors w-fit"
            >
              <Mail className="h-4 w-4" />
              contact@emberease.com
            </a>

            {/* Social media links */}
            <div className="flex items-center gap-2 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-2.5 text-muted-foreground hover:text-black hover:bg-lime transition-all hover:scale-110 hover:shadow-lime"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
              Navigate
            </h4>
            {navLinks.map((l) =>
              l.label === "Services" ? (
                <button
                  key={l.label}
                  onClick={() => openServices()}
                  className="text-sm text-muted-foreground hover:text-lime transition-colors text-left"
                >
                  {l.label}
                </button>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-lime transition-colors"
                >
                  {l.label}
                </Link>
              )
            )}
          </div>

          {/* Services */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
              Services
            </h4>
            {services.slice(0, 8).map((s) => (
              <button
                key={s.label}
                onClick={() => openServices()}
                className="text-sm text-muted-foreground hover:text-lime transition-colors text-left"
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => openServices()}
              className="text-sm text-lime hover:text-lime-300 transition-colors flex items-center gap-1 mt-1 font-medium"
            >
              View All Services
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
              Locations
            </h4>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Globe2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
              <span>
                United Kingdom
                <br />
                Pakistan
              </span>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Building className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
              <span>UK Ltd & Pakistan</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-lime mt-0.5 flex-shrink-0" />
              <span>Member: Multan Chamber of Commerce & Industry</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 lg:mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2026 EMBER EASE Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs text-muted-foreground hover:text-lime transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <span className="text-xs text-muted-foreground">
              Developed by Najaf AI Team
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
