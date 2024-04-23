"use client";

import { useEffect, useState } from "react";
import Image from "next/image.js";

import HomeStyle from "@/scss/pages/Home.module.scss";
import BtnUp from "@/components/BtnUp/BtnUp";
import BtnNetwork from "@/components/BtnNetwork/BtnNetwork";
import NavBtn from "@/components/NavBtn/NavBtn";
import NavBar from "@/components/NavBar/NavBar";
import SquareInfo from "@/components/SquareInfo/SquareInfo";
import BkgAbout from "@/assets/images/background.webp";
import data from '@/utils/data.json'

interface NavigationItems {
  id: number;
  title: string;
}

interface ProfessionalContent {
  emoji: string;
  strongText: string;
  basicText: string;
}

export default function Home() {
  const [navigation, setNavigation] = useState<NavigationItems[]>(data.navigation);

  const [currentSquare, setCurrentSquare] = useState<number>(0);
  const aboutProfessional: ProfessionalContent[] = data.professionalInfo;
  const square = aboutProfessional[currentSquare]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSquare((index) => (index === aboutProfessional.length - 1 ? 0 : index + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar content={navigation} />
      <NavBtn content={navigation} />
      <section className={HomeStyle.about}>
        <SquareInfo
          emoji="👋"
          strongText="Cainjo Baptiste"
          basicText="Bonjour, je suis"
          priority={1}
        />
        <SquareInfo
          emoji={square.emoji}
          strongText={square.strongText}
          basicText={square.basicText}
          priority={2}
        />
        <Image
          src={BkgAbout}
          alt="Image d'illustration"
          width={1024}
          height={1024}
        />
      </section>
      <section className={HomeStyle.portfolio}>
    
      </section>
      <BtnUp />
      <BtnNetwork />
    </>
  );
}
