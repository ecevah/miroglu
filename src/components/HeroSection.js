import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

export default function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-[#bfd1dd] md:bg-[#a3b6d0] flex flex-col justify-end items-center">
      <div className="pointer-events-none absolute inset-0 z-20 flex items-start md:items-center justify-center px-6 text-center pt-50 sm:pt-34 md:pt-0 md:mb-30">
        <div className="max-w-6xl">
          <h1 className="anton-regular text-balance uppercase leading-[1.1] text-3xl min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight bg-gradient-to-b from-white via-white to-[#bfd1dd] md:to-[#a3b6d0] text-transparent bg-clip-text drop-shadow-[0_6px_28px_rgba(0,0,0,0.5)] animate-fade-down">
            {t.hero.title}
          </h1>
          <div className="mt-[-10px] sm:mt-[-15px] md:mt-[-30px]">
            <span className="anton-regular relative inline-block text-balance uppercase leading-[1.1] text-2xl min-[375px]:text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#f6fbff] drop-shadow-[0_8px_34px_rgba(0,0,0,0.5)] animate-fade-up animate-delay-1">
              {t.hero.subtitle}
              <span className="pointer-events-none absolute left-0 right-0 -bottom-2 h-[8px] bg-white/45 blur-sm opacity-90"></span>
              <span className="pointer-events-none absolute left-0 right-0 -bottom-4 h-[12px] bg-white/20 blur-md opacity-80"></span>
            </span>
          </div>
          <p className="mt-2 md:mt-4 text-sm min-[375px]:text-base sm:text-lg md:text-xl text-[#1f222a] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] animate-fade-up animate-delay-2">
            {t.hero.description}
          </p>
          <div className="pointer-events-auto mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up animate-delay-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#692433] text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-white hover:text-[#692433] focus:outline-none focus:ring-2 focus:ring-white/70 transition"
            >
              {t.cta.contact}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white/90 animate-fade-up animate-delay-2">
        <span className="text-xs font-medium tracking-wide uppercase opacity-80">
          Aşağı Kaydır
        </span>
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 rounded-full border-2 border-white/80 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-white/90 animate-bounce" />
          </div>
          <svg
            className="h-5 w-5 animate-pulse"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Up to 1500px: old behavior (responsive height, no distortion) */}
      <picture className="w-full flex justify-center pt-20 min-[1500px]:hidden max-w-full">
        <source media="(max-width: 800px)" srcSet="/images/Scania.jpg" />
        <Image
          src={"/images/Scania-with-Trailer.jpg"}
          alt="Scania with Trailer"
          width={1600}
          height={900}
          sizes="100vw"
          className="w-full h-auto max-h-[100dvh] top-fade max-w-full"
          priority
        />
      </picture>

      {/* From 1500px and up: cover horizontally with bottom alignment */}
      <div className="hidden min-[1500px]:block absolute inset-0 z-0">
        <picture className="block w-full h-full">
          <source media="(max-width: 600px)" srcSet="/images/Scania.jpg" />
          <div className="relative w-full h-full">
            <Image
              src={"/images/Scania-with-Trailer.jpg"}
              alt="Scania with Trailer"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              className="object-cover object-bottom w-full h-full top-fade"
              priority
            />
          </div>
        </picture>
      </div>
    </section>
  );
}
