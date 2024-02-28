"use client";
import { useState } from "react";

import { MdMinimize } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiWindow } from "react-icons/bi";
import Image from "next/image";
import { FaQ } from "react-icons/fa6";

interface WindowProps {
  style1: string;
  style2: string;
  spanText: string;
  pText: string;
  isButton: boolean;
}

export default function Window({
  style1,
  style2,
  spanText,
  pText,
  isButton,
}: WindowProps) {
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
      <div className={`${style1} ${minimise ? "hidden" : ""} `}>
        <div className={style2}>
          <div className="flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
            <span className="flex items-center  pl-4 text-xs text-white">
              <FaQ className="pr-2 text-xl" />
              {spanText}
            </span>
            <section className="flex">
              <span
                className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575] hover:cursor-pointer"
                onClick={() => handleClick()}
              >
                <MdMinimize />
              </span>
              {/* <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><BiWindow /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><IoMdClose /></span> */}
            </section>
          </div>
          <p className=" w-[90%] pl-6 pt-6 ">{pText}</p>
          {isButton && (
            <button
              className={`absolute bottom-2 right-4 h-6 w-24 border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] text-sm transition ease-in-out  hover:h-[26px] hover:w-[98px] hover:duration-75 md:mt-[100px]`}
              onClick={openUserModal}
            >
              Select
            </button>
          )}
        </div>
      </div>
      {showUserModal && (
        <div className="fixed inset-0 z-40 overflow-y-auto">
          <div className="flex min-h-[50%] items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
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

            <div className="inline-block transform overflow-hidden  border-2 border-white bg-[#acabab] text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle md:p-0">
              <div>
                <div className="md:col-span-2 md:mt-0">
                  <div className="flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                    <span className="flex items-center pl-4 text-xs text-white">
                      <FaQ className="pr-2 text-xl" />
                      {spanText}
                    </span>
                    <section className="flex">
                      <span
                        className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575] hover:cursor-pointer"
                        onClick={closeUserModal}
                      >
                        <MdMinimize />
                      </span>
                      {/* <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><BiWindow /></span>
                        <span className="bg-[#757575] mr-1 border-r-[2px] border-b-[2px] border-[#1e1e1e]"><IoMdClose /></span> */}
                    </section>
                  </div>
                  <li className="pl-2 pt-2">
                    Is the hackathon free to attend?
                  </li>
                  <div className="block pb-2 pl-2 pt-2 text-sm font-medium text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deserunt quae et earum nostrum odit vel non temporibus
                    voluptates sequi sunt mollitia sapiente enim deleniti ad
                    sint, excepturi iusto asperiores obcaecati dolore! Ullam
                    asperiores reiciendis fugit autem tempora, consectetur a!
                    Repudiandae soluta quia veritatis accusamus qui doloribus id
                    explicabo enim aspernatur!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`absolute top-20 flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 border-[#a4a3a3] bg-[#757575] ${!minimise ? "hidden" : ""} `}
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
