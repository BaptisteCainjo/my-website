import React from 'react'
import SquareInfoStyle from './SquareInfo.module.scss';

type SquareInfoProps = {
  emoji: string;
  strongText: string;
  basicText: string;
  priority: number;
};

export default function SquareInfo({emoji, strongText, basicText, priority}: SquareInfoProps) {
  return (
    <div className={SquareInfoStyle["square-info"]}>
      <p>{emoji}</p>
      <p>{strongText} {basicText}</p>
    </div>
  )
}
