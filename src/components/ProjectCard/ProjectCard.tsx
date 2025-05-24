import React, { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image.js";
import ProjectCardStyle from "./ProjectCard.module.scss";
import Tooltip from "../Tooltip/Tooltip";
import languageLinks from "@/utils/data/languageLinks.json";

import Match from "@/assets/images/match.svg";
import ApplicationMeteo from "@/assets/images/application_meteo.png";
import Dataviz from "@/assets/images/dataviz.png";
import Flow from "@/assets/images/flow.png";
import Forum from "@/assets/images/forum.png";
import Historyai from "@/assets/images/historyai.png";
import Holl from "@/assets/images/holl.png";
import Portfolio from "@/assets/images/portfolio.png";
import Produit3d from "@/assets/images/produit3d.png";
import SiteECommerce from "@/assets/images/site_e_commerce.png";
import Quizrap from "@/assets/images/quizrap.png";
import Festview from "@/assets/images/festview.png";
import GestionAdministrative from "@/assets/images/gestion_administrative.png";

import Default from "@/assets/svg/backgrounds/default.svg";
import Github from "@/assets/svg/icons/github.svg";
import Watch from "@/assets/svg/icons/watch.svg";

interface PortfolioProps {
  portfolio: Array<{
    title: string;
    description: string;
    skill: string;
    date: number | string;
    type: string;
    language: string[];
    link: {
      github?: string;
      watch?: string;
    };
    endDate?: number;
  }>;
}

interface LanguageLinks {
  [key: string]: string;
}

const imageSources: { [key: string]: StaticImageData } = {
  Match: Match,
  "Application météo": ApplicationMeteo,
  Dataviz: Dataviz,
  Flow: Flow,
  Forum: Forum,
  "History.ai": Historyai,
  Holl: Holl,
  Portfolio: Portfolio,
  "Produit 3D": Produit3d,
  "Site E-Commerce": SiteECommerce,
  QuizRap: Quizrap,
  FestView: Festview,
  "Gestion administrative": GestionAdministrative,
};

export default function ProjectCard({ portfolio }: PortfolioProps) {
  const [showMore, setShowMore] = useState(false);
  const refCards = useRef<(HTMLLIElement | null)[]>([]);

  const onClickShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <ol className={ProjectCardStyle.cards}>
        {portfolio.map(
          (element, index) =>
            (showMore || index < 3) && (
              <li
                key={`${element.title}-${index}-${showMore}`}
                className={`${
                  showMore || index < 3 ? ProjectCardStyle.visible : ""
                }`}
                ref={(el) => {
                  refCards.current[index] = el;
                }}
                style={{ "--card-index": index } as React.CSSProperties}
              >
                <Image
                  src={
                    element.type === "Professionnel"
                      ? Default
                      : imageSources[element.title]
                  }
                  alt={`Illustration du projet ${element.title}`}
                  className={ProjectCardStyle["card-image"]}
                />
                <div className={ProjectCardStyle["card-overlay"]}>
                  <div className={ProjectCardStyle["card-header"]}>
                    <svg
                      className={ProjectCardStyle["card-arc"]}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <div className={ProjectCardStyle.card__headerText}>
                      <h3 className={ProjectCardStyle.card__title}>
                        {element.title}
                      </h3>
                      <span>{`${element.date} ${
                        element.endDate ? `- ${element.endDate}` : ""
                      } • ${element.type} • ${element.skill}`}</span>
                    </div>
                  </div>
                  <p className={ProjectCardStyle.card__description}>
                    {element.description}{" "}
                  </p>
                  <div className={ProjectCardStyle["card-language"]}>
                    {element.language.map((lang, index) => (
                      <React.Fragment key={index}>
                        <a href={(languageLinks as LanguageLinks)[lang]}>
                          {lang}
                        </a>
                        {index < element.language.length - 1 ? " " : ""}
                      </React.Fragment>
                    ))}
                  </div>
                  {(element.link.github || element.link.watch) && (
                    <div className={ProjectCardStyle.card__socials}>
                      {element.link.github && (
                        <>
                          <a href={element.link.github} target="_blank">
                            <Image
                              src={Github}
                              alt="Icône du site GitHub"
                              width={25}
                              height={25}
                            />
                            <Tooltip name="Le Github" />
                          </a>
                        </>
                      )}
                      {element.link.watch && (
                        <>
                          <a href={element.link.watch} target="_blank">
                            <Image
                              src={Watch}
                              alt="Icône pour visualiser le site"
                              width={25}
                              height={25}
                            />
                            <Tooltip name="Le projet" />
                          </a>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </li>
            )
        )}
      </ol>
      <button
        onClick={onClickShowMore}
        className={`${ProjectCardStyle.btn}${
          showMore ? ` ${ProjectCardStyle.active}` : ""
        }`}
      >
        {showMore ? "Voir moins" : "Voir plus"}
      </button>
    </>
  );
}
