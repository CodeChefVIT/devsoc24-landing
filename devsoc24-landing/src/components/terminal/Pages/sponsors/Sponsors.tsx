import React, { useState } from "react";
import Image from "next/image";
import notepad from "@/assets/images/notepad.svg";
import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Draggable from "react-draggable";
import { useCloseStore, useSelectedStore } from "@/store/store";
import SponsorCard from "./SponsorCard";
import SponsorMain from "./SponsorMain";

export default function Sponsors() {
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
        ) : !maximized ? (
          <>
            <Draggable bounds=".boundarybox">
              <div
                className={`absolute left-[33%] top-20 z-50 flex min-w-[300px] flex-grow flex-col ${maximized ? "h-[100vh] w-[100vw] sm:h-full sm:w-full" : "h-[32vh] w-[28vw]"} items-center justify-center border-2 bg-[#b0b0b0] pb-10 `}
              >
                <div className="drag-handle flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                  <span className="font-nokia flex items-center justify-center pl-2 text-[10px] text-white">
                    <Image
                      src={notepad as HTMLImageElement}
                      alt="Notepad"
                      className="inline-block w-6 pr-3"
                    />
                    DEVSOC 2K24
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
                        setActiveCard(
                          activeCard.filter((c) => c !== "Sponsors"),
                        );
                        setSelectedComponent("DEVSOC 2024");
                      }}
                      onTouchEnd={() => {
                        setActiveCard(
                          activeCard.filter((c) => c !== "Sponsors"),
                        );
                        setSelectedComponent("DEVSOC 2024");
                      }}
                    >
                      <IoMdClose />
                    </span>
                  </section>
                </div>
                {/* <SponsorMain/> */}
                <SponsorCard
                  imgsrc="/assets/sponsors/contentstack.svg"
                  company="Contentstack"
                  title="Title Sponsor"
                  height="100"
                  width="100"
                />

                <a
                  href="https://www.contentstack.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex w-full items-center justify-center"
                >
                  <button
                    className={`absolute bottom-0 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2`}
                    disabled={false}

                    // className={`absolute bottom-0 h-6 w-24 self-end border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-sm text-black/70 transition ease-in-out md:mb-2 md:mr-2`}
                  >
                    Visit
                  </button>{" "}
                </a>
              </div>
            </Draggable>
            <Draggable bounds=".boundarybox">
              <div
                className={`absolute bottom-16 left-32 z-50 flex min-w-[300px] flex-grow flex-col ${maximized ? "h-[100vh] w-[100vw] sm:h-full sm:w-full" : "h-[32vh] w-[28vw]"} items-center justify-center border-2 bg-[#b0b0b0] pb-10 `}
              >
                <div className="drag-handle flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                  <span className="font-nokia flex items-center justify-center pl-2 text-[10px] text-white">
                    <Image
                      src={notepad as HTMLImageElement}
                      alt="Notepad"
                      className="inline-block w-6 pr-3"
                    />
                    DEVSOC 2K24
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
                        setActiveCard(
                          activeCard.filter((c) => c !== "Sponsors"),
                        );
                        setSelectedComponent("DEVSOC 2024");
                      }}
                      onTouchEnd={() => {
                        setActiveCard(
                          activeCard.filter((c) => c !== "Sponsors"),
                        );
                        setSelectedComponent("DEVSOC 2024");
                      }}
                    >
                      <IoMdClose />
                    </span>
                  </section>
                </div>
                {/* <SponsorMain/> */}
                <SponsorCard
                  imgsrc="/assets/sponsors/armurai.svg"
                  company="Armur AI"
                  title="Security Sponsor"
                  height="100"
                  width="100"
                />

                <a
                  href="https://www.armur.ai/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex w-full items-center justify-center"
                >
                  <button
                    className={`absolute bottom-0 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2`}
                    disabled={false}

                    // className={`absolute bottom-0 h-6 w-24 self-end border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-sm text-black/70 transition ease-in-out md:mb-2 md:mr-2`}
                  >
                    Visit
                  </button>{" "}
                </a>
              </div>
            </Draggable>
            <Draggable bounds=".boundarybox">
              <div
                className={`absolute bottom-16 right-32 z-50 flex min-w-[300px] flex-grow flex-col ${maximized ? "h-[100vh] w-[100vw] sm:h-full sm:w-full" : "h-[32vh] w-[35vw]"} items-center justify-center border-2 bg-[#b0b0b0] pb-10 `}
              >
                <div className="drag-handle flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                  <span className="font-nokia flex items-center justify-center pl-2 text-[10px] text-white">
                    <Image
                      src={notepad as HTMLImageElement}
                      alt="Notepad"
                      className="inline-block w-6 pr-3"
                    />
                    DEVSOC 2K24
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
                        setActiveCard(
                          activeCard.filter((c) => c !== "Sponsors"),
                        );
                        setSelectedComponent("DEVSOC 2024");
                      }}
                      onTouchEnd={() => {
                        setActiveCard(
                          activeCard.filter((c) => c !== "Sponsors"),
                        );
                        setSelectedComponent("DEVSOC 2024");
                      }}
                    >
                      <IoMdClose />
                    </span>
                  </section>
                </div>
                {/* <SponsorMain/> */}
                <div className="flex w-fit flex-row gap-x-5 px-3">
                  <div className="flex flex-col">
                    <SponsorCard
                      imgsrc="/assets/sponsors/hallofcricket.svg"
                      company="HallOfCricket"
                      title=""
                      height="100"
                  width="100"
                    />
                    <a
                      href="https://hallofcricket.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex w-full items-center justify-center"
                    >
                      <button
                        className={`absolute bottom-0 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2`}
                        disabled={false}

                        // className={`absolute bottom-0 h-6 w-24 self-end border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-sm text-black/70 transition ease-in-out md:mb-2 md:mr-2`}
                      >
                        Visit
                      </button>{" "}
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <SponsorCard
                      imgsrc="/assets/sponsors/quillbot.svg"
                      company="QuillBot"
                      title="In-Kind Sponsors"
                      height="100"
                      width="100"
                    />
                    <a
                      href="https://quillbot.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex w-full items-center justify-center"
                    >
                      <button
                        className={`absolute bottom-0 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2`}
                        disabled={false}

                        // className={`absolute bottom-0 h-6 w-24 self-end border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-sm text-black/70 transition ease-in-out md:mb-2 md:mr-2`}
                      >
                        Visit
                      </button>{" "}
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <SponsorCard
                      imgsrc="/assets/sponsors/scribbr.svg"
                      company="Scribbr"
                      title=""
                      height="100"
                      width="100"
                    />
                    <a
                      href="https://www.scribbr.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex w-full items-center justify-center"
                    >
                      <button
                        className={`absolute bottom-0 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition  ease-in-out hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2`}
                        disabled={false}

                        // className={`absolute bottom-0 h-6 w-24 self-end border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-sm text-black/70 transition ease-in-out md:mb-2 md:mr-2`}
                      >
                        Visit
                      </button>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </Draggable>
          </>
        ) : (
          <div
            className={`absolute z-50 flex h-fit min-w-[300px] flex-grow flex-col ${maximized ? "h-[100vh] w-[100vw] sm:h-full sm:w-full" : "w-[30vw]"} border-2 bg-[#b0b0b0] pb-10`}
          >
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
                    setActiveCard(activeCard.filter((c) => c !== "Sponsors"));
                    setSelectedComponent("DEVSOC 2024");
                  }}
                  onTouchEnd={() => {
                    setActiveCard(activeCard.filter((c) => c !== "Sponsors"));
                    setSelectedComponent("DEVSOC 2024");
                  }}
                >
                  <IoMdClose />
                </span>
              </section>
            </div>
            <p className="w-[90%] pl-6 pt-6 ">Coming soon...</p>
            <button
              //hover: className={`absolute self-end h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition ease-in-out  hover:scale-[1.05] hover:duration-75 md:mb-2 md:mr-2 bottom-0`}
              disabled={true}
              className={`absolute bottom-0 h-6 w-24 self-end border-b-[3px] border-r-[3px] border-[#000000]/70 bg-[#aaa9a9]/70 text-sm text-black/70 transition ease-in-out md:mb-2 md:mr-2`}
            >
              Select
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
