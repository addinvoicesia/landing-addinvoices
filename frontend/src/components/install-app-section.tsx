"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Share, Smartphone, Sparkles } from "lucide-react";
import { StoreBadges } from "@/components/store-badges";

const DEFAULT_VIDEO_ID = "8UvxDz0O1X8";

const PLATFORM_ICONS = {
  android: Smartphone,
  ios: Share,
} as const;

export type InstallPlatform = {
  id: keyof typeof PLATFORM_ICONS;
  name: string;
  summary: string;
  steps: string[];
};

export type InstallAppSectionProps = {
  badge: string;
  title: string;
  subtitle: string;
  videoTitle: string;
  videoPlayLabel: string;
  platforms: InstallPlatform[];
  launchingSoon: string;
  googlePlayAlt: string;
  appStoreAlt: string;
  videoId?: string;
};

export function InstallAppSection({
  badge,
  title,
  subtitle,
  videoTitle,
  videoPlayLabel,
  platforms,
  launchingSoon,
  googlePlayAlt,
  appStoreAlt,
  videoId = DEFAULT_VIDEO_ID,
}: InstallAppSectionProps) {
  return (
    <section id="install" className="relative overflow-hidden px-4 py-24">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none" />
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#2563eb]" />
            <span className="text-sm font-medium text-white/80">{badge}</span>
          </div>

          <h2 className="mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">{subtitle}</p>
        </motion.div>

        <motion.div
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <InstallTutorialVideo
            videoId={videoId}
            title={videoTitle}
            playLabel={videoPlayLabel}
          />
        </motion.div>

        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {platforms.map((platform, index) => {
            const Icon = PLATFORM_ICONS[platform.id] ?? Smartphone;

            return (
              <motion.article
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-200 hover:bg-white/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-[#2563eb]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {platform.name}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-white/60">
                  {platform.summary}
                </p>
                <ol className="space-y-3">
                  {platform.steps.map((step, stepIndex) => (
                    <li key={step} className="flex gap-3 text-sm text-white/80">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/20 text-xs font-semibold text-[#3b82f6]">
                        {stepIndex + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <StoreBadges
            title={launchingSoon}
            googlePlayAlt={googlePlayAlt}
            appStoreAlt={appStoreAlt}
          />
        </motion.div>
      </div>
    </section>
  );
}

function InstallTutorialVideo({
  videoId,
  title,
  playLabel,
}: {
  videoId: string;
  title: string;
  playLabel: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <figure className="w-full max-w-[240px] sm:max-w-[280px]">
      <div className="rounded-[2.25rem] border border-white/10 bg-black/40 p-2 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] backdrop-blur-md">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-black">
          {isPlaying ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="group absolute inset-0 cursor-pointer motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
              aria-label={playLabel}
            >
              <img
                src={thumbnailSrc}
                alt=""
                className="h-full w-full object-cover"
                decoding="async"
              />
              <span className="absolute inset-0 bg-black/35 transition-colors duration-200 group-hover:bg-black/20 motion-reduce:transition-none" />
              <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-lg transition-colors duration-200 group-hover:bg-[#3b82f6] motion-reduce:transition-none">
                <Play className="ml-0.5 h-7 w-7 fill-current" aria-hidden="true" />
              </span>
            </button>
          )}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-white/50">
        {title}
      </figcaption>
    </figure>
  );
}
