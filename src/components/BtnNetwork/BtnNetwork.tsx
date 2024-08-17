"use client";

import Link from "next/link.js";
import Image from "next/image.js";
import React from "react";

import Linkedin from "@/assets/svg/icons/linkedin.svg";
import Github from "@/assets/svg/icons/github.svg";
import Mail from "@/assets/svg/icons/mail.svg";
import BtnNetworkStyle from "./BtnNetwork.module.scss";

interface NetworksItems {
  name: string;
  url: string;
}

type NetworksProps = {
  content: NetworksItems[];
};

const imageSources: { [key: string]: string } = {
  Linkedin: Linkedin,
  Github: Github,
  Mail: Mail,
};

export default function BtnNetwork({ content }: NetworksProps) {
  return (
    <div className={BtnNetworkStyle.network}>
      {content.map(({ name, url }) => (
        <Link key={name} href={url} target={name !== "Mail" ? "_blank" : undefined}>
          <Image
            src={imageSources[name] || ""}
            alt={`Icône de l'application ${name}`}
            width={25}
            height={25}
          />{" "}
        </Link>
      ))}
    </div>
  );
}
