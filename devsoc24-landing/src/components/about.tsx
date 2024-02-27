import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import picture1 from "../assets/images/new1.png";
import picture2 from "../assets/images/new2.png";
import picture3 from "../assets/images/new3.png";
import {
  useTransform,
  motion,
  useScroll,
} from "framer-motion";
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
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsBottom(atBottom);
      if (atBottom || currentScrollY < prevScrollY.current) {
        setShowOriginal(!atBottom);
        setShowGlitchImage(true);
        setTimeout(() => {
          setGlitch(atBottom);
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
        <div className="font-disket min-w-screen relative h-fit overflow-hidden bg-[#020202] px-2 text-center text-[30px] font-black text-[#9CE79ACC] md:px-10 md:text-[100px]">
          <span className="relative block">DEVSOC’24</span>
          &nbsp; ignites the tech scene with a blaze of innovation, where
          yesterday
          <motion.span style={{ y: y }} className="relative block">
            <Image
              src={picture1}
              alt="Image 2"
              height={400}
              width={400}
              className="absolute bottom-[-400px] right-[10px] h-auto w-[250px] md:-right-[55px] md:h-min md:w-min"
            />
          </motion.span>{" "}
          hurdles are today playground.
          <motion.span style={{ y: y }} className="relative block">
            <Image
              src={picture2}
              alt="Image 3"
              height={400}
              width={400}
              className="absolute bottom-[-1000px] left-[10px] h-auto w-[250px] md:-left-[-35px] md:h-min md:w-min"
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
              className="absolute right-[50px] top-[950px] h-auto w-[250px] md:right-[50px] md:h-min md:w-min"
            />
          </motion.span>{" "}
          to confront real-world chaos head-on. With diverse minds colliding,
          we&apos;re not just coding; we&apos;re crafting solutions that
          scream&nbsp;
          <span className="relative">
            <span>revolution.</span>
          </span>
          Join the fray as we smash your mom and redefine what&apos;s possible.
          <div className="block min-[450px]:hidden">
            <Footer />
          </div>
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
