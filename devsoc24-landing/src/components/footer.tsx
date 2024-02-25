import React from "react";
import Image from "next/image";
import pattern from "@/assets/images/pattern.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="overlay_about flex h-screen items-center  justify-center overflow-hidden">
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
    </>
  );
};

export default Footer;
