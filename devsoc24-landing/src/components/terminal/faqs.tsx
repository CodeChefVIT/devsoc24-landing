import React, { useEffect, useState } from "react";
import Image from "next/image"; // Make sure this import is correct
import { GiMoneyStack } from "react-icons/gi";
import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Draggable from "react-draggable";

const questions = [
  {
    question: "Is it free?",
    answer:
      "Yes the hackathon is completely free for all those who wish to participate",
  },
  {
    question: "Is it long?",
    answer: "longer than your....",
  },
  {
    question: "Certificate?",
    answer:
      "Certificate which is valued 100x your placement will be given to you",
  },
];

export default function FAQs() {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(questions[0]?.answer);
  // const { activeCard, setActiveCard } = useCloseStore();
  // const { selectedComponent, setSelectedComponent } = useSelectedStore();

  const handleMinimize = () => {
    setMinimized(!minimized);
  };

  const handleMaximize = () => {
    setMaximized(!maximized);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
            {/* <Image src="Icon-notepad.svg" alt="Description of the image" width={40} height={100} className="" /> */}
          </div>
        ) : (
          questions.map((items, index) => (

              <Draggable
                handle=".drag-handle"
                bounds=".boundarybox"
                key={index}
              >
                <div
                  className={` flex min-w-[300px] flex-grow flex-col ${maximized ? "h-[90vh]" : "h-[100px] w-[30vw] pb-10"} mb-10 border-2 bg-[#b2b2b2] `}
                  id={`${index}`}
                >
                  <div className="drag-handle flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                    <span className="flex items-center pl-4 text-xs text-white">
                      <GiMoneyStack className="pr-2 text-2xl" /> DEVSOC&apos;24
                    </span>
                    <section className="flex">
                      <span
                        className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575]"

                      >
                        <MdMinimize />
                      </span>
                      <span
                        className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575]"

                      >
                        <BiWindow />
                      </span>
                      <span
                        className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575]"

                      >
                        <IoMdClose />
                      </span>
                    </section>
                  </div>

                  <p className="w-[90%] pl-6 pt-6 ">{items.question}</p>
                  <button
                    className={`mr-2 h-6 w-24 self-end border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:h-[26px] hover:w-[98px] hover:duration-75 md:mt-[4px]`}
                    onClick={() => {
                      setModalContent(questions[index]?.answer);
                      toggleModal();
                    }}
                  >
                    Select
                  </button>
                </div>
              </Draggable>

          ))
        )}
      </div>
      {showModal ? (
        <>
          <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/60">
            <div className=" min-w-[4 0vw] relative left-0 top-0 z-50 flex  h-fit min-h-[20vh] w-fit flex-col border-2 border-white bg-[#b2b2b2]">
              <div className="flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                <span className="flex items-center pl-4 text-xs text-white">
                  <GiMoneyStack className="pr-2 text-2xl" /> Answer
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
              <p className="m-5">{modalContent}</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
