"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { BrandLogo } from "@/components/brand-logo";
import { useServicesStore } from "@/store/services-store";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home", overlay: false },
  { label: "Services", href: "#services", overlay: true },
  { label: "Process", href: "#process", overlay: false },
  { label: "Mission", href: "#mission", overlay: false },
  { label: "Experience", href: "#experience", overlay: false },
  { label: "Team", href: "#team", overlay: false },
  { label: "About", href: "#about", overlay: false },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const openServices = useServicesStore((s) => s.open);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-strong border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center group text-foreground hover:text-foreground transition-transform"
          >
            <BrandLogo className="transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.overlay ? (
                <button
                  key={link.label}
                  onClick={openServices}
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden sm:inline-flex bg-lime hover:bg-lime-300 text-black font-semibold shadow-lime rounded-xl"
            >
              <Link href="#contact">Start a Project</Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-xl"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[360px] bg-background border-l border-white/10"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to different sections of the EMBER EASE website.
                </SheetDescription>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                    <BrandLogo showGlow={false} className="text-foreground" />
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-xl"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                      >
                        {link.overlay ? (
                          <SheetClose asChild>
                            <button
                              onClick={() => {
                                setOpen(false);
                                setTimeout(openServices, 200);
                              }}
                              className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                            >
                              {link.label}
                            </button>
                          </SheetClose>
                        ) : (
                          <SheetClose asChild>
                            <Link
                              href={link.href}
                              className="block px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                            >
                              {link.label}
                            </Link>
                          </SheetClose>
                        )}
                      </motion.div>
                    ))}
                  </nav>
                  <div className="px-6 pb-8 pt-4 border-t border-white/5">
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="w-full bg-lime hover:bg-lime-300 text-black font-semibold shadow-lime rounded-xl"
                      >
                        <Link href="#contact">Start a Project</Link>
                      </Button>
                    </SheetClose>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      contact@emberease.com
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
