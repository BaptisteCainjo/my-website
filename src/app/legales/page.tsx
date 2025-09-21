import NavBar from "@/components/NavBar/NavBar";
import LegalesStyle from "@/scss/pages/Legales.module.scss";
import { EMAIL } from "@/utils/constants";
import Head from "next/head.js";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions légales • Baptiste Cainjo</title>
        <meta
          name="description"
          content="Mentions légales du site web personnel de Baptiste Cainjo, développeur Full-Stack chez MMA. Retrouvez les informations sur l'éditeur, l'hébergement, la propriété intellectuelle et la gestion des données personnelles."
        />
      </Head>
      <NavBar />
      <section className={LegalesStyle.container}>
        <h1>Mentions Légales</h1>
        <div>
          <h2>Éditeur du site</h2>
          <p>
            <strong>Nom et Prénom : </strong>Cainjo Baptiste
          </p>
          <p>
            <strong>Pays : </strong>France
          </p>
          <p>
            <strong>E-mail : </strong>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
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
          <p>
            <strong>Hébergeur : </strong>Vercel Inc.
          </p>
          <p>
            <strong>Adresse : </strong>340 S Lemon Ave, Walnut, CA 91789, USA
          </p>
          <p>
            <strong>Téléphone : </strong>(559) 288-7060
          </p>
        </div>
        <div>
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur ce site, incluant mais sans
            s&apos;y limiter : textes, images, vidéos, logos, design et code,
            sont la propriété exclusive de Baptiste Cainjo. Toute reproduction,
            représentation, modification, publication, transmission, totale ou
            partielle, sans autorisation préalable est strictement interdite.
          </p>
        </div>
        <div>
          <h2>Données personnelles</h2>
          <p>
            Si vous utilisez le formulaire de contact pour m’envoyer un message,
            les informations fournies (nom, email, message) sont utilisées
            uniquement pour répondre à vos demandes. Conformément à la
            réglementation sur la protection des données personnelles (RGPD),
            vous disposez d’un droit d’accès, de rectification et de suppression
            de vos données. Pour exercer ce droit, vous pouvez me contacter à
            l’adresse : <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
        <div>
          <h2>Statistiques de fréquentation</h2>
          <p>
            Ce site utilise Vercel Analytics pour suivre anonymement le nombre
            de visiteurs et les pages consultées. Aucune donnée personnelle
            n’est collectée et aucun cookie n’est utilisé.
          </p>
        </div>

        <div>
          <h2>Responsabilité</h2>
          <p>
            L’éditeur du site ne saurait être tenu responsable des dommages
            directs ou indirects pouvant résulter de l’accès ou de l’utilisation
            de ce site, y compris l’inaccessibilité ou l’altération des
            contenus.
          </p>
        </div>
      </section>
    </>
  );
}
