"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ProgressBar from "./progressbar";

interface CardProps {
  card: string;
  cardImage: string;
  onClick: () => void;
}

const Card = ({ card, cardImage, onClick }: CardProps) => {
  const [bg, setBg] = useState("bg-[#757575]");
  const [butBg, setBtBg] = useState("bg-white");
  const [redProgress, setRedProgress] = useState(0);
  const [greenProgress, setGreenProgress] = useState(0);
  const [blueProgress, setBlueProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (redProgress < 40) {
        setRedProgress(redProgress + 0.5);
      } else if (greenProgress < 40) {
        setGreenProgress(greenProgress + 1);
      } else if (blueProgress < 20) {
        setBlueProgress(blueProgress + 1);
      } else {
        setRedProgress(0);
        setGreenProgress(0);
        setBlueProgress(0);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [redProgress, greenProgress, blueProgress]);
  return (
    <div
      className={`font-diatype md:h-[401px]  md:w-[240px] ${bg} mb-5 flex h-[240px] w-[90%] max-w-[400px] items-center justify-center border-2 border-[#0d0d0d] md:flex-col`}
      onMouseEnter={() => {
        setBg("bg-[#3134cd]"), setBtBg("bg-black  text-white");
      }}
      onMouseLeave={() => {
        setBg("bg-[#757575]"), setBtBg("bg-white");
      }}
    >
      <div className="font-diatype flex h-[89%] w-[53%] items-center justify-center border-2 border-[#0d0d0d] bg-[#1c1c1c] md:h-[56%] md:w-[92%]">
        <Image
          src={`/${cardImage}`}
          alt="Description of the image"
          width={220}
          height={100}
        />
      </div>
      <div className="font-diatype relative ml-2 flex h-[89%] w-[38%] flex-col border-2 border-[#1c1c1c] text-sm md:ml-0 md:mt-2 md:h-[38%] md:w-[93%]">
        <div className={`absolute left-1 top-[-9px] ${bg} text-xs`}>
          [{card}]
        </div>
        <span className="ml-2 mt-1 text-[#000000]">scanning...</span>
        <div className="ml-3 max-w-[80%]">
          <ProgressBar
            redProgress={redProgress}
            greenProgress={greenProgress}
            blueProgress={blueProgress}
          />
          <span>...</span>
        </div>
        <button
          onClick={onClick}
          className={`butt absolute bottom-2 ml-[10px] h-10 w-24 md:mt-[100px] ${butBg} border-[1px] border-[#000000]`}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Card;
