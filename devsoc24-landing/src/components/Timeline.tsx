import React from "react";
import Image from "next/image";
import devsoc2k24 from "@/assets/images/DEVSOC2k24.svg";
import LearnMoreBtn from "./learnMoreBtn";
import dotgrid from "@/assets/images/dot_grid.svg";

const Timeline = () => {
  return (
    <div className="bg-logo font-disket overflow-hidden bg-[#020202] h-[120vh]">
      <Image
        className="absolute left-60 top-[1100px]"
        src={dotgrid as HTMLImageElement}
        alt="dotgrid"
        height={100}
        width={100}
      />
      <Image
        className="absolute left-[1160px] top-[1300px]"
        src={dotgrid as HTMLImageElement}
        alt="dotgrid"
        height={100}
        width={100}
      />
      <div className="h-[1080px] w-full flex-wrap">
        <div className="mt-48 flex w-full justify-center">
          <Image
            className="mx-20 w-[300px] md:w-[35%]"
            src={devsoc2k24 as HTMLImageElement}
            alt="devsoc"
            quality={100}
          />
        </div>
        <div className="flex w-full justify-center">
          {" "}
          <div className="mx-10 mt-10 w-[500px] text-center text-xs text-[#bbbbbb] md:text-[12px] lg:w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="mt-14 flex w-full justify-center">
          <LearnMoreBtn link={""} />
        </div>
      </div>
    </div>
  );
};
export default Timeline;
