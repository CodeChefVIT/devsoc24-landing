'use client'
import { motion } from "framer-motion"
import styles from "@/styles/btnToPortal.module.css"
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import DSLogo from "@/assets/images/DSLogo.svg";

const BtnToPortal = (props:{link: string}) => {
    return (
        <>
            <motion.a 
                href={props.link}
                className={`${styles.btn} font-disket text-xl px-3 py-1 tracking-tighter`}
                whileHover={{backgroundPosition:"-100%,100%",}}>
                    <Image src={DSLogo as StaticImport} alt="DSLogo" className="inline-block mr-3"/>
                    Go to Portal
            </motion.a>
        </>
    );
}
 
export default BtnToPortal;