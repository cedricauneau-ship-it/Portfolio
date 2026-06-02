"use client";

import Style from './Footer.module.css';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.footerContainer}>
        <div className={Style.footerProfile}>
          <h3 className={Style.footerTitle}>Cédric Auneau</h3>
          <p className={Style.footerDescription}>Développeur full-stack qui crée et gère</p>
          <p className={Style.footerDescription}>des applications et sites web et mobile.</p>
        </div>
        <div className={Style.footerSocials}>
          <h3 className={Style.footerTitle}>Réseaux</h3>
          <div className={Style.logoContainer}>
            <a
              href="https://github.com/cedricauneau-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='Mon profil GitHub'
            > 
              <Image
                src="/icons/github.svg"
                alt="Logo GitHub"
                width={50}
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
                alt="Logo LinkedIn"
                width={50}
                height={50}
                className={Style.logoLink}
              />
            </a>
            <a
              href='https://www.malt.fr/profile/cedricauneau'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Mon profil Malt'
            >
              <Image
                src="/icons/malt.svg"
                alt="Logo Malt"
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
        <p>© Copyright {new Date().getFullYear()} - Créé par Cédric Auneau</p>
        <p>
          <a 
            className={Style.footerLink}
            href="/mentions-legales" 
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Mentions legales'
          >
            Mentions légales
          </a>
        </p>
      </div>
    </footer>
  );
}
