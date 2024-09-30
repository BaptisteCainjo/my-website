import React, { useState, useEffect } from "react";
import SquareInfoStyle from "./SquareInfo.module.scss";
import Image from "next/image";

type SquareInfoProps = {
  icon: string;
  strongText: string;
  basicText: string;
  priority: number;
};

export default function SquareInfo({
  icon,
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
      <Image src={icon} alt="icon" width={50} height={50} />
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
