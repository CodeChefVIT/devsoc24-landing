"use client"
import TypewriterEffect from "@/components/terminal/TypewriterEffect";
import React from "react";
const help = [
  "<span>User validated and online...</span>",
  "<span>[[init]]</span>",
  "<span>Retriving command data...</span>",
  "<br>",
];
const Loading: React.FC = () => {
  return (
    <div className="font-diatype h-screen w-screen text-sm font-thin text-[#757575] pl-3">
      <TypewriterEffect
        textLines={help}
      />
      {/* <div className="h-20 w-20 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div> */}
    </div>
  );
};

export default Loading;
