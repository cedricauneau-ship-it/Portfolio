import Style from "./Page.module.css";

export default function MentionsLegalesPage() {
  return (
    <main className={Style.legalPage}>
      <section className={Style.legalContainer}>

        <h1 className={Style.legalTitle}>Mentions légales</h1>
        <p className={Style.legalIntro}>
          Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575
          du 21 juin 2004 pour la Confiance dans l’Économie Numérique (LCEN),
          il est précisé aux utilisateurs et visiteurs du présent site les informations suivantes.
        </p>

        <h2>1. Éditeur du site</h2>
        <ul>
          <li><strong>Nom :</strong> Cédric Auneau</li>
          <li><strong>Statut :</strong> Entrepreneur individuel (auto-entrepreneur)</li>
          <li><strong>Adresse :</strong> 11 rue de la plaine de france, 95190 Fontenay-en-parisis</li>
          <li><strong>E-mail :</strong> auneau.dev@gmail.com</li>
          <li><strong>SIRET :</strong> [À COMPLÉTER — votre numéro SIRET à 14 chiffres]</li>
          <li><strong>TVA :</strong> Non applicable, article 293 B du CGI (franchise en base de TVA)</li>
        </ul>

        <h2>2. Directeur de la publication</h2>
        <p>Cédric Auneau, en sa qualité d’éditeur du site.</p>

        <h2>3. Hébergement</h2>
        <p>Le site est hébergé par :</p>
        <ul>
          <li><strong>Société :</strong> Vercel Inc.</li>
          <li><strong>Adresse :</strong> 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis</li>
          <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
          <li><strong>Contact :</strong> privacy@vercel.com</li>
        </ul>

        <h2>4. Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur ce site (textes, images, vidéos, logos, code source,
          structure, mise en page) est la propriété exclusive de Cédric Auneau, sauf mention contraire
          explicite. Toute reproduction, représentation, modification, publication ou adaptation,
          totale ou partielle, par quelque procédé que ce soit, est interdite sans autorisation
          écrite préalable.
        </p>
        <p>
          Les marques et logos cités appartiennent à leurs propriétaires respectifs et ne sont mentionnés
          qu’à titre informatif ou descriptif.
        </p>

        <h2>5. Données personnelles</h2>
        <p>
          Conformément au Règlement (UE) 2016/679 du Parlement européen (RGPD) et à la loi
          Informatique et Libertés modifiée, vous êtes informés des éléments suivants :
        </p>
        <ul>
          <li>
            <strong>Responsable du traitement :</strong> Cédric Auneau, dont les coordonnées
            figurent à la section 1 ci-dessus.
          </li>
          <li>
            <strong>Données collectées :</strong> les données fournies via le formulaire de demande
            de devis (type de projet, budget estimé, description, délai souhaité, e-mail si applicable).
          </li>
          <li>
            <strong>Finalité du traitement :</strong> répondre à vos demandes de devis et préparer
            un échange autour de votre projet.
          </li>
          <li>
            <strong>Base légale :</strong> intérêt légitime du responsable de traitement et exécution
            de mesures précontractuelles à votre demande.
          </li>
          <li>
            <strong>Sous-traitant :</strong> les formulaires sont transmis via le service EmailJS
            (<a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer">emailjs.com</a>),
            qui assure le routage des messages vers la boîte e-mail de l’éditeur.
            Les conditions de traitement appliquées par EmailJS sont consultables sur leur
            <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer"> politique de confidentialité</a>.
          </li>
          <li>
            <strong>Durée de conservation :</strong> les messages sont conservés pendant la durée
            nécessaire au traitement de la demande, et au maximum 3 ans après le dernier contact.
          </li>
          <li>
            <strong>Vos droits :</strong> vous disposez d’un droit d’accès, de rectification, d’effacement,
            de portabilité, d’opposition et de limitation du traitement de vos données. Pour exercer
            ces droits, contactez l’éditeur à l’adresse <a href="mailto:auneau.dev@gmail.com">auneau.dev@gmail.com</a>.
          </li>
          <li>
            <strong>Réclamation :</strong> en cas de litige, vous pouvez introduire une réclamation
            auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).
          </li>
        </ul>

        <h2>6. Cookies</h2>
        <p>
          Le présent site n’utilise aucun cookie publicitaire ni cookie de mesure d’audience tierce.
          Seuls des cookies strictement nécessaires au fonctionnement du site (préférences de session,
          sécurité) peuvent être déposés sans recueil de consentement préalable, conformément à la
          recommandation de la CNIL du 17 septembre 2020.
        </p>

        <h2>7. Liens externes</h2>
        <p>
          Ce site peut contenir des liens vers des sites tiers. L’éditeur n’exerce aucun contrôle
          sur ces sites externes et décline toute responsabilité quant à leur contenu, leur politique
          de confidentialité ou leurs pratiques.
        </p>

        <h2>8. Crédits</h2>
        <ul>
          <li>Conception et développement : Cédric Auneau</li>
          <li>Icônes : <a href="https://simpleicons.org" target="_blank" rel="noopener noreferrer">Simple Icons</a> (CC0)</li>
          <li>Fontes : Google Fonts</li>
          <li>Hébergement : Vercel</li>
        </ul>

        <h2>9. Contact</h2>
        <p>
          Pour toute question relative aux présentes mentions légales ou à vos données personnelles,
          vous pouvez écrire à <a href="mailto:auneau.dev@gmail.com">auneau.dev@gmail.com</a>.
        </p>

        <p className={Style.legalUpdate}>
          Dernière mise à jour : avril 2026.
        </p>

      </section>
    </main>
  );
}
