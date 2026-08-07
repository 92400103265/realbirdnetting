import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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
  title: "Real bird netting  | Premium Balcony Safety Nets & Invisible Grills",
  description: "Real bird netting  is Gurugram leading provider of premium, UV-resistant safety nets, invisible grills, and ceiling cloth hangers. Same-day installation. 100% safe & affordable. Call +91 96866 68224 for a free inspection!",
  keywords: [
    "Gurugram Real bird netting ",
    "Real bird netting provide services Gurugram",
    "Pigeon Safety Nets Gurugram",
    "Bird Nets Gurugram",
    "Monkey Safety Nets Gurugram",
    "Invisible Grills Gurugram",
    "Balcony Safety Nets",
    "Children Safety Nets",
    "Sports Nets Gurugram",
    "Cricket Nets Gurugram",
    "Cloth Hangers Gurugram",
    "Best Safety Nets Gurugram",
    "Affordable Safety Nets Gurugram"
  ],
  authors: [{ name: "Real Bird Netting Gurugram" }],
  category: "Home Services",
  alternates: {
    canonical: "https://realbirdnetting.in",
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
    title: "Real bird netting  | Balcony Safety Nets & Invisible Grills",
    description: "Gurugram's trusted safety net installation experts. Premium quality, UV-resistant materials, same-day service, & free inspection. Protect your family today!",
    url: "https://realbirdnetting.in",
    siteName: "Real bird netting ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://realbirdnetting.in/images/balcony.webp",
        width: 1200,
        height: 630,
        alt: "Real bird netting  Installation in Gurugram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real bird netting  | Balcony Safety Nets",
    description: "Gurugram's premium safety net experts. Same-day installation & free site inspection. Call +91 96866 68224.",
    images: ["https://realbirdnetting.in/images/balcony.webp"],
  },
  other: {
    "google-site-verification": "verification_token_here", // Note: replace this with your actual Google Search Console token
  },
  verification: {
    google: "GiuYVwkg5ET-gVdnDQ_Bje9ZUTj2ULmGvCpqjeAU3ME",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inject Local Business Schema Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Real bird netting",
    "image": "https://realbirdnetting.in/images/balcony.webp",
    "@id": "https://realbirdnetting.in/#localbusiness",
    "url": "https://realbirdnetting.in",
    "telephone": "919354254539",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": " Shop No.165F,Gali No.-7,Hans Enclave, Sector-33 Near Rajiv Chowk",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4595,
      "longitude": 77.0266
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      " https://www.facebook.com/golu.kumar.150925",

      " https://www.instagram.com/golu.kumar4217?igsh=MWdyZ2NpN3V2aWRvNQ=="
       
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18321817773"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18321817773');
            `,
          }}
        />
        {/* Event snippet for Contact conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-18321817773/gdBgCIWs38wcENXG-5FE',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K6KCTMS8');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full bg-slate-50 text-slate-900 flex flex-col font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6KCTMS8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
