import type { Metadata } from "next";
import "../scss/globals.scss";
import Cursor from "@/components/Cursor/Cursor";
import Footer from "@/components/Footer/Footer";
import BtnUp from "@/components/BtnUp/BtnUp";

export const metadata: Metadata = {
  title: "Baptiste Cainjo • Développeur Full-stack",
  description:
    "Site web personnel de Baptiste CAINJO, développeur Full-Stack chez MMA depuis septembre 2022. Ce portfolio contient mes projets, mon parcours ou encore un formulaire de contact.",
  icons: {
    icon: "./images/favicon.ico",
  },
};

import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={outfit.className}>
      <body>
        <Cursor />
        <main>{children}</main>

        <BtnUp />
        <Footer />
      </body>
    </html>
  );
}
