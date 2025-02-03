import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({
  name,
  email,
  message,
}: EmailTemplateProps) {
  const currentYear = new Date().getFullYear();

  return (
    <Html lang="fr">
      <Head>
        <title>Nouveau message de contact</title>
        <Font
          fontFamily="Outfit"
          fallbackFontFamily="Verdana"
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Nouvelle demande de contact de {name}</Preview>
      <Body>
        <Container>
          <Section>
            <Heading style={h1}>Nouveau Message de Contact</Heading>
            <Text>Bonjour,</Text>
            <Text>
              Vous avez reçu un nouveau message via votre formulaire de contact
              :
            </Text>
            <Text>
              <strong>Nom :</strong> {name}
            </Text>
            <Text>
              <strong>Email :</strong>{" "}
              <Link href={`mailto:${{ email }}`}>{email}</Link>
            </Text>
            <Text>
              <strong>Message :</strong> {message}
            </Text>
          </Section>
          <Hr />
          <Section style={footer}>
            <Text style={footerParagraph}>
              © 2022 - {currentYear} | Baptiste Cainjo | 25 Eugène Marziano, 1227 Les
              Acacias - Genève - Suisse
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const h1 = {
  textAlign: "center" as const,
  background: "#433B90",
  color: "white",
};

const footer = {
  background: "#f8f8f8",
};

const footerParagraph = {
  fontSize: "12px",
  textAlign: "center" as const,
};
