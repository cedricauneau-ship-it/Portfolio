"use client";

import { useState } from "react";
import Style from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={Style.container}>
      <div className={Style.leftSection}>
        <Image src="/images/ui/logoLion.png" alt="Logo" width={42} height={42} className={Style.logo} />
        <span className={Style.name}>Cédric Auneau</span>
      </div>

      {/* Desktop menu */}
      <div className={Style.middleSection}>
        <Image
          src="/icons/home.svg"
          alt="Home"
          width={40}
          height={40}
          className={Style.logoLink}
          onClick={() => scrollToSection("home")}
        />

        <a href="https://github.com/cedricauneau-ship-it" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/github.svg" alt="GitHub" width={40} height={40} className={Style.logoLink} />
        </a>

        <a href="https://www.linkedin.com/in/cedric-auneau" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/linkedin.svg" alt="LinkedIn" width={40} height={40} className={Style.logoLink} />
        </a>

        <a href="mailto:auneau.dev@gmail.com">
          <Image src="/icons/enveloppe.svg" alt="Contact" width={40} height={40} className={Style.logoLink} />
        </a>
      </div>

      <span className={Style.dev}>Développeur FullStack</span>

      {/* Burger */}
      <button
        className={Style.burger}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className={Style.mobileMenu}>
          <button onClick={() => scrollToSection("home")}>Accueil</button>
          <button onClick={() => scrollToSection("about")}>Apprendre a me conaitre</button>
          <button onClick={() => scrollToSection("projects")}>Mes projets</button>
          <button onClick={() => scrollToSection("contact")}>Me contacter</button>
        </div>
      )}
    </nav>
  );
}
