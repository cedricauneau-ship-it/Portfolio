import Style from "./Page.module.css"

export default function ShelterProject() {
  return (
    <main className={Style.projectPage}>

      <section className="projectHero">
        <h1>SHELTER</h1>
        <p>
          Jeu mobile narratif de survie à choix binaires dans un univers
          post-apocalyptique.
        </p>
        <span>Projet collaboratif • Mobile</span>
      </section>

      <section className="projectPreview">
        {/* Image ou mockup */}
      </section>

      <section className="projectSection">
        <h2>Contexte</h2>
        <p>
          SHELTER est un projet réalisé en collaboration avec trois autres
          développeurs lors de la formation La Capsule.
        </p>
      </section>

      <section className="projectSection">
        <h2>Mon rôle</h2>
        <p>
          J’ai participé au développement de la logique de jeu, à la gestion des
          choix utilisateurs et à l’implémentation de l’interface.
        </p>
      </section>

      <section className="projectSection">
        <h2>Stack technique</h2>
        <ul>
          <li>React Native</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </section>

      <section className="projectSection">
        <h2>Difficultés & solutions</h2>
        <p>
          La principale difficulté était de gérer les embranchements narratifs
          tout en conservant une logique de jeu cohérente.
        </p>
      </section>

      <section className="projectLinks">
        <a href="…" target="_blank">Voir le code</a>
      </section>
    </main>
  );
}