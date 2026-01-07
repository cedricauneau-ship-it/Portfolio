"use client";

import Style from "../styles/Navbar.module.css";

import Image from "next/image";
import lion from "../public/images/logoLion.png";
import enveloppe from "../public/images/enveloppe.png";

export default function Navbar() {

  {/* Fonction pour faire défiler vers une section spécifique */}
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  {/* Fonction pour envoyer un email */}
  const sendEmail = () => {
    window.open("mailto:auneau.dev@gmail.com?subject=Contact%20Portfolio&", "_blank");
    // Ouvre le client de messagerie par défaut avec l'adresse et le sujet préremplis
    // Dans un nouvelle onglet
  };

  return (
    <nav className={Style.container}>
        <div className={Style.leftSection}>
            <Image src={lion} alt="Logo" width={50} height={50} className={Style.logo}/>
            <span className={Style.name}>Cédric Auneau</span>
        </div>
        <div className={Style.rightSection}>
            <button className="btnprimary" onClick={() => scrollToSection("home")}>Accueil</button>
            <Image src={enveloppe} alt="Enveloppe" 
              width={45} 
              height={45} 
              className={Style.enveloppe}
              onClick={() => sendEmail()}
            />
        </div>
    </nav>
  );
}