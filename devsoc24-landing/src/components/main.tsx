import { motion } from "framer-motion";
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

function Main() {
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

  return (
    <>
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
          <div className="relative flex w-[33%] items-center justify-evenly">
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
          <Image src={titles[currentTitleIndex] as string} alt="title" />
          <div className="flex w-[33%] justify-center">
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
        <div className="flex h-screen justify-between overflow-hidden 2xl:mt-12">
          <motion.div
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
          <div>
            <Screen text="Hack Time" />
          </div>
          <motion.div
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
    </>
  );
}

export default Main;
