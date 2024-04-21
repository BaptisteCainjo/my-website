import Link from "next/link.js";
import { useState, useEffect } from "react";
import { isDesktop } from "react-device-detect";

import NavBtnStyle from "./NavBtn.module.scss";

type NavBtnProps = {
  content: Array<{ id: number; title: string }>;
};

export default function NavBtn({ content }: NavBtnProps) {
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [contentBtn, setContentBtn] = useState(content);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    setContentBtn([{ id: 0, title: "" }, ...content]);
  }, [content]);


  useEffect(() => {
    setIsDesktopView(isDesktop);
  }, []);

  return (
    <>
      {isDesktopView && (
        <nav className={NavBtnStyle.navigation}>
          {contentBtn.map(({ id }) => (
            <Link
              key={id}
              href={`${id === 0 ? "#" : `#part${id}`}`}
              className={NavBtnStyle.active}
            ></Link>
          ))}
        </nav>
      )}
    </>
  );
}
