import React, { useState } from "react";
import Image from "next/image";
import notepad from "@/assets/images/notepad.svg"
import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Draggable from "react-draggable";
import { useCloseStore, useSelectedStore } from "@/store/store";

export default function About() {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const { activeCard, setActiveCard } = useCloseStore();
  const { selectedComponent, setSelectedComponent } = useSelectedStore();

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
            className="absolute flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 border-[#a4a3a3] bg-transparent  hover:cursor-pointer"
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
          <Draggable handle=".drag-handle" bounds=".boundarybox">
            <div
              className={`absolute z-50 flex min-w-[300px] flex-grow flex-col ${maximized ? "h-[90vh]" : "h-fit w-[30vw]"} border-2 bg-[#b2b2b2] pb-10`}
            >
              <div className="drag-handle flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                <span className="flex items-center pl-2 font-nokia text-[10px] text-white">
                  <Image src={notepad as HTMLImageElement} alt="Notepad" className="inline mr-1"/>
                  About
                </span>
                <section className="flex">
                  <span
                    className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:bg-[#757575] hover:cursor-pointer"
                    onClick={() => handleMinimize()}
                    onTouchEnd={() => handleMinimize()}
                  >
                    <MdMinimize />
                  </span>
                  <span
                    className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:bg-[#757575] hover:cursor-pointer"
                    onClick={() => handleMaximize()}
                    onTouchEnd={() => handleMaximize()}
                  >
                    <BiWindow />
                  </span>
                  <span
                    className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:bg-[#757575] hover:cursor-pointer"
                    onClick={() => {
                      setActiveCard(activeCard.filter((c) => c !== "About"));
                      setSelectedComponent(null);
                    }}
                    onTouchEnd={() => {
                      setActiveCard(activeCard.filter((c) => c !== "About"));
                      setSelectedComponent(null);
                    }}
                  >
                    <IoMdClose />
                  </span>
                </section>
              </div>

              <p className="font-vcr w-[90%] pl-6 pt-2 md:pt-8">
                DEVSOC is CodeChef-VIT’s annual flagship event hoping to empower
                young minds by bringing enthusiastic technocrats and thinkers
                under one roof. This year, the second iteration of the hackathon
                is being held with a goal to create a sprint like event, where
                participants create, hack, innovate to solve problems while
                adhering to the spirit of creativity and teamwork. The event is
                spread over three days, with the hackathon lasting 48 hours
                consisting of amazing swags, prizes, food and drinks!
              </p>
              <p className="font-vcr w-[90%] pl-6 pt-1 md:pt-4">
                Devsoc Is going to be held at Anna Auditorium, Vellore Institute
                of Technology, Vellore
              </p>
              <p className="font-vcr w-[90%] pl-6 pt-1 md:pt-4">
                Devsoc is going to be held on the 15th and 16th of March 2024
              </p>
              {/* <button
                className={`absolute bottom-2 right-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition ease-in-out  hover:h-[26px] hover:w-[98px] hover:duration-75 md:mt-[100px]`}
                // onClick={openUserModal}
              >
                Select
              </button> */}
            </div>
          </Draggable>
        )}
      </div>
    </div>
  );
}
