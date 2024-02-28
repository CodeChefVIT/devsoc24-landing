import React, { useState } from "react";
import Image from "next/image";
import { GiMoneyStack } from "react-icons/gi";
import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Draggable from "react-draggable";
import { useCloseStore, useSelectedStore } from "@/store/store";

export default function Prizepool() {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const { activeCard, setActiveCard } = useCloseStore();
  const {selectedComponent, setSelectedComponent} = useSelectedStore();

  const handleMinimize = () => {
    setMinimized(!minimized);
  };

  const handleMaximize = () => {
    setMaximized(!maximized);
  };

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

  const { openUserModal } = useUserModal();

  return (
    <div
      className={`relative flex h-full w-full ${maximized ? "" : "pl-[30px] pt-[100px]  md:pl-[60px]"}`}
    >
      <div>
        {minimized ? (
          <div
            className="absolute flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 border-[#a4a3a3] bg-[#757575]  hover:cursor-pointer"
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
          <Draggable handle=".drag-handle">
            <div
              className={`flex flex-col min-w-[300px] flex-grow ${maximized ? "h-[90vh]" : "h-[100px] w-[30vw] pb-10"} border-2 bg-[#b2b2b2]`}
            >
              <div className="drag-handle flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                <span className="flex items-center pl-4 text-xs text-white">
                  <GiMoneyStack className="pr-2 text-2xl" /> Pricepool
                </span>
                <section className="flex">
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
                    onClick={() =>{
                      setActiveCard(activeCard.filter((c) => c !== "Prizepool"))
                      setSelectedComponent(null)
                    }}
                  >
                    <IoMdClose />
                  </span>
                </section>
              </div>

              <p className="w-[90%] pl-6 pt-6 ">Coming soon</p>
              <button
                className={`self-end h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition ease-in-out  hover:h-[26px] hover:w-[98px] hover:duration-75 md:mt-[4px] mr-2`}
                onClick={openUserModal}
              >
                Select
              </button>
            </div>
          </Draggable>
        )}
      </div>
    </div>
  );
}
