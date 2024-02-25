import screen from "@/assets/images/screen.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from "@/styles/screen.module.css"

const Screen = (props:{text:string}) => {
    
    return (
        <>
        <div>
            <Image src={screen as StaticImport} alt="screen" className=" z-1"/>
            <div className={`font-wreckside text-8xl w-54 h-54 -rotate-[5deg] absolute top-[20%] left-[33%] z-2`}>
                <p className={`tracking-wide text-center w-min ${styles.flicker}`}>{props.text}</p>
            </div>
        </div>
        </>
 
    );
}
 
export default Screen;