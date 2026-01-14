"use client";

import Style from "./Navbar.module.css";

import Image from "next/image";

export default function Navbar() {

  
  {/* Fonction pour les liens */}
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendEmail = () => {
    window.open("mailto:auneau.dev@gmail.com?subject=Contact%20Portfolio&", "_blank");
  }; 

  return (
    <nav className={Style.container}>
        <div className={Style.leftSection}>
            <Image src="/images/ui/logoLion.png" alt="Logo" width={50} height={50} className={Style.logo}/>
            <span className={Style.name}>Cédric Auneau</span>
        </div>
        <div className={Style.middleSection}>
            <Image
              src="/icons/home.svg"
              alt="Home"
              width={75}
              height={50}
              className={Style.logoLink}
              onClick={() => scrollToSection("home")}
            />
            <a
              href="https://github.com/cedricauneau-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='Mon profil GitHub'
            > 
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={75}
                height={50}
                className={Style.logoLink}
              />  
            </a>
            <a
              href='https://www.linkedin.com/in/cedric-auneau'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Mon profil LinkedIn'
            >
              <Image
                src="/icons/linkedin.svg"
                alt=""
                width={75}
                height={50}
                className={Style.logoLink}
              />
            </a> 
            <Image
              src="/icons/enveloppe.svg"
              alt="Enveloppe" 
              width={75} 
              height={50} 
              className={Style.logoLink}
              onClick={() => sendEmail()}
            />
        </div>
        <span className={Style.dev}>Développeur FullStack</span>
    </nav>
  );
}