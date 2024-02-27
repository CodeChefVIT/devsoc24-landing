import React, { useState, useEffect } from "react";
import Timeline from "@/components/Timeline";
import About from "@/components/about";
import ActionButton from "@/components/actionButton";
import Main from "@/components/main";
import SmoothScrolling from "@/components/smoothscrolling";
import TypewriterEffect from "@/components/terminal/typewriter";

const help = [
  '<span class="">Initiating quantum decryption sequence...</span>',
  '<span class="">Syncing neural network interfaces...</span>',
  '<span class="">Overriding mainframe security protocols...</span>',
  '<span class="">Hacking into the mainframe matrix...</span>',
  '<span class="">Crunching binary data for analysis...</span>',
  '<span class="">Escaping digital mazes through recursive algorithms...</span>',
  '<span class="">Manipulating data streams with bitwise operations...</span>',
  '<span class="">Generating cryptographic keys with prime number algorithms...</span>',
  '<span class="">Unleashing virtual chaos through recursive function calls...</span>',
  '<span class="">Navigating encrypted tunnels with pointer arithmetic...</span>',
  '<span class="">Triggering backdoor access with exploit vectors...</span>',
  '<span class="">Conducting remote exploits using buffer overflow techniques...</span>',
  '<span class="">Compiling rogue scripts with embedded assembly code...</span>',
  '<span class="">Disrupting network protocols with raw socket manipulation...</span>',
  '<span class="">Executing stealth maneuvers with bitwise masking...</span>',
  '<span class="">Initiating cybernetic transcendence through kernel-level exploits...</span>',
  '<span class="">Unraveling encrypted matrices with custom decryption algorithms...</span>',
  '<span class="">Cracking cryptographic puzzles using brute-force techniques...</span>',
  '<span class="">Bypassing biometric authentication through spoofing techniques...</span>',
  '<span class="">Unleashing algorithmic havoc with optimized sorting algorithms...</span>',
  "<br>",
];

export default function Home() {
  const [typingCompleted, setTypingCompleted] = useState(false);
  const handleTypingComplete = () => {
    setTypingCompleted(true);
  };
  return (
    <>
      {typeof window === "undefined" || !typingCompleted ? (
        <div className="pl-3 ">
          <TypewriterEffect
            textLines={help}
            onTypingComplete={handleTypingComplete}
          />
        </div>
      ) : (
        <SmoothScrolling>
          <Main />
          <About />
          <div className="fixed bottom-0 z-40 mb-10 flex w-full justify-center">
            <ActionButton body="Kuch toh" link="/" />
          </div>
        </SmoothScrolling>
      )}
    </>
  );
}
