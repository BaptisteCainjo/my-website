import Image from "next/image";
import Link from "next/link";
import { isDesktop, isMobileOnly } from "react-device-detect";
import { useEffect, useState } from "react";

import NavBarStyle from "./NavBar.module.scss";
import Logo from "@/assets/svg/logos/logo.svg";
import Menu from "@/assets/svg/logos/menu.svg";

interface NavBarItem {
  id: number;
  title: string;
}

type NavBarProps = {
  content: NavBarItem[];
};

export default function NavBar({ content }: NavBarProps) {
  const [isMobileView, setIsMobile] = useState(false);
  const [isDesktopView, setIsDesktopView] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileOnly);
    setIsDesktopView(isDesktop);
  }, []);

  return (
    <header className={NavBarStyle.header}>
      <nav>
        <Link href="#">
          <Image src={Logo} alt="Logo personnel" width="78" height="78" />
        </Link>
        {isMobileView && (
          <Image
            src={Menu}
            alt="Icône menu"
            width="18"
            className={NavBarStyle.iconMenu}
          />
        )}

        {isDesktopView && (
          <div className={NavBarStyle.navLink}>
            {content.map(({ id, title }) => (
              <p key={id}>
                <Link href={`#part${id}`}>{title}</Link>
              </p>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
