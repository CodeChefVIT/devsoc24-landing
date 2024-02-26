"use client";
import { motion } from "framer-motion";
import styles from "@/styles/btnToPortal.module.css";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import DSLogo from "@/assets/images/DSLogo.svg";

const ActionButton = (props: { link: string; body: string }) => {
  return (
    <>
      <motion.a
        href={props.link}
        className={`${styles.btn} font-disket px-3 py-1 text-xl tracking-tighter`}
        whileHover={{ backgroundPosition: "-100%,100%" }}
      >
        {props.body}
      </motion.a>
    </>
  );
};

export default ActionButton;
