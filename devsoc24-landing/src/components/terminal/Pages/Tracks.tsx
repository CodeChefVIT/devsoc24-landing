import React, { useState } from "react";
import Image from "next/image";
import tracking from "@/assets/images/tracklogo.png";
import Draggable from "react-draggable";
import { IoMdClose } from "react-icons/io";
import notepad from "@/assets/images/notepad.svg";

const trackDetails: Track[] = [
  {
    title: "Interactive Engagement (Gamified Solutions)",
    name: "Interactive Engagement",
    content:
      "This track is all about engaging applications with gamified mechanisms. Create solutions which promote enhanced interaction and user-retention with the help of immersive technologies and reward systems.",
  },
  {
    title: "Eco-Innovations (Sustainable Technology)",
    name: "Eco-Innovations",
    content:
      "Technology is all about problem solving and enriching the life of users. Provide technical solutions which promote sustainability and a better environment. Improve the current technologies to make them more sustainable or develop brand new solutions.",
  },
  {
    title: "Community Building",
    name: "Community Building",
    content:
      "This track focuses on fostering stronger, more connected communities. Participants are tasked with creating platforms or tools that promote unity and communal engagement.",
  },
  {
    title: "Future of Work",
    name: "Future of Work",
    content:
      "This track explores the evolving nature of work in the digital era. Participants are encouraged to develop solutions that enhance productivity and redefine traditional work models. Participants can also build solutions that fine-tune LLMs or use vector databases to change the work landscape.",
  },
  {
    title: "Ethical Technology",
    name: "Ethical Technology",
    content:
      "This track focuses on developing solutions promoting responsible innovation, privacy, fairness, and transparency in the tech industry. Participants are tasked with addressing societal concerns such as data privacy and security. Participants can also focus on combating unethical use of tech and emphasise integrity and accountability in technology design and deployment.",
  },
  {
    title: "Open Innovation",
    name: "Open Innovation",
    content:
      "This track focuses on embracing creativity to solve diverse challenges. Participants are encouraged to explore groundbreaking ideas across sectors and implement interdisciplinary approaches and collaborative problem-solving. If you have any idea that doesn’t fit in any of the other tracks, this track is for you.",
  },
];
interface Track {
  title: string;
  name: string;
  content: React.ReactNode;
}

const Tracks = () => {
  const [trackModal, setTrackModal] = useState<boolean[]>(
    Array(trackDetails.length).fill(false),
  );

  const showModal = (index: number) => {
    // console.log("Open Modal: ", index);
    setTrackModal((prev) => {
      const newTrackModal = [...prev];
      newTrackModal[index] = true;
      return newTrackModal;
    });
  };

  const closeTrackModal = (
    index: number,
    event?:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (event) {
      event.stopPropagation();
    }
    setTrackModal((prev) => {
      const newTrackModal = [...prev];
      newTrackModal[index] = false;
      return newTrackModal;
    });
  };

  return (
    <div className={`bgImg min-h-[92vh] boundarybox relative flex h-full w-full`}>
      <div className="my-auto flex flex-wrap items-center justify-center text-white">
        {trackDetails.map((track, index) => (
          <div
            key={index}
            className="m-4 flex w-[300px] flex-col items-center self-start text-center"
            onClick={() => showModal(index)}
          >
            <Image src={tracking} alt="track" quality={100} />
            <p className="font-vcr mt-2 text-3xl">{track.name}</p>
            {trackModal[index] && (
              <Draggable bounds=".boundarybox">
                <div
                  className={`fixed top-16 z-50 lg:absolute ${index == 0 ? "lg:left-28" : ""}  flex h-fit w-[100vw] flex-col overflow-y-auto overflow-x-hidden border-2 bg-[#b2b2b2] pb-10 md:w-[500px] `}
                >
                  <div className="drag-handle flex min-h-[25px] h-fit items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                    <span className="font-nokia flex items-center justify-center pl-2 text-[10px] text-white">
                      <Image
                        src={notepad as HTMLImageElement}
                        alt="Notepad"
                        className="inline-block w-6 pr-3"
                      />
                      {track.title}
                    </span>

                    <div
                      className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#b0b0b0] hover:cursor-pointer hover:bg-[#757575]"
                      onClick={(e) => closeTrackModal(index, e)}
                      onTouchEnd={(e) => closeTrackModal(index, e)}
                    >
                      <IoMdClose />
                    </div>
                  </div>
                  <div className={`h-fit w-[100vw] p-5 md:w-[500px] lg:w-fit`}>
                    {track.content}
                  </div>
                </div>
              </Draggable>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
