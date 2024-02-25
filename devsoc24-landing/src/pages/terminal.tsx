"use client"
import { useState } from "react";

// import Image from "next/image";
import Card from "../components/card";
import Terminal from "../components/terminal/page";


export default function Home() {
  const cardTypes = ["About", "Timeline", "Tracks", "Prizepool", "Sponsors", "Portal", "FAQs"]
  const cardImage = ["personabout 2.svg", "Frame 13.svg", "Frame 13 2.svg", "Frame 13 3.svg", "Frame 13 4.svg", "Frame 13 5.svg","Frame 13 6.svg"]

const [activeCard, setActiveCard] = useState<string[]>(["DEVSOC 2024"]); 

const handleClick = (cardName: string) => { 
  setActiveCard(currentActiveCard => {
    if (currentActiveCard.includes(cardName)) {
      console.log(activeCard)
      return currentActiveCard.filter(card => card !== cardName);
    } else {
      console.log(activeCard)
      return [...currentActiveCard, cardName];
    }
  });
};
  return (
    <main className="font-diatype">
      <div className="w-full bg-[#494848] h-[2.8%] fixed font-diatype flex justify-center z-30">
        <div style={{
        backgroundImage: `url('/Topborder.svg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        width: '100%', 
        height: '100%', 
        
      }}></div>

      {/* <Image src="/Topborder.svg"
        alt="Description of the image"
        width={2200} 
        height={200} 
        className=""
      /> */}
      </div>
    <div className="flex md:flex-row flex-col-reverse justify-between items-start h-[96%] ">
        <div className="md:fixed fixed md:top-0 bottom-0  md:w-[22%] md:h-[100%] md:pt-[1.3%] w-[100%] h-[250px] z-10 overflow-y-auto">
          <Terminal/>
        </div>
        <div className="md:pl-[25%] md:fixed overflow-y-auto w-full bg-[#232323] md:h-[100%] pr-[20px]  h-[900px]">
          <div className="mt-[1.3%] md:flex fixed hidden bg-[#d2d1d1] top-0  left-[22%] h-[20px] z-10">
            {activeCard.map((card)=>{
              return (

                <div key={card} className="border-r-2 border-[#000000] w-[140px] h-full  flex justify-center items-center text-xs font-semibold">{card}</div>
              )
            })}
          </div>
          <div className="flex justify-center w-full h-full ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 pt-[65px] place-items-center ">
              {cardTypes.map((card, index) => (
                <Card key={card} card={card} cardImage={cardImage[index]??"hello"} onClick={() => handleClick(card)} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#494848] h-[2.8%] fixed bottom-0 z-40 font-diatype flex justify-center">
        <div style={{
        backgroundImage: `url('/Topborder.svg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        width: '100%', 
        height: '100%',
      }}></div>

      {/* <Image src="/Topborder.svg"
        alt="Description of the image"
        width={2200} 
        height={200} 
        className=""
      /> */}
      </div>
    </main>
  );
}
