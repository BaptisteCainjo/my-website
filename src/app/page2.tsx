// "use client";

// import { useEffect, useState } from "react";

// import HomeStyle from "@/scss/pages/Home.module.scss";
// import BtnUp from "@/components/BtnUp/BtnUp";
// import BtnNetwork from "@/components/BtnNetwork/BtnNetwork";
// import NavBtn from "@/components/NavBtn/NavBtn";
// import NavBar from "@/components/NavBar/NavBar";
// import SquareInfo from "@/components/SquareInfo/SquareInfo";
// import data from "@/utils/data.json";
// import H2 from "@/components/h2/H2";
// import BtnFilter from "@/components/BtnFilter/BtnFilter";
// import ProjectCard from "@/components/ProjectCard/ProjectCard";
// import FormMail from "@/components/FormMail/FormMail";
// import RectMail from "@/components/RectMail/RectMail";
// import Footer from "@/components/Footer/Footer";

// import HandShake from "@/assets/svg/icons/hand_shake.svg";
// import Code from "@/assets/svg/icons/code.svg";
// import Palette from "@/assets/svg/icons/palette.svg";
// import Computer from "@/assets/svg/icons/computer.svg";

// interface PortfolioItems {
//   title: string;
//   description: string;
//   skill: string;
//   date: number | string;
//   type: string;
//   language: string[];
//   link: {
//     github?: string;
//     watch?: string;
//     video?: string;
//   };
//   endDate?: number;
// }

// interface ProfessionalContent {
//   priority: number;
//   strongText: string;
// }

// const iconMap: { [key: string]: any } = {
//   "Développeur Web" : Code,
//   "Concepteur Web" : Palette,
//   "Webdesigner" : Computer,
// };

// export default function Home() {
//   const [portfolio, setPortfolio] = useState<PortfolioItems[]>(data.portfolio);

//   const [currentSquare, setCurrentSquare] = useState(0);
//   const aboutProfessional: ProfessionalContent[] = data.professionalInfo;
//   const square = aboutProfessional[currentSquare];

//   const handleFilterClick = (filter: string) => {
//     if (filter === "Tous") {
//       setPortfolio(data.portfolio);
//     } else {
//       const filteredPortfolio = data.portfolio.filter(
//         (item) => item.type === filter
//       );
//       setPortfolio(filteredPortfolio);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSquare((currentSquare) =>
//         currentSquare === aboutProfessional.length - 1 ? 0 : currentSquare + 1
//       );
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [aboutProfessional.length]);

//   return (
//     <>
//       <NavBar content={data.navigation} />
//       <NavBtn content={data.navigation} />
//       <section id="part1" className={HomeStyle.about}>
//         <SquareInfo
//           icon={HandShake}
//           strongText="Cainjo Baptiste"
//           basicText="Bonjour, je suis"
//           priority={1}
//         />
        
//         <SquareInfo
//           icon={iconMap[square.strongText]}
//           strongText={square.strongText}
//           basicText="chez MMA depuis septembre 2022."
//           priority={2}
//         />
//       </section>
//       <section id="part2">
//         <H2 titleContent="Mon portfolio créatif" importantWord="portfolio" />
//         <div className={HomeStyle.portfolio}>
//           <BtnFilter
//             names={["Tous", "Personnel", "Scolaire", "Professionnel"]}
//             onFilterClick={handleFilterClick}
//           ></BtnFilter>
//           <ProjectCard portfolio={portfolio} />
//         </div>
//       </section>
//       <section id="part3">
//         <H2 titleContent="Les logiciels maitrisés" importantWord="logiciels" />
//       </section>
//       <section id="part4">
//         <H2 titleContent="Et mon contact !" importantWord="contact" />
//         <div className={HomeStyle.contact}>
//           <RectMail />
//           <FormMail />
//         </div>
//       </section>
//       <Footer />
//       <BtnUp />
//       <BtnNetwork content={data.networks} />
//     </>
//   );
// }
