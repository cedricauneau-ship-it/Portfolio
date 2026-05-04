import type { Metadata } from "next";

import FooterClient from "@/components/FooterClient";

export const metadata: Metadata = {
  title: "Shelter · Jeu mobile React Native + TypeScript",
  description:
    "Shelter, jeu mobile narratif de survie post-apocalyptique. Application React Native + Expo, API TypeScript Express + Prisma + PostgreSQL, authentification JWT et Google Sign-In. Réalisé par Cédric Auneau.",
  alternates: {
    canonical: "/projets/shelter",
  },
  openGraph: {
    title: "Shelter · Jeu mobile narratif React Native + TypeScript",
    description:
      "Application complète React Native + API TypeScript. Auth JWT, Google Sign-In, AdMob, parrainage, succès, leaderboard.",
    url: "/projets/shelter",
    type: "article",
    images: [
      {
        url: "/images/og-shelter.png",
        width: 1200,
        height: 630,
        alt: "Shelter - jeu mobile narratif de survie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelter · Jeu mobile narratif React Native + TypeScript",
    description: "Application React Native + API TypeScript Express + Prisma + PostgreSQL.",
    images: ["/images/og-shelter.png"],
  },
};

export default function ProjetsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer><FooterClient /></footer>
    </>
  );
}
