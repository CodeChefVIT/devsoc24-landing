import About from "@/components/about";
import Main from "@/components/main";
import NavButton from "@/components/navButton";

export default function Home() {
  return (
    <>
      <NavButton link={"/"} name={"ABC"}/>
      <Main />
      <About />
    </>
  );
}
