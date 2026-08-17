"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { StoreBadges } from "@/components/store-badges";
import { Sparkles } from "lucide-react";

export type HeroProps = {
  badgeText: string;
  title: ReactNode;
  description: ReactNode;
  ctaEarlyAccess: string;
  ctaPricing: string;
  seoTagline: string;
  googlePlayAlt: string;
  appStoreAlt: string;
  launchingSoon: string;
};

export default function Hero({
  badgeText,
  title,
  description,
  ctaEarlyAccess,
  ctaPricing,
  seoTagline,
  googlePlayAlt,
  appStoreAlt,
  launchingSoon,
}: HeroProps) {
  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        <div
          className="hidden lg:block lg:bg-contain -mx-32 absolute inset-0 z-0 bg-center bg-no-repeat "
          style={{
            backgroundImage: "url(/addinvoices_bg.png)",
          }}
        />
        <div
          className="block lg:hidden absolute inset-0 z-0 bg-center bg-no-repeat "
          style={{
            backgroundImage: "url(/waves.png)",
          }}
        />

        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm"
              >
                <Sparkles className="h-4 w-4" />
                {badgeText}
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="mb-8"
            >
              <h1
                id="main-title"
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                {title}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#waitlist"
                className="btn-ad-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                {ctaEarlyAccess}
              </a>

              <a
                href="#pricing"
                className="btn-ad-secondary px-8 py-4 rounded-full font-medium text-lg border-2 border-ad-secondary text-ad-secondary hover:bg-ad-secondary hover:text-white transition-all duration-200"
              >
                {ctaPricing}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-6 text-sm text-muted-foreground text-center"
            >
              {seoTagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <StoreBadges
                title={launchingSoon}
                googlePlayAlt={googlePlayAlt}
                appStoreAlt={appStoreAlt}
                className="mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
