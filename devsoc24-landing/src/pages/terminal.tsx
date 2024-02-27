"use client";
import { useState } from "react";
import React from "react";
import TypewriterEffect from "../components/terminal/typewriter";

// import Image from "next/image";
import Card from "../components/card";
import Terminal from "../components/terminal/page";
import About from "../components/terminal/about";
import FAQs from "../components/terminal/faqs";
import Prizepool from "../components/terminal/prizepool";
import Tracks from "../components/terminal/tracks";
import Timeline from "../components/terminal/timeline";
import { IoMdClose } from "react-icons/io";

const help = [
  '<span class="">Initiating quantum decryption sequence...</span>',
  '<span class="">Syncing neural network interfaces...</span>',
  '<span class="">Overriding mainframe security protocols...</span>',
  '<span class="">Hacking into the mainframe matrix...</span>',
  '<span class="">Crunching binary data for analysis...</span>',
  '<span class="">Escaping digital mazes through recursive algorithms...</span>',
  '<span class="">Manipulating data streams with bitwise operations...</span>',
  '<span class="">Generating cryptographic keys with prime number algorithms...</span>',
  '<span class="">Unleashing virtual chaos through recursive function calls...</span>',
  '<span class="">Navigating encrypted tunnels with pointer arithmetic...</span>',
  '<span class="">Triggering backdoor access with exploit vectors...</span>',
  '<span class="">Conducting remote exploits using buffer overflow techniques...</span>',
  '<span class="">Compiling rogue scripts with embedded assembly code...</span>',
  '<span class="">Disrupting network protocols with raw socket manipulation...</span>',
  '<span class="">Executing stealth maneuvers with bitwise masking...</span>',
  '<span class="">Initiating cybernetic transcendence through kernel-level exploits...</span>',
  '<span class="">Unraveling encrypted matrices with custom decryption algorithms...</span>',
  '<span class="">Cracking cryptographic puzzles using brute-force techniques...</span>',
  '<span class="">Bypassing biometric authentication through spoofing techniques...</span>',
  '<span class="">Unleashing algorithmic havoc with optimized sorting algorithms...</span>',
  "<br>",
];

export default function Home() {
  const cardTypes = [
    "About",
    "Timeline",
    "Tracks",
    "Prizepool",
    "Sponsors",
    "Portal",
    "FAQs",
  ];
  const cardImage = [
    "personabout 2.svg",
    "Frame 13.svg",
    "Frame 13 2.svg",
    "Frame 13 3.svg",
    "Frame 13 4.svg",
    "Frame 13 5.svg",
    "Frame 13 6.svg",
  ];

  const [typingCompleted, setTypingCompleted] = useState(false);

  type CardKey = "About" | "FAQs" | "Prizepool" | "Tracks" | "Timeline";

  const cardComponents: {
    [K in CardKey]: () => JSX.Element;
  } = {
    About,
    FAQs,
    Prizepool,
    Tracks,
    Timeline,
  };

  const [activeCard, setActiveCard] = React.useState<CardKey | "">("");

  const handleClick = (cardName: CardKey) => {
    setActiveCard(cardName);
  };
  const handleTypingComplete = () => {
    setTypingCompleted(true);
  };

  const SelectedComponent = activeCard ? cardComponents[activeCard] : null;
  return (
    <main className="h-[100vh] bg-[#232323] font-diatype md:text-[13.3px] md:leading-[13.5px]">
      {!typingCompleted ? (
        <div className="pl-3 font-diatype md:text-[13.3px] md:leading-[13.5px]">
          <TypewriterEffect
            textLines={help}
            onTypingComplete={handleTypingComplete}
          />
        </div>
      ) : (
        <>
          <div className="content-after-typing fixed z-30 flex h-[2.4%] w-full justify-center items-center bg-[#494848] font-diatype">
            <div
              style={{
                backgroundImage: `url('/Topborder.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
              
            ><button onClick={() => setActiveCard("")} className="bg-[#757575]">
                      <IoMdClose className="text-sm font-bold" />
                    </button></div>

            {/* <Image src="/Topborder.svg"
        alt="Description of the image"
        width={2200} 
        height={200} 
        className=""
      /> */}
          </div>
          <div className="flex h-[%] flex-col-reverse items-start justify-between md:flex-row ">
            <div className="fixed bottom-0 z-10 h-[250px]  w-[100%] overflow-y-auto md:fixed md:top-0 md:h-[100%] md:w-[22%] md:pt-[1.14%]">
              <Terminal />
            </div>
            <div className="h-[900px] w-full overflow-y-auto bg-[#232323]  md:fixed md:h-[100%]  md:pl-[25%]  ">
              <div className="fixed left-[22%] top-0 z-10 mt-[1.14%] hidden h-[20px] items-center  justify-center bg-[#d2d1d1] md:flex">
                <div className="flex h-full w-[120px] items-center justify-center border-r-2 border-[#000000] text-xs font-semibold ">
                  DEVSOC 24
                </div>
                {activeCard && (
                  <>
                    <div className="border- flex h-full w-[120px] items-center justify-center border-[#000000] text-xs font-semibold ">
                      {activeCard}
                    </div>
                    <button onClick={() => setActiveCard("")}>
                      <IoMdClose className="text-sm font-bold" />
                    </button>
                  </>
                )}
              </div>
              <div className="flex h-[100vh] w-[100%] justify-center ">
                {SelectedComponent ? (
                  <SelectedComponent />
                ) : (
                  <div className="grid grid-cols-1 place-items-center gap-x-4 gap-y-8 pt-[65px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 bg-gray h-full w-full overflow-y-auto pb-10">
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
          <div className="fixed bottom-0 z-40 flex h-[2.2%] w-full justify-center bg-[#494848] font-diatype">
            <div
              style={{
                backgroundImage: `url('/Frame 7.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            ></div>

            {/* <Image src="/Topborder.svg"
        alt="Description of the image"
        width={2200} 
        height={200} 
        className=""
      /> */}
          </div>
        </>
      )}
    </main>
  );
}
