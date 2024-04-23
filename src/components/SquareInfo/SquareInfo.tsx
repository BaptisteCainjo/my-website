import React from "react";
import SquareInfoStyle from "./SquareInfo.module.scss";

type SquareInfoProps = {
  emoji: string;
  strongText: string;
  basicText: string;
  priority: number;
};

export default function SquareInfo({
  emoji,
  strongText,
  basicText,
  priority,
}: SquareInfoProps) {
  return (
    <div className={SquareInfoStyle["square-info"]}>
      <p className={SquareInfoStyle.emoji}>{emoji}</p>
      {priority === 1 ? (
        <div>
          <p>{basicText}</p>
          <h1>{strongText}</h1>
        </div>
      ) : (
        <p><span className={SquareInfoStyle.important}>{strongText}</span> {basicText}</p>
      )}
    </div>
  );
}

{
  /* <p>{priority === 1 ? basicText : strongText}</p> */
}
{
  /* <p>{priority === 1 ? strongText : basicText}</p> */
}
