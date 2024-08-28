import React, { useState } from "react";
import BtnFilterStyle from "./BtnFilter.module.scss";

type BtnFilterProps = {
  names: string[];
  onFilterClick: (name: string) => void;
};

export default function BtnFilter({ names, onFilterClick }: BtnFilterProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickClass = (index: number) => {
    setActiveIndex(index);
    onFilterClick(names[index]);
  };
  return (
    <ul className={BtnFilterStyle["btn-filter"]}>
      {names.map((name, index) => (
        <li
          key={index}
          onClick={() => handleClickClass(index)}
          className={activeIndex === index ? BtnFilterStyle.active : ""}
        >
          <a>{name}</a>
        </li>
      ))}
    </ul>
  );
}
