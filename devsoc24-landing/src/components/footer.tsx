import React from "react";
import Image from "next/image";
import pattern from "@/assets/images/pattern.svg";
import glitch from "@/assets/images/footer_glitch.gif";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <Image
        src={glitch}
        alt="glitch"
        height={0}
        width={0}
        className="absolute -z-10 h-screen w-screen"
      />
      <div className="flex h-screen items-center justify-center overflow-hidden">
        <div className="h-fit w-fit border-2 border-black bg-[#7F32DA] p-[1px]">
          <div className=" h-fit w-[400px] flex-row overflow-hidden border-2 border-black bg-[#7F32DA]">
            <div className="relative flex justify-center border-b-2 border-black">
              <Image
                src={pattern as HTMLImageElement}
                alt="pattern"
                height={0}
                width={0}
                className="w-[100%]"
              />
              <div className="font-vcr mx-2">Message</div>
              <Image
                src={pattern as HTMLImageElement}
                alt="pattern"
                height={0}
                width={0}
                className="w-[100%]"
              />
              <div className="font-vcr absolute right-0 flex h-[100%] w-fit items-center justify-center border-l-2 border-black bg-[#7F32DA] p-1 hover:cursor-pointer hover:bg-black hover:text-white">
                X
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <div className="block-text my-2">
                <p>
                  ██████╗&nbsp;███████╗██╗&nbsp;&nbsp;&nbsp;██╗███████╗&nbsp;██████╗&nbsp;&nbsp;██████╗
                </p>
                <p>
                  ██╔══██╗██╔════╝██║&nbsp;&nbsp;&nbsp;██║██╔════╝██╔═══██╗██╔════╝
                </p>
                <p>
                  ██║&nbsp;&nbsp;██║█████╗&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;██║███████╗██║&nbsp;&nbsp;&nbsp;██║██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <p>
                  ██║&nbsp;&nbsp;██║██╔══╝&nbsp;&nbsp;╚██╗&nbsp;██╔╝╚════██║██║&nbsp;&nbsp;&nbsp;██║██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <p>
                  ██████╔╝███████╗&nbsp;╚████╔╝&nbsp;███████║╚██████╔╝╚██████╗
                </p>
                <p>
                  ╚═════╝&nbsp;╚══════╝&nbsp;&nbsp;╚═══╝&nbsp;&nbsp;╚══════╝&nbsp;╚═════╝&nbsp;&nbsp;╚═════╝
                </p>
              </div>

              <p className="font-vcr my-2 whitespace-pre-wrap text-sm font-light">
                Trying to Learn More? We can help you. Top Secret Information is
                right at your finger tips. To take the leap is what you choose.
              </p>
              <Link
                href="./terminal"
                className="font-vcr my-2 flex h-[40px] w-[100px] items-center justify-center self-start border-2 border-black bg-white hover:cursor-pointer hover:bg-black hover:text-white"
              >
                Enter
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full flex-col md:flex-row justify-between text-[10px] md:text-[15px]">
        <div className="font-disket mx-10 my-5 flex flex-col gap-2 md:self-end self-center text-white">
          <div className="flex flex-row  gap-0 md:gap-10 md:justify-start justify-between">
            <div className="bg-black px-1 uppercase hover:bg-[#CFCFCF] hover:text-black">
              instagram
            </div>
            <div className="bg-black px-1 uppercase hover:bg-[#CFCFCF] hover:text-black">
              linkedin
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-black px-1 uppercase">
              © Copyright 2024 codechef-vitAll rights reserved.
            </div>
            <div className="bg-black px-1 uppercase">All rights reserved.</div>
          </div>
        </div>
        <div className="flex flex-row font-disket mx-10 my-5  gap-2 self-end text-white">
          <div className="bg-black px-1 uppercase hover:bg-[#CFCFCF] hover:text-black">
            privacy policy
          </div>
          <div className="bg-black px-1 uppercase hover:bg-[#CFCFCF] hover:text-black">
            cookie policy
          </div>
          <div className="bg-black px-1 uppercase hover:bg-[#CFCFCF] hover:text-black">
            terms of service
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;