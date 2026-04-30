import type { Metadata } from "next";

import FooterClient from "@/components/FooterClient";

export const metadata: Metadata = {
  title: "Shelter · Jeu mobile narratif React Native + TypeScript",
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
  },
};

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer><FooterClient /></footer>
    </>
  );
}
