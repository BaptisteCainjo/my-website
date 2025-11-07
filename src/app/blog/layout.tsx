import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog • Baptiste Cainjo',
  description: "Articles sur le développement, l'UX/UI, le développement personnel, le voyage et bien plus encore.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
