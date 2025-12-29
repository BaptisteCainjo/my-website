"use client";

import { useState } from "react";
import Image from "next/image";

import portfolioData from "@/utils/data/portfolio.json";
import navigation from "@/utils/data/navigation.json";
import networks from "@/utils/data/networks.json";

import HomeStyle from "@/scss/pages/Home.module.scss";
import BtnNetwork from "@/components/BtnNetwork/BtnNetwork";
import NavBtn from "@/components/NavBtn/NavBtn";
import NavBar from "@/components/NavBar/NavBar";

import H2 from "@/components/h2/H2";
import BtnFilter from "@/components/BtnFilter/BtnFilter";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import FormMail from "@/components/FormMail/FormMail";
import RectMail from "@/components/RectMail/RectMail";
import Bubble from "@/components/Bubble/Bubble";
import CircleSoftware from "@/components/CircleSoftware/CircleSoftware";
import SquareSmall from "@/components/SquareSmall/SquareSmall";

import HandShake from "@/assets/svg/icons/hand_shake.svg";
import Code from "@/assets/svg/icons/code.svg";
import { ROUTES } from "@/utils/constants/routes";

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

export default function Home() {
  const [portfolio, setPortfolio] = useState<PortfolioItems[]>(
    portfolioData.filter((item) => item.type === "Personnel")
  );

  const handleFilterClick = (filter: string) => {
    if (filter === "Tous") {
      setPortfolio(portfolioData);
    } else {
      const filteredPortfolio = portfolioData.filter((item) => item.type === filter);
      setPortfolio(filteredPortfolio);
    }
  };

  return (
    <>
      <div className={HomeStyle.fullBackground}></div>
      <NavBar content={navigation} />
      <NavBtn content={navigation} />
      <section id="part1" className={HomeStyle.about}>
        <div className={HomeStyle["square-info"]}>
          <Image src={HandShake} alt="icon" width={50} height={50} />
          <div>
            <p>Bonjour, je suis</p>
            <h1 className={HomeStyle["strong-title"]}>Baptiste Cainjo</h1>
          </div>
        </div>

        <div className={HomeStyle["square-small"]}>
          <div className={HomeStyle["square-info"]}>
            <Image src={Code} alt="icon" width={50} height={50} />
            <div>
              <strong>Développeur Full-stack </strong>
              <p>depuis 2022.</p>
            </div>
          </div>
          <nav>
            <SquareSmall text="Blog" link={ROUTES.BLOG} />
            {/* <SquareSmall text="Read.cv" link="https://read.cv/baptistecainjo" /> */}
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

      <BtnNetwork content={networks} />
    </>
  );
}
