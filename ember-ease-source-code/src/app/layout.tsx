import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingChat } from "@/components/floating-chat";
import { AmbientGlow } from "@/components/ambient-glow";
import { ServicesOverlay } from "@/components/services-overlay";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EMBER EASE — AI-Powered E-Commerce, Web & Automation Agency",
  description:
    "EMBER EASE is a full-stack digital agency scaling businesses with eBay, Etsy, Shopify (incl. GCC setup), TikTok marketing, full-stack websites, agentic AI, and custom chatbots. UK · US · Pakistan.",
  keywords: [
    "EMBER EASE",
    "e-commerce agency",
    "eBay store setup",
    "Etsy store setup",
    "Shopify development",
    "Shopify GCC",
    "TikTok marketing",
    "full stack website",
    "agentic AI",
    "chatbot creation",
    "AI automation agency",
    "Pakistan digital agency",
  ],
  authors: [{ name: "EMBER EASE Ltd" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "EMBER EASE — AI-Powered E-Commerce & Automation Agency",
    description:
      "Scale any business with AI-powered e-commerce, full-stack web, and automation. eBay · Etsy · Shopify · TikTok · Agentic AI · Chatbots.",
    url: "https://www.emberease.com/",
    siteName: "EMBER EASE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMBER EASE — AI-Powered Agency",
    description:
      "E-commerce, full-stack web, AI agents & chatbots that scale any business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <AmbientGlow />
            {children}
            <ServicesOverlay />
            <FloatingChat />
            <Toaster />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
