import { useState, useEffect, useRef } from "react";
import ProgressBar from "../progressbar";
import {
  useCloseStore,
  useSelectedStore,
  useTerminalStore,
} from "@/store/store";
import { IoMdClose } from "react-icons/io";
// import ProgressBar from "../_components/progressbar";

interface Command {
  command: string;
  output: string[];
  displayOutput: string[];
}
const Terminal_old = () => {
  const [inputValue, setInputValue] = useState("");
  const [commands, setCommands] = useState<Command[]>([]);
  const [redProgress, setRedProgress] = useState(0);
  const [greenProgress, setGreenProgress] = useState(0);
  const [blueProgress, setBlueProgress] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { activeCard, setActiveCard } = useCloseStore();
  const { showTerminal, setShowTerminal } = useTerminalStore();
  const { selectedComponent, setSelectedComponent } = useSelectedStore();

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal);
  };

  // const endOfMessagesRef = useRef(null);

  type CommandOutputs = Record<string, string[]>;

  const commandOutputs: CommandOutputs = {
    about: [
      '<span class="command">DEVSOC is CodeChef-VIT’s annual flagship event where participants create, hack, and innovate to solve problems while adhering to the spirit of creativity and teamwork. Rub shoulders with some of the brightest minds in tech and boost your tech journey!</span>',
    ],
    faqs: [
      '<span class="command">hackathon cost</span>',
      '<span class="command">application process</span>',
      '<span class="command">inexperienced</span>',
      '<span class="command">team size</span>',
    ],
    sponsors: ['<span class="command">Coming Soon</span>'],
    timeline: ['<span class="command">Coming Soon</span>'],
    tracks: [
      '<span class="command">1. AR/VR</span>',
      '<span class="command">2. Blockchain</span>',
      '<span class="command">3. Automation Tools</span>',
      '<span class="command">4. Social Good</span>',
      '<span class="command">5. Health and Wellness</span>',
      '<span class="command">6. Open Innovation</span>',
    ],
    prizepool: [
      '<span class="command">Printing the Moneyyy!!</span>',
      '<span class="command">More details coming soon...</span>',
    ],
    help: [
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
    ],
    clear: [],
    banner: [
      "<p class='block-text' style='font-size:8px;'>&nbsp;*******&nbsp;&nbsp;&nbsp;********&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;********&nbsp;&nbsp;&nbsp;*******&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;******&nbsp;</p>",
      "<p class='block-text' style='font-size:8px;'>/**////**&nbsp;/**/////&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;**//////&nbsp;&nbsp;&nbsp;**/////**&nbsp;&nbsp;&nbsp;**////**</p>",
      "<p class='block-text' style='font-size:8px;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//**&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;</p>",
      "<p class='block-text' style='font-size:8px;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/*******&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/*********/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
      "<p class='block-text' style='font-size:8px;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**////&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;**&nbsp;&nbsp;////////**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
      "<p class='block-text' style='font-size:8px;'>/**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//****&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**</p>",
      "<p class='block-text' style='font-size:8px;'>/*******&nbsp;&nbsp;/********&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;********&nbsp;&nbsp;//*******&nbsp;&nbsp;&nbsp;//******&nbsp;</p>",
      "<p class='block-text' style='font-size:8px;'>///////&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;///////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//////&nbsp;&nbsp;</p>",
    ],
    initial: [
      '<span class="" style="margin-bottom:10px">$User id set to 8y14e9f8</span>',
      '<span class="" style="margin-bottom:10px">User validated and online...</span>',
      '<span class="" style="margin-bottom:10px">[[init]]</span>',
      '<span class="" style="margin-bottom:10px">Retriving command data...</span>',
      '<span class="" style="margin-bottom:10px">[complete]</span>',
      '<span class="" style="margin-bottom:10px">User ip found and indexed:</span>',
      '<span class="" font-weight: bold;>----------------------------------------</span>',

      "<p class='block-text' style='font-size:6.5px;font-weight: bold;'>&nbsp;*******&nbsp;&nbsp;&nbsp;********&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;********&nbsp;&nbsp;&nbsp;*******&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;******&nbsp;</p>",
      "<p class='block-text' style='font-size:6.5px;font-weight: bold;'>/**////**&nbsp;/**/////&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;**//////&nbsp;&nbsp;&nbsp;**/////**&nbsp;&nbsp;&nbsp;**////**</p>",
      "<p class='block-text' style='font-size:6.5px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//**&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;</p>",
      "<p class='block-text' style='font-size:6.5px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/*******&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/*********/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
      "<p class='block-text' style='font-size:6.5px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;/**/**////&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;**&nbsp;&nbsp;////////**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
      "<p class='block-text' style='font-size:6.5px;font-weight: bold;'>/**&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//****&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/**//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;**</p>",
      "<p class='block-text' style='font-size:6.5px;font-weight: bold;'>/*******&nbsp;&nbsp;/********&nbsp;&nbsp;&nbsp;//**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;********&nbsp;&nbsp;//*******&nbsp;&nbsp;&nbsp;//******&nbsp;</p>",
      "<p class='block-text' style='font-size:6.5px;font-weight: bold;'>///////&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;////////&nbsp;&nbsp;&nbsp;&nbsp;///////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//////&nbsp;&nbsp;</p>",

      '<span class="" font-weight: bold;>----------------------------------------</span>',
      '<span class="" style="margin-bottom:10px">[found] == 1 online & accessible</span>',
      '<span class="" style="margin-bottom:10px">[anomalies] == 3 detected</span>',
      '<span class="" style="margin-bottom:10px">Approximated commands reloaded with </span>',
      '<span class="" style="margin-bottom:10px">enhanced network analysis and indexed ip.</span>',
      '<span class="" style="margin-bottom:10px">Ready for realtime monitoring</span>',
      '<span class="" style="margin-bottom:10px">Loading welcome...</span>',
      '<span class="" style="margin-bottom:10px">[complete]</span>',
      '<span class="" style="margin-bottom:10px">to start with, type <b>help</b> to get all commands</span>',
    ],
  };

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of the Enter key
      const trimmedInput = inputValue.trim();
      switch (trimmedInput) {
        case "clear":
          setCommands([]);
          break;
        case "cd ..":
          if (selectedComponent === "DEVSOC 2024") {
            const output = ["in root directory"];
            const displayOutput = output.map(() => "");
            setCommands((prevCommands) => [
              ...prevCommands,
              { command: trimmedInput, output, displayOutput },
            ]);
          } else {
            setSelectedComponent("DEVSOC 2024");
          }
          break;
        case "cd about":
          if (selectedComponent != "DEVSOC 2024") {
            const output = ["directory not found"];
            const displayOutput = output.map(() => "");
            setCommands((prevCommands) => [
              ...prevCommands,
              { command: trimmedInput, output, displayOutput },
            ]);
          } else {
            setSelectedComponent("About");
          }
          break;
        case "cd timeline":
          if (selectedComponent != "DEVSOC 2024") {
            const output = ["directory not found"];
            const displayOutput = output.map(() => "");
            setCommands((prevCommands) => [
              ...prevCommands,
              { command: trimmedInput, output, displayOutput },
            ]);
          } else {
            setSelectedComponent("Timeline");
          }
          break;
        case "cd tracks":
          if (selectedComponent != "DEVSOC 2024") {
            const output = ["directory not found"];
            const displayOutput = output.map(() => "");
            setCommands((prevCommands) => [
              ...prevCommands,
              { command: trimmedInput, output, displayOutput },
            ]);
          } else {
            setSelectedComponent("Tracks");
          }
          break;
        case "cd prizepool":
          if (selectedComponent != "DEVSOC 2024") {
            const output = ["directory not found"];
            const displayOutput = output.map(() => "");
            setCommands((prevCommands) => [
              ...prevCommands,
              { command: trimmedInput, output, displayOutput },
            ]);
          } else {
            setSelectedComponent("Prizepool");
          }
          break;
        case "cd sponsors":
          if (selectedComponent != "DEVSOC 2024") {
            const output = ["directory not found"];
            const displayOutput = output.map(() => "");
            setCommands((prevCommands) => [
              ...prevCommands,
              { command: trimmedInput, output, displayOutput },
            ]);
          } else {
            setSelectedComponent("Sponsors");
          }
          break;
        case "cd portal":
          if (selectedComponent != "DEVSOC 2024") {
            const output = ["directory not found"];
            const displayOutput = output.map(() => "");
            setCommands((prevCommands) => [
              ...prevCommands,
              { command: trimmedInput, output, displayOutput },
            ]);
          } else {
            setSelectedComponent("Portal");
          }
          break;
        case "cd faq":
          if (selectedComponent != "DEVSOC 2024") {
            const output = ["directory not found"];
            const displayOutput = output.map(() => "");
            setCommands((prevCommands) => [
              ...prevCommands,
              { command: trimmedInput, output, displayOutput },
            ]);
          } else {
            setSelectedComponent("FAQs");
          }
        case "ls":
          if (selectedComponent != "DEVSOC 2024") {
            const output = [""];
            const displayOutput = output.map(() => "");
            setCommands((prevCommands) => [
              ...prevCommands,
              { command: trimmedInput, output, displayOutput },
            ]);
          } else {
            const output = [
              '<span class="command">about</span>',
              '<span class="command">timeline</span>',
              '<span class="command">tracks</span>',
              '<span class="command">prizepool</span>',
              '<span class="command">sponsors</span>',
              '<span class="command">portal</span>',
              '<span class="command">faq</span>',
            ];
            const displayOutput = output.map(() => "");
            setCommands((prevCommands) => [
              ...prevCommands,
              { command: trimmedInput, output, displayOutput },
            ]);
          }
          break;
        case "roles":
          setTimeout(() => {
            window.open(
              "https://www.youtube.com/watch?v=xvFZjo5PgG0",
              "_blank",
            );
          }, 500);
          break;
        default:
          const output = commandOutputs[trimmedInput] ?? [
            `Command not found: ${trimmedInput}`,
          ];
          const displayOutput = output.map(() => "");
          setCommands((prevCommands) => [
            ...prevCommands,
            { command: trimmedInput, output, displayOutput },
          ]);
          break;
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
    setActiveCard(["DEVSOC 2024"]);
    setSelectedComponent("DEVSOC 2024");
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
    <div className="relative h-[400px] w-screen overflow-y-auto bg-[#757575] font-diatype text-sm sm:w-full md:h-[100%] md:text-[13.3px] md:leading-[13.5px]">
      <button
        onClick={() => toggleTerminal()}
        className="fixed right-[2px] z-50 flex h-[4vh] w-[4vh] items-center justify-center bg-[#666565] hover:cursor-pointer hover:bg-[#606060] sm:hidden"
      >
        <IoMdClose className="text-lg font-bold " />
      </button>
      <div
        id="terminal"
        className=" w-[20]5vw] overflow-y-auto bg-[#757575] pt-0 md:pt-2"
      >
        <div className="ml-[10px] flex h-fit flex-col items-start gap-[5px] border-b-[1px] border-black pb-5 md:text-[13px] md:leading-[13.5px] ">
          <div className="">
            [Network&nbsp;&nbsp;&nbsp;] DotMid://19.22.10.14
          </div>

          <div className="">[ID&nbsp;&nbsp;&nbsp;] #ag58aycs</div>
          <div className="">NEXT XRØ UPGRADE: 100%</div>

          <div className="">
            [DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] {date} {time}
          </div>
          {/* <span className=" ">{formatDate(currentTime)}</span>
          <span className=" ">{formatTime(currentTime)}</span> */}
          <div className="">DotMid ALERT LEVEL: 0%</div>

          {/* <span className=" ">{"[Date     ] " + currentdate.getDate() + "/"
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
              <span className="font-diatype ">
                devsoc@2024.com
                {selectedComponent === "DEVSOC 2024" || !selectedComponent
                  ? ""
                  : "/" + selectedComponent?.toString().toLowerCase()}
                &nbsp;~ %&nbsp;
                {cmdObj.command}
              </span>
              {/* <span className="">devsoc@2024.com:~$</span> */}
            </div>
            {cmdObj.displayOutput.map((line, lineIndex) => (
              <div
                key={lineIndex}
                className="command-output mb-[5px]"
                dangerouslySetInnerHTML={{ __html: line }}
              ></div>
            ))}
          </div>
        ))}

        <div id="command" className="flex gap-1">
          <div id="liner" className="ml-[10px] flex-1">
            <span className="font-diatype ">
              devsoc@2024.com
              {selectedComponent === "DEVSOC 2024" || !selectedComponent
                ? ""
                : "/" + selectedComponent?.toString().toLowerCase()}
              &nbsp;~ %&nbsp;
              {inputValue}
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
          onFocus={(e) => {
            e.preventDefault();
          }}
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

export default Terminal_old;
