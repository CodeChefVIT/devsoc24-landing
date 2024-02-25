import Timeline from "@/components/timeline";
import About from "@/components/about";
import Footer from "@/components/footer";
import Main from "@/components/main";
import SmoothScrolling from "@/components/smoothscrolling";

export default function Home() {
  return (
    <>
      <SmoothScrolling>
        <Main />
        <Timeline />
        <About />
        <Footer />
      </SmoothScrolling>
    </>
  );
}
