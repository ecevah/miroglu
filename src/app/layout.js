import { Geist, Geist_Mono, Inter, Anton } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.mymiroglulojistik.com.tr"),
  title: {
    default:
      "MY Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri",
    template:
      "%s | MY Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri",
  },
  description:
    "MY Miroğlu Lojistik - Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri. İstanbul, Ankara, İzmir, Bursa'da profesyonel lojistik çözümleri.",
  keywords: [
    // --- Türkçe Anahtar Kelimeler ---
    "My Miroğlu Lojistik",
    "Miroğlu Lojistik",
    "My Miroğlu Taşımacılık",
    "Miroğlu Taşımacılık",
    "Miroğlu Nakliye",
    "Miroğlu Kargo",
    "Miroğlu Uluslararası Taşımacılık",
    "Miroğlu Depolama",
    "Miroğlu Parsiyel Taşımacılık",
    "lojistik taşımacılık hizmetleri",
    "uluslararası lojistik",
    "yurtiçi taşımacılık",
    "nakliye çözümleri",
    "gümrükleme ve lojistik",
    "ağır yük taşımacılığı",
    "depolama hizmetleri",
    "ekspres kargo",
    "şehirlerarası nakliye",
    "İstanbul lojistik firması",
    "Ankara taşımacılık şirketi",
    "İzmir nakliye hizmetleri",
    "Bursa kargo firması",
    "güvenilir lojistik",
    "profesyonel taşımacılık",
    "Miroğlu müşteri hizmetleri",
    "Miroğlu iş ilanı",
    "Miroğlu kariyer",

    // --- English Keywords ---
    "My Miroglu Logistics",
    "Miroglu Logistics",
    "My Miroglu Transportation",
    "Miroglu Transportation",
    "freight forwarding",
    "cargo services",
    "logistics solutions",
    "transportation services",
    "warehousing services",
    "customs clearance",
    "heavy cargo transport",
    "express delivery",
    "intercity shipping",
    "reliable logistics",
    "professional transportation",
    "Miroglu customer service",
    "career opportunities",
    "logistics company Turkey",
    "freight forwarder Turkey",
    "international shipping Turkey",
    "cargo services Turkey",

    // --- Deutsch (Almanca) ---
    "My Miroglu Logistik",
    "Miroglu Logistik",
    "My Miroglu Spedition",
    "Miroglu Spedition",
    "internationale Logistik",
    "Frachtverkehr",
    "Logistiklösungen",
    "Transportdienstleistungen",
    "Lagerdienstleistungen",
    "Zollabfertigung",
    "Schwerlasttransport",
    "Expresslieferung",
    "Stadtverkehr Türkei",
    "zuverlässige Logistik",
    "professioneller Transport",
    "Miroglu Kundenservice",
    "Karrieremöglichkeiten",
    "Logistikunternehmen Türkei",
    "Spediteur Türkei",
    "internationaler Versand Türkei",
    "Frachtdienstleistungen Türkei",

    // --- Français (Fransızca) ---
    "My Miroglu Logistique",
    "Miroglu Logistique",
    "My Miroglu Transport",
    "Miroglu Transport",
    "logistique internationale",
    "transport de marchandises",
    "services de fret",
    "solutions logistiques",
    "services de transport",
    "services d'entrepôt",
    "dédouanement",
    "transport de charges lourdes",
    "livraison express",
    "expédition interurbaine",
    "logistique fiable",
    "transport professionnel",
    "Miroglu service client",
    "opportunités de carrière",
    "entreprise logistique Turquie",
    "transitaire Turquie",
    "expédition internationale Turquie",
    "services de fret Turquie",
  ],
  authors: [{ name: "Ahmet Ecevit", url: "https://www.ahmetecevit.com" }],
  creator: "Ahmet Ecevit",
  publisher: "MY Miroğlu Lojistik",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.mymiroglulojistik.com.tr",
    siteName: "MY Miroğlu Lojistik",
    title:
      "MY Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri",
    description:
      "Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri.",
    images: [
      {
        url: "/images/Mercedes-with-Text.png",
        width: 1200,
        height: 630,
        alt: "MY Miroğlu Lojistik - Profesyonel Taşımacılık Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MY Miroğlu Lojistik | Uluslararası Taşımacılık ve Lojistik Hizmetleri",
    description:
      "Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri.",
    images: ["/images/Mercedes-with-Text.png"],
  },
  alternates: {
    canonical: "https://www.mymiroglulojistik.com.tr",
    languages: {
      "tr-TR": "https://www.mymiroglulojistik.com.tr",
      "en-US": "https://www.mymiroglulojistik.com.tr/en",
      "de-DE": "https://www.mymiroglulojistik.com.tr/de",
      "fr-FR": "https://www.mymiroglulojistik.com.tr/fr",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Transportation and Logistics",
  classification: "Business",
  icons: {
    icon: "/logo/fav-logo.svg",
    shortcut: "/logo/fav-logo.svg",
    apple: "/logo/fav-logo.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.mymiroglulojistik.com.tr/#organization",
        name: "MY Miroğlu Lojistik",
        url: "https://www.mymiroglulojistik.com.tr",
        logo: {
          "@type": "ImageObject",
          url: "https://www.mymiroglulojistik.com.tr/logo/logo.svg",
          width: 300,
          height: 100,
        },
        description:
          "Türkiye'nin güvenilir lojistik ortağı. Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri.",
        foundingDate: "2020",
        address: {
          "@type": "PostalAddress",
          addressCountry: "TR",
          addressLocality: "İzmir",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+90-532-431-19-53", // Gerçek telefon numaranızı girin
          contactType: "customer service",
          availableLanguage: "Turkish",
        },
        sameAs: [
          "https://www.facebook.com/miroglulojistik",
          "https://www.instagram.com/miroglulojistik",
          "https://www.linkedin.com/company/miroglulojistik",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.mymiroglulojistik.com.tr/#localbusiness",
        name: "MY Miroğlu Lojistik",
        image:
          "https://www.mymiroglulojistik.com.tr/images/Mercedes-with-Text.png",
        telephone: "+90-532-431-19-53", // Gerçek telefon numaranızı girin
        email: "info@mymiroglulojistik.com.tr", // Gerçek email adresinizi girin
        address: {
          "@type": "PostalAddress",
          addressCountry: "TR",
          addressLocality: "İzmir",
          addressRegion: "İzmir",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 38.4397449,
          longitude: 27.2762504,
        },
        openingHours: "Mo-Fr 08:00-18:00",
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "150",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.mymiroglulojistik.com.tr/#service",
        name: "Lojistik ve Taşımacılık Hizmetleri",
        description:
          "Uluslararası taşımacılık, nakliye, kargo, depolama ve parsiyel taşımacılık hizmetleri",
        provider: {
          "@id": "https://www.mymiroglulojistik.com.tr/#organization",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Türkiye",
            alternateName: "Turkey",
          },
          {
            "@type": "Country",
            name: "Almanya",
            alternateName: "Germany",
          },
          {
            "@type": "Country",
            name: "Fransa",
            alternateName: "France",
          },
          {
            "@type": "Country",
            name: "İngiltere",
            alternateName: "United Kingdom",
          },
          {
            "@type": "Country",
            name: "İtalya",
            alternateName: "Italy",
          },
          {
            "@type": "Country",
            name: "Hollanda",
            alternateName: "Netherlands",
          },
          {
            "@type": "Country",
            name: "Belçika",
            alternateName: "Belgium",
          },
          {
            "@type": "Country",
            name: "Avusturya",
            alternateName: "Austria",
          },
          {
            "@type": "Country",
            name: "İsviçre",
            alternateName: "Switzerland",
          },
          {
            "@type": "Country",
            name: "Polonya",
            alternateName: "Poland",
          },
        ],
        serviceType: [
          "Uluslararası Taşımacılık",
          "Nakliye",
          "Kargo",
          "Depolama",
          "Parsiyel Taşımacılık",
          "Gümrükleme",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.mymiroglulojistik.com.tr/#website",
        url: "https://www.mymiroglulojistik.com.tr",
        name: "MY Miroğlu Lojistik",
        description: "Türkiye'nin güvenilir lojistik ortağı",
        publisher: {
          "@id": "https://www.mymiroglulojistik.com.tr/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.mymiroglulojistik.com.tr/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="tr">
      <head>
        {/* Hreflang Links for International SEO */}
        <link
          rel="alternate"
          hrefLang="tr"
          href="https://www.mymiroglulojistik.com.tr"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.mymiroglulojistik.com.tr/en"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://www.mymiroglulojistik.com.tr/de"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://www.mymiroglulojistik.com.tr/fr"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.mymiroglulojistik.com.tr"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${inter.variable} antialiased`}
      >
        <I18nProvider>
          {children}
          <CookieConsent />
        </I18nProvider>
      </body>
    </html>
  );
}
