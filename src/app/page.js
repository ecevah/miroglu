"use client";

import Head from "next/head";
import Script from "next/script";
import { useI18n } from "@/i18n/I18nProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BigWordSection from "@/components/BigWordSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ShipSection from "@/components/ShipSection";

export default function Home() {
  const { t } = useI18n();
  return (
    <>
      <Head>
        <title>
          {t.seo?.title ||
            "My Miroğlu Lojistik | Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri"}
        </title>
        <meta
          name="description"
          content={
            t.seo?.description ||
            "My Miroğlu Lojistik ve Miroğlu Lojistik - Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri. İstanbul, Ankara, İzmir, Bursa'da profesyonel lojistik çözümleri."
          }
        />
        <meta
          name="keywords"
          content={
            t.seo?.keywords ||
            "My Miroğlu Lojistik, Miroğlu Lojistik, my miroğlu lojistik, miroğlu lojistik, Miroğlu Taşımacılık, Miroğlu Nakliye, Miroğlu Kargo, uluslararası lojistik, yurtiçi taşımacılık, nakliye çözümleri, İstanbul lojistik, Ankara taşımacılık, İzmir nakliye, Bursa kargo"
          }
        />
        <meta name="author" content={t.seo?.author || "My Miroğlu Lojistik"} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={
            t.seo?.title ||
            "My Miroğlu Lojistik | Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri"
          }
        />
        <meta
          property="og:description"
          content={
            t.seo?.description ||
            "My Miroğlu Lojistik ve Miroğlu Lojistik - Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mymiroglulojistik.com.tr"
        />
        <meta
          property="og:image"
          content="https://www.mymiroglulojistik.com.tr/images/Mercedes-with-Text.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:site_name"
          content={t.seo?.siteName || "My Miroğlu Lojistik"}
        />
        <meta property="og:locale" content={t.seo?.locale || "tr_TR"} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={
            t.seo?.title ||
            "My Miroğlu Lojistik | Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri"
          }
        />
        <meta
          name="twitter:description"
          content={
            t.seo?.description ||
            "My Miroğlu Lojistik ve Miroğlu Lojistik - Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri."
          }
        />
        <meta
          name="twitter:image"
          content="https://www.mymiroglulojistik.com.tr/images/Mercedes-with-Text.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.mymiroglulojistik.com.tr" />

        {/* Favicon */}
        <link
          rel="icon"
          href="/logo/favicon.ico"
          sizes="32x32"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="/logo/favicon.ico"
          sizes="16x16"
          type="image/x-icon"
        />
        <link rel="shortcut icon" href="/logo/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo/favicon.ico" sizes="180x180" />

        {/* Additional SEO */}
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content={t.seo?.city || "İzmir"} />
        <meta name="geo.position" content="38.4397449;27.2762504" />
        <meta name="ICBM" content="38.4397449, 27.2762504" />

        {/* Business Information */}
        <meta
          name="business:contact_data:street_address"
          content="İzmir, Türkiye"
        />
        <meta
          name="business:contact_data:locality"
          content={t.seo?.city || "İzmir"}
        />
        <meta
          name="business:contact_data:region"
          content={t.seo?.city || "İzmir"}
        />
        <meta name="business:contact_data:postal_code" content="35000" />
        <meta
          name="business:contact_data:country_name"
          content={t.seo?.country || "Türkiye"}
        />

        {/* Google Search Console & Analytics */}
        <meta
          name="google-site-verification"
          content="Dk3qEBYiuIxHaHT6kOCjAVso-MRUwj41jCzZWWcXn1U"
        />
        {/*
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta
          name="yandex-verification"
          content="your-yandex-verification-code"
        />
        */}

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content={t.seo?.siteName || "My Miroğlu Lojistik"}
        />

        {/* Rich Snippets */}
        <meta
          name="application-name"
          content={t.seo?.siteName || "My Miroğlu Lojistik"}
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Language and Content */}
        <meta
          httpEquiv="content-language"
          content={t.seo?.locale?.split("_")[0] || "tr"}
        />
        <meta name="language" content={t.seo?.language || "Turkish"} />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Social Media Additional */}
        <meta property="og:updated_time" content="2024-01-15T10:00:00+00:00" />
        <meta property="article:author" content="MY Miroğlu Lojistik" />
        {/*
        <meta
          property="article:publisher"
          content="https://www.facebook.com/mymiroglulojistik"
        />
        */}
        {/* Twitter Additional */}
        {/*
        <meta name="twitter:site" content="@miroglulojistik" />
        <meta name="twitter:creator" content="@miroglulojistik" />
        <meta name="twitter:domain" content="www.mymiroglulojistik.com.tr" />
        */}
        {/* Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Cache Control */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta httpEquiv="Expires" content="31536000" />

        {/* Google Search Console Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name:
                t.seo?.title ||
                "My Miroğlu Lojistik | Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri",
              description:
                t.seo?.description ||
                "My Miroğlu Lojistik ve Miroğlu Lojistik - Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri.",
              url: "https://www.mymiroglulojistik.com.tr",
              mainEntity: {
                "@type": "Organization",
                name: t.seo?.siteName || "My Miroğlu Lojistik",
                url: "https://www.mymiroglulojistik.com.tr",
                logo: "https://www.mymiroglulojistik.com.tr/logo/logo.svg",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+90-532-431-19-53",
                  contactType: "customer service",
                  availableLanguage: t.seo?.language || "Turkish",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: t.seo?.city || "İzmir",
                  addressRegion: t.seo?.city || "İzmir",
                  addressCountry: "TR",
                },
                sameAs: [
                  {
                    /*
                  "https://www.facebook.com/miroglulojistik",
                  "https://www.instagram.com/miroglulojistik",
                  "https://www.linkedin.com/company/miroglulojistik",
                  */
                  },
                ],
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: t.seo?.breadcrumbHome || "Ana Sayfa",
                    item: "https://www.mymiroglulojistik.com.tr",
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      {/* Google Analytics & Search Console */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W94KFCQRKQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W94KFCQRKQ', {
            page_title: '${
              t.seo?.title ||
              "My Miroğlu Lojistik | Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri"
            }',
            page_location: 'https://www.mymiroglulojistik.com.tr',
            custom_map: {
              'custom_parameter_1': 'logistics_company',
              'custom_parameter_2': 'transportation_services'
            }
          });
        `}
      </Script>

      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ShipSection />
      </section>
      <BigWordSection />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </>
  );
}
