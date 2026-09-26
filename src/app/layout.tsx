
import type { Metadata } from "next";
import Script from "next/script";

import { Inter, Outfit } from "next/font/google";

import Chatbot from "@/components/Chatbot";

import "./globals.css";

// =====================================================
// GOOGLE FONTS
// =====================================================

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// =====================================================
// WEBSITE CONSTANTS
// =====================================================

const SITE_URL = "https://realbirdnetting.in";

const SITE_NAME = "Real Bird Netting";

const SITE_DESCRIPTION =
  "Real Bird Netting provides professional bird safety nets, balcony safety nets, invisible grills, pigeon control and ceiling cloth hangers in Gurugram. Contact us for installation and site inspection.";

const OG_IMAGE = `${SITE_URL}/images/balcony.webp`;

// =====================================================
// SEO METADATA
// =====================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Real Bird Netting | Balcony Safety Nets & Invisible Grills in Gurugram",
    template: "%s | Real Bird Netting",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  keywords: [
    "Real Bird Netting Gurugram",
    "Bird Netting Gurugram",
    "Bird Nets Gurugram",
    "Pigeon Safety Nets Gurugram",
    "Balcony Safety Nets Gurugram",
    "Invisible Grills Gurugram",
    "Monkey Safety Nets Gurugram",
    "Children Safety Nets Gurugram",
    "Sports Nets Gurugram",
    "Cricket Nets Gurugram",
    "Cloth Hangers Gurugram",
    "Pigeon Control Gurugram",
  ],

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,

  publisher: SITE_NAME,

  category: "Home Services",

  // ===================================================
  // FAVICON
  // ===================================================

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  // ===================================================
  // CANONICAL URL
  // ===================================================

  alternates: {
    canonical: "/",
  },

  // ===================================================
  // SEARCH ENGINE INDEXING
  // ===================================================

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

  // ===================================================
  // GOOGLE SEARCH CONSOLE VERIFICATION
  // ===================================================

  verification: {
    google: "6dFaXAk1RmNkt0Ma5J6smMiSMo2wSwUQzUBhTyfkYKc",
  },

  // ===================================================
  // OPEN GRAPH
  // ===================================================

  openGraph: {
    title:
      "Real Bird Netting | Balcony Safety Nets & Invisible Grills",

    description: SITE_DESCRIPTION,

    url: SITE_URL,

    siteName: SITE_NAME,

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Real Bird Netting balcony safety installation in Gurugram",
      },
    ],
  },

  // ===================================================
  // TWITTER / X METADATA
  // ===================================================

  twitter: {
    card: "summary_large_image",

    title:
      "Real Bird Netting | Balcony Safety Nets & Invisible Grills",

    description: SITE_DESCRIPTION,

    images: [OG_IMAGE],
  },
};

// =====================================================
// LOCAL BUSINESS STRUCTURED DATA
// =====================================================

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  "@id": `${SITE_URL}/#localbusiness`,

  name: SITE_NAME,

  url: SITE_URL,

  image: OG_IMAGE,

  description: SITE_DESCRIPTION,

  telephone: "+919354254539",

  priceRange: "$$",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "Shop No. 165F, Gali No. 7, Hans Enclave, Sector-33, Near Rajiv Chowk",

    addressLocality: "Gurugram",

    addressRegion: "Haryana",

    postalCode: "122001",

    addressCountry: "IN",
  },

  geo: {
    "@type": "GeoCoordinates",

    latitude: 28.4595,

    longitude: 77.0266,
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",

      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],

      opens: "00:00",

      closes: "23:59",
    },
  ],

  sameAs: [
    "https://www.facebook.com/golu.kumar.150925",
    "https://www.instagram.com/golu.kumar4217",
  ],
};

// =====================================================
// ROOT LAYOUT
// =====================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        {/* =============================================
            GOOGLE ADS TRACKING
            ============================================= */}

        <Script
          id="google-ads-library"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18388085912"
          strategy="afterInteractive"
        />

        <Script
          id="google-ads-config"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag("js", new Date());

            gtag("config", "AW-18388085912");
          `}
        </Script>

        {/* =============================================
            LOCAL BUSINESS JSON-LD STRUCTURED DATA
            ============================================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </head>

      <body className="min-h-full bg-slate-50 text-slate-900 flex flex-col font-sans">
        {/* WEBSITE CONTENT */}

        {children}

        {/* WEBSITE CHATBOT */}

        <Chatbot />
      </body>
    </html>
  );
}