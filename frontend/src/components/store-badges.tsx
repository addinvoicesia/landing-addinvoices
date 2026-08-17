import { cn } from "@/lib/utils";

export type StoreBadgesProps = {
  title: string;
  googlePlayAlt: string;
  appStoreAlt: string;
  className?: string;
};

export function StoreBadges({
  title,
  googlePlayAlt,
  appStoreAlt,
  className,
}: StoreBadgesProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
        {title}
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <img
          src="/playstore.webp"
          alt={googlePlayAlt}
          className="h-12 w-auto opacity-90"
          decoding="async"
        />
        <img
          src="/appstore.webp"
          alt={appStoreAlt}
          className="h-12 w-auto opacity-90"
          decoding="async"
        />
      </div>
    </div>
  );
}
