"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu, RxCaretDown } from "react-icons/rx";
import { useI18n } from "@/i18n/I18nProvider";

export default function Header() {
  const { t, setLang } = useI18n();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const langRefDesktop = useRef(null);
  const langRefMobile = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    function handlePointerDown(event) {
      const isInsideDesktop =
        langRefDesktop.current && langRefDesktop.current.contains(event.target);
      const isInsideMobile =
        langRefMobile.current && langRefMobile.current.contains(event.target);
      const isInsideDrawer =
        drawerRef.current && drawerRef.current.contains(event.target);
      if (!isInsideDesktop && !isInsideMobile) {
        setIsLangOpen(false);
      }
      if (!isInsideDrawer) {
        setIsMenuOpen((open) => (open && isInsideDrawer ? true : open));
      }
    }
    function handleEsc(event) {
      if (event.key === "Escape") {
        setIsLangOpen(false);
        setIsMenuOpen(false);
      }
    }
    function handleScroll() {
      setHasScrolled(window.scrollY > 2);
    }
    document.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });
    document.addEventListener("keydown", handleEsc);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEsc);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClass =
    "relative py-1 text-sm font-medium text-black/80 hover:text-black transition-colors after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-black/70 after:transition-all scroll-smooth";
  const btnPrimary =
    "inline-flex items-center rounded-full bg-[#1f222a] text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-black/90 transition-colors text-center";
  const langBtn =
    "inline-flex items-center gap-1 text-sm font-medium text-black/80 hover:text-black cursor-pointer";

  const shellBase =
    "flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-200";
  const shellGlass =
    "border border-white/30 bg-white/40 shadow-lg backdrop-blur-md";
  const shellPlain = "bg-transparent";

  // Safari için hydration-safe rendering
  if (!mounted) {
    return (
      <header className="fixed top-4 left-0 right-0 z-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 bg-transparent">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo/logo.svg"
                alt="Miroğlu Logistics"
                width={210}
                height={54}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </Link>
            <nav className="hidden md:flex items-center gap-7">
              <Link href="/#home" className="relative py-1 text-sm font-medium text-black/80 hover:text-black transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/#about" className="relative py-1 text-sm font-medium text-black/80 hover:text-black transition-colors">
                Hakkımızda
              </Link>
              <Link href="/#services" className="relative py-1 text-sm font-medium text-black/80 hover:text-black transition-colors">
                Hizmetlerimiz
              </Link>
              <Link href="/gallery" className="relative py-1 text-sm font-medium text-black/80 hover:text-black transition-colors">
                Galeri
              </Link>
              <Link href="/certificates" className="relative py-1 text-sm font-medium text-black/80 hover:text-black transition-colors">
                Belgeler
              </Link>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <div className="inline-flex items-center gap-1 text-sm font-medium text-black/80 hover:text-black cursor-pointer">
                TR
              </div>
              <Link href="/#contact" className="inline-flex items-center rounded-full bg-[#1f222a] text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-black/90 transition-colors text-center">
                Bize Ulaşın
              </Link>
            </div>
            <button
              type="button"
              aria-label="Menüyü aç"
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/20 bg-white/60 p-2 shadow-sm backdrop-blur hover:bg-white"
            >
              <RxHamburgerMenu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div
          className={`${shellBase} ${
            hasScrolled || isMenuOpen ? shellGlass : shellPlain
          }`}
        >
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 animate-fade-down">
            <Image
              src="/logo/logo.svg"
              alt="Miroğlu Logistics"
              width={210}
              height={54}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop center nav */}
          <nav className="hidden md:flex items-center gap-7 animate-fade-up animate-delay-1">
            <Link href="/#home" className={linkClass}>
              {t.nav.home}
            </Link>
            <Link href="/#about" className={linkClass}>
              {t.nav.about}
            </Link>
            <Link href="/#services" className={linkClass}>
              {t.nav.services}
            </Link>
            <Link href="/gallery" className={linkClass}>
              {t.nav.gallery}
            </Link>
            <Link href="/certificates" className={linkClass}>
              {t.nav.certificates}
            </Link>
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3 animate-zoom-in animate-delay-2">
            <div className="relative" ref={langRefDesktop}>
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
                className={langBtn}
                onClick={() => setIsLangOpen((v) => !v)}
              >
                {t.langCode}
                <RxCaretDown className="h-4 w-4" />
              </button>
              {isLangOpen ? (
                <div
                  className="absolute right-0 mt-2 w-auto whitespace-nowrap overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <button
                    className="px-4 py-2 text-center text-sm hover:bg-black/[0.04] block"
                    onClick={() => {
                      setLang("tr");
                      setIsLangOpen(false);
                    }}
                  >
                    TR
                  </button>
                  <button
                    className="px-4 py-2 text-center text-sm hover:bg-black/[0.04] block"
                    onClick={() => {
                      setLang("en");
                      setIsLangOpen(false);
                    }}
                  >
                    EN
                  </button>
                </div>
              ) : null}
            </div>
            <Link href="/#contact" className={btnPrimary}>
              {t.cta.contact}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Menüyü aç"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/20 bg-white/60 p-2 shadow-sm backdrop-blur hover:bg-white animate-fade-down"
            onClick={() => setIsMenuOpen(true)}
          >
            <RxHamburgerMenu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      <div
        className={`${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } md:hidden fixed inset-0 z-50 transition-opacity duration-200 bg-black/40`}
      ></div>

      {/* Mobile drawer panel */}
      <aside
        ref={drawerRef}
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden fixed right-0 top-0 h-full w-[88vw] max-w-sm z-[60] bg-gradient-to-b from-white to-[#ecf2f6] shadow-2xl transition-transform duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-white/70 backdrop-blur">
          <Link href="/">
            <Image
              src="/logo/logo.svg"
              alt="Miroğlu Logistics"
              width={150}
              height={38}
            />
          </Link>
          <button
            type="button"
            aria-label="Menüyü kapat"
            className="p-2 rounded-xl hover:bg-black/5"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 py-4 text-base flex-1 overflow-y-auto">
          <Link
            href="/#home"
            className="rounded-lg px-3 py-2 hover:bg-black/[0.04]"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/#about"
            className="rounded-lg px-3 py-2 hover:bg-black/[0.04]"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.about}
          </Link>
          <Link
            href="/#services"
            className="rounded-lg px-3 py-2 hover:bg-black/[0.04]"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.services}
          </Link>
          <Link
            href="/#contact"
            className="rounded-lg px-3 py-2 hover:bg-black/[0.04]"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.contact}
          </Link>
          <Link
            href="/gallery"
            className="rounded-lg px-3 py-2 hover:bg-black/[0.04]"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.gallery}
          </Link>
          <Link
            href="/certificates"
            className="rounded-lg px-3 py-2 hover:bg-black/[0.04]"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.certificates}
          </Link>
        </nav>
        <div className="mt-auto px-6 py-4 border-t border-black/10 bg-white/60 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <div className="relative" ref={langRefMobile}>
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
                onClick={() => setIsLangOpen((v) => !v)}
                className={langBtn}
              >
                {t.langCode}
                <RxCaretDown className="h-4 w-4" />
              </button>
              {isLangOpen ? (
                <div
                  className="absolute right-0 bottom-full mb-2 w-auto whitespace-nowrap overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <button
                    className="px-4 py-2 text-center text-sm hover:bg-black/[0.04] block"
                    onClick={() => {
                      setLang("tr");
                      setIsLangOpen(false);
                    }}
                  >
                    TR
                  </button>
                  <button
                    className="px-4 py-2 text-center text-sm hover:bg-black/[0.04] block"
                    onClick={() => {
                      setLang("en");
                      setIsLangOpen(false);
                    }}
                  >
                    EN
                  </button>
                </div>
              ) : null}
            </div>
            <Link href="/#contact" className={btnPrimary}>
              {t.cta.contact}
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}
