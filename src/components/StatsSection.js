"use client";

import { useEffect, useState } from "react";
import { FaGlobe, FaBuilding, FaTruck } from "react-icons/fa";
import { useI18n } from "@/i18n/I18nProvider";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import WorldMap from "./WorldMap";

export default function StatsSection() {
  const { t } = useI18n();
  const [counters, setCounters] = useState({
    countries: 0,
    companies: 0,
    journeys: 0,
  });
  const [sectionRef, , hasIntersected] = useIntersectionObserver();

  // Counter animation effect
  useEffect(() => {
    if (!hasIntersected) return;

    const targets = { countries: 20, companies: 150, journeys: 310000 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounter = (key, target) => {
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, stepDuration);
    };

    // Start animations with slight delays
    setTimeout(() => animateCounter("countries", targets.countries), 200);
    setTimeout(() => animateCounter("companies", targets.companies), 400);
    setTimeout(() => animateCounter("journeys", targets.journeys), 600);
  }, [hasIntersected]);

  const stats = [
    {
      id: "countries",
      number: `${counters.countries}+`,
      label: t.stats?.countries?.label ?? "Ülke",
      description:
        t.stats?.countries?.description ?? "Hizmet verdiğimiz ülkeler",
      icon: FaGlobe,
      color: "text-[#692433]",
      bgColor: "bg-neutral-100",
    },
    {
      id: "companies",
      number: `${counters.companies}+`,
      label: t.stats?.companies?.label ?? "Çalışılan Firma",
      description:
        t.stats?.companies?.description ?? "Güvenilir iş ortaklarımız",
      icon: FaBuilding,
      color: "text-[#692433]",
      bgColor: "bg-neutral-100",
    },
    {
      id: "journeys",
      number: `${counters.journeys.toLocaleString()}+`,
      label: t.stats?.journeys?.label ?? "Mutlu Yolculuk",
      description:
        t.stats?.journeys?.description ?? "Başarıyla tamamlanan teslimatlar",
      icon: FaTruck,
      color: "text-[#692433]",
      bgColor: "bg-neutral-100",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1f222a] pt-12 md:pt-20 pb-30 md:pb-10 relative overflow-hidden"
    >
      {/* Circular border effects background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle 1 - Top left */}
        <div
          className="absolute -top-[600px] -left-[600px] w-[1200px] h-[1200px] rounded-full border-2 border-white/25 animate-pulse"
          style={{
            animation: "float 8s ease-in-out infinite",
            animationDelay: "0s",
          }}
        />

        {/* Large circle 2 - Top right */}
        <div
          className="absolute -top-[400px] -right-[500px] w-[1200px] h-[1200px] rounded-full border-2 border-white/20 animate-pulse"
          style={{
            animation: "float 10s ease-in-out infinite reverse",
            animationDelay: "2s",
          }}
        />

        {/* Large circle 3 - Bottom center */}
        <div
          className="absolute -bottom-[700px] left-1/2 transform -translate-x-1/2 w-[1200px] h-[1200px] rounded-full border-2 border-white/18 animate-pulse"
          style={{
            animation: "float 12s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />

        {/* Medium circle 4 - Center left */}
        <div
          className="absolute top-1/2 -left-[300px] w-[800px] h-[800px] rounded-full border-2 border-white/15 animate-pulse"
          style={{
            animation: "float 6s ease-in-out infinite reverse",
            animationDelay: "1s",
          }}
        />

        {/* Medium circle 5 - Center right */}
        <div
          className="absolute top-1/2 -right-[200px] w-[800px] h-[800px] rounded-full border-2 border-white/22 animate-pulse"
          style={{
            animation: "float 7s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />

        {/* Gradient overlay for fade effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(31,34,42,0.3) 0%, rgba(31,34,42,0.7) 50%, rgba(31,34,42,0.9) 100%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 z-10 text-center">
        <div className="space-y-8 md:space-y-12">
          {/* İstatistikler */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 scroll-animate-fade-up scroll-delay-1 ${
              hasIntersected ? "animate-in" : ""
            }`}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;

              return (
                <div
                  key={stat.id}
                  className={`text-center group scroll-animate-fade-up scroll-delay-${
                    index + 2
                  } ${hasIntersected ? "animate-in" : ""}`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 ring-1 ring-white/20 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      {stat.number}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-300">
                      {stat.label}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            style={{ color: "#ffffff" }}
          >
            {t.map?.title || "Dünyayı Küçülten Çözümler"}
          </h2>
        </div>
        <WorldMap />
      </div>
    </section>
  );
}
