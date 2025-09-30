"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/I18nProvider";
import { useCallback, useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Dinamik galeri resimleri yükleme fonksiyonu
const loadGalleryImages = async () => {
  try {
    const response = await fetch('/api/gallery');
    if (!response.ok) {
      throw new Error('Galeri resimleri yüklenemedi');
    }
    return await response.json();
  } catch (error) {
    console.error('Galeri resimleri yüklenirken hata:', error);
    // Fallback olarak statik liste
    return [
      { src: "/gallery/my-miroglu-galeri10.jpg", w: 1600, h: 1200, tag: "fleet", id: 0 },
      { src: "/gallery/my-miroglu-galeri9.jpg", w: 1600, h: 1200, tag: "fleet", id: 1 },
      { src: "/gallery/my-miroglu-galeri8.jpg", w: 1600, h: 1200, tag: "fleet", id: 2 },
      { src: "/gallery/my-miroglu-galeri7.jpg", w: 1600, h: 1200, tag: "fleet", id: 3 },
      { src: "/gallery/my-miroglu-galeri6.jpg", w: 1600, h: 1200, tag: "fleet", id: 4 },
      { src: "/gallery/my-miroglu-galeri5.jpg", w: 1600, h: 1200, tag: "fleet", id: 5 },
      { src: "/gallery/my-miroglu-galeri4.jpg", w: 1600, h: 1200, tag: "fleet", id: 6 },
      { src: "/gallery/my-miroglu-galeri3.jpg", w: 1600, h: 1200, tag: "fleet", id: 7 },
      { src: "/gallery/my-miroglu-galeri2.jpg", w: 1600, h: 1200, tag: "fleet", id: 8 },
      { src: "/gallery/my-miroglu-galer1.jpg", w: 1600, h: 1200, tag: "fleet", id: 9 }
    ];
  }
};

export default function GalleryPage() {
  const { t } = useI18n();
  const [active, setActive] = useState(null); // index or null
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const overlayRef = useRef(null);
  const [heroRef, , heroIntersected] = useIntersectionObserver();
  const [galleryRef, , galleryIntersected] = useIntersectionObserver();

  // Component mount olduğunda resimleri yükle
  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const loadedImages = await loadGalleryImages();
      setImages(loadedImages);
      setLoading(false);
    };
    loadImages();
  }, []);

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
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#692433] mx-auto mb-4"></div>
                  <p className="text-gray-600">Galeri yükleniyor...</p>
                </div>
              </div>
            ) : (
              <div className="masonry">
                {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`masonry-item group relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-all scroll-animate-zoom scroll-delay-${Math.min(
                    idx + 1,
                    4
                  )} ${galleryIntersected ? "animate-in" : ""} cursor-pointer`}
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
            )}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {active !== null ? (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === overlayRef.current) close();
          }}
        >
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              aria-label="Kapat"
              className="rounded-full bg-white/90 hover:bg-white px-3 py-2 text-black shadow cursor-pointer"
              onClick={close}
            >
              ✕
            </button>
          </div>
          <button
            aria-label="Önceki"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-3 text-black shadow cursor-pointer"
            onClick={showPrev}
          >
            ‹
          </button>
          <figure className="w-full h-full flex items-center justify-center">
            <Image
              src={images[active].src.replace("/public", "")}
              alt="Selected image"
              width={images[active].w}
              height={images[active].h}
              className="max-h-[85vh] max-w-[90vw] object-contain animate-zoom-in-like"
              sizes="100vw"
              priority
            />
          </figure>
          <button
            aria-label="Sonraki"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-3 text-black shadow cursor-pointer"
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
