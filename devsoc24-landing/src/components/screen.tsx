import screen from "@/assets/images/screen.svg"
import Image, { type StaticImageData } from "next/image";
import styles from "@/styles/screen.module.css"

const Screen = (props:{text:string}) => {
    
    return (
        <>
        <div>
            <Image src={screen as StaticImageData} alt="screen" className=" z-1"/>
            <div className={`font-wreckside text-8xl w-54 h-54 -rotate-[5deg] absolute top-[25%] left-[43%] 2xl:left-[44%]  z-2`}>
                <p className={`tracking-wide text-center w-min ${styles.flicker}`}>{props.text}</p>
            </div>
        </div>
        </>
 
    );
}
 
export default Screen;