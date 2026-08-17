import { FunnelMockups } from "@/components/funnel-mockups";
import { ModulesCarousel } from "@/components/modules-carousel";
import {
  InstallAppSection,
  type InstallPlatform,
} from "@/components/install-app-section";
import { CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function PresentacionFunnel() {
  const t = await getTranslations("Presentation");
  const tHome = await getTranslations("Homepage");
  const installPlatforms = tHome.raw(
    "InstallApp.platforms",
  ) as InstallPlatform[];

  return (
    <div className="min-h-screen w-full relative bg-ad-main pb-24">
      {/* Background styling consistent with main page */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), linear-gradient(135deg, #0A0F2C 0%, #111827 100%)",
        }}
      />
      {/* Waves fixed background for entire page */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/waves.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.6,
        }}
      />

      {/* Navbar overlay spacing if needed, but assuming global Navbar takes space */}
      <div className="pt-28 relative z-10 container mx-auto px-4 flex flex-col items-center">
        {/* Header / Title */}
        <div className="text-center max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            {t("title1")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              ADDINVOICES
            </span>{" "}
            {t("title2")}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        {/* Video (Glassmorphism Container) */}
        <div className="relative w-full max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both py-12 md:py-24 flex flex-col items-center">
          <div className="relative z-10 w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black/40 border border-white/10 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] backdrop-blur-md">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/pn_kfQkIXTE"
              title="ADDINVOICES presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            {/* Decorative corners */}
            <div className="pointer-events-none absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/50 rounded-tl-3xl opacity-50"></div>
            <div className="pointer-events-none absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500/50 rounded-br-3xl opacity-50"></div>
          </div>

          <div className="relative z-10 mt-10 flex justify-center w-full">
            <a
              href="https://app.addinvoicesai.com/"
              className="btn-ad-primary px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              {t("ctaPrimary")}
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="w-full">
          <InstallAppSection
            badge={tHome("InstallApp.badge")}
            title={tHome("InstallApp.title")}
            subtitle={tHome("InstallApp.subtitle")}
            videoTitle={tHome("InstallApp.videoTitle")}
            videoPlayLabel={tHome("InstallApp.videoPlayLabel")}
            platforms={installPlatforms}
            launchingSoon={tHome("InstallApp.launchingSoon")}
            googlePlayAlt={tHome("Hero.googlePlayAlt")}
            appStoreAlt={tHome("Hero.appStoreAlt")}
          />
        </div>

        {/* Explicación de qué es y cómo funciona */}
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-6">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t("q1Title")}
            </h3>
            <p className="text-white/70 leading-relaxed">{t("q1Desc")}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t("q2Title")}
            </h3>
            <p className="text-white/70 leading-relaxed">{t("q2Desc")}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t("q3Title")}
            </h3>
            <p className="text-white/70 leading-relaxed">{t("q3Desc")}</p>
          </div>
        </div>

        {/* Mockups de la App */}
        <FunnelMockups />

        {/* Módulos Explicativos Carrusel */}
        <ModulesCarousel />

        {/* Final CTA */}
        <div className="w-full max-w-4xl mx-auto mt-20 text-center bg-gradient-to-b from-blue-900/20 to-transparent p-12 rounded-3xl border border-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("finalCtaTitle")}
          </h2>
          <p className="text-lg text-white/70 mb-8">{t("finalCtaDesc")}</p>
          <a
            href="https://app.addinvoicesai.com/"
            className="inline-block btn-ad-primary px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {t("finalCtaBtn")}
          </a>
        </div>
      </div>
    </div>
  );
}
