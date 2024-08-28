import Link from "next/link.js";
import RectMailStyle from "./RectMail.module.scss";

export default function RectMail() {
  return (
    <Link
      href="mailto:contact@baptistecainjo.fr"
      className={RectMailStyle.rect}
    >
      <span>✉️ </span>
      <p>contact@baptistecainjo.fr </p>
    </Link>
  );
}
