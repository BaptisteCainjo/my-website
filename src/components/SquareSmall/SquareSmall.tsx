import Link from "next/link.js";
import SquareSmallStyle from "./SquareSmall.module.scss";

interface SquareSmallProps {
  text: string;
  link: string;
}

export default function SquareInfo({ text, link }: SquareSmallProps) {
  const squareClass = `${SquareSmallStyle["square-small"]} ${
    text === "Blog" ? SquareSmallStyle["blog"] : ""
  }`;

  return (
    <>
      {link.includes("http") ? (
        <a
          href={link}
          className={squareClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <Link className={squareClass} href={link}>
          {text}
        </Link>
      )}
    </>
  );
}
