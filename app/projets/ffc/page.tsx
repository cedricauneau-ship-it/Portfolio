import Style from "./Page.module.css"

import Image from "next/image";

export default function FFCProject() {
  const skills = [
    {
      name: "React",
      icon: "/icons/react.svg",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: "/icons/nextdotjs.svg",
      color: "#d3d3d3",
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.svg",
      color: "#3178C6",
    },
    {
      name: "CSS Modules",
      icon: "/icons/css.svg",
      color: "#663399",
    },
    {
      name: "Vercel",
      icon: "/icons/vercel.svg",
      color: "#d3d3d3",
    },
    {
      name: "Cloudflare",
      icon: "/icons/cloudflare.svg",
      color: "#F38020",
    },
  ]

  const ffcScreens = [
    {
      name: "Ecran Accueil",
      icon: "/images/projects/FFC/ffc-home-mobile.jpg",
    },
    {
      name: "Ecran Dirigeant",
      icon: "/images/projects/FFC/ffc-dirigeant-mobile.jpg",
    },
    {
      name: "Ecran Entrainement",
      icon: "/images/projects/FFC/ffc-entrainement-mobile.jpg",
    },
    {
      name: "Ecran Contact",
      icon: "/images/projects/FFC/ffc-contact-mobile.jpg",
    },
  ]

  return (
    <main className={Style.projectPage}>

      <section className={Style.projectHero}>
        <h1>Fontenay-en-Parisis FC</h1>

        <p>
          Site officiel du Fontenay-en-Parisis Football Club,
          conçu et développé bénévolement afin de moderniser la présence en ligne du club
          et d’améliorer sa visibilité locale.
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
          {ffcScreens.map((image) => (
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

        <div className={Style.projectLinks}>
          <a
            href="https://www.fontenayenparisisfootballclub.fr"
            target="_blank"
            rel="noopener noreferrer"
            className={Style.projectLinkPrimary}
          >
            Voir le site en ligne
          </a>

          <a
            href="https://github.com/cedricauneau-ship-it/FFC-Frontend-V2"
            target="_blank"
            rel="noopener noreferrer"
            className={Style.projectLinkSecondary}
          >
            Voir le code
          </a>
        </div>


      </section>

      <div className={Style.sectionDivider} />

      <section className={Style.projectIntro}>

        <h2>Présentation du projet</h2>

        <p>
          Le projet Fontenay-en-Parisis Football Club consiste en la création
          d’un site vitrine moderne et responsive destiné à une association sportive locale.
          L’objectif était de proposer une plateforme claire, accessible et adaptée
          aux joueurs, parents et bénévoles du club.
        </p>
        <p>
          Le site centralise les informations essentielles du club : présentation,
          école de foot, vie associative, contact et actualités,
          tout en offrant une navigation fluide sur tous les supports.
        </p>


      </section>

      <div className={Style.sectionDivider} />

      <section className={Style.projectRole}>

        <h2>Mon rôle dans le projet</h2>

        <div className={Style.roleTimeline}>
          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Analyse des besoins</h3>
              <p>
                Échanges avec les responsables du club afin d’identifier
                les besoins, le public cible et les informations à mettre en avant.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Conception et architecture</h3>
              <p>
                Définition de la structure du site, de la navigation
                et de l’organisation des contenus pour garantir clarté et accessibilité.
              </p>
            </div>
          </div>  

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Développement frontend</h3>
              <p>
                Développement du site en Next.js avec React et TypeScript,
                intégration du responsive et optimisation des performances.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Responsive & accessibilité</h3>
              <p>
                Adaptation complète de l’interface pour mobile et tablette,
                avec une attention particulière portée à l’UX et à la lisibilité.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Mise en ligne & SEO</h3>
              <p>
                Déploiement du site, configuration du nom de domaine,
                optimisation SEO (Search Console, sitemap, Open Graph)
                et accompagnement du club jusqu’à la mise en production.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className={Style.projectFeatures}>
        <h2>Fonctionnalités clés</h2>

        <div className={Style.featuresGrid}>
          <div className={Style.featureCard}>
            <h3>Site vitrine responsive</h3>
            <p>
              Adapté à tous les écrans (desktop, tablette, mobile).
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Navigation dynamique</h3>
            <p>
              Menu avec sous-sections claires pour faciliter l’accès aux informations.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Présentation du club et de l’école de foot</h3>
            <p>
              Contenus structurés pour les joueurs, parents et bénévoles.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Optimisation SEO locale</h3>
            <p>
              Référencement local optimisé pour améliorer la visibilité du club.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Mise en ligne et nom de domaine personnalisé</h3>
            <p>
              Déploiement sur Vercel avec gestion du domaine via Cloudflare.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Maintenance facilitée</h3>
            <p>
              Structure pensée pour permettre des mises à jour simples.
            </p>
          </div>

        </div>
      </section>


      <div className={Style.sectionDivider} />

      <section className={Style.projectLearnings}>
        <h2>Ce que j’ai appris</h2>

        <div className={Style.learningsContent}>
          <p>
            Ce projet m’a permis de gérer un projet réel de bout en bout,
            de la définition des besoins jusqu’à la mise en ligne.
          </p>

          <p>
            J’ai renforcé mes compétences en responsive design
            et en optimisation de l’expérience utilisateur sur mobile.
          </p>

          <p>
            La mise en place du SEO et du référencement local m’a permis
            de mieux comprendre les enjeux de visibilité pour une association.
          </p>

          <p>
            Travailler avec un client réel m’a appris à m’adapter,
            à communiquer efficacement et à livrer un projet fiable et maintenable.
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

        </div>

      </section>

    </main>
  );
}