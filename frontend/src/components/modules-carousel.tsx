"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ModulesCarousel() {
  const t = useTranslations("Presentation");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Array of module indices based on our translation JSON structure
  const moduleIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const modules = moduleIndices.map((i) => ({
    title: t(`modules.${i}.title`),
    desc: t(`modules.${i}.desc`),
  }));

  // Auto-scroll logic
  useEffect(() => {
    let animationFrameId: number;
    
    const scrollStep = () => {
      if (scrollRef.current && !isPaused) {
        scrollRef.current.scrollLeft += 0.5;
        // Infinite loop trick: reset scroll when reaching the halfway point (since we duplicated the array)
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
           scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div className="relative w-full overflow-hidden py-16 bg-transparent mt-12">
      <div className="text-center mb-12 px-4">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
          {t("modulesTitle")}
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("modulesDesc")}
        </p>
      </div>

      {/* Fade gradients for the carousel */}
      <div className="absolute inset-y-0 left-0 w-1/12 md:w-1/6 bg-gradient-to-r from-ad-main to-transparent z-10 pointer-events-none mt-20" />
      <div className="absolute inset-y-0 right-0 w-1/12 md:w-1/6 bg-gradient-to-l from-ad-main to-transparent z-10 pointer-events-none mt-20" />

      {/* CSS Animation injected safely */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.5) rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05); 
          border-radius: 10px;
          margin: 0 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.6); 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.9); 
        }
      `}} />

      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex w-full overflow-x-auto custom-scrollbar gap-8 px-8 pb-10 pt-4 items-stretch relative z-20"
      >
        {[...modules, ...modules].map((mod, idx) => {
          const emoji = mod.title.split(" ")[0];
          const text = mod.title.split(" ").slice(1).join(" ");
          return (
            <div 
              key={idx} 
              className="w-[300px] md:w-[350px] flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-2 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full">{emoji}</div>
                <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{text}</h4>
              </div>
              <p className="text-white/70 leading-relaxed text-sm flex-grow">
                {mod.desc}
              </p>
              <div className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">AddInvoices Module</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
