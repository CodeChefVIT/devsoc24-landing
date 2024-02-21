import React from "react";
import Image from "next/image";
import dotgrid from "@/assets/images/dot_grid.svg";

const About = () => {
  return (
    <div className="overlay_about font-disket relative h-fit w-screen overflow-hidden  bg-[#020202] px-2 text-center text-[35px]  font-black text-[#9CE79ACC] md:px-10 md:text-[100px]">
      <span className="relative">
        <span>DEVSOC’24</span>
        <Image
          src={dotgrid as HTMLImageElement}
          alt="dotgrid"
          height={100}
          width={100}
          className="absolute bottom-0 left-[30%] h-auto w-[50px] md:h-min md:w-min"
        />
      </span>
      &nbsp; ignites the tech scene with a blaze of innovation, where&nbsp;
      <span className="relative">
        <span>yesterday&apos;s</span>
        <Image
          src={dotgrid as HTMLImageElement}
          alt="dotgrid"
          height={100}
          width={100}
          className="absolute -right-[13%] bottom-[15%] h-auto w-[50px] md:h-min md:w-min"
        />
      </span>{" "}
      hurdles are today&apos;s{" "}
      <span className="relative">
        <span>playground.</span>
        <Image
          src={dotgrid as HTMLImageElement}
          alt="dotgrid"
          height={100}
          width={100}
          className="absolute -left-[13%] bottom-[15%] h-auto w-[50px] md:h-min md:w-min"
        />
      </span>{" "}
      In its fourth edition, this boundary-pushing hackathon transcends limits,
      merging AI and the{" "}
      <span className="relative">
        <span>metaverse</span>
        <Image
          src={dotgrid as HTMLImageElement}
          alt="dotgrid"
          height={100}
          width={100}
          className="absolute bottom-[5%] left-[50%] h-auto w-[50px] md:h-min md:w-min"
        />
      </span>{" "}
      to confront real-world chaos head-on. With{" "}
      <span className="relative">
        <span>diverse</span>
        <Image
          src={dotgrid as HTMLImageElement}
          alt="dotgrid"
          height={100}
          width={100}
          className="absolute -left-[10%] bottom-[5%] h-auto w-[50px] md:h-min md:w-min"
        />
      </span>{" "}
      minds colliding, we&apos;re not just coding; we&apos;re crafting solutions
      that scream&nbsp;
      <span className="relative">
        <span>revolution.</span>
        <Image
          src={dotgrid as HTMLImageElement}
          alt="dotgrid"
          height={100}
          width={100}
          className="absolute bottom-[3%] right-[30%] h-auto w-[50px] md:h-min md:w-min"
        />{" "}
      </span>
      Join the fray as we smash barriers and redefine what&apos;s possible.
    </div>
  );
};

export default About;
