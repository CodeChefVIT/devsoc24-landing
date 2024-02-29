import React, { useState, useEffect } from "react";
import glitch from "@/assets/images/footer_glitch.gif";
import About from "@/components/about";
import Main from "@/components/main";
import SmoothScrolling from "@/components/smoothscrolling";
import TypewriterEffect from "@/components/terminal/typewriter";
import useGlitchStore from "@/store/store";
import Footer from "@/components/footer";
import bgimage from "@/assets/images/DEVSOCLOGOBIG.svg";
import Image from "next/image";
import { useFooterStore } from "@/store/store";

const help = [
  '<span class="">User validated and online...</span>',
  '<span class="">[[init]]</span>',
  '<span class="">Retriving command data...</span>',
  '<span class="">[complete]</span>',
  '<span class="">User ip found and indexed:</span>',
  '<span class="">Initiating quantum decryption sequence</span>',
  '<span class="">Syncing neural network interfaces.........</span>',
  '<span class="">Overriding mainframe security protocols</span>',
  '<span class="">Hacking into the mainframe matrix...</span>',
  '<span class="">$User id set to 8y14e9f8</span>',
  '<span class="">Initiating quantum decryption sequence...</span>',
  '<span class="">Syncing neural network interfaces...</span>',
  '<span class="">Overriding mainframe security protocols...</span>',
  '<span class="">Hacking into the mainframe matrix...</span>',
  '<span class="" font-weight: bold;>----------------------------------------</span>',
      
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>&nbsp;*******&nbsp;&nbsp;&nbsp;********&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;********&nbsp;&nbsp;&nbsp;*******&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;******&nbsp;</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/**////**&nbsp;/**/////&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;**//////&nbsp;&nbsp;&nbsp;**/////**&nbsp;&nbsp;&nbsp;**////**</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//**&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/*******&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/*********/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**////&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;**&nbsp;&nbsp;////////**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//****&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>/*******&nbsp;&nbsp;/********&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;********&nbsp;&nbsp;//*******&nbsp;&nbsp;&nbsp;//******&nbsp;</p>",
      "<p class='block-text' style='font-size:7.4px;font-weight: bold;'>///////&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;///////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//////&nbsp;&nbsp;</p>",
    
      '<span class="" font-weight: bold;>----------------------------------------</span>',
  '<span class="">Disrupting network protocols with raw socket manipulation...</span>',
  '<span class="">Executing stealth maneuvers with bitwise masking...</span>',
  '<span class="">Loading Welcome............</span>',

  "<br>",
];

export default function Home() {
  const [typingCompleted, setTypingCompleted] = useState(false);
  const {showFooter, setShowFooter} = useFooterStore();
  const { showGlitch, setGlitch } = useGlitchStore();

  useEffect(() => {
    if (showGlitch) {
      const glitchTimeout = setTimeout(() => {
        setShowFooter(true);
      }, 1500); // Display footer after 1 second if glitch is shown
      return () => clearTimeout(glitchTimeout);
    }
  }, [showGlitch]); // Run effect whenever showGlitch changes

  const handleTypingComplete = () => {
    setTypingCompleted(true);
  };

  return (
    <>
    <title>DEVSOC'24</title>
      {typeof window === "undefined" || !typingCompleted ? (
        <div className="pl-3">
          <TypewriterEffect
            textLines={help}
            onTypingComplete={handleTypingComplete}
          />
        </div>
      ) : (
        <SmoothScrolling>
          {showGlitch && !showFooter && (
            <Image
              src={glitch}
              alt="Glitch"
              className="absolute -z-10 h-[125vh] w-screen min-[450px]:h-screen"
            />
          )}
          {showGlitch && showFooter && <Footer />}
          {!showGlitch && (
            <>
              <div className="fixed z-40 flex h-screen items-center justify-center">
                <Image src={bgimage as HTMLImageElement} alt="bg" />
              </div>
              <div className="z-50">
                <section id="Main">
                  <Main />
                </section>
              </div>
              <section id="About">
                <About />
              </section>
            </>
          )}
        </SmoothScrolling>
      )}
    </>
  );
}
