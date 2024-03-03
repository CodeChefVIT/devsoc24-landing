"use client"

import React from "react";
import TypewriterEffect from "@/components/terminal/TypewriterEffect";
import { useTypeStore } from "@/store/store";

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

const HomeLoader = () => {
  // const { typingCompleted, setTypingCompleted } = useTypeStore();
  // const handleTypingComplete = () => {
  //   setTypingCompleted(true);
  // };
  return (
    <div className="min-w-screen min-h-screen bg-black text-white">
      {/* <TypewriterEffect textLines={help} onTypingComplete={handleTypingComplete} /> */}
      
        <div className="text-center">
          <p className="text-2xl">Loading...</p>
        </div>
    </div>
  );
};

export default HomeLoader;
