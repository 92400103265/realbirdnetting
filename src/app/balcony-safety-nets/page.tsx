
import type { Metadata } from "next";
import BalconySafetyNets from "../../components/BalconySafetyNets";

const SITE_URL = "https://realbirdnetting.in";
const PAGE_URL = `${SITE_URL}/balcony-safety-nets`;

export const metadata: Metadata = {
  title:
    "Balcony Safety Nets in Gurugram | Child & Pet Safety",

  description:
    "Looking for balcony safety nets in Gurugram? Explore custom-fit nets for balconies, children, pets and pigeon protection. Contact Real Bird Netting for an installation quotation.",

  keywords: [
    "balcony safety nets Gurugram",
    "balcony safety net installation Gurugram",
    "child safety nets Gurugram",
    "pet safety nets Gurugram",
    "balcony net installation",
    "balcony pigeon net Gurugram",
    "bird netting Gurugram",
    "residential balcony protection",
    "window safety nets Gurugram",
    "Real Bird Netting",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Real Bird Netting",
    locale: "en_IN",
    title:
      "Balcony Safety Nets in Gurugram | Real Bird Netting",
    description:
      "Explore balcony safety net solutions for homes and apartments in Gurugram. Contact Real Bird Netting to discuss your installation requirements.",
    images: [
      {
        url: `${SITE_URL}/images/balcony.webp`,
        width: 1200,
        height: 630,
        alt: "Balcony safety net installation by Real Bird Netting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Balcony Safety Nets in Gurugram",
    description:
      "Custom-fit balcony safety net options for homes and apartments. Request an installation quotation.",
    images: [`${SITE_URL}/images/balcony.webp`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Balcony Safety Net Installation",
  serviceType: "Balcony safety net installation",
  url: PAGE_URL,
  description:
    "Balcony safety net installation options for homes, apartments and residential balconies in Gurugram.",
  areaServed: {
    "@type": "City",
    name: "Gurugram",
  },
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Real Bird Netting",
    url: SITE_URL,
    telephone: "+919354254539",
  },
};

export default function BalconySafetyNetsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <BalconySafetyNets />
    </>
  );
}
