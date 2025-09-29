"use client";

import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BigWordSection from "@/components/BigWordSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ShipSection from "@/components/ShipSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          MY Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri
        </title>
        <meta
          name="description"
          content="MY Miroğlu Lojistik - Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri. İstanbul, Ankara, İzmir, Bursa'da profesyonel lojistik çözümleri."
        />
        <meta
          name="keywords"
          content="MY Miroğlu Lojistik, Miroğlu Taşımacılık, Miroğlu Nakliye, Miroğlu Kargo, uluslararası lojistik, yurtiçi taşımacılık, nakliye çözümleri, İstanbul lojistik, Ankara taşımacılık, İzmir nakliye, Bursa kargo"
        />
        <meta name="author" content="MY Miroğlu Lojistik" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="MY Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri"
        />
        <meta
          property="og:description"
          content="Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri."
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
        <meta property="og:site_name" content="MY Miroğlu Lojistik" />
        <meta property="og:locale" content="tr_TR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MY Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri"
        />
        <meta
          name="twitter:description"
          content="Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri."
        />
        <meta
          name="twitter:image"
          content="https://www.mymiroglulojistik.com.tr/images/Mercedes-with-Text.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.mymiroglulojistik.com.tr" />

        {/* Additional SEO */}
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="İzmir" />
        <meta name="geo.position" content="38.4397449;27.2762504" />
        <meta name="ICBM" content="38.4397449, 27.2762504" />

        {/* Business Information */}
        <meta
          name="business:contact_data:street_address"
          content="İzmir, Türkiye"
        />
        <meta name="business:contact_data:locality" content="İzmir" />
        <meta name="business:contact_data:region" content="İzmir" />
        <meta name="business:contact_data:postal_code" content="35000" />
        <meta name="business:contact_data:country_name" content="Türkiye" />

        {/* Google Search Console & Analytics */}
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta
          name="yandex-verification"
          content="your-yandex-verification-code"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MY Miroğlu Lojistik" />

        {/* Rich Snippets */}
        <meta name="application-name" content="MY Miroğlu Lojistik" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Language and Content */}
        <meta httpEquiv="content-language" content="tr" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Social Media Additional */}
        <meta property="og:updated_time" content="2024-01-15T10:00:00+00:00" />
        <meta property="article:author" content="MY Miroğlu Lojistik" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/miroglulojistik"
        />

        {/* Twitter Additional */}
        <meta name="twitter:site" content="@miroglulojistik" />
        <meta name="twitter:creator" content="@miroglulojistik" />
        <meta name="twitter:domain" content="www.mymiroglulojistik.com.tr" />

        {/* Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Cache Control */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta httpEquiv="Expires" content="31536000" />

        {/* Google Analytics & Search Console */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'MY Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri',
                page_location: 'https://www.mymiroglulojistik.com.tr',
                custom_map: {
                  'custom_parameter_1': 'logistics_company',
                  'custom_parameter_2': 'transportation_services'
                }
              });
            `,
          }}
        />

        {/* Google Search Console Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "MY Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri",
              description:
                "Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri.",
              url: "https://www.mymiroglulojistik.com.tr",
              mainEntity: {
                "@type": "Organization",
                name: "MY Miroğlu Lojistik",
                url: "https://www.mymiroglulojistik.com.tr",
                logo: "https://www.mymiroglulojistik.com.tr/logo/logo.svg",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+90-532-431-19-53",
                  contactType: "customer service",
                  availableLanguage: "Turkish",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "İzmir",
                  addressRegion: "İzmir",
                  addressCountry: "TR",
                },
                sameAs: [
                  "https://www.facebook.com/miroglulojistik",
                  "https://www.instagram.com/miroglulojistik",
                  "https://www.linkedin.com/company/miroglulojistik",
                ],
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Ana Sayfa",
                    item: "https://www.mymiroglulojistik.com.tr",
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <ShipSection />
      <BigWordSection />
      <section id="stats">
        <StatsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </>
  );
}
