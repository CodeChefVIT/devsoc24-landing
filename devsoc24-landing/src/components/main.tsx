import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/assets/images/logo.svg";
import glitch from "@/assets/images/startglitch.svg";
import title from "@/assets/images/title.svg";
import title2 from "@/assets/images/glitchtitle1.svg";
import title3 from "@/assets/images/glitchtitle2.svg";
import title4 from "@/assets/images/glitchtitle3.svg";
import dotgrid from "@/assets/images/dot_grid.svg";
import face from "@/assets/images/compface.svg";
import type {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import NavButton from "@/components/navButton";
import BtnToPortal from "@/components/btnToPortal";
import Screen from "@/components/screen";
import { PowerGlitch } from "powerglitch";
import devsoc2k24 from "@/assets/images/DEVSOC24.svg";
import LearnMoreBtn from "./LearnMoreBtn";

import { useTransform, motion, useScroll } from "framer-motion";

function Main() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const [className, setClassName] = useState(
    "relative min-h-screen overlaymain font-disket overflow-hidden flex flex-col items-center justify-center",
  );
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = [title, title2, title3, title4];

  useEffect(() => {
    const intervals = [2000, 400, 600, 400];
    const timer = setTimeout(() => {
      setClassName(
        "relative min-h-screen min-w-screen overlay_hero bg-span font-disket overflow-hidden flex flex-col items-center justify-center",
      );
    }, 400);

    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, intervals[currentTitleIndex]);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [currentTitleIndex, titles.length]);

  useEffect(() => {
    PowerGlitch.glitch(".glitcheffect");
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = 1080;
      const opacity = 1 - 7 * (scrollPosition / pageHeight);
      const newOpacity = Math.min(Math.max(opacity, 0), 1);
      setScrollOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <motion.div style={{ y: -y }}>
        <div style={{ opacity: scrollOpacity }}>
          <div className={className}>
            <Image src={glitch as StaticImageData} alt="glitch" fill />
            <Image
              src={logo as StaticImport}
              alt="logo"
              width={800}
              className="absolute bottom-0"
            />
          </div>

          <div className="absolute top-6 m-0 w-full p-0">
            <div className="flex items-center justify-center">
              <div className="relative hidden w-[33%] items-center justify-evenly lg:flex">
                <div>
                  <Image
                    src={dotgrid as HTMLImageElement}
                    alt="dotgrid"
                    height={100}
                    width={100}
                    className="absolute bottom-0 left-[17%] top-[40%] h-auto w-[50px] opacity-70 md:h-min md:w-min"
                  />
                  <NavButton link="/" name="About" />
                </div>
                <div>
                  <Image
                    src={dotgrid as HTMLImageElement}
                    alt="dotgrid"
                    height={100}
                    width={100}
                    className="absolute right-[1%] h-auto w-[50px] opacity-70 md:h-min md:w-min"
                  />
                  <NavButton link="/" name="Discord" />
                </div>
              </div>
              <div className="flex flex-col lg:block">
                <Image src={titles[currentTitleIndex] as string} alt="title" />
                <div className="mx-auto mt-6 flex justify-evenly lg:hidden">
                  <NavButton link="/" name="About" />
                  <NavButton link="/" name="Discord" />
                </div>
              </div>

              <div className="hidden w-[33%] justify-center lg:flex">
                <div>
                  <Image
                    src={dotgrid as HTMLImageElement}
                    alt="dotgrid"
                    height={100}
                    width={100}
                    className="absolute bottom-0 left-[65%] top-[2%] h-auto w-[50px] opacity-70 md:h-min md:w-min"
                  />
                  <BtnToPortal link="/" />
                </div>
              </div>
            </div>
            <div className="flex h-screen justify-center overflow-hidden lg:justify-between 2xl:mt-12">
              <motion.div
                className="hidden lg:block"
                style={{ willChange: "transform" }}
                animate={{
                  x: [
                    0,
                    Math.random() * 300 - 150,
                    0,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    0,
                  ],
                  y: [
                    0,
                    Math.random() * 300 - 150,
                    0,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    0,
                  ],
                  opacity: [0, 0.8, 0, 0.8, 0],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <Image
                  src={face as HTMLImageElement}
                  alt="computer face"
                  width={300}
                  className="glitcheffect rotate-[45deg]"
                />
              </motion.div>
              <div className="my-12 sm:my-0">
                <Screen text="Hack Time" />
              </div>
              <motion.div
                className="hidden lg:block"
                style={{ willChange: "transform" }}
                animate={{
                  x: [
                    0,
                    Math.random() * 300 - 150,
                    0,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    0,
                  ],
                  y: [
                    0,
                    Math.random() * 300 - 150,
                    0,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    0,
                  ],
                  opacity: [0.8, 0, 0.8, 0, 0.8],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <Image
                  src={face as HTMLImageElement}
                  alt="computer face"
                  width={300}
                  className="glitcheffect rotate-[315deg]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div style={{ y: y }} className="relative z-50">
        <div className="flex h-[1000px] items-center justify-center overflow-hidden bg-[#020202]">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
              <div className="mt-14 flex w-full justify-center ">
                <LearnMoreBtn link={""} />
              </div>
              <div className="container flex flex-wrap items-center justify-center gap-10 pt-32 text-center">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="flex flex-col justify-start">
                    <div className="h-24 w-[12vw] border-2 border-[#9CE79A]"></div>
                    <div className="below h-6 w-[4vw] bg-[#9CE79A]">
                      <div className="ml-2 h-6 w-[8vw] -skew-x-[30deg] bg-[#9CE79A]"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Main;
