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
    
          <div className="flex justify- w-full h-full  md:pl-[60px] pl-[30px] pt-[100px]  relative">
            <div className="bg-slate-700 h-[20%]">
                <div className="w-[30vw] min-w-[300px] h-full bg-[#b2b2b2] border-2 relative">
                    <div className="w-[100%] h-[25px] bg-gradient-to-r from-blue-800 to-blue-600 border-b-2 flex justify-between items-center">
                        <span className="flex items-center pl-4 text-white text-xs"><PiNotepadLight className="text-2xl pr-2"/> About-DEVSOC’24</span>
                        <section className="flex">

                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><MdMinimize /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><BiWindow /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><IoMdClose /></span>
                        </section>
                    </div>
                <p className=" w-[90%] pt-6 pl-6 ">Coming soon </p>
                <button className={`transition hover:duration-75 ease-in-out border-r-[3px] border-b-[3px] absolute bottom-2 right-4 h-6 w-24 md:mt-[100px] bg-[#aaa9a9]  border-[#000000] text-sm hover:h-[26px] hover:w-[98px]`} onClick={openUserModal}>Select</button>
                
                </div>
            </div>
            
            </div>
          
        
  );
}
