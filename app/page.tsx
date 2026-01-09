"use client";
/* eslint-disable react/no-unescaped-entities */

import Style from "../styles/Page.module.css"

import AboutPersonnage from "../components/AboutPersonnage";

import Image from "next/image";
import diplome from "../public/images/Formation.png"
import shelter from "../public/images/ProjetShelter.png"
import noPicture from "../public/images/noPicture.png"

import { useState, useRef } from "react";

export default function Home() {

  const [active, setActive] = useState<number | null>(0);
  const [activeProject, setActiveProject] = useState<number | null>(0);

  const scrollRef = useRef<HTMLDivElement | null>(null);

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
  };

  return (
    <>
      {/* Section d'accueil */}
      <section className={Style.homeContainer} id="home">
        <div className={Style.btnContainer}>
          <button className="btnsecondary" onClick={() => scrollToSection("about")}>savoir qui je suis</button>
          <button className="btnsecondary" onClick={() => scrollToSection("projects")}>MES PROJETS</button>
          <button className="btnsecondary" onClick={() => scrollToSection("contact")}>CONTACT</button>
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
                {/* Contenu dynamique en fonction du bouton actif */}
                {active === 0 && 
                  <div className={Style.aboutTableText} ref={scrollRef}>
                    <AboutPersonnage scrollContainerRef={scrollRef} />
                  </div>
                }
                {active === 1 &&
                  <div className={Style.aboutTableText}>
                    <h3>Se que je maîtrise actuellement :</h3>
                    <div className={Style.skillsGrid}>
                      <span style={{ backgroundColor: "#FF8A00" }}>HTML</span>
                      <span style={{ backgroundColor: "#FF8A00" }}>CSS</span>
                      <span style={{ backgroundColor: "#FF8A00" }}>JavaScript</span>
                      <span style={{ backgroundColor: "#FF8A00" }}>TypeScript</span>
                      <span style={{ backgroundColor: "#E13A8B" }}>React</span>
                      <span style={{ backgroundColor: "#E13A8B" }}>Next.js</span>
                      <span style={{ backgroundColor: "#E13A8B" }}>Node.js</span>
                      <span style={{ backgroundColor: "#E13A8B" }}>Express.js</span>
                      <span style={{ backgroundColor: "#19C3D3" }}>MongoDB</span>
                      <span style={{ backgroundColor: "#19C3D3" }}>Git</span>
                      <span style={{ backgroundColor: "#19C3D3" }}>GitHub</span>
                      <span style={{ backgroundColor: "#19C3D3" }}>Figma</span>
                    </div>
                  </div>
                }
                {active === 2 &&
                  <div className={Style.aboutTableText}>
                    <Image src={diplome} alt="diplome" className={Style.imgDiplome}/>
                  </div>
                }
            </div>  
          </div>
          <div className={Style.btnRight}>  
            <button className={Style.projectBtn} onClick={() => scrollToSection("projects")}>Mes projets</button> 
          </div>
        </div>  
      </section>

      <div className="separator"></div>

      {/* Section Projets */}
      <section className={Style.projectsContainer} id="projects">
        <h2 className="animated-border">Mes projets</h2>
        <div className={Style.projectsRight}>
          <div className={Style.projectsContent}>
            <div className={Style.aboutContentTable}>
              <div className={Style.projectsBtnContainer}>
                <button className={activeProject === 0 ? "btntertiaryActive" : "btntertiary"} onClick={() => setActiveProject(0)}>SHELTER</button>
                <button className={activeProject === 1 ? "btntertiaryActive" : "btntertiary"} onClick={() => setActiveProject(1)}>Portfolio</button>
                <button className={activeProject === 2 ? "btntertiaryActive" : "btntertiary"} onClick={() => setActiveProject(2)}>Site FFC</button>
              </div>
              <div className="separatorMenu"></div>
                {/* Contenu dynamique en fonction du bouton actif */}
                {activeProject === 0 &&
                  <div className={Style.projectsTableText}>
                    <Image src={shelter} alt="SHELTER" className={Style.projectsImg} />
                    <div className={Style.textDescription}>
                      <p>SHELTER est un projet de jeu sur mobile de survie à choix binaire inspiré de REIGNS dans un monde post apocalypse en collaboration avec 3 autres élèves de LaCapsule.</p>
                      <button className="btnprimary">découvrir</button>
                    </div>
                  </div>
                }
                {activeProject === 1 &&
                  <div className={Style.projectsTableText}>
                    <Image src={noPicture} alt="Portfolio" className={Style.projectsImg} />
                    <div className={Style.textDescription}>
                      <p>Mon Portfolio est un projet en soi, je suis particuliérement fiére du designe.</p>
                      <p>J'éspere que la majorité sera du même avis.</p>
                      <button className="btnprimary">Vous êtes dessus</button>
                    </div>
                  </div>
                }
                {activeProject === 2 &&
                  <div className={Style.projectsTableText}>
                    <Image src={noPicture} alt="FFC" className={Style.projectsImg} />
                    <div className={Style.textDescription}>
                      <p>Le site de mon club de foot formateur, il me tenai a coeur d'offrir se site a l'association. </p>
                      <p>Dans un soucis d'urgence le site est fonctionelle mais encore en dévelopement.</p>
                      <button className="btnprimary">découvrir</button>
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
            <p>Des questions, un projet ? Ou juste envie de discuter ?</p>
            <p>Vous pouvez me contacter via le réseau Linkdin ou par email.</p>
          </div>
          <button className={Style.contactButton} onClick={sendEmail}>Me contacter</button>
        </div>
      </section>

    </>
  );
}
