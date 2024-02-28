"use client";

import Window from "./window";

export default function FAQS() {
  return (
    <div className=" flex h-full  w-full pl-[30%] pt-[100px]  md:pl-[60px]">
      <Window
        style1={"bg-slate-700 md:h-[20%] h-[150px]"}
        style2={
          "w-[30vw] min-w-[300px] h-fit bg-[#b2b2b2] border-2 relative hover:z-30 pb-10"
        }
        spanText="About-DEVSOC’24"
        pText="Is the hackathon free to attend? "
        isButton={true}
      />

      <Window
        style1="bg-slate-700  h-fit absolute top-44 right-10  md:pt-0 mt-10 "
        style2="w-[38vw] min-w-[300px] h-full bg-[#b2b2b2] border-2 relative hover:z-30 pb-10"
        spanText="About-DEVSOC’24"
        pText="Is the hackathon free to attend? "
        isButton={true}
      />
      <Window
        style1="bg-slate-700  h-fit absolute top-72 right-28 md:pt-0 mt-16"
        style2="w-[38vw] min-w-[300px] h-full bg-[#b2b2b2] border-2 relative hover:z-30 pb-10"
        spanText="About-DEVSOC’24"
        pText="Is the hackathon free to attend? "
        isButton={true}
      />

      <Window
        style1="bg-slate-700 h-fit absolute top-[420px] right-22 md:pt-0 mt-16"
        style2="w-[45vw] min-w-[300px] h-full bg-[#b2b2b2] border-2 relative hover:z-30 pb-10"
        spanText="About-DEVSOC’24"
        pText="Is the hackathon free to attend? "
        isButton={true}
      />
    </div>
  );
}
