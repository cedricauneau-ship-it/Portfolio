import type { Metadata } from "next";

import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";

export const metadata: Metadata = {
  title: { absolute: "Cédric Auneau · Développeur fullstack TypeScript · React, Next.js, Node.js, React Native" },
  description: "Développeur fullstack TypeScript freelance en Île-de-France. Web et mobile de bout en bout : React, Next.js, Node.js, React Native. Deux projets en production. Disponible pour missions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cédric Auneau · Développeur fullstack TypeScript · Île-de-France",
    description: "Développeur fullstack TypeScript freelance · React, Next.js, Node.js, React Native · Web et mobile en production · Île-de-France.",
    url: "/",
    type: "website",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Cédric Auneau - Développeur fullstack TypeScript freelance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cédric Auneau · Développeur fullstack TypeScript · Île-de-France",
    description: "Développeur fullstack TypeScript freelance · React, Next.js, Node.js, React Native · Île-de-France.",
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
