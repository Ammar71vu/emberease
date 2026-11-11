"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { ServicesSection } from "@/components/sections/services";
import { ProcessSection } from "@/components/sections/process";
import { MissionSection } from "@/components/sections/mission";
import { ExperienceSection } from "@/components/sections/experience";
import { TeamSection } from "@/components/sections/team";
import { WhyChooseSection } from "@/components/sections/why-choose";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <MissionSection />
        <ExperienceSection />
        <TeamSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
