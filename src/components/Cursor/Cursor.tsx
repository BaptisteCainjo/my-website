"use client";

import { useEffect, useState } from "react";
import CursorStyle from "./Cursor.module.scss";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <div
      className={CursorStyle.cursor}
      style={{ top: position.y, left: position.x }}
    ></div>
  );
}
