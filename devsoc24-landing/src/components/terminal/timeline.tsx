import React, { useState } from "react";
import Image from "next/image";
import { GiMoneyStack } from "react-icons/gi";
import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Draggable from "react-draggable";
import { useCloseStore, useSelectedStore } from "@/store/store";

export default function Timeline() {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const { activeCard, setActiveCard } = useCloseStore();
  const { selectedComponent, setSelectedComponent } = useSelectedStore();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
          <Draggable handle=".drag-handle" bounds=".boundarybox">
            <div
              className={`flex min-w-[300px] flex-grow flex-col ${maximized ? "h-[100vh] w-[390px] sm:h-full sm:w-[80vw]" : "h-[100px] w-[30vw] pb-10"} border-2 bg-[#b2b2b2]`}
            >
              <div className="drag-handle flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                <span className="flex items-center pl-4 text-xs text-white">
                  <GiMoneyStack className="pr-2 text-2xl" /> Timeline
                </span>
                <section className="flex">
                  <span
                    className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575] hover:cursor-pointer"
                    onClick={() => setSelectedComponent("DEVSOC 2024")}
                    onTouchEnd={() => setSelectedComponent("DEVSOC 2024")}
                  >
                    <MdMinimize />
                  </span>
                  <span
                    className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575] hover:cursor-pointer"
                    onClick={() => handleMaximize()}
                    onTouchEnd={() => handleMaximize()}
                  >
                    <BiWindow />
                  </span>
                  <span
                    className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575] hover:cursor-pointer"
                    onClick={() => {
                      setActiveCard(activeCard.filter((c) => c !== "Timeline"));
                      setSelectedComponent("DEVSOC 2024");
                    }}
                    onTouchEnd={() => {
                      setActiveCard(activeCard.filter((c) => c !== "Timeline"));
                      setSelectedComponent("DEVSOC 2024");
                    }}
                  >
                    <IoMdClose />
                  </span>
                </section>
              </div>

              <p className="w-[90%] pl-6 pt-6 ">March 18th - 20th</p>
              <button
                className={`mr-2 h-6 w-24 self-end border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:h-[26px] hover:w-[98px] hover:duration-75 md:mt-[4px]`}
                onClick={() => toggleModal()}
              >
                Select
              </button>
            </div>
          </Draggable>
        )}
        {showModal ? (
          <>
            <div className="fixed left-0 top-0 z-50 flex h-screen  w-screen items-center justify-center bg-black/60 ">
              <div className=" relative left-0 top-0 z-50 flex h-fit min-h-[20vh] w-fit  min-w-[40vw] max-w-[90vw] flex-col border-2 border-white bg-[#b2b2b2] md:max-w-[50vw]">
                <div className="flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                  <span className="font-nokia flex items-center pl-4 text-[10px] text-white">
                    <GiMoneyStack className="pr-2 text-2xl" />
                  </span>
                  <section className="flex">
                    <span
                      className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575] hover:cursor-pointer"
                      onClick={() => toggleModal()}
                    >
                      <IoMdClose />
                    </span>
                  </section>
                </div>
                <p className="font-vcr m-5">More details coming soon</p>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
