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
    text: "Passionné par le développement web, j’ai choisi ce domaine pour son équilibre entre logique, créativité et résolution de problèmes. Chaque projet est pour moi une occasion d’apprendre, d’expérimenter et d’améliorer mes pratiques, que ce soit en matière d’architecture, de design ou d’optimisation. Motivé et investi, je cherche aujourd’hui à transformer cette passion en une expérience professionnelle solide.",
    image: "/images/about/DevCofee.png",
  },
  {
    id: "b",
    title: "Mes objectifs",
    text: "Continuer à apprendre, expérimenter et progresser chaque jour fait partie de mes priorités. Je souhaite évoluer dans un environnement stimulant, où je pourrai renforcer mes compétences techniques tout en développant une vision plus globale des projets. Mon objectif est de devenir un développeur capable de comprendre aussi bien les enjeux techniques que les besoins des utilisateurs.",
    image: "/images/about/DevPresentation.png",
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
