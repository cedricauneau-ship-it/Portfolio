"use client";

import Style from "./AboutPersonnage.module.css"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
};

const sections = [
  {
    id: "a",
    title: "Cédric Auneau",
    text: "J’ai débuté le développement web en formation, mais c’est en livrant le site de mon club de football — un vrai client, une vraie mise en ligne — que j’ai compris ce que je voulais faire professionnellement. Identifier un besoin, construire une solution, la déployer : c’est cette chaîne complète qui me motive. Formé à La Capsule (Concepteur Développeur d’applications web et mobile), je travaille sur la stack JS/TS — React, Next.js, Node.js — avec l’objectif de proposer mes services en freelance à des associations, indépendants et petites structures.",
    image: "/images/about/DevCofee.webp",
  },
  {
    id: "b",
    title: "Mes objectifs",
    text: "Mon objectif à court terme : décrocher mes premières missions freelance en développant une relation de confiance avec des clients qui ont besoin d’un interlocuteur technique accessible et fiable. Sur le plan technique, je continue à progresser sur l’architecture des applications et les bonnes pratiques — TypeScript strict, performance, accessibilité. Des sujets qui font la différence entre un site livré et un site maintenable.",
    image: "/images/about/DevPresentation.webp",
  },
];

export default function AboutPersonnage({
  scrollContainerRef,
}: Props) {
  const [activeImage, setActiveImage] = useState(sections[0].image);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const root = scrollContainerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          const img = entry.target.getAttribute("data-image");

          if (entry.isIntersecting) {
            if (id) setActiveSection(id);
            if (img) setActiveImage(img);
          }
        });
      },
      {
        root,
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [scrollContainerRef]);

  return (
    <section className={Style.aboutwrapper}>
      
      {/* TEXTE */}
      <div className={Style.aboutcontent}>
        {sections.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            data-image={s.image}
            data-id={s.id}
            className={Style.aboutsection}
          >
            <h3>{s.title}</h3>
            <span className={Style.aboutdescription}>{s.text}</span>
          </div>
        ))}
      </div>

      {/* IMAGE STICKY */}
      <div className={Style.aboutvisual}>
        <Image
          src={activeImage}
          alt=""
          width={200}
          height={200}
          className={Style.aboutimage}
          priority
        />
      </div>
    </section>
  );
}
