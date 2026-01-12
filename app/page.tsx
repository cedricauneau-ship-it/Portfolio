"use client";
/* eslint-disable react/no-unescaped-entities */

import Style from "../styles/Page.module.css"

import AboutPersonnage from "../components/AboutPersonnage";
import ImageModal from "../components/ImageModal";

import Image from "next/image";
import diplome from "../public/images/Formation.png"
import shelter from "../public/images/ProjetShelter.png"
import portfolio from "../public/images/Portfolio.png"
import ffc from "../public/images/FFC.png"

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
  const sendEmail = () => {
    window.open("mailto:auneau.dev@gmail.com?subject=Contact%20Portfolio&", "_blank");
  };

  const linkCapsule = () => {
    window.open("https://www.lacapsule.academy", "_blank", "noopener,noreferrer");
  }

  {/* Centre la page a l'arriver sur la section "home" */}
  useEffect(() => {
    const home = document.getElementById("home");
    home?.scrollIntoView({ behavior: "auto" });
  }, []);

  return (
    <>
      {/* Section d'accueil */}
      <section className={Style.homeContainer} id="home">
        <div className={Style.homeContent}>
          <div className={Style.homeTable}>
            <div className={Style.homeTitle}>
              <h1>Bienvenue👋</h1> 
            </div> 
            <div className="separatorMenu"></div> 
            <div className={Style.btnContainer}>
              <button className={Style.btnsecondary} onClick={() => scrollToSection("about")}>Savoir qui je suis</button>
              <button className={Style.btnsecondary} onClick={() => scrollToSection("projects")}>Mes projets</button>
              <button className={Style.btnsecondary} onClick={() => scrollToSection("contact")}>Contact</button>
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
                    <h3>Ce que je maîtrise actuellement :</h3>
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
                    <div className={Style.aboutFomation}>
                      <p>La Capsule est un organisme de formation au sein duquel j’ai obtenu mon diplôme de Concepteur Développeur d’applications web et mobile.</p>
                      <div className={Style.aboutFomationLink}>
                        <p>Pour en savoir plus sur l’organisme de formation, je vous invite à consulter leur site web :</p>
                        <button className={Style.btnsecondary} onClick={linkCapsule}>LaCapsule.academy</button>
                      </div>
                    </div>
                    <ImageModal src={diplome} alt="Mon Diplome"/>
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
          <div className={Style.btnLeft}>  
            <button className={Style.projectBtn} onClick={() => scrollToSection("contact")}>Contact</button> 
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
                    <Image src={shelter} alt="SHELTER" className={Style.projectsImgShelter} />
                    <div className={Style.textDescription}>
                      <p>SHELTER est un projet de jeu mobile de survie à choix binaires, inspiré de REIGNS, se déroulant dans un monde post-apocalyptique, réalisé en collaboration avec trois autres élèves de La Capsule.</p>
                      <button className="btnprimary">Découvrir</button>
                    </div>
                  </div>
                }
                {activeProject === 1 &&
                  <div className={Style.projectsTableText}>
                    <div className={Style.projectImageWrapper}>
                      <Image src={portfolio} alt="Portfolio" className={Style.projectsImg} />
                    </div>  
                    <div className={Style.textDescription}>
                      <p>Mon portfolio est un projet à part entière.</p>
                      <p>Réaliser en JavaScript et TypeScript, les backgrounds sont générer par l'IA.</p>
                      <button className="btnprimary">Vous êtes dessus</button>
                    </div>
                  </div>
                }
                {activeProject === 2 &&
                  <div className={Style.projectsTableText}>
                    <div className={Style.projectImageWrapper}>
                      <Image src={ffc} alt="FFC" className={Style.projectsImg} />
                    </div>
                    <div className={Style.textDescription}>
                      <p>Le site de mon club de football formateur. Il me tenait à cœur d’offrir une vue numérique à l’association. </p>
                      <p>Le projet est en cours de développement</p>
                      <button className="btnprimary">Découvrir</button>
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
          <button className={Style.contactButton} onClick={sendEmail}>Me contacter</button>
        </div>
      </section>

    </>
  );
}
