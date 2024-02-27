"use client";

import { useState, useEffect, useRef } from "react";
import ProgressBar from "../progressbar";
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


  // const endOfMessagesRef = useRef(null);

  type CommandOutputs = Record<string, string[]>;

  const commandOutputs: CommandOutputs = {
    whatisdevsoc: [
      '<span class="command">whatisdevsoc</span>What is Devsoc?',
      '<span class="command">whoisdevsoc</span>Who is devsoc?',
    ],
    whoisdevsoc: [
      '<span class="command">whatisdevsoc</span>What is Devsoc?',
      '<span class="command">whoisdevsoc</span>Who is devsoc?',
    ],
    whyisdevsoc: [
      '<span class="command">whatisdevsoc</span>What is Devsoc?',
      '<span class="command">whoisdevsoc</span>Who is devsoc?',
    ],
    secret: [
      '<span class="command">whatisdevsoc</span>What is Devsoc?',
      '<span class="command">whoisdevsoc</span>Who is devsoc?',
    ],
    aditansh: [
      '<span class="command">whatisdevsoc</span>What is Devsoc?',
      '<span class="command">whoisdevsoc</span>Who is devsoc?',
    ],
    adityabhaiya: [
      '<span class="command">whatisdevsoc</span>What is Devsoc?',
      '<span class="command">whoisdevsoc</span>Who is devsoc?',
    ],
    help: [
      '<span class="command">whatisdevsoc</span>What is Devsoc?',
      '<span class="command">whoisdevsoc</span>Who is devsoc?',
      '<span class="command">whyisdevsoc</span>Why is devsoc',
      '<span class="command">aditansh</span>Aditansh',
      '<span class="command">adityabhaiya</span>Adityabhaiya',
      '<span class="command">help</span>Help',
      '<span class="command">clear</span>Clear terminal',
      "<br>",
    ],
    clear: [],
    banner: [
      " /$$$$$$$  /$$$$$$$$ /$$     /$$  /$$$$$$   /$$$$$$   /$$$$$$",
      "| $$__  $$| $$_____/|$$    | $$ /$$__  $$ /$$__  $$ /$$__  $$",
      "| $$  \\$$| $$       |$$    | $$| $$  \\ __/|$$  \\  $$| $$ \\ __/",
      "| $$  | $$| $$$$$   | $$   / $$/|  $$$$$$ |$$   | $$| $$      ",
      "| $$  | $$| $$__/    \\  $$ $$/ \\ ____  $$| $$   | $$| $$      ",
      "| $$  | $$| $$        \\  $$$/   /$$   \\ $$|$$   | $$| $$    $$",
      "| $$$$$$$/| $$$$$$$$   \\  $/   |  $$$$$$/|  $$$$$$/| | $$$$$$/",
      "|_______/ |________/    \\_/     \\______/ \\ ______/ \\ ______/",
    ],
    roll: [],
    initial:[
      '<span class="">$User id set to 8y14e9f8</span>',
      '<span class="">User vakidated and online...</span>',
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
      // "<br>",
    ]
  };

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const trimmedInput = inputValue.trim();
      if (trimmedInput === "clear") {
        setCommands([]);
      } else if (trimmedInput === "roll") {
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


  const day = currentTime.toLocaleString('default', { weekday: 'long' });
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

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

  useEffect(() => {
    scrollToBottom();
  }, [inputValue]);

  
  return (
    <div className="h-[400px] bg-[#757575] font-diatype text-sm md:h-[100%] md:text-[13.3px] md:leading-[13.5px] ">
      <div id="terminal" className="overflow-y-auto bg-[#757575] md:pt-2 pt-0">
       

           
        <div className="flex  h-[110px] flex-col items-start border-b-[1px] border-black md:text-[13px] md:leading-[13.5px] ">
           <div
              style={{
                backgroundImage: `url('/Topborder.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "13px",
              }}
              className="md:hidden flex fixed"
            ></div>
          <span className="pb-1 pl-2 md:pt-1 pt-3">
            [Network&nbsp;&nbsp;&nbsp;] DotMid://19.22.10.14
          </span>
          
          <span className="pb-1 pl-2 ">[ID&nbsp;&nbsp;&nbsp;] #ag58aycs</span>
          <span className="pb-1 pl-2 mt-2">NEXT XRØ UPGRADE: 100%</span>
          
          <span className="pb-1 pl-2 ">[DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] {date}  {time}</span>
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
        <div className="mt-2 max-w-[60%] ml-3">

        <ProgressBar redProgress={redProgress}
        greenProgress={greenProgress}
        blueProgress={blueProgress}/>
        </div>
        <div className="mt-3 pl-[6px]"></div>
        {/* <span className="color2 ml-[15px]">Welcome to Devsoc web terminal.</span> */}
        {/* <span className="color2 ml-[15px]">For a list of available commands, type</span> <span className="command">'help'</span><span className="color2">.</span> */}
        
        {commands.map((cmdObj, index) => (
          <div key={index}>
            <div className="command-line font-bold font-diatype">
              <span>devsoc@2024.com:~${cmdObj.command}</span>
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
            <span className="font-bold">devsoc@2024.com:~${inputValue}</span>
            <b className="cursor">█</b>
            <div style={{ marginBottom: 100 }} ref={endRef} />
          </div>
        </div>
        <textarea
          id="texter"
          autoFocus
          className="absolute left-0 top-0 h-full w-full bg-transparent opacity-0"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
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
