import Link from "next/link.js";
import { useState, useEffect, MouseEventHandler } from "react";
import { isDesktop } from "react-device-detect";

import NavBtnStyle from "./NavBtn.module.scss";

type NavBtnProps = {
  content: Array<{ id: number; title: string }>;
};

export default function NavBtn({ content }: NavBtnProps) {
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [contentBtn, setContentBtn] = useState(content);
  const [active, setActive] = useState(1);

  useEffect(() => {
    setIsDesktopView(isDesktop);

    let previousActive = active;

    const handleScroll = () => {
      const scrollPosition = window.scrollY/0.5;
      const activeSection = contentBtn.find(({ id }) => {
        const section = document.getElementById(`part${id}`);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          return (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });

      if (activeSection && activeSection.id !== previousActive) {
        setActive(activeSection.id);
        previousActive = activeSection.id;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [contentBtn, active]);

  const handleClickNavBtn: MouseEventHandler<HTMLAnchorElement> = (e) => {
    const id = Number(e.currentTarget.href.split("#")[1].slice(-1));
    setActive(id);
  };

  return (
    <>
      {isDesktopView && (
        <nav className={NavBtnStyle.navigation}>
          {contentBtn.map(({ id }) => (
            <Link
              key={id}
              href={`${id === 0 ? "#" : `#part${id}`}`}
              onClick={handleClickNavBtn}
              className={id === active ? NavBtnStyle.active : ""}
            ></Link>
          ))}
        </nav>
      )}
    </>
  );
}
