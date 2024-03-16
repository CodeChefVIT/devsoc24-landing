import React from "react";
import Image from "next/image";

const SponsorCardL = (props: {
  imgsrc: string;
  title: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="h-auto w-auto ">
      <p className="my-2 text-center text-[15px]">{props.title}</p>
      <div className="h-fit w-fit border-[4px] border-b-white border-l-black border-r-white border-t-black hover:cursor-pointer active:scale-[0.99]">
        <div className="h-fit w-fit border-[4px] border-b-[#DFDFDF] border-l-[#808080] border-r-[#DFDFDF] border-t-[#808080]">
          <div className="flex h-fit min-h-[10vh] w-fit min-w-[10vh] flex-col items-center justify-evenly border-[8px] border-[#DFDFDF] bg-white">
            <Image
              src={props.imgsrc}
              alt="sponsor card"
              height={0}
              // height={props.height}
              // width={props.width}
              width={0}
              className={`m-4 h-[100px] w-[100px] p-2`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorCardL;
