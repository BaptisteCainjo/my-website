import Image from "next/image.js";
import Link from "next/link.js";

import NavbarStyle from "./Navbar.module.scss";
import Logo from "@/assets/svg/logos/logo.svg";
import Menu from "@/assets/svg/logos/menu.svg"


export default function Navbar() {
  return (
    <header className={NavbarStyle.header}>
      <nav>
        <Link href="#">
            <Image src={Logo} alt="Logo personnel" width="78" height="78"/>
        </Link>
        <Image src={Menu} alt="Icône menu" width="18" className="iconMenu"/>

        {/* <div>
          <div>
            <p>
              <Link href="#part2">À propos</Link>
            </p>
            <p>
              <Link href="#part3">Portfolio</Link>
            </p>
            <p>
              <Link href="#part4">Compétences</Link>
            </p>
            <p>
              <Link href="#part5">Contact</Link>
            </p>
          </div>
        </div> */}
      </nav>
    </header>
  );
}
