import NavBar from "@/components/NavBar/NavBar";
import legalesStyle from "./legales.module.scss";

export default function page() {
  return (
    <>
      <NavBar />
      <section className={legalesStyle.container}>
        <h1>Mentions Légales</h1>
        <div>
          <h2>Éditeur du site</h2>
          <p>
            <strong>Nom et Prénom : </strong>Cainjo Baptiste
          </p>
          <p>
            <strong>Adresse : </strong>25 Eugène Marziano, 1227 Les Acacias - Genève - Suisse
          </p>
          <p>
            <strong>E-mail : </strong>
            <a href="mailto:cainjo.baptiste@orange.fr">
              cainjo.baptiste@orange.fr
            </a>
          </p>
        </div>
        <div>
          <h2>Responsable de la publication</h2>
          <p>
            <strong>Nom et Prénom : </strong>Cainjo Baptiste
          </p>
        </div>

        <div>
          <h2>Hébergement du site</h2>
          <p><strong>Hébergeur : </strong>Infomaniak Network SA</p>
          <p>
            <strong>Adresse : </strong>25 Eugène Marziano, 1227 Les Acacias - Genève - Suisse
          </p>
        </div>
        <div>
          <h2>Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, graphiques,
            logo) sont la propriété exclusive de Cainjo Baptiste. Toute
            reproduction est interdite sans autorisation préalable.
          </p>
        </div>

        <div>
          <h2>Limitation de responsabilité</h2>
          <p>
            Les informations fournies sur ce site sont données à titre
            informatif et peuvent être modifiées à tout moment. Cainjo Baptiste
            ne saurait être tenu responsable d’un quelconque dommage lié à
            l’utilisation de ce site.
          </p>
        </div>
      </section>
    </>
  );
}
