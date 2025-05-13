"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import portfolioData from "@/utils/data/portfolio.json";
import professionalInfo from "@/utils/data/professionalInfo.json";
import navigation from "@/utils/data/navigation.json";
import networks from "@/utils/data/networks.json";

import HomeStyle from "@/scss/pages/Home.module.scss";
import BtnUp from "@/components/BtnUp/BtnUp";
import BtnNetwork from "@/components/BtnNetwork/BtnNetwork";
import NavBtn from "@/components/NavBtn/NavBtn";
import NavBar from "@/components/NavBar/NavBar";

import H2 from "@/components/h2/H2";
import BtnFilter from "@/components/BtnFilter/BtnFilter";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import FormMail from "@/components/FormMail/FormMail";
import RectMail from "@/components/RectMail/RectMail";
import Footer from "@/components/Footer/Footer";
import Bubble from "@/components/Bubble/Bubble";
import CircleSoftware from "@/components/CircleSoftware/CircleSoftware";
import SquareSmall from "@/components/SquareSmall/SquareSmall";

import HandShake from "@/assets/svg/icons/hand_shake.svg";
import Code from "@/assets/svg/icons/code.svg";
import Palette from "@/assets/svg/icons/palette.svg";
import Computer from "@/assets/svg/icons/computer.svg";

interface PortfolioItems {
  title: string;
  description: string;
  skill: string;
  date: number | string;
  type: string;
  language: string[];
  link: {
    github?: string;
    watch?: string;
    video?: string;
  };
  endDate?: number;
}

interface ProfessionalContent {
  priority: number;
  strongText: string;
}

const iconMap: { [key: string]: any } = {
  "Développeur Full-stack": Code,
  "Concepteur Web": Palette,
  Webdesigner: Computer,
};

export default function Home() {
  const [portfolio, setPortfolio] = useState<PortfolioItems[]>(
    portfolioData.filter((item) => item.type === "Personnel")
  );
  const [currentSquare, setCurrentSquare] = useState(0);
  const aboutProfessional: ProfessionalContent[] = professionalInfo;
  const square = aboutProfessional[currentSquare];

  const handleFilterClick = (filter: string) => {
    if (filter === "Tous") {
      setPortfolio(portfolioData);
    } else {
      const filteredPortfolio = portfolioData.filter(
        (item) => item.type === filter
      );
      setPortfolio(filteredPortfolio);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSquare((currentSquare) =>
        currentSquare === aboutProfessional.length - 1 ? 0 : currentSquare + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [aboutProfessional.length]);

  return (
    <>
      <NavBar content={navigation} />
      <NavBtn content={navigation} />
      <section id="part1" className={HomeStyle.about}>
        <div className={HomeStyle["square-info"]}>
          <Image src={HandShake} alt="icon" width={50} height={50} />
          <div>
            <p>Bonjour, je suis</p>
            <h1>Baptiste Cainjo</h1>
          </div>
        </div>

        <div className={HomeStyle["square-small"]}>
          <div className={HomeStyle["square-info"]}>
            <Image
              src={iconMap[square.strongText]}
              alt="icon"
              width={50}
              height={50}
            />
            <div>
              <strong>{square.strongText}</strong>
              <p>chez MMA depuis septembre 2022.</p>
            </div>
          </div>
          <nav>
            {/* <SquareSmall text="Blog" link="/blog" /> */}
            <SquareSmall text="Read.cv" link="https://read.cv/baptistecainjo" />
            <SquareSmall text="CV" link="./ress/cv_website.pdf" />
          </nav>
        </div>

        <Bubble />
      </section>
      <section id="part2">
        <H2 titleContent="Mon portfolio créatif" importantWord="portfolio" />
        <div className={HomeStyle.portfolio}>
          <BtnFilter
            names={["Tous", "Personnel", "Étudiant", "Professionnel"]}
            onFilterClick={handleFilterClick}
          ></BtnFilter>
          <ProjectCard portfolio={portfolio} />
        </div>
      </section>
      <section id="part3">
        <H2 titleContent="Les logiciels maitrisés" importantWord="logiciels" />
        <CircleSoftware />
      </section>
      <section id="part4">
        <H2 titleContent="Et mon contact !" importantWord="contact" />
        <div className={HomeStyle.contact}>
          <RectMail />
          <FormMail />
        </div>
      </section>
      <Footer />
      <BtnUp />
      <BtnNetwork content={networks} />
    </>
  );
}
