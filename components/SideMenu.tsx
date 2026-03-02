"use client";

import { useEffect, useState } from "react";
import styles from "./SideMenu.module.css";

import {
  User,
  Briefcase,
  FileCheck,
  FileText,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Position = "left" | "right";

export default function SideMenu() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<Position>("right");

  /* =========================
     OBSERVER DES SECTIONS
  ========================= */
  useEffect(() => {
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");

    if (!home || !about || !projects) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // visible partout sauf sur home
          if (entry.target.id === "home") {
            setVisible(!entry.isIntersecting);
          }

          // position du menu selon la section
          if (entry.isIntersecting) {
            if (entry.target.id === "about") setPosition("right");
            if (entry.target.id === "projects") setPosition("left");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(home);
    observer.observe(about);
    observer.observe(projects);

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside
      className={`
        ${styles.sideMenu}
        ${visible ? styles.visible : styles.hidden}
        ${styles[position]}
      `}
    >
      <ul>
        {/* ABOUT */}
        <li onClick={() => scrollTo("about")}>
          <div className={styles.base}>
            <ChevronLeft className={`${styles.arrow} ${styles.arrowLeft}`} />
            <User className={styles.icon} />
            <ChevronRight className={`${styles.arrow} ${styles.arrowRight}`} />
          </div>
          <span className={styles.label}>À propos</span>
        </li>

        {/* PROJECTS */}
        <li onClick={() => scrollTo("projects")}>
          <div className={styles.base}>
            <ChevronLeft className={`${styles.arrow} ${styles.arrowLeft}`} />
            <Briefcase className={styles.icon} />
            <ChevronRight className={`${styles.arrow} ${styles.arrowRight}`} />
          </div>
          <span className={styles.label}>Mes réalisations</span>
        </li>

        {/* OFFRES */}
        <li onClick={() => scrollTo("offres")}>
          <div className={styles.base}>
            <ChevronLeft className={`${styles.arrow} ${styles.arrowLeft}`} />
            <FileCheck className={styles.icon} />
            <ChevronRight className={`${styles.arrow} ${styles.arrowRight}`} />
          </div>
          <span className={styles.label}>Mes offres</span>
        </li>

        {/* DEVIS */}
        <li onClick={() => scrollTo("devis")}>
          <div className={styles.base}>
            <ChevronLeft className={`${styles.arrow} ${styles.arrowLeft}`} />
            <FileText className={styles.icon} />
            <ChevronRight className={`${styles.arrow} ${styles.arrowRight}`} />
          </div>
          <span className={styles.label}>Demander un devis</span>
        </li>

        {/* CONTACT */}
        <li onClick={() => scrollTo("contact")}>
          <div className={styles.base}>
            <ChevronLeft className={`${styles.arrow} ${styles.arrowLeft}`} />
            <Mail className={styles.icon} />
            <ChevronRight className={`${styles.arrow} ${styles.arrowRight}`} />
          </div>
          <span className={styles.label}>Me contacter</span>
        </li>
      </ul>
    </aside>
  );
}
