"use client";

import Image from "next/image";
import Link from "next/link";
import { isDesktop, isMobileOnly } from "react-device-detect";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import NavBarStyle from "./NavBar.module.scss";
import Logo from "@/assets/svg/logos/logo.svg";
import Menu from "@/assets/svg/logos/menu.svg";

interface NavBarProps {
  content?: Array<{ id: number; title: string }>;
}

export default function NavBar({ content }: NavBarProps) {
  const [isMobileView, setIsMobile] = useState(false);
  const [isDesktopView, setIsDesktopView] = useState(false);
  const mainPage = usePathname() === "/";

  useEffect(() => {
    setIsMobile(isMobileOnly);
    setIsDesktopView(isDesktop);
  }, []);

  return (
    <header className={NavBarStyle.header}>
      <nav>
        <Link href={mainPage ? "#part1" : "/"}>
          <Image src={Logo} alt="Logo personnel" width="78" height="78" />
        </Link>

        {(isMobileView && mainPage) && (
          <Image
            src={Menu}
            alt="Icône menu"
            width="18"
            className={NavBarStyle.iconMenu}
          />
        )}

        {(isDesktopView && mainPage) && (
          <div className={NavBarStyle.navLink}>
            {content?.map(({ id, title }) => (
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
