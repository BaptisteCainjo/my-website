import RectMailStyle from "./RectMail.module.scss";
import Tooltip from "../Tooltip/Tooltip";

export default function RectMail() {

  const tooltipText = "Envoyez-moi un mail";

  return (
    <a
      href="mailto:cainjo.baptiste@orange.fr"
      className={RectMailStyle.rect}
    >
      <span>✉️ </span>
      <p>cainjo.baptiste@orange.fr </p>
      <Tooltip name={tooltipText} />
    </a>
  );
}
