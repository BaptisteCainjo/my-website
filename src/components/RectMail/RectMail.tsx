import RectMailStyle from "./RectMail.module.scss";
import Tooltip from "../Tooltip/Tooltip";
import { EMAIL } from "@/utils/constants";

export default function RectMail() {
  const tooltipText = "Envoyez-moi un mail";

  return (
    <a href={`mailto:${EMAIL}`} className={RectMailStyle.rect}>
      <p>{EMAIL}</p>
      <Tooltip name={tooltipText} />
    </a>
  );
}
