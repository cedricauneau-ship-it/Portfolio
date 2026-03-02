import type { Metadata } from "next";
import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";

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
        <Navbar />
        <SideMenu />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
