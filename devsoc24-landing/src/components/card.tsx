"use client"


import Image from "next/image";
import { useState, useEffect } from "react";
import ProgressBar from "./progressbar";

interface CardProps{
    card:string;
    cardImage:string
    onClick: () => void;
}

const Card = ({card, cardImage, onClick}:CardProps) => {
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
        <div className={ `font-diatype md:w-[240px]  md:h-[401px] ${bg} flex md:flex-col w-[90%] max-w-[400px] h-[240px] justify-center items-center border-2 border-[#0d0d0d] mb-5`}
            onMouseEnter={() => {setBg("bg-[#3134cd]"),setBtBg("bg-black  text-white")}}
            onMouseLeave={() => {setBg("bg-[#757575]"),setBtBg("bg-white")}}
        >
            <div className="font-diatype bg-[#1c1c1c] md:w-[92%] h-[89%] w-[53%] md:h-[56%] flex justify-center items-center border-[#0d0d0d] border-2">

            <Image
            src={`/${cardImage}`}
            alt="Description of the image"
            width={220} 
            height={100} 
            />
            </div>
            <div className="font-diatype md:mt-2 md:w-[93%] md:h-[38%] h-[89%] w-[38%] border-2 border-[#1c1c1c] relative flex flex-col text-sm md:ml-0 ml-2">
                <div className={`absolute top-[-9px] left-1 ${bg} text-xs`}>[{card}]</div>
                <span className="ml-2 mt-1 text-[#000000]">scanning...</span>
                <div className="max-w-[80%] ml-3">

                <ProgressBar  redProgress={redProgress}
        greenProgress={greenProgress}
        blueProgress={blueProgress}/>
        <span>...</span>
                </div>
                <button onClick={onClick} className={`butt absolute ml-[10px] w-24 md:mt-[100px] bottom-2 h-10 ${butBg} border-[1px] border-[#000000]`}
>Select</button>

            </div>
        </div>
        
     );
}
 
export default Card;

