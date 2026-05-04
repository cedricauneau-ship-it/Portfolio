import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";

import "../globals.css";

export const metadata: Metadata = {
  title: "Mentions légales · Cédric Auneau",
  description: "Mentions légales du site cedric-auneau.dev : éditeur, hébergement, propriété intellectuelle, données personnelles et cookies.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: false },
};

export default function MentionsLegalesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SideMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
