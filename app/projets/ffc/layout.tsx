import type { Metadata } from "next";

import FooterClient from "@/components/FooterClient";

export const metadata: Metadata = {
  title: "Auneau Cédric - FFC",
  description: "Le projet FFC est un cadeau offert à l’association du club de football de Fontenay-en-Parisis.",
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
