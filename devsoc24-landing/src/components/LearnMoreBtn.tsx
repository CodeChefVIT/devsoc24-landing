"use client";
import { motion } from "framer-motion";
import styles from "@/styles/LearnMoreBtn.module.css";
import useGlitchStore from "@/store/store";

const LearnMoreBtn = (props: { link: string }) => {
  const { showGlitch, setGlitch } = useGlitchStore();
  return (
    <>
      <motion.a
        href={props.link}
        className={`${styles.btn} font-disket px-3 py-1 text-xl tracking-tighter z-50`}
        whileHover={{ backgroundPosition: "-100%,100%" }}
      >
        Learn More
      </motion.a>
    </>
  );
};

export default LearnMoreBtn;
