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
      className={`h-fit p-2 font-diatype ${bg} mb-5 mt-5 flex items-stretch justify-center border-2 border-[#0d0d0d] md:flex-col`}
      onMouseEnter={() => {
        setBg("bg-[#0C00FF]"), setBtBg("bg-black  text-white");
      }}
      onMouseLeave={() => {
        setBg("bg-[#757575]"), setBtBg("bg-white");
      }}
    >
      <div className="flex items-center justify-center border-2 border-[#0d0d0d] font-diatype mx-1 ">
        <Image
          src={`/${cardImage}`}
          alt="Description of the image"
          width={500}
          height={100}
          className="h-[100%] w-[100%] bg-[#000000] object-cover"
        />
      </div>
      <div className=" flex h-full w-full flex-col font-diatype text-sm ">
        <fieldset className="md:mt-2 mt-0 h-full border-2 border-[#0d0d0d] px-5 md:py-2 py-4">
          <legend className={`${bg} text-xs`}>[{card}]</legend>
          <span className="text-[#000000]">scanning...</span>
          <div className="max-w-[80%]">
            <ProgressBar
              redProgress={redProgress}
              greenProgress={greenProgress}
              blueProgress={blueProgress}
            />
            <span>...</span>
          </div>
          <button
            onClick={onClick}
            className={`mt- ${butBg} md:h-[40px] md:w-[80px] h-[25px] w-[60px] text-[12px] border-[1px] border-[#000000]`}
          >
            Select
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Card;
