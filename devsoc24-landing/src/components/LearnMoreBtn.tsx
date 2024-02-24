"use client";
import { motion } from "framer-motion";
import styles from "@/styles/LearnMoreBtn.module.css";

const LearnMoreBtn = (props: { link: string }) => {
  return (
    <>
      <motion.a
        href={props.link}
        className={`${styles.btn} font-disket px-3 py-1 text-xl tracking-tighter`}
        whileHover={{ backgroundPosition: "-100%,100%" }}
      >
        Learn More
      </motion.a>
    </>
  );
};

export default LearnMoreBtn;
