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
import timeline from "@/assets/images/timelinebox.svg";
import { useLenis } from "@studio-freight/react-lenis";

const timelineTexts = [
  "Coming Soon!",
  "Coming Soon!",
  "Coming Soon!",
  "Coming Soon!",
  "Coming Soon!",
  "Coming Soon!",
  "Coming Soon!",
  "Coming Soon!",
];

function Main() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const [className, setClassName] = useState("overlaymain");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = [title, title2, title3, title4];
  const [showBoxes, setShowBoxes] = useState(false);
  const [hoveredBoxIndex, setHoveredBoxIndex] = useState(-1);

  useEffect(() => {
    const intervals = [2000, 400, 600, 400];
    const timer = setTimeout(() => {
      setClassName("min-w-screen overlay_hero bg-span z-50");
    }, 400);

    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, intervals[currentTitleIndex]);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [currentTitleIndex, titles.length]);

  // useEffect(() => {
  //   PowerGlitch.glitch(".glitcheffect");
  //   PowerGlitch.glitch(".box");
  // }, []);
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

  useEffect(() => {
    PowerGlitch.glitch(".glitcheffect");
    PowerGlitch.glitch(".box");

    const handleScroll = () => {
      const timelineSection = document.getElementById("timeline-section");
      if (timelineSection) {
        const timelinePosition = timelineSection.getBoundingClientRect().top;
        if (timelinePosition < window.innerHeight) {
          setShowBoxes(true);
          window.removeEventListener("scroll", handleScroll);
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
    // console.log("");
  };

  const lenis = useLenis(({ scroll }) => {
    // console.log(scroll);
  });

  return (
    <>
      <motion.div style={{ y: -y }} className="">
        <div style={{ opacity: scrollOpacity }}>
          <div
            className={`${className} font-disket relative flex min-h-screen flex-col items-center justify-center overflow-hidden`}
          >
            <Image src={glitch as StaticImageData} alt="glitch" fill />
            <Image
              src={logo as StaticImport}
              alt="logo"
              width={800}
              className="absolute bottom-0"
            />
          </div>

          <div className="absolute top-6 z-50 m-0 w-full p-0">
            <div className="flex items-center justify-center">
              <div className="relative hidden w-[33%] items-center justify-evenly lg:flex">
                <div
                  onClick={() => {
                    lenis?.scrollTo("#about", { lerp: 0.1, duration: 0.5 });
                  }}
                >
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
                  <div
                    onClick={() => {
                      lenis?.scrollTo("#about", { lerp: 0.1, duration: 0.5 });
                    }}
                  >
                    <NavButton link="/" name="About" />
                  </div>
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
                  className="glitcheffect"
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
                <div className="flip">
                  <Image
                    src={face as HTMLImageElement}
                    alt="computer face"
                    width={300}
                    className="glitcheffect"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="relative" id="about">
        <div className="flex h-fit items-center justify-center bg-[#020202]">
          <div className="font-disket min-w-screen overflow-hidden bg-[#020202]">
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
            <div className="h-fit w-full flex-wrap overflow-hidden">
              <div className="mt-48 flex w-full justify-center max-sm:mt-10">
                <Image
                  className="mx-20"
                  src={devsoc2k24 as HTMLImageElement}
                  alt="devsoc"
                  quality={100}
                />
              </div>
              <div className="flex w-full justify-center">
                {" "}
                <div className="mx-10 mt-10 w-[500px] text-center text-xs text-[#bbbbbb] max-sm:text-justify md:text-[12px] lg:w-[600px]">
                  DEVSOC is CodeChef-VIT&apos;s annual flagship event hoping to
                  empower young minds by bringing tech-enthusiasts and thinkers
                  under one roof. This year, the fourth iteration of the
                  hackathon is being held with the goal of creating a
                  sprint-like event, where participants create, hack, and
                  innovate to solve problems while adhering to the spirit of
                  creativity and teamwork. The event is spread over three days,
                  with the hackathon lasting 48 hours. Devsoc is going to be
                  held from 18th-20th of March 2024 at the Anna Auditorium,
                  Vellore Institute of Technology, Vellore
                </div>
              </div>
              <div className="mt-14 flex w-full justify-center max-sm:mt-3">
                <LearnMoreBtn link={""} />
              </div>
              <div
                className="container mb-32 flex h-fit flex-wrap items-center justify-center gap-10 text-center max-xl:pt-16 max-md:pt-4 max-sm:pt-32 max-[415px]:pt-4 xl:pt-32"
                id="timeline-section"
              >
                {showBoxes &&
                  Array.from({ length: 8 }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className={`glitcheffect relative flex flex-col justify-start`}
                      onMouseEnter={() => handleBoxHover(index)}
                      onMouseLeave={() => setHoveredBoxIndex(-1)}
                    >
                      <Image
                        src={timeline as HTMLImageElement}
                        alt="dsd"
                        className="glitcheffect size-40 max-sm:size-28"
                      />
                      <div className="absolute left-0 top-0 flex h-full  w-full items-center justify-center text-[#bbbbbb]">
                        <p className="pb-4">{timelineTexts[index]}</p>
                      </div>
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
