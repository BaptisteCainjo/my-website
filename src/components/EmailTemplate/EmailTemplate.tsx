import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Link,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>Nouvelle demande de contact de {name}</Preview>
    <Body>
      <Container>
        <Heading>Nouveau Message de Contact</Heading>
        <Text>Bonjour,</Text>
        <Text>
          Vous avez reçu un nouveau message via votre formulaire de contact :
        </Text>
        <Section>
          <Text>Nom :</Text>
          <Text>{name}</Text>
        </Section>
        <Section>
          <Text>Email :</Text>
          <Text>
            <Link href={`mailto:${email}`}>{email}</Link>
          </Text>
        </Section>
        <Section>
          <Text>Message :</Text>
          <Text>{message}</Text>
        </Section>
        <Section>
          <Text>
            Merci de vérifier ce message et de répondre dès que possible.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
