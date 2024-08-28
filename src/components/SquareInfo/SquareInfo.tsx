import React, { useState, useEffect } from "react";
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
//  const [transitionClass, setTransionClass] = useState(true)

//  useEffect(() => {
//    const intervalId = setInterval(() => {
//      setTransionClass((prev) => !prev);
//    }, 3000);
//
//  return () => clearInterval(intervalId);
//  }, []);

  return (
    <div className={SquareInfoStyle["square-info"]}>
      <p className={SquareInfoStyle.emoji}>{emoji}</p>
      {priority === 1 ? (
        <div>
          <p>{basicText}</p>
          <h1>{strongText}</h1>
        </div>
      ) : (
        <p><span className={`${SquareInfoStyle.important}`}>{strongText}</span> {basicText}</p>
      )}
    </div>
  );
}
