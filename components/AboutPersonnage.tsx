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
    text: "Je conçois et livre des applications web et mobile de bout en bout — du cadrage technique à la mise en production. Un seul interlocuteur du premier échange à la mise en ligne, en télétravail ou sur site en Île-de-France. Reconverti au développement après une carrière dans d’autres secteurs, j’ai choisi ce métier pour la chaîne complète : identifier un besoin, construire une solution, la déployer.",
    image: "/images/about/DevCofee.webp",
  },
  {
    id: "b",
    title: "Mon approche",
    text: "Pas de sous-traitance, pas de dépendance à un CMS propriétaire, pas de jargon inutile. Tu gardes la main sur ton projet à tout moment. Je livre du code propre, versionné sur GitHub, déployé et documenté — que tu veuilles reprendre le projet toi-même ou le faire évoluer plus tard.",
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
