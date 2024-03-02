import { motion } from "framer-motion";
import styles from "@/styles/LearnMoreBtn.module.css";
import useGlitchStore, { useFooterStore } from "@/store/store";
import { useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

const LearnMoreBtn = (props: { link: string }) => {
  const lenis = useLenis(({ scroll }) => {
    // console.log(scroll);
  });

  const { showFooter, setShowFooter } = useFooterStore();
  const { showGlitch, setGlitch } = useGlitchStore();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    lenis?.scrollTo(3800, { lerp: 0.1, duration: 0.5 });
    // setShowFooter(true);
    // setGlitch(true);
  };

  return (
    <>
      <motion.a
        onClick={handleClick}
        href={props.link}
        className={`${styles.btn} font-disket z-50 px-3 py-1 text-xl tracking-tighter`}
        whileHover={{ backgroundPosition: "-100%,100%" }}
      >
        Learn More
      </motion.a>
    </>
  );
};

export default LearnMoreBtn;
