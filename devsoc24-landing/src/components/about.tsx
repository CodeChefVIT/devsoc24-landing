import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import picture1 from "../assets/images/new1.png";
import picture2 from "../assets/images/new2.png";
import picture3 from "../assets/images/new3.png";
import { useTransform, motion, useScroll } from "framer-motion";
import glitch from "@/assets/images/footer_glitch.gif";
import Footer from "./footer";
import useGlitchStore from "@/store/store";

const About = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -1250]);
  const [isBottom, setIsBottom] = useState(false);
  const [showOriginal, setShowOriginal] = useState(true);
  const [showGlitchImage, setShowGlitchImage] = useState(false);
  const { showGlitch, setGlitch } = useGlitchStore();
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const atBottom =
        window.innerHeight + window.scrollY >= (document.body.offsetHeight - 2);
      setIsBottom(atBottom);
      if (
        (atBottom || currentScrollY < prevScrollY.current)
      ) {
        setShowOriginal(!atBottom);
        setShowGlitchImage(true);

        setGlitch(atBottom);
        setShowGlitchImage(false);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showOriginal && (
        <div className="font-disket min-w-screen overlay_about relative h-fit select-none overflow-hidden bg-[#020202] px-2 text-center text-[26px] font-black leading-none tracking-tighter text-[#9CE79ACC] md:px-10 md:text-[100px]">
          DEVSOC&apos;24 ignites the tech scene with a blaze of innovation,
          where yesterday hurdles are today playground.
          <motion.span style={{ y: y }} className="relative block">
            <Image
              src={picture1}
              alt="Image 2"
              height={380}
              width={380}
              className="absolute bottom-[-400px] right-[65px] hidden h-auto w-[250px] md:block md:h-min md:w-min"
            />
          </motion.span>
          <motion.span style={{ y: y }} className="relative block">
            <Image
              src={picture2}
              alt="Image 3"
              height={380}
              width={380}
              className="absolute bottom-[-1250px] left-[10px] hidden h-auto w-[250px] md:-left-[-65px] md:block md:h-min md:w-min"
            />
          </motion.span>
          In its fourth edition, this boundary-pushing hackathon transcends
          limits, merging AI and the metaverse to confront real-world chaos
          head-on. With diverse minds colliding, we&apos;re not just coding;
          we&apos;re crafting solutions that scream revolution. Join the fray as
          we smash your mom and redefine what&apos;s possible.
          <motion.span style={{ y: y }} className="relative block">
            <Image
              src={picture3}
              alt="Image 4"
              height={380}
              width={380}
              className="absolute right-[50px] top-[500px] hidden h-auto w-[250px] md:right-[100px] md:block md:h-min md:w-min"
            />
          </motion.span>
        </div>
      )}
      {/* {showGlitchImage && (
        <Image
          src={glitch}
          alt="glitch"
          height={0}
          width={0}
          className="absolute z-50 min-h-screen w-screen"
        />
      )}
      {showGlitch && (
        <div className="absolute z-50 w-full">
          <Footer />
        </div>
      )} */}
    </>
  );
};
export default About;
