import type { Metadata } from "next";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Auneau Cédric - Shelter",
  description: "SHELTER est un projet collaboratif de jeu mobile narratif de survie reposant sur un système de choix binaires impactant la progression narrative.",
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
        <footer><Footer /></footer>
    </>    
  );
}
