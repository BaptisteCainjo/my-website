import Image from "next/image.js";
import Link from "next/link.js";

import FooterStyle from "./Footer.module.scss";
import Logo from "@/assets/svg/logos/logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={FooterStyle.container}>
      <Link href="#part1" className={FooterStyle.top}>
        <Image src={Logo} alt="Logo personnel" height={40} width={40} />
      </Link>
      <div>
        <p>© 2022 - {currentYear} Baptiste Cainjo</p>
        <Link href="/legales">Mentions légales</Link>
      </div>
    </footer>
  );
}
