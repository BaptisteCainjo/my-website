import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Linkedin • Baptiste Cainjo',
  description: "Tous mes posts linkedIn en un seul endroit. Découvrez mes réflexions, conseils et partages d'expérience sur le développement web, la technologie et plus encore.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}