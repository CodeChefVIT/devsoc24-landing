"use client";
import { motion } from "framer-motion";
import styles from "@/styles/btnToPortal.module.css";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import DSLogo from "@/assets/images/DSLogo.svg";

const BtnToPortal = (props: {
  link: string;
  data: string;
  portal: boolean;
}) => {
  return (
    <>
      <motion.a
        href={props.link}
        target="_blank"
        rel="noreferrer noopener"
        className={`${styles.btn} font-disket px-3 py-1 text-xl tracking-tighter flex items-center justify-center w-fit`}
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

export default BtnToPortal;
