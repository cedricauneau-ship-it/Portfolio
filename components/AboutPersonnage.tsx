"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Section = {
  id: string;
  title: string;
  text: string;
  image: string;
};

type Props = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
};


const sections: Section[] = [
  {
    id: "identite",
    title: "Le personnage",
    text: "..........................",
    image: "/images/DevCofee.png",
  },
  {
    id: "vision",
    title: "Mes objéctifs",
    text: "Texte sur ta vision...",
    image: "/images/DevPresentation.png",
  },
];

export default function AboutPersonnage({ scrollContainerRef }: Props) {
  const [activeImage, setActiveImage] = useState("/images/DevCofee.png");
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
  const container = scrollContainerRef.current;
  if (!container) return;

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
      root: container,
      threshold: 0.6,
    }
  );

  return () => observer.disconnect();
}, [scrollContainerRef]);



  return (
    <section className="about-wrapper">


      {/* Texte scroll */}
      <div className="about-content">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            data-image={section.image}
            className="about-section"
          >
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </div>
        ))}
      </div>

      {/* Illustration sticky */}
      <div className="about-visual">
        <Image
          src={activeImage}
          alt=""
          width={150}
          height={150}
          className="about-image"
          priority
        />
      </div>
    </section>
  );
}
