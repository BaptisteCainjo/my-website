import type { Metadata } from "next";
import "../scss/globals.scss";
import Cursor from "@/components/Cursor/Cursor";

export const metadata: Metadata = {
  title: "Baptiste Cainjo • Développeur Full-Stack",
  description:
    "Site web personnel de Baptiste CAINJO, étudiant en 3eme année de BUT MMI. Ce portfolio contient mes projets, mon parcours ou encore un formulaire de contact.",
  icons: {
    icon: "./images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Cursor />
        <main>{children}</main>
      </body>
    </html>
  );
}
