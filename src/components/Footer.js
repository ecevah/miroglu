"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState, useEffect } from "react";

function FooterCopyright({ t, isClient, isSafari }) {
  const [currentYear, setCurrentYear] = useState(2024);
  
  useEffect(() => {
    if (isClient) {
      setCurrentYear(new Date().getFullYear());
    }
  }, [isClient]);

  // Safari için daha güvenli rendering - server-side'da statik içerik
  if (!isClient) {
    return (
      <p className="text-sm text-gray-500 mb-4 md:mb-0">
        © 2025 MY Miroğlu Lojistik. Tüm hakları saklıdır.
      </p>
    );
  }

  return (
    <p className="text-sm text-gray-500 mb-4 md:mb-0">
      © {currentYear}{" "}
      {t?.footer?.companyName || "MY Miroğlu Lojistik"}.{" "}
      {t?.footer?.rights || "Tüm hakları saklıdır."}
    </p>
  );
}

export default function Footer() {
  const { t } = useI18n();
  const [sectionRef, , hasIntersected] = useIntersectionObserver();
  const [isClient, setIsClient] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsClient(true);
    // Safari detection
    const userAgent = navigator.userAgent;
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

  // Safari için hydration-safe rendering
  if (!mounted) {
    return (
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="mb-4">
                <div className="flex items-center mb-4">
                  <Image
                    src="/logo/logo.svg"
                    alt="MY Miroğlu Lojistik"
                    width={80}
                    height={20}
                    className="h-20 w-auto mr-3"
                  />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Güvenilir ve profesyonel lojistik hizmetleri ile dünyayı küçültüyoruz. 20+ ülkede hizmet veren deneyimli ekibimizle yanınızdayız.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Hızlı Linkler
              </h4>
              <ul className="space-y-2">
                <li><Link href="/#home" className="text-gray-600 hover:text-[#692433] transition-colors">Ana Sayfa</Link></li>
                <li><Link href="/#about" className="text-gray-600 hover:text-[#692433] transition-colors">Hakkımızda</Link></li>
                <li><Link href="/#services" className="text-gray-600 hover:text-[#692433] transition-colors">Hizmetlerimiz</Link></li>
                <li><Link href="/gallery" className="text-gray-600 hover:text-[#692433] transition-colors">Galeri</Link></li>
                <li><Link href="/certificates" className="text-gray-600 hover:text-[#692433] transition-colors">Belgeler</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                İletişim Bilgileri
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium">Adres:</span><br />
                  İstanbul, Türkiye
                </p>
                <p>
                  <span className="font-medium">Telefon:</span><br />
                  +90 (212) 123 45 67
                </p>
                <p>
                  <span className="font-medium">E-posta:</span><br />
                  info@miroglu.com
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <FooterCopyright t={t} isClient={isClient} isSafari={isSafari} />
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-[#692433] transition-colors">
                  Gizlilik Politikası
                </Link>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-[#692433] transition-colors">
                  Kullanım Şartları
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer ref={sectionRef} className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div
            className={`md:col-span-2 transition-all duration-1000 ${
              hasIntersected
                ? "animate-fade-in-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="mb-4">
              <div className="flex items-center mb-4">
                <Image
                  src="/logo/logo.svg"
                  alt="MY Miroğlu Lojistik"
                  width={80}
                  height={20}
                  className="h-20 w-auto mr-3"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t?.footer?.companyDescription ||
                  "Güvenilir ve profesyonel lojistik hizmetleri ile dünyayı küçültüyoruz. 20+ ülkede hizmet veren deneyimli ekibimizle yanınızdayız."}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-1000 ${
              hasIntersected
                ? "animate-fade-in-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              {t?.footer?.quickLinks || "Hızlı Linkler"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#home"
                  className="text-gray-600 hover:text-[#692433] transition-colors"
                >
                  {t?.nav?.home || "Ana Sayfa"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-600 hover:text-[#692433] transition-colors"
                >
                  {t?.nav?.about || "Hakkımızda"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-600 hover:text-[#692433] transition-colors"
                >
                  {t?.nav?.services || "Hizmetlerimiz"}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 hover:text-[#692433] transition-colors"
                >
                  {t?.nav?.gallery || "Galeri"}
                </Link>
              </li>
              <li>
                <Link
                  href="/certificates"
                  className="text-gray-600 hover:text-[#692433] transition-colors"
                >
                  {t?.nav?.certificates || "Belgeler"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              hasIntersected
                ? "animate-fade-in-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              {t?.footer?.contactInfo || "İletişim Bilgileri"}
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium">
                  {t?.footer?.address || "Adres"}:
                </span>
                <br />
                {t?.footer?.addressValue || "İstanbul, Türkiye"}
              </p>
              <p>
                <span className="font-medium">
                  {t?.footer?.phone || "Telefon"}:
                </span>
                <br />
                {t?.footer?.phoneValue || "+90 (212) 123 45 67"}
              </p>
              <p>
                <span className="font-medium">
                  {t?.footer?.email || "E-posta"}:
                </span>
                <br />
                {t?.footer?.emailValue || "info@miroglu.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-gray-200 mt-8 pt-8 transition-all duration-1000 ${
            hasIntersected
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <FooterCopyright t={t} isClient={isClient} isSafari={isSafari} />
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-[#692433] transition-colors"
              >
                {t?.footer?.privacy || "Gizlilik Politikası"}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-[#692433] transition-colors"
              >
                {t?.footer?.terms || "Kullanım Şartları"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
