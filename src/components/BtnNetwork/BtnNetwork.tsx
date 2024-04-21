//? Difference between target and targetIndex
"use client";

import Link from "next/link.js";
import Image from "next/image.js";
import React, { useState } from "react";
// import uuidv4 from 

import Linkedin from "@/assets/svg/icons/linkedin.svg";
import Github from "@/assets/svg/icons/github.svg";
import Mail from "@/assets/svg/icons/mail.svg";
import BtnNetworkStyle from "./BtnNetwork.module.scss"

export default function BtnNetwork() {
  const [socialNetworks] = useState([
    { name: "Linkedin", url: "https://www.linkedin.com/in/baptiste-cainjo/", icon: Linkedin },
    { name: "Github", url: "https://github.com/BaptisteCainjo", icon: Github },
    { name: "Mail", url: "#part5", icon: Mail },
  ]);

  return (
    <div className={BtnNetworkStyle.network}>
      {socialNetworks.map(({ name, url, icon }) => (
        <Link key={name} href={url} target="_blank">
          <Image src={icon} alt={`Icône de l'application ${name}`} />
        </Link>
      ))}
    </div>
  );
}
