import Image from "next/image";
import type {
    StaticImageData
  } from "next/dist/shared/lib/get-img-props";
import styles from "@/styles/screen.module.css";
import screen from "@/assets/images/screen.svg";

const Screen = (props: { text: string }) => {
  return (
    <>
      <div className="relative">
        <Image src={screen as StaticImageData} alt="screen" className="relative z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="font-wreckside text-5xl sm:text-6xl md:text-8xl transform">
            <p className={`mb-20 ml-16 min-[360px]:mb-28 sm:ml-24 w-min text-center tracking-wide -rotate-6 ${styles.flicker}`}>
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;
