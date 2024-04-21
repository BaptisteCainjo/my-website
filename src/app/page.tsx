"use client";

import { useState } from "react";
import Image from "next/image.js";

import HomeStyle from "@/scss/pages/Home.module.scss";
import BtnUp from "@/components/BtnUp/BtnUp";
import BtnNetwork from "@/components/BtnNetwork/BtnNetwork";
import NavBtn from "@/components/NavBtn/NavBtn";
import NavBar from "@/components/NavBar/NavBar";
import SquareInfo from "@/components/SquareInfo/SquareInfo";
import BkgAbout from "@/assets/images/background.webp";

export default function Home() {
  const [navigation, setNavigation] = useState<
    Array<{ id: number; title: string }>
  >([
    { id: 1, title: "À propos" },
    { id: 2, title: "Portfolio" },
    { id: 3, title: "Compétences" },
    { id: 4, title: "Contact" },
  ]);

  return (
    <>
      <NavBar content={navigation} />
      <NavBtn content={navigation} />
      <section className={HomeStyle.about}>
        <SquareInfo />
        {/* <img src={BkgAbout} alt="" /> */}
          <Image
            src={BkgAbout}
            alt="Image d'illustration"
            width={1024}
            height={1024}
          />
      </section>
      <BtnUp />
      <BtnNetwork />
    </>
  );
}
