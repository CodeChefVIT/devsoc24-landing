"use client";

import { useState, useEffect, useRef } from "react";
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

  // const scrollToBottom = () => {
  //   endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [commands]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (redProgress < 40) {
        setRedProgress(redProgress + 1);
      } else if (greenProgress < 30) {
        setGreenProgress(greenProgress + 1);
      } else if (blueProgress < 30) {
        setBlueProgress(blueProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [redProgress, greenProgress, blueProgress]);
  // var currentdate = new Date();

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Simulate entering the 'help' command as the initial command
    const helpOutput = commandOutputs.help ?? [];

    const displayOutput = helpOutput.map(() => ""); // Prepare displayOutput with empty strings for typewriter effect
    setCommands([{ command: "help", output: helpOutput, displayOutput }]);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    if (commands.length > 0) {
      triggerTypewriterEffect(commands.length - 1);
    }
  }, [commands]);

  useEffect(() => {
    scrollToBottom();
  }, [inputValue]);
  return (
    <div className="h-[400px] bg-[#757575] font-diatype text-sm md:h-[100%] md:text-xs ">
      <div id="terminal" className="overflow-y-auto bg-[#757575] md:pt-2 pt-0">
       

           
        <div className="flex  h-[110px] flex-col items-start border-b-[1px] border-black font-semibold">
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
            [Network ] DotMid://19.22.10.14
          </span>
          <span className="pb-1 pl-2 ">[ID ] #ag58aycs</span>
          {/* <span className="pb-1 pl-2 ">{"[Date     ] " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()}</span> */}
        </div>
        <div className="mt-3 pl-[6px]"></div>
        {/* <span className="color2 ml-[15px]">Welcome to Devsoc web terminal.</span> */}
        {/* <span className="color2 ml-[15px]">For a list of available commands, type</span> <span className="command">'help'</span><span className="color2">.</span> */}
        {commands.map((cmdObj, index) => (
          <div key={index}>
            <div className="command-line">
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
            <span>devsoc@2024.com:~${inputValue}</span>
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
