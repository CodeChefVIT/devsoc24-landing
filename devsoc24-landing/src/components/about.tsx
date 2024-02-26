import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import picture1 from "../assets/images/new1.png";
import picture2 from "../assets/images/new2.png";
import picture3 from "../assets/images/new3.png";
import {
  useTransform,
  motion,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import glitch from "@/assets/images/footer_glitch.gif";
import Link from "next/link";
import pattern from "@/assets/images/pattern.svg";
import { PowerGlitch } from "powerglitch";

import Footer from "./footer";

const About = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -1250]);
  const [isBottom, setIsBottom] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);
  const [showOriginal, setShowOriginal] = useState(true);
  const [showGlitchImage, setShowGlitchImage] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    // PowerGlitch.glitch(".glitcheffect");
    const isAtBottom = () => {
      return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const atBottom = isAtBottom();
      setIsBottom(atBottom);
      if (atBottom || currentScrollY < prevScrollY.current) {
        setShowOriginal(!atBottom);
        setShowGlitchImage(true);
        setTimeout(() => {
          setShowGlitch(atBottom);
          setShowGlitchImage(false);
        }, 1000);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showOriginal && (
        <div className={`overlay_about overflow-hidden`}>
          <div className=" font-disket min-w-screen relative h-fit overflow-hidden bg-[#020202] px-2 text-center text-[35px] font-black text-[#9CE79ACC] md:px-10 md:text-[100px]">
            <span className="relative block">DEVSOC’24</span>
            &nbsp; ignites the tech scene with a blaze of innovation, where
            yesterday
            <motion.span style={{ y: y }} className="relative block">
              <Image
                src={picture1}
                alt="Image 2"
                height={400}
                width={400}
                className="absolute -right-[-55px] bottom-[-400px] h-[400px] w-[400px] md:h-min md:w-min"
              />
            </motion.span>{" "}
            hurdles are today playground.
            <motion.span style={{ y: y }} className="relative block">
              <Image
                src={picture2}
                alt="Image 3"
                height={400}
                width={400}
                className="absolute -left-[-35px] bottom-[-1000px] h-[400px] w-[400px] md:h-min md:w-min"
              />
            </motion.span>{" "}
            In its fourth edition, this boundary-pushing hackathon transcends
            limits, merging AI and the <span>metaverse</span>
            <motion.span style={{ y: y }} className="relative block">
              <Image
                src={picture3}
                alt="Image 4"
                height={400}
                width={400}
                className="absolute right-[50px] top-[950px] h-[400px] w-[200px] md:h-min md:w-min"
              />
            </motion.span>{" "}
            to confront real-world chaos head-on. With diverse minds colliding,
            we&apos;re not just coding; we&apos;re crafting solutions that
            scream&nbsp;
            <span className="relative">
              <span>revolution.</span>
            </span>
            Join the fray as we smash barriers and redefine what&apos;s
            possible.
          </div>
        </div>
      )}
      {showGlitchImage && (
        <Image
          src={glitch}
          alt="glitch"
          height={0}
          width={0}
          className="absolute -z-10 min-h-screen w-screen"
        />
      )}
      {showGlitch && (
        <>
          <div>
            <Image
              src={glitch}
              alt="glitch"
              height={0}
              width={0}
              className="absolute -z-10 min-h-screen w-screen"
            />

            <div className="flex flex-col min-h-screen items-center justify-center xl:justify-end overflow-hidden">
              <div className="h-fit w-fit border-2 border-black bg-[#7F32DA] p-[1px]">
                <div className="h-fit w-[320px] min-[360px]:w-[400px] flex-row overflow-hidden border-2 border-black bg-[#7F32DA]">
                  <div className="relative flex justify-center border-b-2 border-black">
                    <Image
                      src={pattern as HTMLImageElement}
                      alt="pattern"
                      height={0}
                      width={0}
                      className="min-[360px]:w-[100%]"
                    />
                    <div className="font-vcr mx-2">Message</div>
                    <Image
                      src={pattern as HTMLImageElement}
                      alt="pattern"
                      height={0}
                      width={0}
                      className="w-[100%]"
                    />
                    <div className="font-vcr absolute right-0 flex h-[100%] w-fit items-center justify-center border-l-2 border-black bg-[#7F32DA] p-1 hover:cursor-pointer hover:bg-black hover:text-white">
                      X
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2">
                    <div className="block-text my-2">
                      <p>
                        ██████╗&nbsp;███████╗██╗&nbsp;&nbsp;&nbsp;██╗███████╗&nbsp;██████╗&nbsp;&nbsp;██████╗
                      </p>
                      <p>
                        ██╔══██╗██╔════╝██║&nbsp;&nbsp;&nbsp;██║██╔════╝██╔═══██╗██╔════╝
                      </p>
                      <p>
                        ██║&nbsp;&nbsp;██║█████╗&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;██║███████╗██║&nbsp;&nbsp;&nbsp;██║██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>
                        ██║&nbsp;&nbsp;██║██╔══╝&nbsp;&nbsp;╚██╗&nbsp;██╔╝╚════██║██║&nbsp;&nbsp;&nbsp;██║██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <p>
                        ██████╔╝███████╗&nbsp;╚████╔╝&nbsp;███████║╚██████╔╝╚██████╗
                      </p>
                      <p>
                        ╚═════╝&nbsp;╚══════╝&nbsp;&nbsp;╚═══╝&nbsp;&nbsp;╚══════╝&nbsp;╚═════╝&nbsp;&nbsp;╚═════╝
                      </p>
                    </div>

                    <p className="font-vcr my-2 whitespace-pre-wrap text-sm font-light">
                      Trying to Learn More? We can help you. Top Secret
                      Information is right at your finger tips. To take the leap
                      is what you choose.
                    </p>
                    <Link
                      href="./terminal"
                      className="font-vcr my-2 flex h-[40px] w-[100px] items-center justify-center self-start border-2 border-black bg-white hover:cursor-pointer hover:bg-black hover:text-white"
                    >
                      Enter
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col justify-between text-[10px] md:flex-row md:text-[15px]">
                <div className="font-disket mx-10 my-5 flex flex-col gap-2 self-center text-white md:self-end">
                  <div className="flex flex-row  justify-between gap-0 md:justify-start md:gap-10">
                    <div className="bg-black px-1 uppercase hover:bg-[#CFCFCF] hover:text-black">
                      instagram
                    </div>
                    <div className="bg-black px-1 uppercase hover:bg-[#CFCFCF] hover:text-black">
                      linkedin
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="bg-black px-1 uppercase">
                      © Copyright 2024 codechef-vit All rights reserved.
                    </div>
                    <div className="bg-black px-1 uppercase">
                      All rights reserved.
                    </div>
                  </div>
                </div>
                <div className="font-disket mx-10 my-5 flex flex-row gap-2 self-center md:self-end text-white">
                  <div className="bg-black px-1 uppercase hover:bg-[#CFCFCF] hover:text-black">
                    privacy policy
                  </div>
                  <div className="bg-black px-1 uppercase hover:bg-[#CFCFCF] hover:text-black">
                    cookie policy
                  </div>
                  <div className="bg-black px-1 uppercase hover:bg-[#CFCFCF] hover:text-black">
                    terms of service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About;
