 import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
  title:
    "Real Bird Netting | Premium Balcony Safety Nets & Invisible Grills",

  description:
    "Real Bird Netting provides bird safety nets, balcony safety nets, invisible grills, pigeon control and ceiling cloth hangers in Gurugram. Professional installation and free site inspection.",

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
      name: "Real Bird Netting Gurugram",
    },
  ],

  category: "Home Services",

  alternates: {
    canonical: "https://www.realbirdnetting.in",
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

  openGraph: {
    title:
      "Real Bird Netting | Balcony Safety Nets & Invisible Grills",

    description:
      "Gurugram's trusted provider of bird safety nets, balcony safety nets and invisible grills. Professional installation and free site inspection.",

    url: "https://www.realbirdnetting.in",

    siteName: "Real Bird Netting",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "https://www.realbirdnetting.in/images/balcony.webp",
        width: 1200,
        height: 630,
        alt: "Real Bird Netting balcony safety installation in Gurugram",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Real Bird Netting | Balcony Safety Nets & Invisible Grills",

    description:
      "Professional bird netting, balcony safety nets and invisible grills in Gurugram.",

    images: [
      "https://www.realbirdnetting.in/images/balcony.webp",
    ],
  },

  verification: {
    google:
      "GiuYVwkg5ET-gVdnDQ_Bje9ZUTj2ULmGvCpqjeAU3ME",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Real Bird Netting",

    image:
      "https://www.realbirdnetting.in/images/balcony.webp",

    "@id":
      "https://www.realbirdnetting.in/#localbusiness",

    url: "https://www.realbirdnetting.in",

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

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth h-full antialiased`}
    >
      <head>

        {/* =====================================================
            GOOGLE ADS GOOGLE TAG
            ===================================================== */}

        <Script
          id="google-ads-script"
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

            gtag("js", new Date());

            gtag("config", "AW-18388085912");
          `}
        </Script>

        {/* =====================================================
            LOCAL BUSINESS STRUCTURED DATA
            ===================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

      </head>

      <body className="min-h-full bg-slate-50 text-slate-900 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}