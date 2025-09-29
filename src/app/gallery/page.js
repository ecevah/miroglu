"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/I18nProvider";
import { useCallback, useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const images = [
  {
    src: "/public/images/Scania-with-Trailer.jpg",
    w: 1600,
    h: 1067,
    tag: "travel",
  },
  {
    src: "/public/images/Mercedes-with-Text.png",
    w: 1600,
    h: 900,
    tag: "corporate",
  },
  { src: "/public/images/Scania.jpg", w: 1400, h: 933, tag: "travel" },
  { src: "/public/images/Mercedes.png", w: 1600, h: 900, tag: "expedition" },
  { src: "/public/images/Plane.png", w: 1200, h: 800, tag: "drone" },
  {
    src: "/public/images/Scania-with-Trailer.jpg",
    w: 1600,
    h: 900,
    tag: "corporate",
  },
  { src: "/public/images/Mercedes.png", w: 1600, h: 1000, tag: "travel" },
];

export default function GalleryPage() {
  const { t } = useI18n();
  const [active, setActive] = useState(null); // index or null
  const overlayRef = useRef(null);
  const [heroRef, , heroIntersected] = useIntersectionObserver();
  const [galleryRef, , galleryIntersected] = useIntersectionObserver();

  const close = useCallback(() => setActive(null), []);
  const showPrev = useCallback(() => {
    if (active === null) return;
    setActive((i) => (i === 0 ? images.length - 1 : (i || 0) - 1));
  }, [active]);
  const showNext = useCallback(() => {
    if (active === null) return;
    setActive((i) => (i === images.length - 1 ? 0 : (i || 0) + 1));
  }, [active]);

  useEffect(() => {
    function onKey(e) {
      if (active === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, showPrev, showNext]);

  return (
    <>
      <Header />
      <main className="pt-28">
        <section ref={heroRef} className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="py-10 md:py-14">
              <h1
                className={`anton-regular tracking-tight text-4xl md:text-6xl text-black scroll-animate-fade-down ${
                  heroIntersected ? "animate-in" : ""
                }`}
              >
                {t.gallery?.title || t.nav.gallery}
              </h1>
              <p
                className={`mt-3 text-black/70 max-w-2xl scroll-animate-fade-up scroll-delay-1 ${
                  heroIntersected ? "animate-in" : ""
                }`}
              >
                {t.gallery?.subtitle ||
                  "Filomuzdan ve operasyonlarımızdan kareler"}
              </p>
            </div>
          </div>
        </section>

        <section ref={galleryRef} className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="masonry">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`masonry-item group relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-all scroll-animate-zoom scroll-delay-${Math.min(
                    idx + 1,
                    4
                  )} ${galleryIntersected ? "animate-in" : ""}`}
                  onClick={() => setActive(idx)}
                >
                  <Image
                    src={img.src.replace("/public", "")}
                    alt="Gallery image"
                    width={img.w}
                    height={img.h}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    priority={idx < 3}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {active !== null ? (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === overlayRef.current) close();
          }}
        >
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              aria-label="Kapat"
              className="rounded-full bg-white/90 hover:bg-white px-3 py-2 text-black shadow"
              onClick={close}
            >
              ✕
            </button>
          </div>
          <button
            aria-label="Önceki"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-3 text-black shadow"
            onClick={showPrev}
          >
            ‹
          </button>
          <figure className="mx-4 max-h-[85vh] w-full max-w-5xl">
            <Image
              src={images[active].src.replace("/public", "")}
              alt="Selected image"
              width={images[active].w}
              height={images[active].h}
              className="h-full w-full object-contain animate-zoom-in-like"
              sizes="100vw"
              priority
            />
          </figure>
          <button
            aria-label="Sonraki"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-3 text-black shadow"
            onClick={showNext}
          >
            ›
          </button>
        </div>
      ) : null}
      <Footer />
    </>
  );
}
