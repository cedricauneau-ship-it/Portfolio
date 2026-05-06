import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

const SITE_URL = "https://www.cedric-auneau.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Cédric Auneau · Développeur Web Freelance · Île-de-France",
    template: "%s · Cédric Auneau",
  },

  description:
    "Développeur fullstack JavaScript / TypeScript freelance à Fontenay-en-Parisis (95). Création de sites web pour associations, TPE et indépendants en Île-de-France. Forfaits clés en main, accompagnement long terme, workflow productif avec assistance IA.",

  keywords: [
    "développeur freelance",
    "développeur web freelance",
    "freelance JavaScript",
    "freelance TypeScript",
    "freelance React",
    "freelance Next.js",
    "site web association",
    "création site association",
    "site web TPE",
    "site web indépendant",
    "site web professionnel libéral",
    "développeur Fontenay-en-Parisis",
    "développeur Île-de-France",
    "développeur 95",
    "freelance IA",
    "Cédric Auneau",
  ],

  authors: [{ name: "Cédric Auneau", url: SITE_URL }],
  creator: "Cédric Auneau",
  publisher: "Cédric Auneau",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Cédric Auneau · Développeur Freelance",
    title: "Cédric Auneau · Développeur Web Freelance · Île-de-France",
    description:
      "Création de sites web pour associations, TPE et indépendants en Île-de-France. Forfaits clés en main, accompagnement long terme.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Cédric Auneau - Développeur freelance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cédric Auneau · Développeur Web Freelance",
    description:
      "Création de sites web pour associations, TPE et indépendants en Île-de-France.",
    images: ["/images/og-default.png"],
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

  icons: {
    icon: "/favicon.ico",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cédric Auneau",
  jobTitle: "Développeur Fullstack JavaScript / TypeScript freelance",
  url: SITE_URL,
  image: `${SITE_URL}/images/og-default.png`,
  email: "mailto:auneau.dev@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fontenay-en-Parisis",
    postalCode: "95190",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  sameAs: [
    "https://github.com/cedricauneau-ship-it",
    "https://www.linkedin.com/in/cedric-auneau",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "React Native",
    "Expo",
    "Création de sites pour associations",
    "Création de sites pour TPE et indépendants",
    "Développement assisté par IA",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "La Capsule",
    url: "https://www.lacapsule.academy",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cédric Auneau · Développeur Web Freelance",
  description:
    "Création de sites web pour associations, TPE et indépendants en Île-de-France. Forfaits clés en main, accompagnement long terme, workflow productif avec assistance IA.",
  url: SITE_URL,
  founder: { "@type": "Person", name: "Cédric Auneau" },
  areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fontenay-en-Parisis",
    postalCode: "95190",
    addressCountry: "FR",
  },
  priceRange: "1500€ - 5500€",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Pack 1 — Site Présence",
        description:
          "Site web pour association : 4-5 pages, CMS éditable, formulaire de contact, intégration HelloAsso, hébergement et nom de domaine inclus.",
        price: "1500",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Pack 2 — Site Engagement",
        description:
          "Site web complet pour association : Pack 1 + intégration HelloAsso (dons / adhésions / billetterie), agenda, galerie, recrutement bénévoles.",
        price: "2900",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Suivi & maintenance — Tranquillité",
        description:
          "Maintenance annuelle : surveillance, mises à jour, modifications mensuelles, support 48 h.",
        price: "360",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Suivi & maintenance — Accompagnement",
        description:
          "Maintenance + 2 à 3 h d'évolutions par mois, formation continue, support 24 h, point trimestriel.",
        price: "960",
        priceCurrency: "EUR",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="ld-service"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
