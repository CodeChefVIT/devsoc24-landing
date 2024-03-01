import React, { useEffect, useState } from "react";
import {
  useCloseStore,
  useSelectedStore,
  useTerminalStore,
} from "@/store/store";
import ProgressBar from "../progressbar";
import styles from "@/styles/innerHTML.module.css";

//Commands
const help = [
  '<span id="command">about</span>',
  '<span id="command">sponsors</span>',
  '<span id="command">prizepool</span>',
  '<span id="command">timeline</span>',
  '<span id="command">tracks</span>',
  '<span id="command">clear: clear the terminal</span>',
  '<span id="command">roles: get role in codechefvit</span>',
  '<span id="command">ls: see directories</span>',
  '<span id="command">cd <directory>: to open the directory</span>',
  '<span id="command">banner: to print DEVSOC</span>',

  "<br>",
];

const initial = [
  '<span class="" style="margin-bottom:10px;">$User id set to 8y14e9f8</span>',
  '<span class="" style="margin-bottom:10px;">User validated and online...</span>',
  '<span class="" style="margin-bottom:10px;">[[init]]</span>',
  '<span class="" style="margin-bottom:10px;">Retrieving command data...</span>',
  '<span class="" style="margin-bottom:10px;">[complete]</span>',
  '<span class="" style="margin-bottom:10px;">User ip found and indexed:</span>',
  '<div id="dottedLine""></span>',

  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">&nbsp;*******&nbsp;&nbsp;&nbsp;********&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;********&nbsp;&nbsp;&nbsp;*******&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;******&nbsp;</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/**////**&nbsp;/**/////&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;**//////&nbsp;&nbsp;&nbsp;**/////**&nbsp;&nbsp;&nbsp;**////**</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//**&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/**&nbsp;&nbsp;&nbsp;&nbsp;/**/*******&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/*********/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**////&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;**&nbsp;&nbsp;////////**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//****&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">/*******&nbsp;&nbsp;/********&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;********&nbsp;&nbsp;//*******&nbsp;&nbsp;&nbsp;//******&nbsp;</p>',
  '<p class="block-text" style="font-size:6.5px; font-weight: bold;">///////&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;///////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//////&nbsp;&nbsp;</p>',

  `<div id="dottedLine"></div>`,

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
  '<span id="command">DEVSOC is CodeChef-VIT’s annual flagship event where participants create, hack, and innovate to solve problems while adhering to the spirit of creativity and teamwork. Rub shoulders with some of the brightest minds in tech and boost your tech journey!</span><br>',
];

const faqs = [
  '<span id="command">hackathon cost</span>',
  '<span id="command">application process</span>',
  '<span id="command">inexperienced</span>',
  '<span id="command">team size</span>',
];

const sponsors = ['<span id="command">Coming Soon</span><br>'];

const timeline = ['<span id="command">Coming Soon</span><br>'];

const tracks = [
  '<span id="command">1. AR/VR</span>',
  '<span id="command">2. Blockchain</span>',
  '<span id="command">3. Automation Tools</span>',
  '<span id="command">4. Social Good</span>',
  '<span id="command">5. Health and Wellness</span>',
  '<span id="command">6. Open Innovation</span>',
  "<br>",
];

const prizepool = [
  '<span id="command">Printing the Moneyyy!!</span>',
  '<span id="command">More details coming soon...</span>',
  "<br>",
];
const ls = [
  '<span id="command">about</span>',
  '<span id="command">timeline</span>',
  '<span id="command">tracks</span>',
  '<span id="command">prizepool</span>',
  '<span id="command">sponsors</span>',
  '<span id="command">portal</span>',
  '<span id="command">faqs</span>',
  "<br>",
];

const Terminal = () => {
  const { showTerminal, setShowTerminal } = useTerminalStore();
  const { selectedComponent, setSelectedComponent } = useSelectedStore();
  const { activeCard, setActiveCard } = useCloseStore();
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
        case "initial":
          commandOutput = initial.join("<br>") + "<br>";
          break;
        case "help":
          commandOutput = help.join("<br>");
          break;
        case "about":
          commandOutput = about.join("<br>") + "<br>";
          break;
        case "faqs":
          commandOutput = faqs.join("<br>") + "<br>";
          break;
        case "timeline":
          commandOutput = timeline.join("<br>") + "<br>";
          break;
        case "sponsors":
          commandOutput = sponsors.join("<br>") + "<br>";
          break;
        case "tracks":
          commandOutput = tracks.join("<br>");
          break;
        case "prizepool":
          commandOutput = prizepool.join("<br>");
          break;
        case "cd about":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<br>" + "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("About");
            setActiveCard(["DEVSOC 2024", "About"]);
          }
          break;
        case "cd timeline":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<br>" + "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("Timeline");
            setActiveCard(["DEVSOC 2024", "Timeline"]);
          }
          break;
        case "cd prizepool":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<br>" + "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("Prizepool");
            setActiveCard(["DEVSOC 2024", "Prizepool"]);
          }
          break;
        case "cd sponsors":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<br>" + "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("Sponsors");
            setActiveCard(["DEVSOC 2024", "Sponsors"]);
          }
          break;
        case "cd portal":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<br>" + "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("Portal");
            setActiveCard(["DEVSOC 2024", "Portal"]);
          }
          break;
        case "cd faqs":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<br>" + "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("FAQs");
            setActiveCard(["DEVSOC 2024", "FAQs"]);
          }
          break;
        case "cd tracks":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<br>" + "<div>no such file or directory</div>";
          } else {
            setSelectedComponent("Tracks");
            setActiveCard(["DEVSOC 2024", "Tracks"]);
          }
          break;
        case "cd ..":
          if (selectedComponent === "DEVSOC 2024") {
            commandOutput = "<div>In root directory</div>";
          } else {
            setSelectedComponent("DEVSOC 2024");
            setActiveCard(["DEVSOC 2024"]);
          }
          break;
        case "ls":
          if (selectedComponent != "DEVSOC 2024") {
            commandOutput = "<div><br></div>";
          } else {
            commandOutput = ls.join("<br>") + "<br>";
          }
          break;
        case "roles":
          setTimeout(() => {
            window.open(
              "https://www.youtube.com/watch?v=xvFZjo5PgG0",
              "_blank",
              "noreferrer,noopener",
            );
          }, 500);
          break;
        case "clear":
          setOutputValue("");
          setInputValue("");
          return;
        default:
          commandOutput = "<div>Command not found</div><br>";
          break;
      }
      setOutputValue(`${outputValue}<br>${inputValue}<br><br>${commandOutput}`);
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
        <div>[ID&nbsp;&nbsp;&nbsp;] #ag58aycs</div>
        <div>NEXT XRØ UPGRADE: 100%</div>
        <div>
          [DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] ${date} ${time}
        </div>
        <div>DotMid ALERT LEVEL: 0%</div>
        <div className="w-full border-b-[2.5px] border-dashed border-black" />
      </div>
      <div className="my-4">
        <p className="mb-2">Loading Brain</p>
        <ProgressBar
          redProgress={redProgress}
          greenProgress={greenProgress}
          blueProgress={blueProgress}
        />
      </div>
      <div className="mb-4 w-full border-b-[2.5px] border-dashed border-black" />
      <div
        id="contentBox"
        className={`w-full`}
        dangerouslySetInnerHTML={{ __html: outputValue }}
      ></div>
      <div className="flex items-center gap-1 ">
        <p className="flex-shrink-0">
          devsoc@2024
          {selectedComponent === "DEVSOC 2024"
            ? ""
            : "/" + selectedComponent?.toString().toLowerCase()}{" "}
          ~ %
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
