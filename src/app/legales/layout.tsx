import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales • Baptiste Cainjo',
  description: "Mentions légales du site web personnel de Baptiste Cainjo, développeur Full-Stack chez MMA. Retrouvez les informations sur l'éditeur, l'hébergement, la propriété intellectuelle et la gestion des données personnelles.",
};

export default function LegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
