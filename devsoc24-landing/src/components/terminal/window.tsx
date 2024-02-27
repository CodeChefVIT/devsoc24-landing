"use client"
import { useState } from "react";
import { PiNotepadLight } from "react-icons/pi";

import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Image from "next/image";

interface WindowProps{
    style1:string,
    style2:string,
    spanText:string,
    pText:string,
    isButton:boolean,
}

export default function Window({style1,style2, spanText, pText, isButton}:WindowProps) {
  
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

  const [minimise, setMinimise] = useState(false);

  const handleClick = () => {
    setMinimise(!minimise);
  };


const { showUserModal, openUserModal, closeUserModal } = useUserModal();

  return (
    
          <>
            <div className={`${style1} ${minimise ? "hidden" : ""}`}>
                <div className={style2}>
                    <div className="w-[100%] h-[25px] bg-gradient-to-r from-blue-800 to-blue-600 border-b-2 flex justify-between items-center">
                        <span className="flex items-center pl-4 text-white text-xs"><PiNotepadLight className="text-2xl pr-2"/>{spanText}</span>
                        <section className="flex">

                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]" onClick={() => handleClick()}><MdMinimize /></span>
                        {/* <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><BiWindow /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><IoMdClose /></span> */}
                        </section>
                    </div>
                <p className=" w-[90%] pt-6 pl-6 ">{pText}</p>
                {isButton && (

                    <button className={`transition hover:duration-75 ease-in-out border-r-[3px] border-b-[3px] absolute bottom-2 right-4 h-6 w-24 md:mt-[100px] bg-[#aaa9a9]  border-[#000000] text-sm hover:h-[26px] hover:w-[98px]`} onClick={openUserModal}>Select</button>
                )}
                
                
                </div>
            </div>
            {showUserModal && (
                        <div className="fixed inset-0 z-10 overflow-y-auto">
                          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
                            <div
                              className="fixed inset-0 transition-opacity"
                              onClick={closeUserModal}
                            >
                              <div className="absolute inset-0 bg-[#757575] opacity-90"></div>
                            </div>
                            
                            <span
                              className="hidden sm:inline-block sm:h-screen sm:align-middle"
                              aria-hidden="true"
                            >
                              &#8203;
                            </span>
                            

                            <div className="inline-block transform overflow-hidden rounded-lg bg-[#acabab] text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
                                
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
            </>
        
  );
}
