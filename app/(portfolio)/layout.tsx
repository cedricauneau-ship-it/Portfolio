import type { Metadata } from "next";

import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";

export const metadata: Metadata = {
  title: "Cédric Auneau · Développeur freelance JavaScript en Île-de-France",
  description: "Cédric Auneau, développeur fullstack JavaScript / TypeScript freelance à Fontenay-en-Parisis (95). Création de sites web pour associations et PME. Forfaits clés en main, suivi long terme.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cédric Auneau · Développeur freelance JavaScript en Île-de-France",
    description: "Création de sites web pour associations et PME. Forfaits Site Présence, Site Engagement, Suivi & maintenance.",
    url: "/",
    type: "website",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Cédric Auneau - Développeur freelance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cédric Auneau · Développeur freelance JavaScript en Île-de-France",
    description: "Création de sites web pour associations et PME en Île-de-France.",
    images: ["/images/og-default.png"],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SideMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
