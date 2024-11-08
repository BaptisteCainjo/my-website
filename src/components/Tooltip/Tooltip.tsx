import TooltipStyle from "./Tooltip.module.scss";
import BtnNetworkStyle from "../BtnNetwork/BtnNetwork.module.scss";
import ReactMailStyle from "../RectMail/RectMail.module.scss";
import CircleSoftwareStyle from "../CircleSoftware/CircleSoftware.module.scss";

interface TooltipProps {
  name: string;
  position?: string;
}

export default function Tooltip({ name, position }: TooltipProps) {
  return (
    <span className={`${TooltipStyle.tooltip}${position === "vertical" ? ` ${TooltipStyle.vertical}` : ''} ${BtnNetworkStyle.tooltip} ${ReactMailStyle.tooltip} ${CircleSoftwareStyle.tooltip}`}>
      {name}
    </span>
  );
}