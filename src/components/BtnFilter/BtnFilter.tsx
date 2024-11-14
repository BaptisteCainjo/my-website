import { useState } from "react";
import BtnFilterStyle from "./BtnFilter.module.scss";

interface BtnFilterProps {
  names: string[];
  onFilterClick: (name: string) => void;
}

export default function BtnFilter({ names, onFilterClick }: BtnFilterProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickClass = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    e.preventDefault();
    setActiveIndex(index);
    onFilterClick(names[index]);
  };
  return (
    <ul className={BtnFilterStyle["btn-filter"]}>
      {names.map((name, index) => (
        <a
          href=""
          onClick={(e) => handleClickClass(e, index)}
          key={index}
          className={activeIndex === index ? BtnFilterStyle.active : ""}
        >
          <li>{name}</li>
        </a>
      ))}
    </ul>
  );
}
