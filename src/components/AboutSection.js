"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AboutSection() {
  const { t } = useI18n();
  const [sectionRef, , hasIntersected] = useIntersectionObserver();

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1f222a] pt-12 md:pt-20 pb-30 md:pb-40 relative overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 2px, transparent 2px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 2px, transparent 2px)
            `,
            backgroundSize: "140px 140px",
            backgroundPosition: "center",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>
      <div className="max-w-4xl mx-auto px-6 md:px-8 z-10 text-center">
        <div className="space-y-8 md:space-y-12">
          {/* Başlık */}
          <div
            className={`space-y-6 scroll-animate-fade-up ${
              hasIntersected ? "animate-in" : ""
            }`}
          >
            <h2 className="anton-regular text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#692433] to-[#bfd1dd] mx-auto"></div>
          </div>

          {/* Metin */}
          <div
            className={`space-y-6 scroll-animate-fade-up scroll-delay-1 ${
              hasIntersected ? "animate-in" : ""
            }`}
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t.about.content}
            </p>
          </div>
        </div>
        {/* Büyük Hakkımızda yazısı */}
        <div
          className={`absolute bottom-0 md:bottom-2 lg:bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 md:px-8 scroll-animate-fade-up scroll-delay-2 ${
            hasIntersected ? "animate-in" : ""
          }`}
        >
          <h3
            className="anton-regular leading-none tracking-tight text-center uppercase"
            style={{
              fontSize: "clamp(80px, 14vw, 200px)",
              background:
                "radial-gradient(ellipse at center bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,0) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {t.about.description}
          </h3>
        </div>
      </div>
    </section>
  );
}
