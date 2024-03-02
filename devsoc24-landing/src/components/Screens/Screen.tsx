import Image from "next/image";
import type { StaticImageData } from "next/dist/shared/lib/get-img-props";
import styles from "@/styles/screen.module.css";
import screen from "@/assets/images/screen.svg";

const Screen = (props: { text: string }) => {
  return (
    <>
      <div className="relative">
        <Image
          src={screen as StaticImageData}
          alt="screen"
          className="relative z-10"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="font-wreckside transform text-5xl sm:text-6xl md:text-8xl">
            <p
              className={`mb-20 ml-16 w-min -rotate-6 text-center tracking-wide min-[360px]:mb-28 sm:ml-24 ${styles.flicker}`}
            >
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;
