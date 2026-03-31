import Style from "./Page.module.css"

import Image from "next/image";

export default function ShelterProject() {
  const skills = [
    {
      name: "React",
      icon: "/icons/react.svg",
      color: "#61DAFB",
    },
    {
      name: "JavaScript",
      icon: "/icons/javascript.svg",
      color: "#F7DF1E",
    },
    {
      name: "Express",
      icon: "/icons/express.svg",
      color: "#ffffffde",
    },
    {
      name: "Git",
      icon: "/icons/git.svg",
      color: "#F05032",
    },
    {
      name: "Node",
      icon: "/icons/nodedotjs.svg",
      color: "#5FA04E",
    },
    {
      name: "Expo",
      icon: "/icons/expo.svg",
      color: "#ffffffde",
    },
    {
      name: "Redux",
      icon: "/icons/redux.svg",
      color: "#764ABC",
    },
    {
      name: "MongoDB",
      icon: "/icons/mongodb.svg",
      color: "#47A248",
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
          Projet collaboratif
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
          Shelter est un projet collaboratif de jeu mobile narratif de survie.
          Le joueur évolue dans un univers post-apocalyptique à travers une succession de choix binaires
          impactant directement la progression du scénario et la survie du personnage.
        </p>

      </section>

      <div className={Style.sectionDivider} />

      <section className={Style.projectRole}>

        <h2>Mon rôle dans le projet</h2>

        <div className={Style.roleTimeline}>
          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Initialisation du projet</h3>
              <p>
                Mise en place et structuration du projet afin de poser
                des bases solides pour le développement.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Configuration des frameworks</h3>
              <p>
                Intégration et configuration des frameworks nécessaires
                au développement du jeu.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Interface et logique de jeu</h3>
              <p>
                Intégration de l’interface utilisateur et gestion
                des échanges de données entre le frontend et le backend.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Ambiance sonore</h3>
              <p>
                Gestion et intégration des éléments sonores et bruitages
                pour renforcer l’immersion.
              </p>
            </div>
          </div>

          <div className={Style.roleStep}>
            <span className={Style.roleDot} />
            <div className={Style.roleContent}>
              <h3>Travail collaboratif</h3>
              <p>
                Collaboration au sein de l’équipe avec une communication
                régulière et une organisation partagée.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className={Style.projectFeatures}>
        <h2>Fonctionnalités clés</h2>

        <div className={Style.featuresGrid}>
          <div className={Style.featureCard}>
            <h3>Choix binaires</h3>
            <p>
              Les décisions du joueur influencent directement
              la progression narrative et la survie du personnage.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Narration à embranchements</h3>
            <p>
              Le scénario évolue selon les choix effectués,
              offrant des parcours narratifs multiples.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Interface mobile</h3>
            <p>
              Une interface pensée pour le mobile,
              fluide et immersive.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Progression joueur</h3>
            <p>
              Suivi de l’état du joueur et de sa progression
              tout au long de l’expérience.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Ambiance sonore</h3>
            <p>
              Intégration de bruitages et sons
              pour renforcer l’immersion.
            </p>
          </div>

          <div className={Style.featureCard}>
            <h3>Sauvegarde de progression</h3>
            <p>
              Conservation de l’état et des choix du joueur
              afin de reprendre la partie à tout moment.
            </p>
          </div>

        </div>
      </section>


      <div className={Style.sectionDivider} />

      <section className={Style.projectLearnings}>
        <h2>Ce que j’ai appris</h2>

        <div className={Style.learningsContent}>
          <p>
            La structuration du projet dès son initialisation m’a permis
            d’anticiper son évolution et de faciliter le travail en équipe.
          </p>

          <p>
            Le travail collaboratif m’a appris à m’organiser, à communiquer
            efficacement et à adapter mon travail aux contraintes du groupe.
          </p>

          <p>
            Le développement orienté mobile m’a permis de mieux comprendre
            l’importance de l’UX et des performances sur ce type de support.
          </p>

          <p>
            L’intégration des éléments sonores m’a montré l’impact du son
            sur l’immersion et l’expérience utilisateur.
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