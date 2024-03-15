import React from "react";
import Image from "next/image";

const TimelineCard = (props: {
  day: number;
  title: string;
  time: string;
  image: string;
}) => {
  return (
    <div className="w-[200px]">
      <div className="flex flex-col">
        <div className="relative flex h-fit w-fit items-center justify-center bg-black">
          <Image
            src="/timelineCard.svg"
            alt="header"
            height={0}
            width={0}
            className="h-auto w-[200px]"
          />
          <div className="bg-[#757575]p-1 absolute h-fit w-fit">
            Day {props.day}
          </div>
        </div>
        <div className="flex h-[30vh] w-full flex-col border-b-2 border-l-2 border-r-2 border-black bg-[#757575]">
          <div className="flex h-[60%] w-full items-center justify-center">
            <Image
              src={`/timeline/${props.image}`}
              alt=""
              height={0}
              width={0}
              className="h-full w-full p-5"
            />
          </div>
          <div className="flex h-[40%] w-full flex-col items-center justify-center gap-4  text-center">
            <p className="w-full">[{props.title}]</p>
            <p className="w-[95%] bg-black px-2 text-white">
              {"<"} {props.time} {">"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
