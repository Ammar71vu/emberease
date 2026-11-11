"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Building,
  MessageSquare,
  Globe2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [reference, setReference] = React.useState("");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  // Formsubmit.co — free, no server needed, sends submissions to email.
  // Replace with your real email. First submission triggers a confirmation email.
  const FORMSUBMIT_EMAIL = "contact@emberease.com";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in name, email, and message.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      // Post to Formsubmit.co AJAX endpoint (no backend needed)
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("company", form.company);
      formData.append("service", form.service || "Not specified");
      formData.append("budget", form.budget || "Not specified");
      formData.append("message", form.message);
      formData.append("_subject", `New project request from ${form.name}`);
      formData.append("_template", "table");

      const res = await fetch(
        `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to submit");

      const ref = `EE-${Date.now().toString(36).toUpperCase()}`;
      setReference(ref);
      setSuccess(true);
      toast({
        title: "Project request received",
        description: `Reference ${ref}. We'll reply to ${form.email} within 24h.`,
      });
    } catch (err) {
      toast({
        title: "Submission failed",
        description:
          err instanceof Error ? err.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-lime/8 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-lime/5 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <Badge
              variant="outline"
              className="bg-lime/10 border-lime text-lime mb-4"
            >
              Start a Project
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Tell us what you want to{" "}
              <span className="text-gradient-lime">scale</span>
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Whether it&apos;s a new eBay store, a Shopify GCC launch, a
              full-stack web app, or an AI chatbot — pick a service, drop your
              details, and we&apos;ll scope it within 24 hours.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:contact@emberease.com"
                className="glass rounded-xl p-4 border-white/5 hover:border-lime/40 transition-all flex items-center gap-4 group"
              >
                <div className="bg-lime rounded-lg p-2.5 shadow-lime">
                  <Mail className="h-4 w-4 text-black" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-semibold">
                    contact@emberease.com
                  </div>
                </div>
                <Send className="h-4 w-4 text-muted-foreground group-hover:text-lime transition-colors" />
              </a>

              <div className="glass rounded-xl p-4 border-white/5 flex items-center gap-4">
                <div className="bg-lime rounded-lg p-2.5 shadow-lime">
                  <MapPin className="h-4 w-4 text-black" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">
                    Locations
                  </div>
                  <div className="text-sm font-semibold">
                    United Kingdom · Pakistan
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 border-white/5 flex items-center gap-4">
                <div className="bg-lime rounded-lg p-2.5 shadow-lime">
                  <Globe2 className="h-4 w-4 text-black" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">
                    Active Markets
                  </div>
                  <div className="text-sm font-semibold">
                    UK · US · GCC · Pakistan
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Member: Multan Chamber of Commerce & Industry
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative glass-strong rounded-2xl p-6 lg:p-8 border-white/10 shadow-lime-lg overflow-hidden">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-lime/40 blur-2xl rounded-full" />
                    <div className="relative bg-lime/15 rounded-full p-4 border border-lime/30">
                      <CheckCircle2
                        className="h-10 w-10 text-lime"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Project request received
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Thank you for reaching out. Our team will respond within 24
                    hours with a scoping call invite.
                  </p>
                  <div className="mt-6 glass rounded-xl p-4 border-lime/20 w-full max-w-xs">
                    <div className="text-xs text-muted-foreground mb-1">
                      Your reference
                    </div>
                    <div className="font-mono text-lg font-bold text-gradient-lime">
                      {reference}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-6 border-lime/40 text-lime hover:bg-lime/10"
                    onClick={() => {
                      setSuccess(false);
                      setReference("");
                      setForm({
                        name: "",
                        email: "",
                        company: "",
                        service: "",
                        budget: "",
                        message: "",
                      });
                    }}
                  >
                    Submit another request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare className="h-5 w-5 text-lime" />
                    <h3 className="text-lg font-semibold">
                      Tell us about your project
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-xs font-medium">
                        Full Name <span className="text-lime">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        required
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-xs font-medium">
                        Email <span className="text-lime">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@brand.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        required
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="company"
                        className="text-xs font-medium"
                      >
                        Company / Brand
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your brand name"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="service" className="text-xs font-medium">
                        Service Needed
                      </Label>
                      <Select
                        value={form.service}
                        onValueChange={(v) => update("service", v)}
                      >
                        <SelectTrigger
                          id="service"
                          className="bg-white/5 border-white/10"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ebay">eBay Store Setup</SelectItem>
                          <SelectItem value="etsy">Etsy Shop Setup</SelectItem>
                          <SelectItem value="shopify">
                            Shopify Development
                          </SelectItem>
                          <SelectItem value="shopify-gcc">
                            Shopify GCC Setup
                          </SelectItem>
                          <SelectItem value="tiktok">
                            TikTok Marketing
                          </SelectItem>
                          <SelectItem value="fullstack">
                            Full-Stack Website
                          </SelectItem>
                          <SelectItem value="agentic-ai">
                            Agentic AI
                          </SelectItem>
                          <SelectItem value="chatbot">
                            Chatbot Creation
                          </SelectItem>
                          <SelectItem value="multiple">Multiple / Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="budget" className="text-xs font-medium">
                      Budget Range (optional)
                    </Label>
                    <Select
                      value={form.budget}
                      onValueChange={(v) => update("budget", v)}
                    >
                      <SelectTrigger
                        id="budget"
                        className="bg-white/5 border-white/10"
                      >
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-2k">Under $2K</SelectItem>
                        <SelectItem value="2k-5k">$2K – $5K</SelectItem>
                        <SelectItem value="5k-10k">$5K – $10K</SelectItem>
                        <SelectItem value="10k-25k">$10K – $25K</SelectItem>
                        <SelectItem value="25k-plus">$25K+</SelectItem>
                        <SelectItem value="ongoing">
                          Monthly / Ongoing
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-xs font-medium">
                      Project Details <span className="text-lime">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="What do you want to build, scale, or automate? Where are you now, and where do you want to be?"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      required
                      rows={5}
                      className="bg-white/5 border-white/10 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-lime hover:bg-lime-300 text-black font-semibold shadow-lime group mt-2 rounded-xl"
                    size="lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Project Request
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to be contacted by EMBER EASE about
                    your project. We reply within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
