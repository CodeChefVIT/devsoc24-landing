"use client";
import { useState } from "react";
import { PiNotepadLight } from "react-icons/pi";
import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Image from "next/image";

export default function About() {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);

  const handleMinimize = () => {
    setMinimized(!minimized);
  };
  const handleMaximize = () => {
    setMaximized(!maximized);
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

  const [activeCard, setActiveCard] = useState<string[]>(["DEVSOC 2024"]);
  const useUserModal = () => {
    const [showUserModal, setshowUserModal] = useState(false);

    const openUserModal = () => {
      setshowUserModal(true);
    };

    const closeUserModal = () => {
      setshowUserModal(false);
    };

    return { showUserModal, openUserModal, closeUserModal };
  };

  const { showUserModal, openUserModal, closeUserModal } = useUserModal();
  const handleClick = (cardName: string) => {
    setActiveCard((currentActiveCard) => {
      if (currentActiveCard.includes(cardName)) {
        console.log("activecard", activeCard);
        return currentActiveCard.filter((card) => card !== cardName);
      } else {
        console.log(activeCard);
        return [...currentActiveCard, cardName];
      }
    });
  };
  return (
    <div
      className={`relative flex h-full w-full ${maximized ? "" : "pl-[30px] pt-[100px]  md:pl-[60px]"}`}
    >
      <div className="h-[20%] bg-slate-700 ">
        {minimized ? (
          <div
            className={`absolute flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 border-[#a4a3a3] bg-[#757575]  hover:cursor-pointer`}
            onClick={() => handleMinimize()}
          >
            <Image
              src="Icon-notepad.svg"
              alt="Description of the image"
              width={40}
              height={100}
              className=""
            />
          </div>
        ) : (
          <>
            <div
              className={` min-w-[300px] ${maximized ? "h-[90vh] w-[80vw]" : "h-fit w-[30vw] pb-10"} border-2 bg-[#b2b2b2] `}
            >
              <div className="flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                <span className="flex items-center pl-4 text-xs text-white">
                  <PiNotepadLight className="pr-2 text-2xl" /> About
                  Devsoc&apos;24
                </span>
                <section className="flex ">
                  <span
                    className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575] hover:cursor-pointer"
                    onClick={() => handleMinimize()}
                  >
                    <MdMinimize />
                  </span>
                  <span
                    className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575] hover:cursor-pointer"
                    onClick={() => handleMaximize()}
                  >
                    <BiWindow />
                  </span>
                  <span className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575]">
                    <IoMdClose />
                  </span>
                </section>
              </div>
              <p className=" w-[90%] pl-6 pt-2 md:pt-8">
                DEVSOC is CodeChef-VIT’s annual flagship event hoping to empower
                young minds by bringing enthusiastic technocrats and thinkers
                under one roof. This year, the second iteration of the hackathon
                is being held with a goal to create a sprint like event, where
                participants create, hack, innovate to solve problems while
                adhering to the spirit of creativity and teamwork. The event is
                spread over three days, with the hackathon lasting 48 hours
                consisting of amazing swags, prizes, food and drinks!
              </p>
              <p className=" w-[90%] pl-6 pt-1 md:pt-4">
                Devsoc Is going to be held at Anna Auditorium, Vellore Institute
                of Technology, Vellore
              </p>
              <p className=" w-[90%] pl-6 pt-1 md:pt-4">
                Devsoc is going to be held on the 15th and 16th of March 2024
              </p>
              <button
                className={`absolute bottom-2 right-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition ease-in-out  hover:h-[26px] hover:w-[98px] hover:duration-75 md:mt-[100px]`}
                onClick={openUserModal}
              >
                Select
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
