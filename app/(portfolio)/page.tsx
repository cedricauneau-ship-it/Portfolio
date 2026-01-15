"use client";
/* eslint-disable react/no-unescaped-entities */

import Style from "./Page.module.css"

import AboutPersonnage from "@/components/AboutPersonnage";
import ImageModal from "@/components/ImageModal";

import Image from "next/image";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  {/* Tableau présentation section active */}
  const [active, setActive] = useState<number | null>(0);

  {/* Tableau projets section active */}
  const [activeProject, setActiveProject] = useState<number | null>(0);

  {/* Observer du scroll pour changement d'Img */}
  const scrollRef = useRef<HTMLDivElement | null>(null);

  {/* Fonction pour faire défiler vers une section spécifique */}
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  {/* Fonction de boutton */}
  const linkCapsule = () => {
    window.open("https://www.lacapsule.academy", "_blank", "noopener,noreferrer");
  }

  {/* Centre la page a l'arriver sur la section "home" */}
  useEffect(() => {
    const home = document.getElementById("home");
    home?.scrollIntoView({ behavior: "auto" });
  }, []);

  {/* Mes Compétences */}
  const skills = [
    {
      name: "HTML",
      icon: "/icons/html5.svg",
      color: "#E34F26",
      description: "HTML",
      description2: "Language",
    },
    {
      name: "CSS",
      icon: "/icons/css.svg",
      color: "#663399",
      description: "CSS",
      description2: "Style",
    },
    {
      name: "JAVASCRIPT",
      icon: "/icons/javascript.svg",
      color: "#F7DF1E",
      description: "JavaScript",
      description2: "Language",
    },
    {
      name: "TYPESCRIPT",
      icon: "/icons/typescript.svg",
      color: "#3178C6",
      description: "TypeScript",
      description2: "Language",
    },
    {
      name: "REACT",
      icon: "/icons/react.svg",
      color: "#61DAFB",
      description: "React",
      description2: "Librairie",
    },
    {
      name: "NEXT",
      icon: "/icons/nextdotjs.svg",
      color: "#ffffffde",
      description: "Next",
      description2: "Framework",
    },
    {
      name: "NODE",
      icon: "/icons/nodedotjs.svg",
      color: "#5FA04E",
      description: "Node",
      description2: "Environement",
    },
    {
      name: "EXPRESS",
      icon: "/icons/express.svg",
      color: "#ffffffde",
      description: "Express",
      description2: "Framework",
    },
    {
      name: "MONGODB",
      icon: "/icons/mongodb.svg",
      color: "#47A248",
      description: "MongoDB",
      description2: "Base de donnée",
    },
    {
      name: "GIT",
      icon: "/icons/git.svg",
      color: "#F05032",
      description: "Git",
      description2: "Versioning",
    },
    {
      name: "GITHUB",
      icon: "/icons/github.svg",
      color: "#ffffffde",
      description: "GitHub",
      description2: "Plateforme Cloud",
    },
    {
      name: "FIGMA",
      icon: "/icons/figma.svg",
      color: "#F24E1E",
      description: "Figma",
      description2: "Design",
    },
  ]

  return (
    <>
      {/* Section d'accueil */}
      <section className={Style.homeContainer} id="home">
        <div className={Style.homeContent}>
          <div className={Style.homeTable}>
            <div className={Style.homeTitle}>
              <h1 className={`${Style.word} ${Style.word1}`}>Bienvenue</h1>
              <h1 className={`${Style.word} ${Style.word2}`}>sur mon portfolio</h1>
            </div> 
            <div className="separatorMenu"></div> 
            <div className={Style.btnContainer}>
              <button className="btnsecondary" onClick={() => scrollToSection("about")}>Savoir qui je suis</button>
              <button className="btnsecondary" onClick={() => scrollToSection("projects")}>Mes projets</button>
              <button className="btnsecondary" onClick={() => scrollToSection("contact")}>Contact</button>
            </div> 
          </div>  
        </div>  
      </section>

      <div className="separator"></div>

      {/* Section À propos de moi */}
      <section className={Style.aboutContainer} id="about">
        <h2 className="animated-border">Présentation</h2>
        <div className={Style.tableBtnPos}>
          <div className={Style.aboutContent}>
            <div className={Style.aboutContentTable}>
              <div className={Style.aboutBtnContainer}>
                <button className={active === 0 ? "btntertiaryActive" : "btntertiary"} onClick={() => setActive(0)}>Qui suis-je ?</button>
                <button className={active === 1 ? "btntertiaryActive" : "btntertiary"} onClick={() => setActive(1)}>Mes compétences</button>
                <button className={active === 2 ? "btntertiaryActive" : "btntertiary"} onClick={() => setActive(2)}>Ma formation</button>
              </div>
              <div className="separatorMenu"></div>
                {active === 0 && 
                  <div className={Style.aboutTableText} ref={scrollRef}>
                    <AboutPersonnage scrollContainerRef={scrollRef} />
                  </div>
                }
                {active === 1 &&
                  <div className={Style.aboutTableText}>
                    <h3>Ce que je maîtrise actuellement</h3>
                    <div className={Style.skillsGrid}>
                      {skills.map((skill) => (
                        <div key={skill.name} className={Style.skillItem} style={{ "--accent": skill.color } as React.CSSProperties}>
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={60}
                            height={60}
                            className={Style.skillIcon}
                          />
                          <div className={Style.skillLabel}>
                            <span className={Style.skillDesc}>{skill.description}</span>
                            <span className={Style.skillDesc2}>{skill.description2}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                }
                {active === 2 &&
                  <div className={Style.aboutTableText}>
                    <div className={Style.aboutFomation}>
                      <p>La Capsule est un organisme de formation au sein duquel j’ai obtenu mon diplôme de Concepteur Développeur d’applications web et mobile.</p>
                      <div className={Style.aboutFomationLink}>
                        <p>Pour en savoir plus sur l’organisme de formation, je vous invite à consulter leur site web :</p>
                        <div className={Style.aboutLinkContainer}>
                          <button className="btnsecondary" onClick={linkCapsule}>LaCapsule.academy</button>
                        </div>
                      </div>
                    </div>
                    <ImageModal src="/images/about/Formation.png" alt="Mon Diplome"/>
                  </div>
                }
            </div>  
          </div>
          <div className={Style.btnRight}>
            <div className="btnSecondaryContainer">
              <div className="btnSecondaryContent">    
                <button className="btnsecondary" onClick={() => scrollToSection("projects")}>Mes projets</button>
              </div>  
            </div>   
          </div>
        </div>  
      </section>

      <div className="separator"></div>

      {/* Section Projets */}
      <section className={Style.projectsContainer} id="projects">
        <h2 className="animated-border">Mes projets</h2>
        <div className={Style.projectsRight}>
          <div className={Style.btnLeft}>
            <div className="btnSecondaryContainer">
              <div className="btnSecondaryContent"> 
                <button className="btnsecondary" onClick={() => scrollToSection("contact")}>Contact</button>
              </div>  
            </div> 
          </div>    
          <div className={Style.projectsContent}>
            <div className={Style.aboutContentTable}>
              <div className={Style.projectsBtnContainer}>
                <button className={activeProject === 0 ? "btntertiaryActive" : "btntertiary"} onClick={() => setActiveProject(0)}>SHELTER</button>
                <button className={activeProject === 1 ? "btntertiaryActive" : "btntertiary"} onClick={() => setActiveProject(1)}>Portfolio</button>
                <button className={activeProject === 2 ? "btntertiaryActive" : "btntertiary"} onClick={() => setActiveProject(2)}>Site FFC</button>
              </div>
              <div className="separatorMenu"></div>
                {activeProject === 0 &&
                  <div className={Style.projectsTableText}>
                    <Image
                      src="/images/projects/ProjetShelter.png"
                      alt="SHELTER"
                      width={1200}
                      height={700}
                      className={Style.projectsImgShelter}
                    />
                    <div className={Style.textDescription}>
                      <p>SHELTER est un projet de jeu mobile de survie à choix binaires, inspiré de REIGNS, se déroulant dans un monde post-apocalyptique, réalisé en collaboration avec trois autres élèves de La Capsule.</p>
                      <a
                        href="/projets/shelter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${"btnprimary"} ${"pulse"}`}
                      >
                        Découvrir
                      </a>
                    </div>
                  </div>
                }
                {activeProject === 1 &&
                  <div className={Style.projectsTableText}>
                    <div className={Style.projectImageWrapper}>
                      <Image
                        src="/images/projects/Portfolio.png"
                        alt="Portfolio"
                        width={1200}
                        height={700}
                        className={Style.projectsImg}
                      />
                    </div>  
                    <div className={Style.textDescription}>
                      <p>Mon portfolio est un projet à part entière.</p>
                      <p>Réaliser en JavaScript et TypeScript, les backgrounds sont générer par l'IA.</p>
                      <button className={Style.btnStatic}>Vous êtes dessus</button>
                    </div>
                  </div>
                }
                {activeProject === 2 &&
                  <div className={Style.projectsTableText}>
                    <div className={Style.projectImageWrapper}>
                      <Image
                        src="/images/projects/FFC.png"
                        alt="FFC"
                        width={1200}
                        height={700}
                        className={Style.projectsImg}
                      />
                    </div>
                    <div className={Style.textDescription}>
                      <p>Le site de mon club de football formateur. Il me tenait à cœur d’offrir une vue numérique à l’association. </p>
                      <p>Le projet est en cours de développement</p>
                      <a
                        href="/projets/ffc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${"btnprimary"} ${"pulse"}`}
                      >
                        Découvrir
                      </a>
                    </div>
                  </div>
                }
            </div>  
          </div>
        </div>  
      </section>

      <div className="separator"></div>

      {/* Section Contact */}
      <section className={Style.contactContainer} id="contact">
        <div className={Style.contactContent}>
          <div className={Style.contactText}>
            <p>Des questions, un projet ? Ou simplement envie de discuter ?</p>
            <p>Vous pouvez me contacter via le réseau LinkedIn ou par e-mail.</p>
          </div>
          <a
            href="mailto:auneau.dev@gmail.com?subject=Contact%20Portfolio"
            className={`${Style.btnsecondary} ${"pulse"}`}
          >
            Me contacter
          </a>
        </div>
      </section>

    </>
  );
}
