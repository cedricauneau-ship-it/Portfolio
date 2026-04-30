import type { Metadata } from "next";

import FooterClient from "@/components/FooterClient";

export const metadata: Metadata = {
  title: "Site web du Fontenay-en-Parisis Football Club · Réalisation",
  description:
    "Création du site officiel du Fontenay-en-Parisis Football Club, association sportive du Val-d'Oise. Site Next.js, hébergement Vercel, intégration calendrier et résultats. Réalisé par Cédric Auneau.",
  alternates: {
    canonical: "/projets/ffc",
  },
  openGraph: {
    title: "Site web du Fontenay-en-Parisis Football Club",
    description:
      "Site associatif Next.js réalisé pour le club de football de Fontenay-en-Parisis (95).",
    url: "/projets/ffc",
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
