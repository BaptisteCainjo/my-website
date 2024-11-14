"use client";

import Image from "next/image";
import Link from "next/link";
import { isDesktop } from "react-device-detect";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import NavBarStyle from "./NavBar.module.scss";
import Logo from "@/assets/svg/logos/logo.svg";

interface NavBarProps {
  content?: Array<{ id: number; title: string }>;
}

export default function NavBar({ content }: NavBarProps) {
  const [isDesktopView, setIsDesktopView] = useState(false);
  const mainPage = usePathname() === "/";

  useEffect(() => {
    setIsDesktopView(isDesktop);
  }, []);

  return (
    <header className={NavBarStyle.header}>
      <nav>
        <Link href={mainPage ? "#part1" : "/"}>
          <Image
            src={Logo}
            alt="Logo personnel"
            width="78"
            height="78"
            priority
          />
        </Link>

        {isDesktopView && mainPage && (
          <div className={NavBarStyle["nav-link"]}>
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
