"use client";
import { useState, useEffect } from "react";
import React from "react";
import TypewriterEffect from "../components/terminal/typewriter";
import Link from "next/link";
// import Image from "next/image";
import Card from "../components/card";
import Terminal from "../components/terminal/page";
import About from "../components/terminal/about";
import FAQs from "../components/terminal/faqs";
import Prizepool from "../components/terminal/prizepool";
import Tracks from "../components/terminal/tracks";
import Timeline from "../components/terminal/timeline";
import Sponsors from "../components/terminal/sponsors";
import Portal from "../components/terminal/portal";
import { IoMdClose } from "react-icons/io";
import Router, { useRouter } from "next/router";
import useGlitchStore ,{
  useCloseStore,
  useTerminalStore,
  useSelectedStore,
  
} from "@/store/store";
import { IoTerminal } from "react-icons/io5";
import { string } from "zod";

const help = [
  '<span class="">User validated and online...</span>',
  '<span class="">[[init]]</span>',
  '<span class="">Retriving command data...</span>',
  '<span class="">[complete]</span>',
  '<span class="">User ip found and indexed:</span>',
  '<span class="">Initiating quantum decryption sequence</span>',
  '<span class="">Syncing neural network interfaces.........</span>',
  '<span class="">Overriding mainframe security protocols</span>',
  '<span class="">Hacking into the mainframe matrix...</span>',
  '<span class="">$User id set to 8y14e9f8</span>',
  '<span class="" font-weight: bold;>----------------------------------------</span>',
      
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>&nbsp;*******&nbsp;&nbsp;&nbsp;********&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;********&nbsp;&nbsp;&nbsp;*******&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;******&nbsp;</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/**////**&nbsp;/**/////&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;**//////&nbsp;&nbsp;&nbsp;**/////**&nbsp;&nbsp;&nbsp;**////**</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//**&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/*******&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/*********/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**////&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;**&nbsp;&nbsp;////////**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//****&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/*******&nbsp;&nbsp;/********&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;********&nbsp;&nbsp;//*******&nbsp;&nbsp;&nbsp;//******&nbsp;</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>///////&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;///////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//////&nbsp;&nbsp;</p>",
    
      '<span class="" font-weight: bold;>----------------------------------------</span>',
  '<span class="">Disrupting network protocols with raw socket manipulation...</span>',
  '<span class="">Executing stealth maneuvers with bitwise masking...</span>',
  '<span class="">Loading Welcome............</span>',
  
      
    
  "<br>",
];

export default function Home() {
  const router = useRouter();
  const { activeCard, setActiveCard } = useCloseStore();
  const { showTerminal, setShowTerminal } = useTerminalStore();
  const { selectedComponent, setSelectedComponent } = useSelectedStore();
  const { showGlitch, setGlitch } = useGlitchStore();

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal);
  };
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

  type CardKey =
    | "About"
    | "FAQs"
    | "Prizepool"
    | "Tracks"
    | "Timeline"
    | "Sponsors"
    | "Portal";

  const cardComponents: {
    [K in CardKey]: () => JSX.Element;
  } = {
    About,
    FAQs,
    Prizepool,
    Tracks,
    Timeline,
    Sponsors,
    Portal,
  };

  // const [activeCard, setActiveCard] = React.useState<CardKey | "">("");

  const handleClick = (cardName: string) => {
    if (activeCard.includes(cardName)) {
      setSelectedComponent(cardName);
    } else {
      const updatedActiveCard: string[] = [...activeCard, cardName];
      setActiveCard(updatedActiveCard);
      setSelectedComponent(cardName);
    }
  };

  const handleTypingComplete = () => {
    setTypingCompleted(true);
  };

  const [dynamicHeight, setDynamicHeight] = useState("h-[900px]");

  // Effect hook to update height on mount and window resize
  useEffect(() => {
    setGlitch(false);
    function updateHeight() {
      if (window.innerHeight < 800) {
        setDynamicHeight("h-[600px]");
      } else if (window.innerHeight < 1021 && window.innerHeight > 800) {
        setDynamicHeight("h-[720px]");
      } else {
        setDynamicHeight("h-[900px]");
      }
    }

    // Update height on mount
    updateHeight();

    // Add event listener for window resize
    window.addEventListener("resize", updateHeight);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const SelectedComponent = selectedComponent
    ? cardComponents[selectedComponent as CardKey]
    : null;
  return (
    <main className="h-fit min-h-screen bg-[#232323] font-diatype md:text-[13.3px] md:leading-[13.5px]">
      {typeof window === "undefined" || !typingCompleted ? (
        <div className="pl-3 font-diatype md:text-[13.3px] md:leading-[13.5px]">
          <TypewriterEffect
            textLines={help}
            onTypingComplete={handleTypingComplete}
          />
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            <div
              style={{
                backgroundImage: `url('/Topborder.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
                height: "4vh",
              }}
            >
              {!showTerminal ? (
                <button
                  onClick={() => toggleTerminal()}
                  className="absolute left-0 z-50 flex h-[4vh] w-[4vh] items-center justify-center bg-[#757575] hover:cursor-pointer hover:bg-[#606060] sm:hidden"
                >
                  <IoTerminal className="text-lg font-bold" />
                </button>
              ) : (
                <></>
              )}
              <Link href="/">
                <button className="absolute right-0 z-50 flex h-[4vh] w-[4vh] items-center justify-center bg-[#757575] hover:cursor-pointer hover:bg-[#606060]">
                  <IoMdClose className="text-lg font-bold" />
                </button>
              </Link>
            </div>
            <div className="flex flex-col-reverse md:flex-row ">
              {showTerminal ? (
                <div className="fixed bottom-0 z-50 bg-white md:relative md:min-h-[96vh] md:w-[20vw]">
                  <Terminal />
                </div>
              ) : (
                <></>
              )}

              <div className="flex  flex-col">
                <div className="z-10 hidden h-min md:flex">
                  {/* <div
                    className="flex w-[120px] cursor-pointer items-center justify-center border-r-2 border-[#000000] bg-[#d2d1d1] py-1 text-xs font-semibold"
                    onClick={() => {
                      const index = activeCard.indexOf("DEVSOC 24");
                      if (index !== -1) {
                        const updatedActiveCard = [...activeCard];
                        updatedActiveCard.splice(index, 1);
                        setActiveCard(updatedActiveCard);
                      } else {
                        setActiveCard(["DEVSOC 24", ...activeCard]);
                      }
                    }}
                  >
                    DEVSOC 24
                  </div> */}
                  <div className="flex flex-wrap">
                    {activeCard.map((card, index) => (
                      <div
                        className="flex flex-row py-2 items-center justify-center border-r-2 border-[#000000] bg-[#d2d1d1]"
                        key={index}
                      >
                        <div
                          className={`flex h-full w-[120px] cursor-default items-center justify-center border-[#000000] text-xs font-semibold`}
                          onClick={() => {
                            setSelectedComponent(card);
                            card === "DEVSOC 2024" &&
                              setSelectedComponent(null);
                          }}
                        >
                          {card}
                        </div>
                        <button
                          onClick={() => {
                            setActiveCard(activeCard.filter((c) => c !== card));
                            setSelectedComponent(null);
                          }}
                        >
                          {card !== "DEVSOC 2024" && (
                            <IoMdClose className="text-sm font-bold" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mb-8  ${showTerminal ? "" : "w-full"} gap-6`}>
                  {SelectedComponent ? (
                    <SelectedComponent />
                  ) : (
                    <div className="flex flex-wrap items-stretch md:justify-start ">
                      {cardTypes.map((card, index) => (
                        <div
                          className="mx-4 flex items-center justify-center md:justify-start"
                          key={index}
                        >
                          <Card
                            card={card}
                            cardImage={cardImage[index] ?? "hello"}
                            onClick={() => handleClick(card as CardKey)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
            />
          </div>
        </>
      )}
    </main>
  );
}
