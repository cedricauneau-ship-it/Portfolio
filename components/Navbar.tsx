"use client";

import { useEffect, useState } from "react";
import Style from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOnHome, setIsOnHome] = useState(true);
  const [isOnContact, setIsOnContact] = useState(false);
  const [open, setOpen] = useState(false);

  // Détection mobile réactive
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");

    const handleChange = () => setIsMobile(mq.matches);

    handleChange(); // init
    mq.addEventListener("change", handleChange);

    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Observer desktop uniquement
  useEffect(() => {
    if (isMobile) return;

    const homeSection = document.getElementById("home");
    const contactSection = document.getElementById("contact");

    if (!homeSection || !contactSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "home") {
            setIsOnHome(entry.isIntersecting);
          }

          if (entry.target.id === "contact") {
            setIsOnContact(entry.isIntersecting);
          }
        });
      },
      {
        rootMargin: "-90px 0px 0px 0px",
        threshold: 0.3,
      }
    );

    observer.observe(homeSection);
    observer.observe(contactSection);

    return () => observer.disconnect();
  }, [isMobile]);

  // 🔑 Règle finale d’affichage
  const showNavbar = isMobile || isOnHome || isOnContact || open;

  const scrollToSection = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`${Style.navbar} ${
        showNavbar ? Style.visible : Style.hidden
      }`}
    >
      <div className={Style.leftSection}>
        <Image
          src="/images/ui/DevCAtest.png"
          alt="Logo"
          width={50}
          height={40}
          className={Style.logo}
        />
        <span className={Style.name}>Cédric Auneau</span>
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

      {/* Menu mobile */}
      {open && (
        <div className={Style.mobileMenu}>
          <button onClick={() => scrollToSection("home")}>Accueil</button>
          <button onClick={() => scrollToSection("about")}>
            Apprendre à me connaître
          </button>
          <button onClick={() => scrollToSection("projects")}>
            Mes projets
          </button>
          <button onClick={() => scrollToSection("contact")}>
            Me contacter
          </button>
        </div>
      )}
    </nav>
  );
}
