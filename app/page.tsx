"use client";
/* eslint-disable react/no-unescaped-entities */

import Style from "../styles/Page.module.css"

import Image from "next/image";
import ffc from "../public/images/EcranFFC.png";
import noPicture from "../public/images/noPicture.png";

export default function Home() {

  {/* Fonction pour faire défiler vers une section spécifique */}
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Section d'accueil */}
      <section className={Style.homeContainer} id="home">
        <div className={Style.btnContainer}>
          <button className="btnsecondary" onClick={() => scrollToSection("about")}>À PROPOS DE MOI</button>
          <button className="btnsecondary" onClick={() => scrollToSection("projects")}>MES PROJETS</button>
          <button className="btnsecondary" onClick={() => scrollToSection("contact")}>CONTACT</button>
        </div>  
      </section>

      {/* Section À propos de moi */}
      <section className={Style.aboutContainer} id="about">
        <div className={Style.aboutContent}>
          <h2>À propos de moi</h2>
          <div className={Style.underline}></div>
          <p className={Style.pBold}>Vous trouverez ici plus d'informations sur moi, ce que je fais et mes</p>
          <p className={Style.pBold}>compétences actuelles en tant que développeur full-stack</p>
        </div>
        <div className={Style.aboutProfil}>
          <div className={Style.profilDescription}>
            <h3>Apprenez à me connaître !</h3>
            <p>
              En dehors du codage, j'aime explorer les dernières tendances technologiques, contribuer à des projets open-source et
              collaborer avec d'autres passionnés de technologie. Mon objectif est de continuer à évoluer en tant que développeur et
              de créer des solutions innovantes qui font une différence.
            </p>
            <button className={Style.contactButton} onClick={() => scrollToSection("contact")}>CONTACT</button>
          </div>
          <div className={Style.profilSkills}>
            <h3>Compétences</h3>
            <div className={Style.skillsGrid}>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>SQL</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Git</span>
              <span>Github</span>
              <span>Responsive</span>
              <span>SEO</span>
            </div>
          </div>    
        </div>
      </section>
      <div className={Style.separator}></div>

      {/* Section Projets */}
      <section className={Style.projectsContainer} id="projects">
        <div className={Style.projectsContent}>
          <h2>Projets</h2>
          <div className={Style.underline}></div>
          <p className={Style.pBold}>Découvrez quelques-uns de mes projets récents en</p>
          <p className={Style.pBold}>développement web et mobile.</p>
        </div>
        {/* Projet 1 */}
        <div className={Style.projectsCards}>
          <div className={Style.projectsImgContainer}>
            <Image src={ffc} alt="Site FFC" width={400} height={250} className={Style.projectsImg} />
          </div>
          <div className={Style.projectDescription}>
            <h3>Site du Club FFC</h3>
            <p>Un site web pour le club de football de la ville de Fontenay-en-parisis.</p>
            <button className={Style.viewProjectButton}>VOIR LE PROJET</button>
          </div>
        </div>

        {/* Projet 2 */}
        <div className={Style.projectsCards}>
          <div className={Style.projectsImgContainer}>
            <Image src={noPicture} alt="Pas de photo disponible" width={400} height={250} className={Style.projectsImg} />
          </div>
          <div className={Style.projectDescription}>
            <h3>SHELTER</h3>
            <p>Un Jeu de carte a choix binaire dans un monde post apocalypste entiérement développer en JavaScript.</p>
            <button className={Style.viewProjectButton}>VOIR LE PROJET</button>
          </div>
        </div>
      </section>
    </>
  );
}
