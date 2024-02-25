import Timeline from "@/components/Timeline";
import About from "@/components/about";
import Main from "@/components/main";
import SmoothScrolling from "@/components/smoothscrolling";

export default function Home() {
  return (
    <>
      <SmoothScrolling>
        <Main />
        <Timeline />
        <About />
      </SmoothScrolling>
    </>
  );
}
