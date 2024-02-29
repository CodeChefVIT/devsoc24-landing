import { motion } from "framer-motion";
import styles from "@/styles/LearnMoreBtn.module.css";
import useGlitchStore, { useFooterStore } from "@/store/store";

const LearnMoreBtn = (props: { link: string }) => {
  const { showFooter, setShowFooter } = useFooterStore();
  const { showGlitch, setGlitch } = useGlitchStore();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowFooter(true);
    setGlitch(true);
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
