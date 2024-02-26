import Timeline from "@/components/Timeline";
import About from "@/components/about";
import ActionButton from "@/components/actionButton";
import Main from "@/components/main";
import SmoothScrolling from "@/components/smoothscrolling";

export default function Home() {
  return (
    <>
      <SmoothScrolling>
        <section id="Main">
          <Main />
        </section>

        <About />
        <div className="fixed bottom-0 z-40 mb-10 flex w-full justify-center">
          <ActionButton body="Kuch toh" link="/" />
        </div>
      </SmoothScrolling>
    </>
  );
}
