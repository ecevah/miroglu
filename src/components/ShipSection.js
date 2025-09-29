"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ShipSection = () => {
  const { t } = useI18n();
  const [sectionRef, , hasIntersected] = useIntersectionObserver();
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 0..1 arası görünürlük/ilerleme
      const progress = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - rect.top) / (viewportHeight + rect.height)
        )
      );
      setScrollProgress(progress);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-[#d2dde9] py-[60px] md:py-[100px] flex items-center justify-center overflow-hidden"
      >
        <div
          className={`pointer-events-none absolute inset-0 anton-regular uppercase text-[24vw] md:text-[220px] text-white/60 text-center leading-none z-0 select-none transition-all duration-1000 ${
            hasIntersected
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          {t.services?.heading ?? "Hizmetlerimiz"}
        </div>
        <div ref={containerRef} className="relative w-full max-w-7xl px-4">
          {/* Mobile Layout - Ship right absolute, items left */}
          <div className="md:hidden">
            {/* Ship image - absolute right, fully visible */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[60%] h-full overflow-hidden md:hidden z-10">
              <Image
                src="/images/ship.webp"
                alt="ship"
                width={1200}
                height={800}
                className="absolute -right-30 top-1/2 transform -translate-y-1/2 w-[120%] object-contain drop-shadow-lg h-full"
                style={{
                  transform: `translateY(${
                    (scrollProgress - 0.5) * 100
                  }px) translateX(0)`,
                  willChange: "transform",
                  transition: "transform 0.2s ease-out",
                }}
              />
            </div>

            {/* Service items - left side with padding */}
            <div className="relative z-20 space-y-6 pr-[35%]">
              <div
                className={`text-left transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-lg leading-tight">
                  {t.services?.items?.tenteli?.title ?? "Tenteli Taşımacılık"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm leading-5">
                  {t.services?.items?.tenteli?.description ??
                    "Büyük hacimli ve genel yükler için güvenli ve esnek çözümler."}
                </p>
              </div>

              <div
                className={`text-left transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-lg leading-tight">
                  {t.services?.items?.frigo?.title ?? "Frigo Taşımacılık"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm leading-5">
                  {t.services?.items?.frigo?.description ??
                    "Isı kontrollü taşıma ile gıda, ilaç ve hassas ürünlerin güvenli teslimatı."}
                </p>
              </div>

              <div
                className={`text-left transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-lg leading-tight">
                  {t.services?.items?.ekspres?.title ?? "Ekspres Taşımacılık"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm leading-5">
                  {t.services?.items?.ekspres?.description ??
                    "Küçük ve orta ölçekli yükler için hızlı ve ekonomik çözümler."}
                </p>
              </div>

              <div
                className={`text-left transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-lg leading-tight">
                  {t.services?.items?.karayolu?.title ?? "Yurt İçi Karayolu"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm leading-5">
                  {t.services?.items?.karayolu?.description ??
                    "Türkiye genelinde ve Avrupa'nın her noktasına yaygın dağıtım ağıyla profesyonel taşımacılık."}
                </p>
              </div>

              <div
                className={`text-left transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "0.5s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-lg leading-tight">
                  {t.services?.items?.minivan?.title ?? "Minivan Taşımacılık"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm leading-5">
                  {t.services?.items?.minivan?.description ??
                    "Acil ve küçük ölçekli yükler için hızlı ve esnek çözümler."}
                </p>
              </div>

              <div
                className={`text-left transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-lg leading-tight">
                  {t.services?.items?.lorry?.title ?? "Lorry Taşımacılık"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm leading-5">
                  {t.services?.items?.lorry?.description ??
                    "Orta ölçekli yükler için uygun maliyetli ve güvenilir alternatifler."}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout - 3 column layout */}
          <div className="hidden md:grid grid-cols-3 gap-8 md:gap-16 items-center">
            {/* Left side - 3 items */}
            <div className="space-y-12 md:space-y-24">
              <div
                className={`text-center md:text-right transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-left opacity-100"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-xl md:text-2xl lg:text-3xl leading-tight">
                  {t.services?.items?.tenteli?.title ?? "Tenteli Taşımacılık"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm md:text-base leading-6 max-w-xs mx-auto md:mx-0 md:ml-auto">
                  {t.services?.items?.tenteli?.description ??
                    "Büyük hacimli ve genel yükler için güvenli ve esnek çözümler."}
                </p>
              </div>
              <div
                className={`text-center md:text-right transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-left opacity-100"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-xl md:text-2xl lg:text-3xl leading-tight">
                  {t.services?.items?.ekspres?.title ?? "Ekspres Taşımacılık"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm md:text-base leading-6 max-w-xs mx-auto md:mx-0 md:ml-auto">
                  {t.services?.items?.ekspres?.description ??
                    "Küçük ve orta ölçekli yükler için hızlı ve ekonomik çözümler."}
                </p>
              </div>
              <div
                className={`text-center md:text-right transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-left opacity-100"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-xl md:text-2xl lg:text-3xl leading-tight">
                  {t.services?.items?.minivan?.title ?? "Minivan Taşımacılık"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm md:text-base leading-6 max-w-xs mx-auto md:mx-0 md:ml-auto">
                  {t.services?.items?.minivan?.description ??
                    "Acil ve küçük ölçekli yükler için hızlı ve esnek çözümler."}
                </p>
              </div>
            </div>

            {/* Center - Ship image */}
            <div
              className={`flex items-center justify-center transition-all duration-1000 ${
                hasIntersected
                  ? "animate-fade-in-scale opacity-100"
                  : "opacity-0 scale-75"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <Image
                src="/images/ship.webp"
                alt="ship"
                width={1200}
                height={800}
                className="w-[90%] max-w-[500px] lg:max-w-[600px] object-contain drop-shadow-lg"
                style={{
                  transform: `translateY(${(scrollProgress - 0.5) * 100}px)`,
                  willChange: "transform",
                  transition: "transform 0.2s ease-out",
                }}
              />
            </div>

            {/* Right side - 3 items */}
            <div className="space-y-12 md:space-y-24">
              <div
                className={`text-center md:text-left transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-right opacity-100"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-xl md:text-2xl lg:text-3xl leading-tight">
                  {t.services?.items?.frigo?.title ?? "Frigo Taşımacılık"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm md:text-base leading-6 max-w-xs mx-auto md:mx-0">
                  {t.services?.items?.frigo?.description ??
                    "Isı kontrollü taşıma ile gıda, ilaç ve hassas ürünlerin güvenli teslimatı."}
                </p>
              </div>
              <div
                className={`text-center md:text-left transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-right opacity-100"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-xl md:text-2xl lg:text-3xl leading-tight">
                  {t.services?.items?.karayolu?.title ?? "Yurt İçi Karayolu"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm md:text-base leading-6 max-w-xs mx-auto md:mx-0">
                  {t.services?.items?.karayolu?.description ??
                    "Türkiye genelinde ve Avrupa'nın her noktasına yaygın dağıtım ağıyla profesyonel taşımacılık."}
                </p>
              </div>
              <div
                className={`text-center md:text-left transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-right opacity-100"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="uppercase text-[#1f3447] font-black tracking-tight text-xl md:text-2xl lg:text-3xl leading-tight">
                  {t.services?.items?.lorry?.title ?? "Lorry Taşımacılık"}
                </h3>
                <p className="mt-2 text-[#1f3447]/80 text-sm md:text-base leading-6 max-w-xs mx-auto md:mx-0">
                  {t.services?.items?.lorry?.description ??
                    "Orta ölçekli yükler için uygun maliyetli ve güvenilir alternatifler."}
                </p>
              </div>
            </div>
          </div>

          {/* Brokerage Services Under the Ship */}
          <div className="mt-16 md:mt-28">
            {/* Desktop center title */}
            <div
              className={`hidden md:block text-center mb-8 z-20 transition-all duration-1000 ${
                hasIntersected
                  ? "animate-fade-in-up opacity-100"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-[#1f3447] font-black uppercase tracking-tight text-2xl md:text-3xl">
                {t.services?.brokerage?.heading ??
                  "Ayrıca size aracılık hizmetleri de sunuyoruz"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start md:items-center z-20">
              {/* 01 - Left side */}
              <div
                className={`text-left md:text-right transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "0.1s" }}
              >
                <div className="text-[#1f3447]/70 text-sm font-semibold mb-2">
                  01
                </div>
                <h3 className="text-[#1f3447] uppercase font-black tracking-tight text-xl md:text-2xl mb-3">
                  {t.services?.brokerage?.customsTitle ?? "Gümrük Aracılığı"}
                </h3>
                <p className="text-[#1f3447]/80 leading-6 text-sm md:text-base max-w-[280px] md:mx-0 md:ml-auto md:max-w-xs">
                  {t.services?.brokerage?.customsDescription ??
                    "İhracat ve ithalat süreçlerinizde gümrük işlemlerinin hızlı ve sorunsuz tamamlanması için profesyonel destek."}
                </p>
              </div>

              {/* 02 - Right side */}
              <div
                className={`text-left md:text-left transition-all duration-1000 ${
                  hasIntersected
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-[#1f3447]/70 text-sm font-semibold mb-2">
                  02
                </div>
                <h3 className="text-[#1f3447] uppercase font-black tracking-tight text-xl md:text-2xl mb-3">
                  {t.services?.brokerage?.insuranceTitle ?? "Sigorta Aracılığı"}
                </h3>
                <p className="text-[#1f3447]/80 leading-6 text-sm md:text-base max-w-xs md:mx-0">
                  {t.services?.brokerage?.insuranceDescription ??
                    "Yüklerinizin her koşulda güvence altında olması için uygun taşımacılık sigortası çözümleri."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShipSection;
