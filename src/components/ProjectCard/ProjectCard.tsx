import React, { useState } from "react";
import Image, { StaticImageData } from "next/image.js";
import ProjectCardStyle from "./ProjectCard.module.scss";

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
import GestionAdministrative from "@/assets/images/gestion_administrative.png"

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

type PortfolioProps = {
  portfolio: PortfolioItems[];
};

const imageSources: { [key: string]: StaticImageData } = {
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
  return (
    <ul className={ProjectCardStyle.cards}>
      {portfolio.map((element, index) => (
        <li key={index} className={ProjectCardStyle.card}>
            <Image
              src={imageSources[element.title]}
              alt={`Illustration du projet ${element.title}`}
              className={ProjectCardStyle.card__image}
            />
            <div className={ProjectCardStyle["card-overlay"]}>
              <div className={ProjectCardStyle["card-header"]}>
                <svg className={ProjectCardStyle["card-arc"]} xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <div className={ProjectCardStyle.card__headerText}>
                  <h3>{element.title}</h3>
                  <span>{`${element.date} ${element.endDate ? `- ${element.endDate}` : ''} • ${element.type} • ${element.skill}`}</span>
                </div>
              </div>
              <p className={ProjectCardStyle.card__description}>{element.description} <a href={element.link.github}></a></p>
            </div>
        </li>
      ))}
    </ul>
  );
}
