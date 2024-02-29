import React, { useEffect, useState } from "react";
import { useSelectedStore, useTerminalStore } from "@/store/store";
import ProgressBar from "../progressbar";

//Commands
const help = [
  '<span class="command">about</span>',
  '<span class="command">sponsors</span>',
  '<span class="command">prizepool</span>',
  '<span class="command">timeline</span>',
  '<span class="command">tracks</span>',
  '<span class="command">clear: clear the terminal</span>',
  '<span class="command">roles: get role in codechefvit</span>',
  '<span class="command">ls: see directories</span>',
  '<span class="command">cd <directory>: to open the directory</span>',
  '<span class="command">banner: to print DEVSOC</span>',

  "<br>",
];

const initial = [
  '<span class="" style="margin-bottom:10px;">$User id set to 8y14e9f8</span>',
  '<span class="" style="margin-bottom:10px;">User validated and online...</span>',
  '<span class="" style="margin-bottom:10px;">[[init]]</span>',
  '<span class="" style="margin-bottom:10px;">Retrieving command data...</span>',
  '<span class="" style="margin-bottom:10px;">[complete]</span>',
  '<span class="" style="margin-bottom:10px;">User ip found and indexed:</span>',
  '<span class="" style="font-weight: bold; margin-bottom:10px;">---------------------------------------</span>',

  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">&nbsp;*******&nbsp;&nbsp;&nbsp;********&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;********&nbsp;&nbsp;&nbsp;*******&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;******&nbsp;</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/**////**&nbsp;/**/////&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;**//////&nbsp;&nbsp;&nbsp;**/////**&nbsp;&nbsp;&nbsp;**////**</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//**&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/**&nbsp;&nbsp;&nbsp;&nbsp;/**/*******&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/*********/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**////&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;**&nbsp;&nbsp;////////**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//****&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/*******&nbsp;&nbsp;/********&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;********&nbsp;&nbsp;//*******&nbsp;&nbsp;&nbsp;//******&nbsp;</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">///////&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;///////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//////&nbsp;&nbsp;</p>',

  '<span class="" style="font-weight: bold; margin-bottom:10px;">---------------------------------------</span>',
  '<span class="" style="margin-bottom:10px;">[found] == 1 online & accessible</span>',
  '<span class="" style="margin-bottom:10px;">[anomalies] == 3 detected</span>',
  '<span class="" style="margin-bottom:10px;">Approximated commands reloaded with </span>',
  '<span class="" style="margin-bottom:10px;">enhanced network analysis and indexed ip.</span>',
  '<span class="" style="margin-bottom:10px;">Ready for realtime monitoring</span>',
  '<span class="" style="margin-bottom:10px;">Loading welcome...</span>',
  '<span class="" style="margin-bottom:10px;">[complete]</span>',
  '<span class="" style="margin-bottom:10px;">to start with, type <b>help</b> to get all commands</span>',
];
const about = [
  '<span class="command">DEVSOC is CodeChef-VIT’s annual flagship event where participants create, hack, and innovate to solve problems while adhering to the spirit of creativity and teamwork. Rub shoulders with some of the brightest minds in tech and boost your tech journey!</span>',
];

const faqs = [
  '<span class="command">hackathon cost</span>',
  '<span class="command">application process</span>',
  '<span class="command">inexperienced</span>',
  '<span class="command">team size</span>',
];

const sponsors = ['<span class="command">Coming Soon</span>'];

const timeline = ['<span class="command">Coming Soon</span>'];

const tracks = [
  '<span class="command">1. AR/VR</span>',
  '<span class="command">2. Blockchain</span>',
  '<span class="command">3. Automation Tools</span>',
  '<span class="command">4. Social Good</span>',
  '<span class="command">5. Health and Wellness</span>',
  '<span class="command">6. Open Innovation</span>',
];

const prizepool = [
  '<span class="command">Printing the Moneyyy!!</span>',
  '<span class="command">More details coming soon...</span>',
];
const ls = [
  '<span class="command">about</span>',
  '<span class="command">timeline</span>',
  '<span class="command">tracks</span>',
  '<span class="command">prizepool</span>',
  '<span class="command">sponsors</span>',
  '<span class="command">portal</span>',
  '<span class="command">faqs</span>',
];

const Terminal = () => {
  const { showTerminal, setShowTerminal } = useTerminalStore();
  const { selectedComponent, setSelectedComponent } = useSelectedStore();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Use States
  const [redProgress, setRedProgress] = useState(0);
  const [greenProgress, setGreenProgress] = useState(0);
  const [blueProgress, setBlueProgress] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  // Use Effect for ProgressBar
  useEffect(() => {
    const interval = setInterval(() => {
      if (redProgress < 40) {
        setRedProgress(redProgress + 0.5);
      } else if (greenProgress < 40) {
        setGreenProgress(greenProgress + 1);
      } else if (blueProgress < 20) {
        setBlueProgress(blueProgress + 1);
      } else {
        setRedProgress(0);
        setGreenProgress(0);
        setBlueProgress(0);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [redProgress, greenProgress, blueProgress]);

  //Functions
  const toggleTerminal = () => {
    setShowTerminal(!showTerminal);
  };

  const updateTime = () => {
    setInterval(() => {
      const currentTime = new Date();
      const date = `${currentTime.getDate()}-${currentTime.getMonth() + 1}-${currentTime.getFullYear()}`;
      const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
      setDate(date);
      setTime(time);
    }, 1000);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setInputValue(e.currentTarget.value);
      e.currentTarget.value = "";

      // Scroll to the bottom of the content box
      const contentBox = document.getElementById("contentBox");
      if (contentBox) {
        contentBox.scrollTop = contentBox.scrollHeight;
      }
    }
  };
  // UseEffect for processing inputValue
  useEffect(() => {
    if (inputValue !== "") {
      let commandOutput = ""; // Variable to hold the output for the typed command
      switch (inputValue) {
        case "help":
          commandOutput = help.join("<br>");
          break;
        case "about":
          commandOutput = about.join("<br>");
          break;
        case "faqs":
          commandOutput = faqs.join("<br>");
          break;
        case "timeline":
          commandOutput = timeline.join("<br>");
          break;
        case "sponsors":
          commandOutput = sponsors.join("<br>");
          break;
        case "initial":
          commandOutput = initial.join("<br>");
          break;
        case "cd about":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("About");
          }
          break;
        case "cd timeline":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("Timeline");
          }
          break;
        case "cd prizepool":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("Prizepool");
          }
          break;
        case "cd sponsors":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("Sponsors");
          }
          break;
        case "cd portal":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("Portal");
          }
          break;
        case "cd faq":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("FAQs");
          }
          break;
        case "cd tracks":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("Tracks");
          }
          break;
        case "cd ..":
          if (selectedComponent === "DEVSOC 2024") {
            commandOutput = "<div>In root directory</div>";
          } else {
            setSelectedComponent("DEVSOC 2024");
          }
          break;
        case "ls":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<div></div>";
          } else {
            commandOutput = ls.join("<br>");
          }
          break;
        case "tracks":
          commandOutput = tracks.join("<br>");
          break;
        case "prizepool":
          commandOutput = prizepool.join("<br>");
          break;
        case "clear":
          // Clear the output value
          setOutputValue("");
          // Clear the input value as well
          setInputValue("");
          // Exit early, no need to continue processing
          return;
        default:
          commandOutput = inputValue + "<div>Command not found</div>";
          break;
      }
      // Prepend the output with the latest command
      setOutputValue(`${outputValue}<br>${inputValue}<br>${commandOutput}`);
      setInputValue("");
    }
  }, [inputValue]);

  //   Trigger Initial Render
  useEffect(() => {
    updateTime();
    setInputValue("initial");
  }, []);

  return (
    <div className="max-h-[96vh] min-h-[96vh] min-w-[95vw] overflow-y-auto overflow-x-hidden bg-[#757575] px-2 md:min-w-[20vw]">
      <div className="mt-2 flex flex-col gap-2">
        <div>[Network&nbsp;&nbsp;&nbsp;] DotMid://127.0.0.1</div>
        <div>ID&nbsp;&nbsp;&nbsp;] #ag58aycs</div>
        <div>NEXT XRØ UPGRADE: 100%</div>
        <div>
          [DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] ${date} ${time}
        </div>
        <div>DotMid ALERT LEVEL: 0%</div>
        <div>---------------------------------------</div>
      </div>

      <div
        id="contentBox"
        className="w-full "
        dangerouslySetInnerHTML={{ __html: outputValue }}
      ></div>
      <div className="flex items-center gap-1 ">
        <p className="flex-shrink-0">
          devsoc@2024
          {selectedComponent === "DEVSOC 2024" ? "" : "/" + selectedComponent?.toString().toLowerCase()} ~
          %
        </p>
        <input
          type="text"
          id="userInput"
          className="custom-cursor h-5 flex-grow border-0 border-transparent bg-transparent outline-none"
          onKeyDown={handleEnter}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Terminal;
