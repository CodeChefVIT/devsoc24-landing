"use client";
import { Suspense, useEffect } from "react";
import Head from "next/head";
import React from "react";
import Card from "@/components/Card";
import Terminal from "@/components/terminal/Pages/Terminal";
import About from "@/components/terminal/Pages/About";
import FAQs from "@/components/terminal/Pages/FAQs";
import Prizepool from "@/components/terminal/Pages/Prizepool";
import Tracks from "@/components/terminal/Pages/Tracks";
import Timeline from "@/components/terminal/Pages/Timeline";
import Sponsors from "@/components/terminal/Pages/Sponsors";
import Portal from "@/components/terminal/Pages/Portal";
import { IoMdClose } from "react-icons/io";
import { IoTerminal } from "react-icons/io5";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Loading from "./loading";

import useGlitchStore, {
  useCloseStore,
  useTerminalStore,
  useSelectedStore,
  useMobileTerminalStore,
  useType2Store,
} from "@/store/store";
import TypewriterEffect from "@/components/terminal/TypewriterEffect";

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
  '<span class="">Initiating quantum decryption sequence...</span>',
  '<span class="">Syncing neural network interfaces...</span>',
  '<span class="">Overriding mainframe security protocols...</span>',
  '<span class="">Hacking into the mainframe matrix...</span>',
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
  const { selectedComponent, setSelectedComponent } = useSelectedStore();
  const { setGlitch } = useGlitchStore();
  const { size, setSize } = useMobileTerminalStore();
  const { showTerminal, setShowTerminal } = useTerminalStore();
  const { typingCompleted, setTypingCompleted } = useType2Store();

  const handleTypingComplete = () => {
    setTypingCompleted(true);
  };

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal);
  };
  const toggleSize = () => {
    setSize(!size);
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
    "assets/images/PFP/AboutPFP.svg",
    "assets/images/PFP/TimelinePFP.svg",
    "assets/images/PFP/TracksPFP.svg",
    "assets/images/PFP/PrizepoolPFP.svg",
    "assets/images/PFP/SponsorsPFP.svg",
    "assets/images/PFP/PortalPFP.svg",
    "assets/images/PFP/FAQsPFP.svg",
  ];

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

  const handleClick = (cardName: string) => {
    if (activeCard.includes(cardName)) {
      setSelectedComponent(cardName);
    } else {
      const updatedActiveCard: string[] = [...activeCard, cardName];
      setActiveCard(updatedActiveCard);
      setSelectedComponent(cardName);
    }
  };

  useEffect(() => {
    setGlitch(false);
  }, []);

  function handleClose() {
    if (selectedComponent !== "DEVSOC 2024") {
      setActiveCard(activeCard.filter((c) => c !== selectedComponent));
      setSelectedComponent("DEVSOC 2024");
    } else {
      void router.push("/");
    }
  }

  const SelectedComponent = selectedComponent
    ? cardComponents[selectedComponent as CardKey]
    : null;

  return (
    <>
      <Head>
        <title>DEVSOC&apos;24</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>

      <Suspense fallback={<Loading />}>
        {typeof window === "undefined" || !typingCompleted ? (
          <div className="pl-3">
            <TypewriterEffect
              textLines={help}
              onTypingComplete={handleTypingComplete}
            />
          </div>
        ) : (
          <main className="font-diatype relative flex h-screen w-screen flex-col overflow-y-auto overflow-x-hidden bg-[#232323] md:text-[13.3px] md:leading-[13.5px]">
            {!showTerminal ? (
              <button
                onClick={() => toggleTerminal()}
                className="absolute left-0 z-50 flex h-[4vh] w-[4vh] items-center justify-center bg-[#757575] hover:cursor-pointer hover:bg-[#606060]"
              >
                <IoTerminal className="text-lg font-bold" />
              </button>
            ) : (
              <></>
            )}

            <button
              className=" absolute right-0 z-50 flex min-h-[4vh] w-[4vh] items-center justify-center bg-[#757575] hover:cursor-pointer hover:bg-[#606060]"
              onClick={handleClose}
            >
              <IoMdClose className="text-lg font-bold" />
            </button>

            <div
              className="min-h-[4vh] w-screen bg-cover bg-center"
              style={{ backgroundImage: `url('/TopBorder.svg')` }}
            />
            <div className="flex h-full w-screen flex-row">
              {showTerminal ? (
                <div
                  className={`fixed bottom-0 z-50 flex h-fit w-full flex-col lg:relative lg:h-full lg:w-[20vw]`}
                >
                  <div className="flex min-h-[4vh] min-w-full items-center justify-between gap-2 bg-[#4d4d4d] pl-2">
                    <p className="overflow-x-hidden text-sm">
                      devsoc2024@terminal
                    </p>
                    <div className="flex flex-row gap-0">
                      <button
                        className=" right-0 z-50 flex min-h-[4vh] w-[4vh] items-center justify-center bg-[#4d4d4d] hover:cursor-pointer hover:bg-[#606060]"
                        onClick={() => toggleTerminal()}
                      >
                        <IoMdClose className="text-lg font-bold" />
                      </button>
                      <button
                        className=" right-0 z-50 flex min-h-[4vh] w-[4vh] items-center justify-center bg-[#4d4d4d] hover:cursor-pointer hover:bg-[#606060] lg:hidden"
                        onClick={() => toggleSize()}
                      >
                        {!size ? (
                          <FaArrowUp className="text-sm font-bold" />
                        ) : (
                          <FaArrowDown className="text-sm font-bold" />
                        )}
                      </button>
                    </div>
                  </div>
                  <Terminal />
                </div>
              ) : (
                <></>
              )}
              <div className="flex h-full w-full flex-col">
                <div className="flex min-h-[4vh] flex-wrap">
                  {activeCard.map((card, index) => (
                    <div
                      className="flex flex-row items-center justify-center border-l-2 border-black/70 bg-[#d2d1d1]"
                      key={index}
                    >
                      <div
                        className={`flex  w-[120px] cursor-default items-center justify-center  text-xs font-semibold`}
                        onClick={() => {
                          setSelectedComponent(card);
                          card === "DEVSOC 2024" &&
                            setSelectedComponent("DEVSOC 2024");
                        }}
                      >
                        {card}
                      </div>
                      <button
                        onClick={() => {
                          setActiveCard(activeCard.filter((c) => c !== card));
                          setSelectedComponent("DEVSOC 2024");
                        }}
                      >
                        {card !== "DEVSOC 2024" && (
                          <IoMdClose className="text-sm font-bold" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
                <div
                  className={`boundarybox h-full ${showTerminal ? "" : "w-full"} gap-6`}
                >
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
            <div
              className="fixed bottom-0 min-h-[2vh] w-screen bg-cover bg-center"
              style={{ backgroundImage: `url('/BottomBorder.svg')` }}
            />
          </main>
        )}
      </Suspense>
    </>
  );
}
