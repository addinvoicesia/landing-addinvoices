"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const MOCKUPS = [
  "/mockups-addinvoices/telefonos1.png",
  "/mockups-addinvoices/telefonos3.png",
  "/mockups-addinvoices/telefonos6.png",
  "/mockups-addinvoices/app-icon-homescreen-iphone1.png",
];

export function FunnelMockups() {
  const t = useTranslations("Presentation");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12 px-4 overflow-hidden">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
          {t("mockupsTitle")}
        </h3>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          {t("mockupsDesc")}
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-10 mt-10">
        {/* Fade gradients at edges for depth */}
        <div className="absolute inset-y-0 left-0 w-1/6 md:w-1/4 bg-gradient-to-r from-ad-main to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-1/6 md:w-1/4 bg-gradient-to-l from-ad-main to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex gap-12 sm:gap-20 w-max items-center px-4"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...MOCKUPS, ...MOCKUPS].map((src, index) => (
            <div
              key={index}
              className="relative h-[250px] sm:h-[350px] lg:h-[450px] flex-shrink-0 group"
            >
              <img
                src={src}
                alt={`Mockup ADDINVOICES ${index}`}
                className="h-full w-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.4)] group-hover:drop-shadow-[0_30px_50px_rgba(59,130,246,0.2)] transition-all duration-500"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
