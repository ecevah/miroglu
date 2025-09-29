"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function FooterCopyright({ t }) {
  const [year, setYear] = useState(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <p className="text-sm text-gray-500 mb-4 md:mb-0">
      © <span suppressHydrationWarning>{year ?? ""}</span>{" "}
      {t.footer?.companyName || "Miroğlu Lojistik"}.{" "}
      {t.footer?.rights || "Tüm hakları saklıdır."}
    </p>
  );
}

export default function Footer() {
  const { t } = useI18n();
  const [sectionRef, , hasIntersected] = useIntersectionObserver();

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
                <img
                  src="/logo/logo.svg"
                  alt="MY Miroğlu Lojistik"
                  className="h-20 w-auto mr-3"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.footer?.companyDescription ||
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
              {t.footer?.quickLinks || "Hızlı Linkler"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#home"
                  className="text-gray-600 hover:text-[#692433] transition-colors"
                >
                  {t.nav?.home || "Ana Sayfa"}
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-gray-600 hover:text-[#692433] transition-colors"
                >
                  {t.nav?.about || "Hakkımızda"}
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-600 hover:text-[#692433] transition-colors"
                >
                  {t.nav?.services || "Hizmetlerimiz"}
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-600 hover:text-[#692433] transition-colors"
                >
                  {t.nav?.gallery || "Galeri"}
                </a>
              </li>
              <li>
                <a
                  href="/certificates"
                  className="text-gray-600 hover:text-[#692433] transition-colors"
                >
                  {t.nav?.certificates || "Belgeler"}
                </a>
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
              {t.footer?.contactInfo || "İletişim Bilgileri"}
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium">
                  {t.footer?.address || "Adres"}:
                </span>
                <br />
                {t.footer?.addressValue || "İstanbul, Türkiye"}
              </p>
              <p>
                <span className="font-medium">
                  {t.footer?.phone || "Telefon"}:
                </span>
                <br />
                {t.footer?.phoneValue || "+90 (212) 123 45 67"}
              </p>
              <p>
                <span className="font-medium">
                  {t.footer?.email || "E-posta"}:
                </span>
                <br />
                {t.footer?.emailValue || "info@miroglu.com"}
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
            <FooterCopyright t={t} />
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-sm text-gray-500 hover:text-[#692433] transition-colors"
              >
                {t.footer?.privacy || "Gizlilik Politikası"}
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-500 hover:text-[#692433] transition-colors"
              >
                {t.footer?.terms || "Kullanım Şartları"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
