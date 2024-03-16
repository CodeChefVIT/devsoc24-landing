"use client";
import { motion } from "framer-motion";
import styles from "@/styles/Button.module.css";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import DSLogo from "@/assets/images/DSLogo.svg";

const Button = (props: { link?: string; data: string; portal: boolean }) => {
  return (
    <>
      <motion.a
        href={props.link}
        rel="noopener noreferer"
        target="_blank"
        className={`${styles.btn} font-disket absolute z-50 px-3 py-1 text-xl tracking-tighter`}
        whileHover={{ backgroundPosition: "-100%,100%" }}
      >
        {props.portal ? (
          <Image
            src={DSLogo as StaticImport}
            alt="DSLogo"
            className="mr-3 inline-block"
          />
        ) : (
          <></>
        )}
        {props.data}
      </motion.a>
    </>
  );
};

export default Button;
