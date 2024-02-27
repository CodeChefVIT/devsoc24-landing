import Image from "next/image";
import { useState, useEffect, SetStateAction } from "react";
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
import TypewriterEffect from "./terminal/typewriter";
import { useTransform, motion, useScroll } from "framer-motion";
import timeline from "@/assets/images/timelinebox.svg"

function Main() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const [className, setClassName] = useState(
    "relative min-h-screen overlaymain font-disket overflow-hidden flex flex-col items-center justify-center",
  );
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = [title, title2, title3, title4];
  const [showBoxes, setShowBoxes] = useState(false);
  const [hoveredBoxIndex, setHoveredBoxIndex] = useState(-1);

  useEffect(() => {
    const intervals = [2000, 400, 600, 400];
    const timer = setTimeout(() => {
      setClassName(
        "relative min-h-screen min-w-screen overlay_hero bg-span font-disket overflow-hidden flex flex-col items-center justify-center z-50",
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
    PowerGlitch.glitch(".box");
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = 1080;
      const opacity = 1 - 7 * (scrollPosition / pageHeight);
      const newOpacity = Math.min(Math.max(opacity, 0), 1);
      setScrollOpacity(newOpacity);

      const timelineSection = document.getElementById("timeline-section");
      if (timelineSection) {
        const timelinePosition = timelineSection.getBoundingClientRect().top;
        if (timelinePosition < window.innerHeight) {
          setShowBoxes(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBoxHover = (index: SetStateAction<number>) => {
    setHoveredBoxIndex(index);
    console.log("")
  };

  return (
    <>
      <motion.div style={{ y: -y }} className="">
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

          <div className="absolute top-6 m-0 w-full p-0 z-50">
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
                  y: [
                    0,
                    300, // Move 300 units vertically downwards
                    0,
                  ],
                  opacity: [0, 0.8, 0],
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
                  y: [0, 300, 0],
                  opacity: [0.8, 0, 0.8],
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
      <motion.div className="relative z-30">
        <div className="flex h-[1000px]  items-center justify-center overflow-hidden bg-[#020202]">
          <div className="font-disket overflow-hidden bg-[#020202]">
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
              <div className="mt-48 max-sm:mt-10 flex w-full justify-center">
                <Image
                  className="mx-20 w-[300px] md:w-[35%]"
                  src={devsoc2k24 as HTMLImageElement}
                  alt="devsoc"
                  quality={100}
                />
              </div>
              <div className="flex w-full justify-center">
                {" "}
                <div className="mx-10 mt-10 w-[500px] text-center text-xs text-[#bbbbbb] md:text-[12px] lg:w-[600px] max-sm:text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.d
                </div>
              </div>
              <div className="mt-14 max-sm:mt-3 flex w-full justify-center ">
                <LearnMoreBtn link={""} />
              </div>
              <div className="container h-fit flex flex-wrap items-center justify-center gap-10 pt-32 max-sm:pt-3 text-center" id="timeline-section">
                {showBoxes && Array.from({ length: 6 }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    
                    className={`flex flex-col justify-start glitcheffect `}
                    onMouseEnter={() => handleBoxHover(index)}
                    onMouseLeave={() => setHoveredBoxIndex(-1)}
                  >
                    <Image src={timeline as HTMLImageElement} alt="dsd" className="size-40 max-sm:size-28 glitcheffect"/>
                  </motion.div>
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
