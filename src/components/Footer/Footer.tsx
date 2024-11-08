import Image from "next/image.js";
import FooterStyle from "./Footer.module.scss";
import Logo from "@/assets/svg/logos/logo.svg";
import Link from "next/link.js";

export default function Footer() {
  return (
      <footer className={FooterStyle.container}>
        <Link href="#part1" className={FooterStyle.top}><Image src={Logo} alt="Logo personnel" height={40} width={40}/></Link>
        <div>
          <p>© 2022 - 2024 Baptiste Cainjo</p>
          <p><Link href="/legales">Mentions légales</Link></p>
        </div>
    </footer>
  );
}
