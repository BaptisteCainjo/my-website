"use client";

import Image from "next/image.js";

import BtnUpStyle from "./BtnUp.module.scss";
import BtnUpIcon from "@/assets/svg/icons/arrow-up.svg";
import { useEffect, useState } from "react";
import Link from "next/link.js";

export default function BtnUp() {
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScroll(scrollTop > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hasScroll ? (
    <Link href="#" className={BtnUpStyle["btn-up"]}>
      <Image src={BtnUpIcon} alt="Icône pour remonter en haut de la page" />
    </Link>
  ) : null;
}
