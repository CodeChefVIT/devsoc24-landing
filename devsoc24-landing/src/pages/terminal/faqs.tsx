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
          <div className="flex justify- w-full h-full  md:pl-[60px] pl-[30px] pt-[100px]  relative">
            <div className="bg-slate-700 h-[20%]">
                <div className="w-[30vw] min-w-[500px] h-full bg-[#b2b2b2] border-2 relative">
                    <div className="w-[100%] h-[25px] bg-gradient-to-r from-blue-800 to-blue-600 border-b-2 flex justify-between items-center">
                        <span className="flex items-center pl-4 text-white text-xs"><PiNotepadLight className="text-2xl pr-2"/> About-DEVSOC’24</span>
                        <section className="flex">

                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><MdMinimize /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><BiWindow /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><IoMdClose /></span>
                        </section>
                    </div>
                <p className=" w-[90%] pt-6 pl-6 ">Is the hackathon free to attend? </p>
                <button className={`transition hover:duration-75 ease-in-out border-r-[3px] border-b-[3px] absolute bottom-2 right-4 h-6 w-24 md:mt-[100px] bg-[#aaa9a9]  border-[#000000] text-sm hover:h-[26px] hover:w-[98px]`} onClick={openUserModal}>Select</button>
                
                </div>
            </div>
            {showUserModal && (
                        <div className="fixed inset-0 z-10 overflow-y-auto">
                          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
                            <div
                              className="fixed inset-0 transition-opacity"
                              onClick={closeUserModal}
                            >
                              <div className="absolute inset-0 bg-gray-500 opacity-80"></div>
                            </div>

                            <span
                              className="hidden sm:inline-block sm:h-screen sm:align-middle"
                              aria-hidden="true"
                            >
                              &#8203;
                            </span>

                            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
                              <div>
                                <div className="mt-5 md:col-span-2 md:mt-0">
                                  <li>Is the hackathon free to attend?</li>
                                  <div className="block text-sm font-medium text-gray-700">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quae et earum nostrum odit vel non temporibus voluptates sequi sunt mollitia sapiente enim deleniti ad sint, excepturi iusto asperiores obcaecati dolore! Ullam asperiores reiciendis fugit autem tempora, consectetur a! Repudiandae soluta quia veritatis accusamus qui doloribus id explicabo enim aspernatur!
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
            <div className="bg-slate-700 h-[20%] absolute top-52 right-6">
                <div className="w-[38vw] min-w-[500px] h-full bg-[#b2b2b2] border-2 relative">
                    <div className="w-[100%] h-[25px] bg-gradient-to-r from-blue-800 to-blue-600 border-b-2 flex justify-between items-center">
                        <span className="flex items-center pl-4 text-white text-xs"><PiNotepadLight className="text-2xl pr-2"/> About-DEVSOC’24</span>
                        <section className="flex">

                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><MdMinimize /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><BiWindow /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><IoMdClose /></span>
                        </section>
                    </div>
                <p className=" w-[90%] pt-6 pl-6 ">Whats the application process like? </p>
                <button className={`transition hover:duration-75 ease-in-out border-r-[3px] border-b-[3px] absolute bottom-2 right-4 h-6 w-24 md:mt-[100px] bg-[#aaa9a9]  border-[#000000] text-sm hover:h-[26px] hover:w-[98px]`}>Select</button>
                
                </div>
            </div>
            <div className="bg-slate-700 h-[20%] absolute top-72 left-28">
                <div className="w-[38vw] min-w-[500px] h-full bg-[#b2b2b2] border-2 relative">
                    <div className="w-[100%] h-[25px] bg-gradient-to-r from-blue-800 to-blue-600 border-b-2 flex justify-between items-center">
                        <span className="flex items-center pl-4 text-white text-xs"><PiNotepadLight className="text-2xl pr-2"/> About-DEVSOC’24</span>
                        <section className="flex">

                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><MdMinimize /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><BiWindow /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><IoMdClose /></span>
                        </section>
                    </div>
                <p className=" w-[90%] pt-6 pl-6 ">How many team members do I need to have?? </p>
                <button className={`transition hover:duration-75 ease-in-out border-r-[3px] border-b-[3px] absolute bottom-2 right-4 h-6 w-24 md:mt-[100px] bg-[#aaa9a9]  border-[#000000] text-sm hover:h-[26px] hover:w-[98px]`}>Select</button>
                
                </div>
            </div>
            <div className="bg-slate-700 h-[20%] absolute top-[420px] right-8">
                <div className="w-[45vw] min-w-[500px] h-full bg-[#b2b2b2] border-2 relative">
                    <div className="w-[100%] h-[25px] bg-gradient-to-r from-blue-800 to-blue-600 border-b-2 flex justify-between items-center">
                        <span className="flex items-center pl-4 text-white text-xs"><PiNotepadLight className="text-2xl pr-2"/> About-DEVSOC’24</span>
                        <section className="flex">

                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><MdMinimize /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><BiWindow /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><IoMdClose /></span>
                        </section>
                    </div>
                <p className=" w-[90%] pt-6 pl-6 ">I don’t have much experience with coding or tech events. Should I still participate?? </p>
                <button className={`transition hover:duration-75 ease-in-out border-r-[3px] border-b-[3px] absolute bottom-2 right-4 h-6 w-24 md:mt-[100px] bg-[#aaa9a9]  border-[#000000] text-sm hover:h-[26px] hover:w-[98px]`}>Select</button>
                
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
