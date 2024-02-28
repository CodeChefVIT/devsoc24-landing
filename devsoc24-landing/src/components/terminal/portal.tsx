"use client";
import { useState } from "react";
import { GiPortal } from "react-icons/gi";
// import Image from "next/image";
// import Card from "../../components/card";
// import Terminal from "../../components/terminal/page";
import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Image from "next/image";
import { useCloseStore } from "@/store/store";

export default function Portal() {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const { activeCard, setActiveCard } = useCloseStore();

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

  // const [activeCard, setActiveCard] = useState<string[]>(["DEVSOC 2024"]);
  // const { activeCard, setActiveCard } = useCloseStore();

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
  // const handleClick = (cardName: string) => {
  //   setActiveCard((currentActiveCard) => {
  //     if (currentActiveCard.includes(cardName)) {
  //       console.log("activecard", activeCard);
  //       return currentActiveCard.filter((card) => card !== cardName);
  //     } else {
  //       console.log(activeCard);
  //       return [...currentActiveCard, cardName];
  //     }
  //   });
  // };
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
                  <GiPortal className="pr-2 text-2xl" /> Portal
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
                  <span
                    className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575] hover:cursor-pointer"
                    onClick={() => setActiveCard("")}
                  >
                    <IoMdClose />
                  </span>
                </section>
              </div>
              <p className="w-[90%] pl-6 pt-6 ">Coming soon</p>
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