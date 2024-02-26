"use client"
import { useState } from "react";
import React from 'react';

// import Image from "next/image";
import Card from "../components/card";
import Terminal from "../components/terminal/page";
import About from "../components/terminal/about";
import FAQs from "../components/terminal/faqs";
import Prizepool from "../components/terminal/prizepool";
import Tracks from "../components/terminal/tracks";
import Timeline from "../components/terminal/timeline";
import { IoMdClose } from "react-icons/io";


export default function Home() {
  const cardTypes = ["About", "Timeline", "Tracks", "Prizepool", "Sponsors", "Portal", "FAQs"]
  const cardImage = ["personabout 2.svg", "Frame 13.svg", "Frame 13 2.svg", "Frame 13 3.svg", "Frame 13 4.svg", "Frame 13 5.svg","Frame 13 6.svg"]

  type CardKey = 'About' | 'FAQs' | 'Prizepool' | 'Tracks' | 'Timeline';

  const cardComponents: {
    [K in CardKey]: () => JSX.Element;
} = {
    About, 
    FAQs,
    Prizepool,
    Tracks,
    Timeline,
};

const [activeCard, setActiveCard] = React.useState<CardKey | ''>('');



const handleClick = (cardName: CardKey) => {
    setActiveCard(cardName);
};

  const SelectedComponent = activeCard ? cardComponents[activeCard] : null;
  return (
    <main className="font-diatype">
      <div className="w-full bg-[#494848] h-[2.4%] fixed font-diatype flex justify-center z-30">
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
        <div className="md:fixed fixed md:top-0 bottom-0  md:w-[22%] md:h-[100%] md:pt-[1.14%] w-[100%] h-[250px] z-10 overflow-y-auto">
          <Terminal/>
        </div>
        <div className="md:pl-[25%] md:fixed overflow-y-auto w-full bg-[#232323] md:h-[100%] pr-[20px]  h-[900px]">
          <div className="mt-[1.14%] md:flex justify-center items-center fixed hidden bg-[#d2d1d1] top-0  left-[22%] h-[20px] z-10">
            <div className="border-r-2 border-[#000000] w-[120px] h-full flex justify-center items-center text-xs font-semibold">DEVSOC 24</div>
            {activeCard && (
              <>
          <div className="border- border-[#000000] w-[120px] h-full flex justify-center items-center text-xs font-semibold">{activeCard}</div><button onClick={() => setActiveCard('')}><IoMdClose className="text-sm font-bold"/></button>
          </>
        )}
          </div>
          <div className="flex justify-center w-full h-full ">
        {SelectedComponent ? (
        <SelectedComponent />
      ): (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 pt-[65px] place-items-center">
            {cardTypes.map((card, index) => (
  <Card 
    key={card} 
    card={card} 
    cardImage={cardImage[index] ?? "hello"} 
    onClick={() => handleClick(card as CardKey)} 
  />
))}
          </div>
        )}
      </div>
        </div>
      </div>
      <div className="w-full bg-[#494848] h-[2.2%] fixed bottom-0 z-40 font-diatype flex justify-center">
        <div style={{
        backgroundImage: `url('/Frame 7.svg')`,
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
