"use client";

import Window from "./window";

const free = `
  Yes the hackathon is completely free for all those who wish to participate
`;
const time =
  "It is a 48 hour hackathon and all participants are required to stay at Anna Auditorium overnight.";

const part =
  "Yes winner and participants will recieve participation certificates";

export default function FAQS() {
  return (
    <div className=" flex h-full w-full pl-[30%] pt-[100px] md:pl-[60px]">
      <Window
        style1={"bg-slate-700 md:h-[20%] h-[150px]"}
        style2={
          "w-[30vw] min-w-[300px] h-fit bg-[#b2b2b2] border-2 relative hover:z-30 pb-10"
        }
        spanText="About-DEVSOC’24"
        pText="Is the hackathon free to attend?"
        modalText={free}
        isButton={true}
      />

      <Window
        style1="bg-slate-700  h-fit absolute top-44 right-10 md:pt-0 mt-10 "
        style2="w-[38vw] min-w-[300px] h-full bg-[#b2b2b2] border-2 relative hover:z-30 pb-10"
        spanText="About-DEVSOC’24"
        pText="How long is the hackathon?"
        modalText={time}
        isButton={true}
      />
      <Window
        style1="bg-slate-700  h-fit absolute top-72 right-28 md:pt-0 mt-16"
        style2="w-[38vw] min-w-[300px] h-full bg-[#b2b2b2] border-2 relative hover:z-30 pb-10"
        spanText="About-DEVSOC’24"
        pText="Will we get participation certificates?"
        modalText={part}
        isButton={true}
      />

      <Window
        style1="bg-slate-700 h-fit absolute top-[420px] right-22 md:pt-0 mt-16"
        style2="w-[45vw] min-w-[300px] h-full bg-[#b2b2b2] border-2 relative hover:z-30 pb-10"
        spanText="About-DEVSOC’24"
        pText="Is the hackathon free to attend?"
        modalText={free}
        isButton={true}
      />
    </div>
  );
}
