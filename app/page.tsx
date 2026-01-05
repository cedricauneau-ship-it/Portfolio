import Style from "../styles/Page.module.css"

export default function Home() {
  return (
    <>
      {/* Section d'accueil */}
      <section className={Style.homeContainer} id="home">
        <h1 className={Style.title}>Salut, moi c'est Cédric Auneau</h1>
        <div className={Style.descriptionContainer}>
          <p className={Style.description}>Un développeur full-stack qui crée et gère</p>
          <p className={Style.description}>des applications et sites web et mobile</p>
          <p className={Style.description}>Bienvenue sur mon portfolio !</p>
        </div>
        <button className={Style.projetButton}>PROJETS</button>
      </section>

      {/* Section À propos de moi */}
      <section className={Style.aboutContainer} id="about">
        <div className={Style.aboutContent}>
          <h2>À propos de moi</h2>
          <p>Vous trouverez ici plus d'informations sur moi, ce que je fais et mes</p>
          <p>compétences actuelles en tant que développeur full-stack</p>
        </div>
        <div className={Style.aboutProfil}>
          <div className={Style.profilDescription}>
            <h3>Apprenez à me connaître !</h3>
            <p>
              En dehors du codage, j'aime explorer les dernières tendances technologiques, contribuer à des projets open-source et
              collaborer avec d'autres passionnés de technologie. Mon objectif est de continuer à évoluer en tant que développeur et
              de créer des solutions innovantes qui font une différence.
            </p>
            <button className={Style.contactButton}>CONTACT</button>
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


    </>
  );
}
