import type { Metadata } from "next";
import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cédric Auneau – Développeur Web & Mobile Fullstack",
  description:
    "Portfolio de Cédric Auneau, développeur web et mobile fullstack. Projets, compétences, contact et expériences.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <header><Navbar /></header>
        <main>{children}</main>
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
