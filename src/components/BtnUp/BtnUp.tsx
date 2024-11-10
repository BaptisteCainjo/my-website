import Link from "next/link.js";
import Image from "next/image.js";
import React from "react";

import BtnUpStyle from "./BtnUp.module.scss";
import BtnUpIcon from "@/assets/svg/icons/arrow-up.svg";

export default function BtnUp() {
  return (
    <Link href="#" className={BtnUpStyle["btn-up"]}>
      <Image src={BtnUpIcon} alt="Logo fleche vers le haut" />
    </Link>
  );
}
