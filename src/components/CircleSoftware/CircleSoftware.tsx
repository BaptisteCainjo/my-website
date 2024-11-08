import Image from "next/image";
import React, { useEffect, useState } from "react";

import CircleSoftwareStyle from "./CircleSoftware.module.scss";
import Tooltip from "../Tooltip/Tooltip";
import { isMobileOnly } from "react-device-detect";

import Nodejs from "@/assets/svg/logos/nodejs.svg";
import Expressjs from "@/assets/svg/logos/expressjs.svg";
import MongoDB from "@/assets/svg/logos/mongodb.svg";
import ReactLogo from "@/assets/svg/logos/react.svg";
import Sass from "@/assets/svg/logos/sass.svg";
import Symfony from "@/assets/svg/logos/symfony.svg";
import D3js from "@/assets/svg/logos/d3js.svg";
import JavaScript from "@/assets/svg/logos/javascript.svg";
import HTML from "@/assets/svg/logos/html.svg";
import CSS from "@/assets/svg/logos/css.svg";
import Nextjs from "@/assets/svg/logos/nextjs.svg";
import TypeScript from "@/assets/svg/logos/typescript.svg";
import Flutter from "@/assets/svg/logos/flutter.svg";
import PHP from "@/assets/svg/logos/php.svg";
import MySql from "@/assets/svg/logos/mysql.svg";
import Playcanvas from "@/assets/svg/logos/playcanvas.svg";
import SMTPjs from "@/assets/svg/logos/smtpjs.svg";
import Bootstrap from "@/assets/svg/logos/bootstrap.svg";
import jQuery from "@/assets/svg/logos/jquery.svg";
import Figma from "@/assets/svg/logos/figma.svg";
import Github from "@/assets/svg/icons/github.svg";
import Adobe from "@/assets/svg/logos/adobe.svg";
import Penpot from "@/assets/svg/logos/penpot.svg";
import Java from "@/assets/svg/logos/java.svg";
import Tailwind from "@/assets/svg/logos/tailwind.svg";
import Redux from "@/assets/svg/logos/redux.svg";
import Affinity from "@/assets/svg/logos/affinity.svg";
import RGAA from "@/assets/svg/logos/rgaa.svg";
import SEO from "@/assets/svg/logos/seo.svg";
import Docker from "@/assets/svg/logos/docker.svg";
import VSCode from "@/assets/svg/logos/vscode.svg";
import Unity from "@/assets/svg/logos/unity.svg";
import Blender from "@/assets/svg/logos/blender.svg";
import AndroidStudio from "@/assets/svg/logos/android_studio.svg";
import Postman from "@/assets/svg/logos/postman.svg";
import Jira from "@/assets/svg/logos/jira.svg";
import Slack from "@/assets/svg/logos/slack.svg";
import Vite from "@/assets/svg/logos/vite.svg";
import Vercel from "@/assets/svg/logos/vercel.svg";

interface LangImage {
  [key: string]: {
    [key: string]: any;
  };
}

const langImage: LangImage = {
  "Front-end": {
    "Next.js": Nextjs,
    React: ReactLogo,
    TypeScript,
    "State Management (Redux - Mobx)": Redux,
    "JavaScript (ES6+)": JavaScript,
    "Sass (SCSS)": Sass,
    Tailwind,
    "HTML5": HTML,
    "CSS3": CSS,
    "Dart - Flutter": Flutter,
    "D3.js": D3js,
    jQuery,
    Bootstrap,
    "SMTP.js": SMTPjs,
  },
  "Back-end": {
    "Node.js": Nodejs,
    "Express.js": Expressjs,
    "NoSQL (MongoDB)": MongoDB,
    Symfony,
    "SQL (MySQL)": MySql,
    PHP,
    Java,
  },
  Outils: {
    "Git (GitHub - GitLab)": Github,
    Figma,
    "Containerization (Docker)": Docker,
    "Accessibilité (RGAA, WCAG)": RGAA,
    SEO,
    "Suite Adobe": Adobe,
    Postman,
    Playcanvas,
    VSCode,
    Vercel,
    "Outils de Build (Webpack - Babel - Vite)": Vite,
    "Android Studio": AndroidStudio,
    "Unity Game Engine": Unity,
    Penpot,
    "Suite Affinity": Affinity,
    Blender,
    "Slack - Microsoft Teams": Slack,
    "Jira - Confluence": Jira,
  },
};

export default function CircleSoftware() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(isMobileOnly);
  }, []);

  return (
    <div className={CircleSoftwareStyle.container}>
      {Object.keys(langImage).map((category) => (
        <React.Fragment key={category}>
          <div>
            <h3>{category}</h3>
            <div
              className={
                CircleSoftwareStyle[category.toLowerCase().replace("-", "")]
              }
            >
              {Object.keys(langImage[category]).map((lang, index) => (
                <div key={index}>
                  <Image
                    src={langImage[category][lang]}
                    alt={`Icône du langage ${lang}`}
                    width={20}
                    height={20}
                  />
                {!isMobileView && (
                  <Tooltip name={lang} />
                )}
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
