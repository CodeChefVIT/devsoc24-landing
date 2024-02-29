"use client";

import { useState, useEffect, useRef } from "react";
import ProgressBar from "../progressbar";
import { useTerminalStore } from "@/store/store";
import { IoMdClose } from "react-icons/io";
// import ProgressBar from "../_components/progressbar";

interface Command {
  command: string;
  output: string[];
  displayOutput: string[];
}
const Terminal = () => {
  const [inputValue, setInputValue] = useState("");
  const [commands, setCommands] = useState<Command[]>([]);
  const [redProgress, setRedProgress] = useState(0);
  const [greenProgress, setGreenProgress] = useState(0);
  const [blueProgress, setBlueProgress] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const { showTerminal, setShowTerminal } = useTerminalStore();

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal);
  };

  // const endOfMessagesRef = useRef(null);

  type CommandOutputs = Record<string, string[]>;

  const commandOutputs: CommandOutputs = {
    faqs: [
      '<span class="command">whatisdevsoc</span>',
      '<span class="command">whoisdevsoc</span>',
    ],
    sponsors: [
      '<span class="command">????????</span>',
      '<span class="command">404 not found</span>',
    ],
    timeline: [
      '<span class="command">........</span>What is Devsoc?',
      '<span class="command">.........</span>',
    ],
    tracks: [
      '<span class="command">tracks</span>',
      '<span class="command">tracks</span>',
    ],
    prizepool: [
      '<span class="command">25,000</span>',
      '<span class="command">rupaiye</span>',
    ],
    adityabhaiya: [
      '<span class="command">mostest web dev</span>',
      '<span class="command">to find out more use command <b>aditansh</b></span>',
    ],
    help: [
      '<span class="command">faqs (frequently asked questions)</span>',
      '<span class="command">sponsors (404 notfound)</span>',
      '<span class="command">prizepool (20,000)</span>',
      '<span class="command">timeline (???)</span>',
      '<span class="command">tracks (tracks)</span>',
      '<span class="command">help (to view all commands)</span>',
      '<span class="command">clear (to clear the terminal)</span>',
      '<span class="command">rolls (if you want a role in codechef</span>',
      '<span class="command">then use rolls command</span>',
      '<span class="command">to contact us)</span>',
      "<br>",
    ],
    clear: [],
    banner: [
      "<p class='block-text' style='font-size:9px;'>&nbsp;*******&nbsp;&nbsp;&nbsp;********&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;********&nbsp;&nbsp;&nbsp;*******&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;******&nbsp;</p>",
      "<p class='block-text' style='font-size:9px;'>/**////**&nbsp;/**/////&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;**//////&nbsp;&nbsp;&nbsp;**/////**&nbsp;&nbsp;&nbsp;**////**</p>",
      "<p class='block-text' style='font-size:9px;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//**&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;</p>",
      "<p class='block-text' style='font-size:9px;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/*******&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/*********/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
      "<p class='block-text' style='font-size:9px;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**////&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;**&nbsp;&nbsp;////////**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
      "<p class='block-text' style='font-size:9px;'>/**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//****&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**</p>",
      "<p class='block-text' style='font-size:9px;'>/*******&nbsp;&nbsp;/********&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;********&nbsp;&nbsp;//*******&nbsp;&nbsp;&nbsp;//******&nbsp;</p>",
      "<p class='block-text' style='font-size:9px;'>///////&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;///////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//////&nbsp;&nbsp;</p>",
    ],
    rolls: [],
    initial: [
      '<span class="">$User id set to 8y14e9f8</span>',
      '<span class="">User validated and online...</span>',
      '<span class="">[[init]]</span>',
      '<span class="">Retriving command data...</span>',
      '<span class="">[complete]</span>',
      '<span class="">User ip found and indexed:</span>',
      '<span class="">[found] == 1 online & accessible</span>',
      '<span class="">[anomalies] == 3 detected</span>',
      '<span class="">Approximated commands reloaded with </span>',
      '<span class="">enhanced network analysis and indexed ip.</span>',
      '<span class="">Ready for realtime monitoring</span>',
      '<span class="">Loading welcome...</span>',
      '<span class="">[complete]</span>',
      '<span class="">to start with, type <b>help</b> to get all commands</span>',
      // "<br>",
    ],
    aaditya: ['<span class="">Mostest frontend dev</span>'],
    designTeam: [
      '<span class="">Calculating.....</span>',
      '<span class="">Calculating.....</span>',
      '<span class="">Calculating.....</span>',
      '<span class="">Calculating.....</span>',
    ],
  };

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of the Enter key

      const trimmedInput = inputValue.trim();
      if (trimmedInput === "clear") {
        setCommands([]);
      } else if (trimmedInput === "rolls") {
        setTimeout(() => {
          window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
        }, 500);
      } else {
        const output = commandOutputs[trimmedInput] ?? [
          `Command not found: ${trimmedInput}`,
        ];
        const displayOutput = output.map(() => "");
        setCommands((prevCommands) => [
          ...prevCommands,
          { command: trimmedInput, output, displayOutput },
        ]);
      }

      setInputValue("");
    }
  };

  useEffect(() => {
    if (commands.length > 0) {
      triggerTypewriterEffect(commands.length - 1);
    }
  }, [commands]);

  const triggerTypewriterEffect = (commandIndex: number) => {
    let currentLineIndex = 0;

    if (commandIndex >= 0 && commandIndex < commands.length) {
      const command = commands[commandIndex];
      if (!command) return;
      const outputLines = command.output;

      const typeNextChar = () => {
        if (currentLineIndex < outputLines.length) {
          const line = outputLines[currentLineIndex] ?? "";
          const currentDisplayLine =
            command.displayOutput[currentLineIndex] ?? "";
          const nextCharIndex = currentDisplayLine.length;

          if (nextCharIndex < line.length) {
            setCommands((prevCommands) => {
              const newCommands = [...prevCommands];
              if (newCommands[commandIndex]) {
                const newDisplayOutput = [
                  ...(newCommands[commandIndex]?.displayOutput ?? []),
                ];
                newDisplayOutput[currentLineIndex] = line.substr(
                  0,
                  nextCharIndex + 1,
                );
                newCommands[commandIndex]!.displayOutput = newDisplayOutput;
              }
              return newCommands;
            });
            setTimeout(typeNextChar, 50);
          } else {
            currentLineIndex++;
            setTimeout(typeNextChar, 0);
          }
        }
      };

      typeNextChar();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);

    event.target.scrollTop = 0;
  };

  useEffect(() => {
    const tick = () => {
      setCurrentTime(new Date()); // This updates the state every second
    };

    const timerID = setInterval(tick, 1000); // Sets up the interval

    return () => {
      clearInterval(timerID); // Clears the interval on component unmount
    };
  }, []);

  const day = currentTime.toLocaleString("default", { weekday: "long" });
  const date = `${currentTime.getDate()}-${currentTime.getMonth() + 1}-${currentTime.getFullYear()}`;
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (redProgress < 40) {
        setRedProgress(redProgress + 1);
      } else if (greenProgress < 40) {
        setGreenProgress(greenProgress + 1.56);
      } else if (blueProgress < 10) {
        setBlueProgress(blueProgress + 1.8);
      } else {
        setRedProgress(0);
        setGreenProgress(0);
        setBlueProgress(0);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [redProgress, greenProgress, blueProgress]);
  // var currentdate = new Date();

  

  useEffect(() => {
    const helpOutput = commandOutputs.initial ?? [];

    const displayOutput = helpOutput.map(() => "");
    setCommands([{ command: "initial", output: helpOutput, displayOutput }]);
  }, []);

  useEffect(() => {
    if (commands.length > 0) {
      triggerTypewriterEffect(commands.length - 1);
    }
  }, [commands]);

  

  return (
    <div className="relative h-[400px] overflow-auto bg-[#757575] font-diatype text-sm md:h-[100%] md:text-[13.3px] md:leading-[13.5px] w-screen sm:w-full">
      <button
        onClick={() => toggleTerminal()}
        className="sm:hidden absolute right-[2px] z-50 flex h-[4vh] w-[4vh] items-center justify-center bg-[#666565] hover:cursor-pointer hover:bg-[#606060]"
      >
        <IoMdClose className="text-lg font-bold " />
      </button>
      <div id="terminal" className=" bg-[#757575] pt-0 md:pt-2">
        <div className="flex h-[140px] flex-col items-start border-b-[1px] border-black md:h-[110px] md:text-[13px] md:leading-[13.5px] ">
          <span className="pb-1 pl-2 pt-3 md:pt-1">
            [Network&nbsp;&nbsp;&nbsp;] DotMid://19.22.10.14
          </span>

          <span className="pb-1 pl-2 ">[ID&nbsp;&nbsp;&nbsp;] #ag58aycs</span>
          <span className="mt-2 pb-1 pl-2">NEXT XRØ UPGRADE: 100%</span>

          <span className="pb-1 pl-2 ">
            [DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] {date} {time}
          </span>
          {/* <span className="pb-1 pl-2 ">{formatDate(currentTime)}</span>
          <span className="pb-1 pl-2 ">{formatTime(currentTime)}</span> */}
          <span className="pb-1 pl-2 ">DotMid ALERT LEVEL: 0%</span>

          {/* <span className="pb-1 pl-2 ">{"[Date     ] " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()}</span> */}
        </div>
        <div className="ml-3 mt-2 max-w-[60%] overflow-y-auto">
          <ProgressBar
            redProgress={redProgress}
            greenProgress={greenProgress}
            blueProgress={blueProgress}
          />
        </div>
        <div className="mt-3 pl-[6px]"></div>
        {/* <span className="color2 ml-[15px]">Welcome to Devsoc web terminal.</span> */}
        {/* <span className="color2 ml-[15px]">For a list of available commands, type</span> <span className="command">'help'</span><span className="color2">.</span> */}

        {commands.map((cmdObj, index) => (
          <div key={index}>
            <div className="command-line font-diatype ">
              <span className="">devsoc@2024.com:~${cmdObj.command}</span>
            </div>
            {cmdObj.displayOutput.map((line, lineIndex) => (
              <div
                key={lineIndex}
                className="command-output"
                dangerouslySetInnerHTML={{ __html: line }}
                
              ></div>
            ))}
          </div>
        ))}

        <div id="command" className="flex">
          <div id="liner" className="ml-[10px] flex-1">
            <span className="font-diatype ">
              devsoc@2024.com:~${inputValue}
            </span>
            <b className="cursor">█</b> 
          </div>
        </div>
        <textarea
          id="texter"
          autoFocus={true}
          className="fixed bottom-0 left-0 h-full w-[20vw] text-wrap bg-transparent opacity-0"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          onFocus={
            (e) => {e.preventDefault()}
          }
        ></textarea>
      </div>

      <style jsx>{`
        .command-output {
          margin-left: 10px;
        }
        .command-line {
          margin-bottom: 10px;
          margin-left: 10px;
        }
        .command {
          margin-bottom: 10px;
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
};

export default Terminal;
