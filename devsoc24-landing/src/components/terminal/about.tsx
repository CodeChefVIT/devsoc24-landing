"use client";
import { useState } from "react";
import { PiNotepadLight } from "react-icons/pi";
// import Image from "next/image";
// import Card from "../../components/card";
import Terminal from "../../components/terminal/page";
import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Image from "next/image";

export default function Home() {
  const [minimise, setMinimise] = useState(false);

  const handleClick = () => {
    setMinimise(!minimise);
  };

  return (
    <div className="justify- flex h-full w-full  pl-[30px] pt-[100px] font-diatype text-sm md:pl-[100px]">
      <div className={`${minimise ? "hidden" : ""}`}>
        <div className="border-2   bg-[#b2b2b2]  md:h-[55%] md:w-[50vw]">
          <div className="flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600 ">
            <span className="flex items-center pl-4 text-xs text-white">
              <PiNotepadLight className="pr-2 text-2xl" /> About-DEVSOC’24
            </span>
            <section className="flex">
              <span
                className={`mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b4b4b4]`}
                onClick={() => handleClick()}
              >
                <MdMinimize />
              </span>
              {/* <span className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575]">
                <BiWindow />
              </span>
              <span className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575]">
                <IoMdClose />
              </span> */}
            </section>
          </div>
          <p className=" w-[90%] pl-6 pt-8">
            DEVSOC is CodeChef-VIT’s annual flagship event hoping to empower
            young minds by bringing enthusiastic technocrats and thinkers under
            one roof. This year, the second iteration of the hackathon is being
            held with a goal to create a sprint like event, where participants
            create, hack, innovate to solve problems while adhering to the
            spirit of creativity and teamwork. The event is spread over three
            days, with the hackathon lasting 48 hours consisting of amazing
            swags, prizes, food and drinks!
          </p>
          <p className=" w-[90%] pl-6 pt-4">
            Devsoc Is going to be held at Anna Auditorium, Vellore Institute of
            Technology, Vellore
          </p>
          <p className=" w-[90%] pl-6 pt-4">
            Devsoc is going to be held on the 15th and 16th of March 2024
          </p>
        </div>
      </div>
      <div
        className={`absolute top-20 rounded-full bg-[#757575] h-[54px] w-[54px] border-2 border-[#a4a3a3] flex justify-center items-center ${!minimise ? "hidden" : ""} `}
        onClick={() => handleClick()}
      >
        <Image
          src="Icon-notepad.svg"
          alt="Description of the image"
          width={40}
          height={100}
        />
      </div>
    </div>
  );
}
