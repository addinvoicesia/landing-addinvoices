"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Hero from "@/components/home/hero";
import Features from "@/components/features";
import { TestimonialsSection } from "@/components/testimonials";
import { NewReleasePromo } from "@/components/new-release-promo";
import { FAQSection } from "@/components/faq-section";
import { PricingSection } from "@/components/pricing-section";
import { ConventionalFooter } from "@/components/conventional-footer";
import { SponsorsSlider } from "@/components/sponsors-slider";
import { WhyChoose } from "@/components/why-choose";
import { WaitlistSection } from "@/components/waitlist-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-ad-main">
      {/* Pearl Mist Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), linear-gradient(135deg, #0A0F2C 0%, #111827 100%)",
        }}
      />

      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Sections */}
      <SponsorsSlider />

      <WhyChoose />
      <div id="waitlist">
        <WaitlistSection />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <NewReleasePromo />
      <div id="faq">
        <FAQSection />
      </div>
      <ConventionalFooter />
    </div>
  );
}
