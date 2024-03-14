import React, { useState } from "react";
import Image from "next/image";
import notepad from "@/assets/images/notepad.svg";
import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Draggable from "react-draggable";
import { useCloseStore, useSelectedStore } from "@/store/store";
import rupee from "@/assets/images/rupee_icon.svg"

export default function SponsorMain() {
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
        <div className={`absolute z-50 flex h-fit min-w-[300px] flex-grow flex-col border-2 bg-[#E9E9E9] pb-10`}>
          <div className="drag-handle flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
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
                  setActiveCard(activeCard.filter((c) => c !== "SponsorMain"));
                  setSelectedComponent("DEVSOC 2024");
                }}
                onTouchEnd={() => {
                  setActiveCard(activeCard.filter((c) => c !== "SponsorMain"));
                  setSelectedComponent("DEVSOC 2024");
                }}
              >
                <IoMdClose />
              </span>
            </section>
          </div>
          <div className="flex flex-row gap-x-2 items-center p-3">
            <Image src={rupee as HTMLImageElement} alt="icon" height={0} width={0} className="h-fit w-fit"/>
            <p className="w-[90%] font-nokia text-[22px]">SPONSORED BY</p>
          </div>
          <button
            //hover: className={`absolute self-end h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition ease-in-out  hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2 bottom-0`}
            disabled={true}
            className={`absolute bottom-0 h-6 w-24 self-end border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-[8px] text-black/70 transition ease-in-out md:mb-2 md:mr-2 font-nokia`}
          >
            OK
          </button>
        </div>
  );
}
