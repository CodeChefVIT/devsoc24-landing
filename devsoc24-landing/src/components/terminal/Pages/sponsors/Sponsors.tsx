import React, { useState } from "react";
import Image from "next/image";
import notepad from "@/assets/images/notepad.svg";
import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Draggable from "react-draggable";
import { useCloseStore, useSelectedStore } from "@/store/store";
import SponsorCard from "./SponsorCard";

export default function Prizepool() {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const { activeCard, setActiveCard } = useCloseStore();
  const { setSelectedComponent } = useSelectedStore();

  const handleMinimize = () => {
    setMinimized(!minimized);
  };

  const handleMaximize = () => {
    setMaximized(!maximized);
  };

  return (
    <div
      className={`relative flex h-full w-full ${maximized ? "" : "pl-[30px] pt-[100px]  md:pl-[60px]"} bgImg`}
    >
      <Draggable bounds=".boundarybox">
        <div
          className={`absolute left-[31%] top-16 z-50 flex h-fit min-w-[300px] flex-grow flex-col ${maximized ? "h-[100vh] w-[100vw] sm:h-full sm:w-full" : " w-[30vw]"} border-2 bg-[#b2b2b2] pb-3`}
        >
          <div className="drag-handle absolute top-0 flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
            <span className="font-nokia flex items-center justify-center pl-2 text-[10px] text-white">
              <Image
                src={notepad as HTMLImageElement}
                alt="Notepad"
                className="inline-block w-6 pr-3"
              />
              Sponsors
            </span>
            <section className="flex">
              <span
                className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:cursor-pointer hover:bg-[#757575]"
                onClick={() => setSelectedComponent("DEVSOC 2024")}
                onTouchEnd={() => setSelectedComponent("DEVSOC 2024")}
              >
                <MdMinimize />
              </span>
              <span
                className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:cursor-pointer hover:bg-[#757575]"
                onClick={() => handleMaximize()}
                onTouchEnd={() => handleMaximize()}
              >
                <BiWindow />
              </span>
              <span
                className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:cursor-pointer hover:bg-[#757575]"
                onClick={() => {
                  setActiveCard(activeCard.filter((c) => c !== "Prizepool"));
                  setSelectedComponent("DEVSOC 2024");
                }}
                onTouchEnd={() => {
                  setActiveCard(activeCard.filter((c) => c !== "Prizepool"));
                  setSelectedComponent("DEVSOC 2024");
                }}
              >
                <IoMdClose />
              </span>
            </section>
          </div>
          <div className="mt-6 flex h-fit w-full flex-col items-center justify-center">
            <SponsorCard
              height={100}
              imgsrc="/assets/sponsors/contentstack.svg"
              title="Title Sponsor"
              width={200}
            />
            <a
              href="https://www.contentstack.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex w-full items-center justify-center"
            >
              <button
                className={`bottom-0 mt-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2`}
                disabled={false}
                //className={`mt-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-sm text-black/70 transition ease-in-out md:mb-2 md:mr-2`}
              >
                Visit
              </button>
            </a>
          </div>
        </div>
      </Draggable>
      <Draggable bounds=".boundarybox">
        <div
          className={`absolute bottom-16 left-24 z-50 flex h-fit min-w-[300px] flex-grow flex-col ${maximized ? "h-[100vh] w-[100vw] sm:h-full sm:w-full" : " w-[30vw]"} border-2 bg-[#b2b2b2] pb-3`}
        >
          <div className="drag-handle absolute top-0 flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
            <span className="font-nokia flex items-center justify-center pl-2 text-[10px] text-white">
              <Image
                src={notepad as HTMLImageElement}
                alt="Notepad"
                className="inline-block w-6 pr-3"
              />
              Sponsors
            </span>
            <section className="flex">
              <span
                className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:cursor-pointer hover:bg-[#757575]"
                onClick={() => setSelectedComponent("DEVSOC 2024")}
                onTouchEnd={() => setSelectedComponent("DEVSOC 2024")}
              >
                <MdMinimize />
              </span>
              <span
                className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:cursor-pointer hover:bg-[#757575]"
                onClick={() => handleMaximize()}
                onTouchEnd={() => handleMaximize()}
              >
                <BiWindow />
              </span>
              <span
                className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:cursor-pointer hover:bg-[#757575]"
                onClick={() => {
                  setActiveCard(activeCard.filter((c) => c !== "Prizepool"));
                  setSelectedComponent("DEVSOC 2024");
                }}
                onTouchEnd={() => {
                  setActiveCard(activeCard.filter((c) => c !== "Prizepool"));
                  setSelectedComponent("DEVSOC 2024");
                }}
              >
                <IoMdClose />
              </span>
            </section>
          </div>
          <div className="mt-6 flex h-fit w-full flex-col items-center justify-center">
            <div className="flex flex-col">
              <SponsorCard
                height={100}
                imgsrc="/assets/sponsors/armurai.svg"
                title="Security Sponsor"
                width={200}
              />
              <a
                href="https://www.armur.ai/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex w-full items-center justify-center"
              >
                <button
                  className={`bottom-0 mt-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2`}
                  disabled={false}
                  //className={`mt-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-sm text-black/70 transition ease-in-out md:mb-2 md:mr-2`}
                >
                  Visit
                </button>
              </a>
            </div>
          </div>
        </div>
      </Draggable>
      <Draggable bounds=".boundarybox">
        <div
          className={`absolute bottom-16 right-24 z-50 flex h-fit min-w-[300px] flex-grow flex-col ${maximized ? "h-[100vh] w-[100vw] sm:h-full sm:w-full" : " w-[33vw]"} border-2 bg-[#b2b2b2] pb-3`}
        >
          <div className="drag-handle absolute top-0 flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
            <span className="font-nokia flex items-center justify-center pl-2 text-[10px] text-white">
              <Image
                src={notepad as HTMLImageElement}
                alt="Notepad"
                className="inline-block w-6 pr-3"
              />
              Sponsors
            </span>
            <section className="flex">
              <span
                className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:cursor-pointer hover:bg-[#757575]"
                onClick={() => setSelectedComponent("DEVSOC 2024")}
                onTouchEnd={() => setSelectedComponent("DEVSOC 2024")}
              >
                <MdMinimize />
              </span>
              <span
                className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:cursor-pointer hover:bg-[#757575]"
                onClick={() => handleMaximize()}
                onTouchEnd={() => handleMaximize()}
              >
                <BiWindow />
              </span>
              <span
                className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:cursor-pointer hover:bg-[#757575]"
                onClick={() => {
                  setActiveCard(activeCard.filter((c) => c !== "Prizepool"));
                  setSelectedComponent("DEVSOC 2024");
                }}
                onTouchEnd={() => {
                  setActiveCard(activeCard.filter((c) => c !== "Prizepool"));
                  setSelectedComponent("DEVSOC 2024");
                }}
              >
                <IoMdClose />
              </span>
            </section>
          </div>
          <div className="mt-6 flex h-fit w-full items-stretch justify-center gap-x-4 px-3">
          <div className="flex flex-col">
              <SponsorCard
                height={100}
                imgsrc="/assets/sponsors/hallofcricket.svg"
                title=""
                width={200}
              />
              <a
                href="https://www.hallofcricket.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex w-full items-center justify-center"
              >
                <button
                  className={`bottom-0 mt-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2`}
                  disabled={false}
                  //className={`mt-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-sm text-black/70 transition ease-in-out md:mb-2 md:mr-2`}
                >
                  Visit
                </button>
              </a>
            </div>
            <div className="flex flex-col">
              <SponsorCard
                height={100}
                imgsrc="/assets/sponsors/quillbot.svg"
                title=""
                width={200}
              />
              <a
                href="https://www.quillbot.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex w-full items-center justify-center"
              >
                <button
                  className={`bottom-0 mt-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2`}
                  disabled={false}
                  //className={`mt-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-sm text-black/70 transition ease-in-out md:mb-2 md:mr-2`}
                >
                  Visit
                </button>
              </a>
            </div>
            <div className="flex flex-col">
              <SponsorCard
                height={100}
                imgsrc="/assets/sponsors/scribbr.svg"
                title=""
                width={200}
              />
              <a
                href="https://www.scribbr.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex w-full items-center justify-center"
              >
                <button
                  className={`bottom-0 mt-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2`}
                  disabled={false}
                  //className={`mt-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-sm text-black/70 transition ease-in-out md:mb-2 md:mr-2`}
                >
                  Visit
                </button>
              </a>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
