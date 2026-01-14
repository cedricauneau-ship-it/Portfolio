"use client";

import Style from './Footer.module.css';

import Image from 'next/image';

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
              src="icons/github.svg"
              alt=""
              width={50}
              height={50}
              className={Style.logoLink}
            />
            <a
              href='https://www.linkedin.com/in/cedric-auneau'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Mon profil LinkedIn'
            >
              <Image
                src="/icons/linkedin.svg"
                alt=""
                width={50}
                height={50}
                className={Style.logoLink}
              />
            </a>  
          </div>
        </div>
      </div>
      <div className={Style.footerDivider}></div>
      <div className={Style.footerEndText}>
        <p>© Copyright {new Date().getFullYear()} - Créer par Cédric Auneau</p>
      </div>
    </footer>
  );
}
