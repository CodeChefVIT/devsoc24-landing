import React from "react";
import Image from "next/image";
import tracking from "@/assets/images/tracklogo.png";

export default function Tracks() {
  const tracks = [
    "AR/VR",
    "Blockchain",
    "Automation tools",
    "Social good",
    "Health and wellness",
    "Open innovation",
  ];

  return (
    <div className={`flex h-full w-full`}>
      <div className="flex flex-wrap justify-center items-center text-white my-auto">
        {tracks.map((track, index) => (
          <div key={index} className="flex flex-col items-center m-4 w-[300px] text-center self-start">
            <Image src={tracking} alt="track" quality={100} />
            <p className="font-vcr text-3xl mt-2">{track}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
