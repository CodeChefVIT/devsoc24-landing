"use client"
import { useState } from "react";
import { PiNotepadLight } from "react-icons/pi";
// import Image from "next/image";
// import Card from "../../components/card";
import Terminal from "../../components/terminal/page";
import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";


export default function Home() {
  const cardTypes = ["About", "Timeline", "Tracks", "Prizepool", "Sponsors", "Portal", "FAQs"]
  const cardImage = ["personabout 2.svg", "Frame 13.svg", "Frame 13 2.svg", "Frame 13 3.svg", "Frame 13 4.svg", "Frame 13 5.svg","Frame 13 6.svg"]

const [activeCard, setActiveCard] = useState<string[]>(["DEVSOC 2024"]); 

const handleClick = (cardName: string) => { 
  setActiveCard(currentActiveCard => {
    if (currentActiveCard.includes(cardName)) {
      console.log("activecard",activeCard)
      return currentActiveCard.filter(card => card !== cardName);
    } else {
      console.log(activeCard)
      return [...currentActiveCard, cardName];
    }
  });
};
  return (
    <main className="font-diatype">
      <div className="w-full bg-[#494848] h-[2.8%] fixed font-diatype flex justify-center z-30">
        <div style={{
        backgroundImage: `url('/Topborder.svg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        width: '100%', 
        height: '100%', 
        
      }}></div>

      {/* <Image src="/Topborder.svg"
        alt="Description of the image"
        width={2200} 
        height={200} 
        className=""
      /> */}
      </div>
    <div className="flex md:flex-row flex-col-reverse justify-between items-start h-[96%] ">
        <div className="md:fixed fixed md:top-0 bottom-0  md:w-[22%] md:h-[100%] md:pt-[1.3%] w-[100%] h-[250px] z-10 overflow-y-auto">
          <Terminal/>
        </div>
        <div className="md:pl-[25%] md:fixed overflow-y-auto w-full bg-[#232323] md:h-[100%] pr-[20px]  h-[900px]">
          <div className="mt-[1.3%] md:flex fixed hidden bg-[#d2d1d1] top-0  left-[22%] h-[20px] z-10">
            {activeCard.map((card)=>{
              return (

                <div key={card} className="border-r-2 border-[#000000] w-[140px] h-full  flex justify-center items-center text-xs font-semibold">{card}</div>
              )
            })}
          </div>
          <div className="flex justify- w-full h-full  md:pl-[100px] pl-[30px] pt-[100px]">
            <div className="">
                <div className="w-[50vw] min-w-[500px] h-[75%] bg-[#b2b2b2] border-2">
                    <div className="w-[100%] h-[25px] bg-gradient-to-r from-blue-800 to-blue-600 border-b-2 flex justify-between items-center ">
                        <span className="flex items-center pl-4 text-white text-xs"><PiNotepadLight className="text-2xl pr-2"/> About-DEVSOC’24</span>
                        <section className="flex">

                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><MdMinimize /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><BiWindow /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><IoMdClose /></span>
                        </section>
                    </div>
                <p className=" w-[90%] pt-8 pl-6">DEVSOC is CodeChef-VIT’s annual flagship event hoping to empower young minds by bringing enthusiastic technocrats and thinkers under one roof. This year, the second iteration of the hackathon is being held with a goal to create a sprint like event, where participants create, hack, innovate to solve problems while adhering to the spirit of creativity and teamwork. The event is spread over three days, with the hackathon lasting 48 hours consisting of amazing swags, prizes, food and drinks!</p>
                <p className=" w-[90%] pt-4 pl-6">Devsoc Is going to be held at Anna Auditorium, Vellore Institute of Technology, Vellore</p>
                <p className=" w-[90%] pt-4 pl-6">Devsoc is going to be held on the 15th and 16th of March 2024</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#494848] h-[2.8%] fixed bottom-0 z-40 font-diatype flex justify-center">
        <div style={{
        backgroundImage: `url('/Topborder.svg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        width: '100%', 
        height: '100%',
      }}></div>

      {/* <Image src="/Topborder.svg"
        alt="Description of the image"
        width={2200} 
        height={200} 
        className=""
      /> */}
      </div>
    </main>
  );
}
