"use client";
/* eslint-disable react/no-unescaped-entities */

import Style from "./Page.module.css"

import AboutPersonnage from "@/components/AboutPersonnage";
import ImageModal from "@/components/ImageModal";

import Image from "next/image";
import emailjs from "@emailjs/browser";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  {/* Tableau présentation section active */}
  const [active, setActive] = useState<number | null>(0);

  {/* Tableau projets section active */}
  const [activeProject, setActiveProject] = useState<number | null>(0);

  {/* Centrage des boutons sur mobile */}
  const aboutBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const projectBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hasInteracted = useRef(false);


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

  {/* Centre sur l'accueil au chargement */}
  useEffect(() => {
    const home = document.getElementById("home");
    home?.scrollIntoView({ behavior: "auto" });
  }, []);


  {/* Centre les bouton actifs sur mobile */}
  useEffect(() => {
    if (!hasInteracted.current) return;

    const btn = aboutBtnRefs.current[active ?? 0];
    if (!btn) return;

    btn.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  useEffect(() => {
    if (!hasInteracted.current) return;

    const btn = projectBtnRefs.current[activeProject ?? 0];
    if (!btn) return;

    btn.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeProject]);

  {/* Envoi Devis */}
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
      e.currentTarget,
      process.env.NEXT_PUBLIC_EMAILJS_KEY!
    )
    .then(() => {
      setSubmitted(true);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Erreur EmailJS :", error);
      setLoading(false);
    });
};


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
      name: "FIGMA",
      icon: "/icons/figma.svg",
      color: "#F24E1E",
      description: "Figma",
      description2: "Design",
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
      name: "MONGODB",
      icon: "/icons/mongodb.svg",
      color: "#47A248",
      description: "MongoDB",
      description2: "Base de donnée",
    },
  ]

  return (
    <>
      {/* Section d'accueil */}
      <section className={Style.homeContainer} id="home">
        <div className={Style.homeContent}>
          <div className={Style.homeTable}>
            <div className={Style.homeTitle}>
              <h1 className={Style.word}>Bienvenue</h1>
            </div> 
            <div className="separatorMenu"></div> 
            <div className={Style.btnContainer}>
              <button className="btnsecondary" onClick={() => scrollToSection("about")}>Qui suis-je ?</button>
              <button className="btnsecondary" onClick={() => scrollToSection("projects")}>Mes réalisations</button>
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
              <button
                ref={(el) => {aboutBtnRefs.current[0] = el}}
                className={active === 0 ? "btntertiaryActive" : "btntertiary"}
                onClick={() => {
                  hasInteracted.current = true;
                  setActive(0);
                }}
              >
                Qui suis-je ?
              </button>

              <button
                ref={(el) => {aboutBtnRefs.current[1] = el}}
                className={active === 1 ? "btntertiaryActive" : "btntertiary"}
                onClick={() => {
                  hasInteracted.current = true;
                  setActive(1);
                }}
              >
                Mes compétences
              </button>

              <button
                ref={(el) => {aboutBtnRefs.current[2] = el}}
                className={active === 2 ? "btntertiaryActive" : "btntertiary"}
                onClick={() => {
                  hasInteracted.current = true;
                  setActive(2);
                }}
              >
                Ma formation
              </button>
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
        </div>  
      </section>

      <div className="separator"></div>

      {/* Section Projets */}
      <section className={Style.projectsContainer} id="projects">
        <h2 className="animated-border">Mes réalisations</h2>
        <div className={Style.projectsRight}> 
          <div className={Style.projectsContent}>
            <div className={Style.aboutContentTable}>
              <div className={Style.projectsBtnContainer}>
                <button
                  ref={(el) => {
                    projectBtnRefs.current[0] = el;
                  }}
                  className={activeProject === 0 ? "btntertiaryActive" : "btntertiary"}
                  onClick={() => {
                    hasInteracted.current = true;
                    setActiveProject(0);
                  }}
                >
                  Site FFC
                </button>

                <button
                  ref={(el) => {
                    projectBtnRefs.current[1] = el;
                  }}
                  className={activeProject === 1 ? "btntertiaryActive" : "btntertiary"}
                  onClick={() => {
                    hasInteracted.current = true;
                    setActiveProject(1);
                  }}
                >
                  Portfolio
                </button>

                <button
                  ref={(el) => {
                    projectBtnRefs.current[2] = el;
                  }}
                  className={activeProject === 2 ? "btntertiaryActive" : "btntertiary"}
                  onClick={() => {
                    hasInteracted.current = true;
                    setActiveProject(2);
                  }}
                >
                  SHELTER
                </button>          
              </div>
              <div className="separatorMenu"></div>

              {activeProject === 0 &&
                <div className={Style.projectsTableText}>
                  <div className={Style.projectImageWrapper}>
                    <Image
                      src="/images/projects/introFFC.png"
                      alt="FFC"
                      width={700}
                      height={700}
                      className={Style.projectsImg}
                    />
                  </div>
                  <div className={Style.textDescription}>
                    <p>Le site de mon club de football formateur. Il me tenait à cœur d’offrir une vue numérique à l’association. </p>
                    <p>Le projet est finalisé et accessible en ligne.</p>
                    <div className={Style.linkContainer}>
                      <a
                        href="https://www.fontenayenparisisfootballclub.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={Style.btnStatic}
                      >
                        FFC.fr
                      </a>
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
                </div>
              }

              {activeProject === 1 &&
                <div className={Style.projectsTableText}>
                  <div className={Style.projectImageWrapper}>
                    <Image
                      src="/images/projects/introPortfolio.png"
                      alt="Portfolio"
                      width={1200}
                      height={700}
                      className={Style.projectsImg}
                      />
                  </div>  
                  <div className={Style.textDescription}>
                    <p>Mon portfolio est un projet à part entière.</p>
                    <p>Projet réalisé avec Next.js, React et TypeScript. Les backgrounds sont générés par l’IA.</p>
                  </div>
                </div>
              }

              {activeProject === 2 &&
                <div className={Style.projectsTableText}>
                  <div className={Style.projectImageWrapper}>
                    <Image
                      src="/images/projects/ProjetShelter.png"
                      alt="SHELTER"
                      width={1200}
                      height={700}
                      className={Style.projectsImg}
                    />
                  </div>  
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

            </div>  
          </div>
        </div>  
      </section>

      <div className="separator"></div>

      {/* Section Mes Offres */}
      <section className={Style.offresContainer} id="offres">
        <h2 className="animated-border">Mes offres</h2>

        <div className={Style.offresGrid}>
          {/* Offre 1 */}
          <div className={`${Style.offreCard} ${Style.cardBlue}`}>
            <h3>Présence en ligne</h3>
            <p className={Style.offreIntro}>
              Pour associations, indépendants et petites structures souhaitant une présence claire et efficace sur le web.
            </p>
            <ul>
              <li>Site vitrine moderne et responsive</li>
              <li>Structure claire et navigation intuitive</li>
              <li>Optimisation des performances et du référencement de base</li>
              <li>Mise en ligne et accompagnement</li>
              <li>Solution simple, fiable et évolutive</li>
            </ul>
            <div className={Style.offrePrice}>
              <span className={Style.from}>À partir de</span>
              <span className={Style.amount}> 1200 €</span>
            </div>
          </div>

          {/* Offre 2 */}
          <div className={`${Style.offreCard} ${Style.cardRose}`}>
            <h3>Projet sur mesure</h3>
            <p className={Style.offreIntro}>
              Pour des besoins spécifiques nécessitant une solution adaptée et évolutive.
            </p>
            <ul>
              <li>Application web ou site complexe</li>
              <li>Fonctionnalités personnalisées selon le besoin</li>
              <li>Stack moderne (React, Next.js, TypeScript)</li>
              <li>Architecture propre et maintenable</li>
              <li>Conseils techniques et accompagnement</li>
            </ul>
            <div className={Style.offrePrice}>
              <span className={Style.from}>À partir de</span>
              <span className={Style.amount}> 1800 €</span>
            </div>
          </div>

          {/* Offre 3 */}
          <div className={`${Style.offreCard} ${Style.cardOrange}`}>
            <h3>Suivi & évolution</h3>
            <p className={Style.offreIntro}>
              Pour assurer la pérennité, la sécurité et l’évolution de votre projet dans le temps.
            </p>
            <ul>
              <li>Maintenance technique et mises à jour</li>
              <li>Améliorations fonctionnelles continues</li>
              <li>Corrections et optimisations</li>
              <li>Support et accompagnement</li>
              <li>Relation sur le long terme</li>
            </ul>
            <div className={Style.offrePrice}>
              <span className={Style.from}>À partir de</span>
              <span className={Style.amount}> 90 € / mois</span>
            </div>
          </div>
        </div>
        <p className={Style.offresOutro}>
          Chaque projet est unique. Les tarifs sont donnés à titre indicatif et peuvent évoluer selon les besoins.<br />
          Les formules ci-dessus servent de cadre,
          mais un échange est indispensable pour définir la solution la plus adaptée.
        </p>

      </section>

      <div className="separator"></div>

      {/* Section Devis */}
      <section className={Style.devisContainer} id="devis">
        <h2 className="animated-border">Demande de devis</h2>

        <div className={Style.devisContent}>
          <p className={Style.devisIntro}>
            Chaque projet est unique.
            Cette demande de devis permet de mieux comprendre votre besoin
            afin de préparer un échange clair et pertinent.
            <br />
            Elle ne vous engage à rien.
          </p>

          {!submitted ? (
          <form className={Style.devisForm} onSubmit={sendEmail}>

            {/* Type de projet */}
            <div className={Style.formGroup}>
              <label htmlFor="type">Type de projet</label>
              <select id="type" name="type" required>
                <option value="">Sélectionnez une option</option>
                <option value="site vitrine">Site vitrine</option>
                <option value="app web">Application web</option>
                <option value="refonte / amélioration">Refonte / amélioration</option>
                <option value="maintenance / suivi">Maintenance / suivi</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Budget */}
            <div className={Style.formGroup}>
              <label htmlFor="budget">Budget estimé</label>
              <select id="budget" name="budget" required>
                <option value="">Sélectionnez une option</option>
                <option value="<1000">Moins de 1 000 €</option>
                <option value="1000-2000">1 000 – 2 000 €</option>
                <option value="2000-5000">2 000 – 5 000 €</option>
                <option value="à définir">À définir ensemble</option>
              </select>
            </div>

            {/* Description */}
            <div className={Style.formGroup}>
              <label htmlFor="message">Description du projet</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Décrivez votre projet en quelques lignes..."
                required
              />
            </div>

            {/* Délai */}
            <div className={Style.formGroup}>
              <label htmlFor="delay">Délai souhaité (optionnel)</label>
              <select id="delay" name="delay">
                <option value="non précisé">Non précisé</option>
                <option value="urgent">Dès que possible</option>
                <option value="1-2 mois">1 à 2 mois</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div className={Style.formAction}>
              <button type="submit" className={`${"btnprimary"} ${"pulse"}`}>
                Envoyer la demande
              </button>
            </div>
          </form>
        ) : (
          <div className={Style.devisSuccess}>
            <h3>Demande envoyée ✅</h3>
            <p>
              Merci pour votre message.<br />
              Je reviens vers vous rapidement afin d’échanger sur votre projet.
            </p>
          </div>
        )}
        </div>
      </section>


      <div className="separator"></div>

      {/* Section Contact */}
      <section className={Style.contactContainer} id="contact">
        <div className={Style.contactContent}>
          <div className={Style.contactText}>
            <p>Des questions sur votre projet ?</p>
            <p>Vous pouvez me contacter via le réseau LinkedIn ou par e-mail.</p>
          </div>
          <a
            href="mailto:auneau.dev@gmail.com?subject=Contact%20Portfolio"
            className={`${Style.btnContact} ${"pulse"}`}
          >
            Me contacter
          </a>
        </div>
      </section>
      <div id="contact-sentinel" />
      <div className="separator"></div>

    </>
  );
}

