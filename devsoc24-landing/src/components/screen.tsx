import screen from "@/assets/images/screen.svg"
import Image, { type StaticImageData } from "next/image";
import styles from "@/styles/screen.module.css"

const Screen = (props:{text:string}) => {
    
    return (
        <>
        <div>
            <Image src={screen as StaticImageData} alt="screen" className="z-1"/>
            <div className={`font-wreckside text-5xl sm:text-6xl md:text-8xl w-54 h-54 -rotate-[5deg] absolute top-[41%] min-[360px]:top-[30%] min-[375px]:top-[34%] min-[410px]:top-[30%] sm:top-[20%] md:top-[27%] xl:top-[25%] left-[38%] min-[360px]:left-[42%] sm:left-[39%] xl:left-[43%] 2xl:left-[44%] md:left-[40%] z-2`}>
                <p className={`tracking-wide text-center w-min ${styles.flicker}`}>{props.text}</p>
            </div>
        </div>
        </>
 
    );
}
 
export default Screen;