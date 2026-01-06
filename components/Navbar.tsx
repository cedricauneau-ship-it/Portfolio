import Image from "next/image";
import Style from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Style.container}>
        <div className={Style.leftSection}>
            <Image src="/favicon.ico" alt="Logo" width={35} height={35} />
            <span className={Style.name}>Cédric Auneau</span>
        </div>
        <div className={Style.rightSection}>
            <a href="#home">Accueil</a>
            <a href="#about">À propos</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
  );
}