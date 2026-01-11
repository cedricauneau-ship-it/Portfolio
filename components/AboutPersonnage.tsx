"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
};

const sections = [
  {
    id: "a",
    title: "Le personnage",
    text: "Passionné par le développement web, j’ai choisi ce domaine pour son équilibre entre logique, créativité et résolution de problèmes. Chaque projet est pour moi une occasion d’apprendre, d’expérimenter et d’améliorer mes pratiques, que ce soit en matière d’architecture, de design ou d’optimisation. Motivé et investi, je cherche aujourd’hui à transformer cette passion en une expérience professionnelle solide.",
    image: "/images/DevCofee.png",
  },
  {
    id: "b",
    title: "Mes objectifs",
    text: "Continuer à apprendre, expérimenter et progresser chaque jour fait partie de mes priorités. Je souhaite évoluer dans un environnement stimulant, où je pourrai renforcer mes compétences techniques tout en développant une vision plus globale des projets. Mon objectif est de devenir un développeur capable de comprendre aussi bien les enjeux techniques que les besoins des utilisateurs.",
    image: "/images/DevPresentation.png",
  },
];

export default function AboutPersonnage({
  scrollContainerRef,
}: Props) {
  const [activeImage, setActiveImage] = useState(sections[0].image);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = scrollContainerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target.getAttribute("data-image");
            if (img) setActiveImage(img);
          }
        });
      },
      {
        root,
        threshold: 0.8,
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [scrollContainerRef]);

  return (
    <section className="about-wrapper">
      
      {/* TEXTE */}
      <div className="about-content">
        {sections.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            data-image={s.image}
            className="about-section"
          >
            <h3>{s.title}</h3>
            <span className="about-description">{s.text}</span>
          </div>
        ))}
      </div>

      {/* IMAGE STICKY */}
      <div className="about-visual">
        <Image
          src={activeImage}
          alt=""
          width={200}
          height={200}
          className="about-image"
          priority
        />
      </div>
    </section>
  );
}
