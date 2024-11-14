import Link from "next/link.js";
import SquareSmallStyle from "./SquareSmall.module.scss";

interface SquareSmallProps {
  text: string;
  link: string;
}

export default function SquareInfo({ text, link }: SquareSmallProps) {
  return (
    <>
      {link.includes("http") ? (
        <a href={link} className={SquareSmallStyle["square-small"]}>
          {text}
        </a>
      ) : (
        <Link className={SquareSmallStyle["square-small"]} href={link}>
          {text}
        </Link>
      )}
    </>
  );
}
