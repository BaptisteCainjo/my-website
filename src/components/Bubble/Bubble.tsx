import { useEffect, useState } from "react";

import BubbleStyle from "./Bubble.module.scss";

interface BubbleProps {
  size: number;
  top: number;
  left: number;
  duration: number;
  deg: number;
  endTop: number;
  endLeft: number;
  midTop: number;
  midLeft: number;
}

export default function Bubble() {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: BubbleProps[] = [];
      for (let i = 0; i < 3; i++) {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        newBubbles.push({
          size: Math.random() * 50 + 5,
          top: top,
          left: left,
          duration: Math.random() * 100 + 100,
          deg: Math.random() * 360,
          endTop: Math.random() * 100,
          endLeft: Math.random() * 100,
          midTop: Math.random() * 100,
          midLeft: Math.random() * 100,
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className={BubbleStyle.bubbleContainer}>
      {bubbles.map((bubble, index) => (
        <div
          className={BubbleStyle.bubble}
          key={index}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            background: `linear-gradient(${bubble.deg}deg, #b9bdc7, #b9bdc700)`,
            animation: `moveBubble${index} ${bubble.duration}s ease-in-out infinite`,
            rotate: `${bubble.deg}deg`,
          }}
        ></div>
      ))}

      <style>
        {bubbles.map(
          (bubble, index) => `
          @keyframes moveBubble${index} {
            0% {
              top: ${bubble.top}%;
              left: ${bubble.left}%;  
            }
            25% {
              top: ${bubble.midTop}%;
              left: ${bubble.midLeft}%;
            }
            50% {
              top: ${bubble.endTop}%;
              left: ${bubble.endLeft}%;
            }
            75% {
              top: ${bubble.midTop}%;
              left: ${bubble.midLeft}%;
            }
            100% {
              top: ${bubble.top}%;
              left: ${bubble.left}%;
            }
          }
        `
        )}
      </style>
    </div>
  );
};