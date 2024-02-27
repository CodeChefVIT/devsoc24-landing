import React from "react";
import Image from "next/image";
import devsoc2k24 from "@/assets/images/DEVSOC24.svg";
import LearnMoreBtn from "./LearnMoreBtn";
import dotgrid from "@/assets/images/dot_grid.svg";
import { useTransform, motion, useScroll } from "framer-motion";

const Timeline: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -3250]);
  return (
    <div className="flex h-[1000px] items-center justify-center bg-[#020202]">
      <div className="bg-logo font-disket overflow-hidden bg-[#020202]">
        <motion.span style={{ y: y }} className="relative block">
          <Image
            className="absolute left-60 top-[1100px]"
            src={dotgrid as HTMLImageElement}
            alt="dotgrid"
            height={100}
            width={100}
          />
        </motion.span>
        <motion.span style={{ y: y }} className="relative block">
          <Image
            className="absolute left-[1160px] top-[1300px]"
            src={dotgrid as HTMLImageElement}
            alt="dotgrid"
            height={100}
            width={100}
          />
        </motion.span>
        <div className="h-[1080px] w-full flex-wrap overflow-x-auto">
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.asdfsadf
            </div>
          </div>
          <div className="mt-14 flex w-full justify-center ">
            <LearnMoreBtn link={""} />
          </div>
          <div className="container flex flex-wrap items-center justify-center gap-10 pt-32 text-center">
            <div className="flex flex-col justify-start">
              <div className="h-24 w-[12vw] border-2 border-[#9CE79A]"></div>
              <div className="below h-6 w-[4vw] bg-[#9CE79A]">
                <div className="ml-2 h-6 w-[8vw] -skew-x-[30deg] bg-[#9CE79A]">sdf</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
