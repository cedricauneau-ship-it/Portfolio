import Style from '../styles/Footer.module.css';

import Image from 'next/image';
import linkedin from '../public/images/linkedin.png';
import github from '../public/images/github.png';

export default function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.footerContainer}>
        <div className={Style.footerProfile}>
          <h3 className={Style.footerTitle}>Cédric Auneau</h3>
          <p className={Style.footerDescription}>Un développeur full-stack qui crée et gère</p>
          <p className={Style.footerDescription}>des applications et sites web et mobile.</p>
        </div>
        <div className={Style.footerSocials}>
          <h3 className={Style.footerTitle}>Réseaux</h3>
          <div className={Style.logoContainer}>
            <Image
              src={github}
              alt=""
              width={40}
              height={40}
            />
            <Image
              src={linkedin}
              alt=""
              width={35}
              height={35}
              className={Style.linkedin}
            />
          </div>
        </div>
      </div>
      <div className={Style.footerDivider}></div>
      <p className={Style.footerDescription}>© Copyright {new Date().getFullYear()} - Créer par Cédric Auneau</p>
    </footer>
  );
}
