import type { Metadata } from "next";
import "../styles/globals.css";

import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Auneau Cédric - Portfolio",
  description: "Portfolio de Cédric Auneau, développeur full-stack web et mobile.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
