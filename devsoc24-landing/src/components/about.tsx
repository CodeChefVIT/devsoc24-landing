import React from "react";
import Image from "next/image";
import picture1 from "../assets/images/new1.jpeg";
import picture2 from "../assets/images/new2.png";
import picture3 from "../assets/images/new3.png";
import { useTransform, motion, useScroll } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -1250]);

  return (
    <div className="overlay_about font-disket min-w-screen relative h-fit overflow-hidden bg-[#020202] px-2 text-center text-[35px] font-black text-[#9CE79ACC] md:px-10 md:text-[72px]">
      <span className="relative block">DEVSOC’24</span>
      &nbsp; ignites the tech scene with a blaze of innovation, where yesterday
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
      In its fourth edition, this boundary-pushing hackathon transcends limits,
      merging AI and the <span>metaverse</span>
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
      Join the fray as we smash barriers and redefine what&apos;s possible.
    </div>
  );
};

export default About;
