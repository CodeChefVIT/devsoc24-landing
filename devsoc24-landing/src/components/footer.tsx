import React from "react";
import Image from "next/image";
import pattern from "@/assets/images/pattern.svg";
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
              <div className="absolute right-0 h-[100%] w-fit bg-[#7F32DA] flex items-center justify-center p-1 border-l-2 border-black hover:bg-black hover:text-white font-vcr hover:cursor-pointer">
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

              <p className="font-vcr my-2">
                Trying to Learn More? We can help you. Top Secret Information is
                right at your finger tips. To take the leap is what you choose.
              </p>
              <div className="font-vcr my-2 flex h-[40px] w-[100px] items-center justify-center self-start border-2 border-black bg-white hover:cursor-pointer hover:bg-black hover:text-white">
                Enter
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
