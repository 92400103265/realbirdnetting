
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";

import Chatbot from "@/components/Chatbot";
import "./globals.css";

const SITE_URL = "https://realbirdnetting.in";
const SITE_NAME = "Real Bird Netting";
const GOOGLE_ADS_ID = "AW-18388085912";

const SITE_DESCRIPTION =
  "Real Bird Netting provides bird netting, balcony safety nets, invisible grills, pigeon protection and cloth hangers in Gurugram. Contact us to discuss installation and request a site inspection.";

const OG_IMAGE = `${SITE_URL}/images/balcony.webp`;

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
    "Pigeon Netting Gurugram",
    "Balcony Safety Nets Gurugram",
    "Child Safety Nets Gurugram",
    "Pet Safety Nets Gurugram",
    "Invisible Grills Gurugram",
    "Pigeon Control Gurugram",
    "Cloth Hangers Gurugram",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Home Services",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  // Homepage canonical. Service pages should override this.
  alternates: {
    canonical: "/",
  },

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

  verification: {
    google: "6dFaXAk1RmNkt0Ma5J6smMiSMo2wSwUQzUBhTyfkYKc",
  },

  openGraph: {
    type: "website",
    title:
      "Real Bird Netting | Balcony Safety Nets & Invisible Grills in Gurugram",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Real Bird Netting installation in Gurugram",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Real Bird Netting | Balcony Safety Nets & Invisible Grills in Gurugram",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

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

  // Confirm these coordinates match your actual business location.
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-50 font-sans text-slate-900">
        {/* Google Ads global site tag */}
        <Script
          id="google-ads-library"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function gtag() {
              window.dataLayer.push(arguments);
            };
            window.gtag("js", new Date());
            window.gtag("config", "${GOOGLE_ADS_ID}");
          `}
        </Script>

        {/* Global LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}

        <Chatbot />
      </body>
    </html>
  );
}
