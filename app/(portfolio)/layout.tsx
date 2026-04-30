import type { Metadata } from "next";

import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";

export const metadata: Metadata = {
  title:
    "Cédric Auneau · Développeur freelance JavaScript en Île-de-France",
  description:
    "Cédric Auneau, développeur fullstack JavaScript / TypeScript freelance à Fontenay-en-Parisis (95). Création de sites web pour associations et PME. Forfaits clés en main, suivi long terme.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Cédric Auneau · Développeur freelance JavaScript en Île-de-France",
    description:
      "Création de sites web pour associations et PME. Forfaits Site Présence, Site Engagement, Suivi & maintenance.",
    url: "/",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <SideMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
