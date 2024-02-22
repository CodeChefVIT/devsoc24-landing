import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/assets/images/logo.svg";
import glitch from "@/assets/images/startglitch.svg";
import title from "@/assets/images/title.svg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

function Main() {
  const [className, setClassName] = useState(
    "relative min-h-screen overlaymain font-disket overflow-hidden",
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName(
        "relative min-h-screen min-w-screen overlay_hero font-disket overflow-hidden flex flex-col items-center justify-center",
      );
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={className}>
      {/* <div className="flex flex-col items-center justify-center"> */}

        
        <Image
          src={title as StaticImport}
          alt="title"
          className="absolute top-4"
        />
        <Image src={glitch as StaticImport} alt="glitch" layout="fill" />

        <Image
          src={logo as StaticImport}
          alt="logo"
          width={800}
          className="absolute bottom-0"
        />
      </div>
    </>
  );
}

export default Main;
