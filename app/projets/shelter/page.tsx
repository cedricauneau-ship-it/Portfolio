import Style from "./Page.module.css"

import Image from "next/image";

export default function ShelterProject() {
  const skills = [
    {
      name: "TypeScript",
      icon: "/icons/typescript.svg",
      color: "#3178C6",
    },
    {
      name: "React Native",
      icon: "/icons/react.svg",
      color: "#61DAFB",
    },
    {
      name: "Expo",
      icon: "/icons/expo.svg",
      color: "#ffffffde",
    },
    {
      name: "Redux Toolkit",
      icon: "/icons/redux.svg",
      color: "#764ABC",
    },
    {
      name: "Node",
      icon: "/icons/nodedotjs.svg",
      color: "#5FA04E",
    },
    {
      name: "Express",
      icon: "/icons/express.svg",
      color: "#ffffffde",
    },
    {
      name: "Prisma",
      icon: "/icons/prisma.svg",
      color: "#5A67D8",
    },
    {
      name: "PostgreSQL",
      icon: "/icons/postgresql.svg",
      color: "#4169E1",
    },
    {
      name: "JWT",
      icon: "/icons/jwt.svg",
      color: "#FB015B",
    },
    {
      name: "Jest",
      icon: "/icons/jest.svg",
      color: "#C21325",
    },
  ]

  const shelter = [
    {
      name: "Menu",
      icon: "/images/projects/Shelter/Menu.jpg",
    },
    {
      name: "Game",
      icon: "/images/projects/Shelter/Game.png",
    },
    {
      name: "GameOver",
      icon: "/images/projects/Shelter/GameOver.jpg",
    },
    {
      name: "RecapGame",
      icon: "/images/projects/Shelter/RecapGame.jpg",
    },
  ]

  return (
    <main className={Style.projectPage}>

      <section className={Style.projectHero}>
        <h1>SHELTER</h1>

        <p>
          Jeu mobile narratif de survie à choix binaires
          dans un univers post-apocalyptique.
        </p>

        <p>
          Application complète React Native + API TypeScript
        </p>

        <div className={Style.projectSkills}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={Style.skillContainer}
              style={
                {
                  "--skill-color": skill.color,
                } as React.CSSProperties
              }
              data-label={skill.name}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={26}
                height={26}
                className={Style.skillIcon}
              />
            </div>
          ))}
        </div>

        <div className={Style.projectPreview}>
          {shelter.map((image) => (
            <div key={image.name} className={Style.phoneWrapper}>
              <div className={Style.phone}>
                <div className={Style.notch} />
                <div className={Style.screen}>
                  <Image
                    src={image.icon}
                    alt={image.name}
                    width={175}
                    height={275}
                    className={Style.imageIcon}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      <div className={Style.sectionDivider} />

      <section className={Style.projectIntro}>

        <h2>Présentation du projet</h2>

        <p>
          Shelter est un jeu mobile narratif de survie dans un univers post-apocalyptique,
          basé sur un système de choix binaires impactant directement la progression
          du scénario et l’état du personnage (faim, moral, santé, sécurité, nourriture).
        </p>

        <p>
          Né d’un projet collaboratif, le jeu a été entièrement repris et reconstruit
          en V2 en solo : passage à TypeScript de bout en bout, refonte du backend
          autour de Prisma + PostgreSQL, mise en place d’une authentification JWT
          avec Google Sign-In, et ajout d’un ensemble de fonctionnalités produit
          (succès, classement, parrainage, premium, publicités récompensées).
        </p>

      </section>

      <div className={Style.sectionDivider} />

      <section className={Style.projectArchitecture}>
        <h2>Architecture technique</h2>

        <p className={Style.archIntro}>
          Stack full TypeScript, séparation stricte client / serveur,
          logique de jeu côté backend pour garder une source de vérité unique.
        </p>

        <div className={Style.archDiagram}>

          <div className={Style.archNode}>
            <span className={Style.archTag}>Mobile</span>
            <h3>Frontend</h3>
            <p className={Style.archStack}>
              React Native · Expo SDK 54 · TypeScript
            </p>
            <ul className={Style.archList}>
              <li>Redux Toolkit + redux-persist</li>
              <li>React Navigation (stack + tabs)</li>
              <li>Expo AV / Haptics / Updates</li>
              <li>Google Sign-In · AdMob</li>
              <li>fetchWithAuth (refresh token auto)</li>
            </ul>
          </div>

          <div className={Style.archArrow} aria-hidden="true">
            <span>HTTPS / JSON</span>
          </div>

          <div className={Style.archNode}>
            <span className={Style.archTag}>API</span>
            <h3>Backend</h3>
            <p className={Style.archStack}>
              Node · Express · TypeScript
            </p>
            <ul className={Style.archList}>
              <li>Modules : auth · users · games · achievements · feedbacks</li>
              <li>JWT + refresh token · Google OAuth</li>
              <li>Helmet · CORS · rate limit</li>
              <li>json-rules-engine (logique de jeu)</li>
              <li>Cache cartes en mémoire</li>
              <li>Tests Jest + Supertest</li>
            </ul>
          </div>

          <div className={Style.archArrow} aria-hidden="true">
            <span>Prisma</span>
          </div>

          <div className={Style.archNode}>
            <span className={Style.archTag}>Data</span>
            <h3>Base de données</h3>
            <p className={Style.archStack}>
              PostgreSQL · Prisma ORM
            </p>
            <ul className={Style.archList}>
              <li>Users · Games · Cards · Achievements</li>
              <li>Referrals (système de parrainage)</li>
              <li>Feedbacks · UserAchievements</li>
              <li>Migrations versionnées</li>
              <li>Seed reproductible</li>
            </ul>
          </div>

        </div>
      </section>

      <div className={Style.sectionDivider} />

      <section className={Style.projectRole}>

        <h2>Mon rôle dans le projet</h2>

        <div className={Style.roleTimeline}>
          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Refonte complète en V2</h3>
              <p>
                Reprise du projet collaboratif initial et reconstruction
                de zéro côté backend, avec migration JavaScript vers TypeScript
                et MongoDB vers PostgreSQL via Prisma.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>API REST modulaire</h3>
              <p>
                Architecture Express découpée par domaine (auth, users, games,
                achievements, feedbacks) avec services, routes et middlewares
                isolés pour faciliter les évolutions et les tests.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Authentification et sécurité</h3>
              <p>
                JWT avec refresh token, Google Sign-In, hash bcrypt,
                Helmet, CORS strict et rate limiting différencié sur
                les routes sensibles et générales.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Moteur de jeu côté serveur</h3>
              <p>
                Logique de partie (cartes, scénarios, jauges, jours)
                pilotée par json-rules-engine, avec un cache cartes en
                mémoire pour éviter une requête DB à chaque tour.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>App React Native (Expo)</h3>
              <p>
                Navigation typée, state global Redux Toolkit + redux-persist,
                écrans auth / jeu / profil / classement / boutique / succès,
                gestion son et haptique, animations et sliders custom.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Monétisation et rétention</h3>
              <p>
                Intégration AdMob (publicités récompensées), achat premium
                via Google Play, système de parrainage, progression XP / niveaux
                et succès débloquables côté serveur.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Tests et déploiement</h3>
              <p>
                Tests d’API avec Jest + Supertest, build mobile via EAS
                et préparation du test fermé sur Google Play Console.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className={Style.projectFeatures}>
        <h2>Fonctionnalités clés</h2>

        <div className={Style.featuresGrid}>
          <div className={Style.featureCard}>
            <h3>Auth JWT + Google</h3>
            <p>
              Connexion email / mot de passe ou Google Sign-In, tokens
              JWT avec refresh token persistés côté client et révoqués
              côté serveur.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Moteur de jeu typé</h3>
            <p>
              Cartes, scénarios et jauges (faim, moral, santé, sécurité,
              nourriture) gérés côté serveur via json-rules-engine pour
              empêcher toute triche client.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Classement global</h3>
            <p>
              Leaderboard temps réel basé sur le meilleur score, avec
              positionnement du joueur et pagination côté API.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Succès et progression</h3>
            <p>
              Système de succès débloquables, XP et niveaux calculés
              côté serveur, restitués dans l’app et persistés en base.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Premium et parrainage</h3>
            <p>
              Achat premium via Google Play (vérification du purchase token),
              codes parrain uniques et suivi des parties des filleuls.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Pubs récompensées</h3>
            <p>
              Intégration React Native Google Mobile Ads pour proposer
              des bonus en partie, désactivées pour les joueurs premium.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Sécurité API</h3>
            <p>
              Helmet, CORS restreint, rate limiting (10 req / 15 min sur
              auth, 100 sur les routes générales) et middleware d’erreurs
              centralisé.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Reprise de partie</h3>
            <p>
              Une partie en cours par utilisateur, sauvegardée côté
              serveur (cartes utilisées, jauges, jour, scénarios actifs)
              et reprise depuis n’importe quel appareil.
            </p>
          </div>

        </div>
      </section>


      <div className={Style.sectionDivider} />

      <section className={Style.projectLearnings}>
        <h2>Ce que j’ai appris</h2>

        <div className={Style.learningsContent}>
          <p>
            Penser une API en modules par domaine (auth, users, games,
            achievements, feedbacks) rend le code plus lisible, plus testable
            et limite les régressions quand de nouvelles fonctionnalités arrivent.
          </p>

          <p>
            Déplacer la logique de jeu côté serveur (cartes, jauges, succès)
            et n’exposer au client que des actions à valider évite la triche
            et garde une seule source de vérité.
          </p>

          <p>
            Migrer de MongoDB à PostgreSQL via Prisma m’a appris à modéliser
            sérieusement les relations (User, Game, Card, parrainages, succès)
            et à m’appuyer sur les migrations pour faire évoluer la base
            sans tout casser.
          </p>

          <p>
            Sécuriser une API publique demande plus que du JWT : Helmet,
            CORS strict, rate limiting différencié, gestion centralisée
            des erreurs et vérification serveur des achats Google Play.
          </p>

          <p>
            Sortir une app mobile en production (build EAS, signing, test fermé
            Google Play, AdMob, Google Sign-In) implique autant de travail
            de configuration et de conformité que de code applicatif.
          </p>
        </div>

      </section>

      <div className={Style.sectionDivider} />

      <section className={Style.projectCTA}>
        <h2>Un projet similaire en tête ?</h2>

        <p>
          Je suis disponible pour échanger autour de vos idées
          ou pour discuter d’une collaboration.
        </p>

        <div className={Style.ctaActions}>
          <a
           href="mailto:auneau.dev@gmail.com?subject=Contact%20Portfolio"
           className={Style.ctaPrimary}
          >
            Me contacter
          </a>

          {/*
            TODO : activer le bouton Play Store une fois le test fermé Google Play terminé.
            Remplacer href="#" par l'URL définitive de la fiche Play Store.

          <a
            href="#"
            className={Style.ctaSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir sur Google Play
          </a>
          */}

        </div>

      </section>

    </main>
  );
}
