"use client";

import { useState, useEffect } from "react";
// import ProgressBar from "../_components/progressbar";
interface Command {
  command: string;
  output: string[];
}
const Terminal = () => {
  const [inputValue, setInputValue] = useState("");
  const [commands, setCommands] = useState<Command[]>([]);
  const [redProgress, setRedProgress] = useState(0);
  const [greenProgress, setGreenProgress] = useState(0);
  const [blueProgress, setBlueProgress] = useState(0);

  // const endOfMessagesRef = useRef(null);

type CommandOutputs = Record<string, string[]>;


  const commandOutputs: CommandOutputs = {
    whatisdevsoc: [
      "Hey, hjdsbc ADFH Ga dsfhLA a",
      "hasbfdsf DIF KJa dfiu AIF ahidf UADHFIpdfhIAFafnFa",
    ],
    whoisdevsoc: [
      "The paradox of “Who am I?” is: we never know, but, we constantly find out.",
    ],
    whyisdevsoc: [
      "Because exploring the unknown and innovating is at the heart of human nature.",
    ],
    secret: [
      '<span class="command">sudo</span>           Only use if you\'re admin',
    ],
    aditansh: [
      "Still curating... most projects are offline, on GitHub, or confidential.",
    ],
    adityabhaiya: ["Hello"],
    help: [
      '<span class="command" style="margin-right: 50px;">whatisdevsoc</span>          What is Devsoc?',
      '<span class="command">whoisdevsoc</span>           Who is devsoc?',
      '<span class="command">whyisdevsoc</span>           Why is devsoc',
      '<span class="command">aditansh</span>              Aditansh',
      '<span class="command">adityabhaiya</span>          Adityabhaiya',
      '<span class="command">help</span>                  Help',
      '<span class="command">clear</span>                 Clear terminal',
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
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const trimmedInput = inputValue.trim();
      if (trimmedInput === "clear") {
        setCommands([]);
      } else {
        const output = commandOutputs[trimmedInput] ?? [
          `Command not found: ${trimmedInput}`,
        ];
        setCommands([...commands, { command: trimmedInput, output }]);
      }
      setInputValue("");
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
  return (
    <div className="font-diatype h-[400px] bg-[#757575] text-sm md:h-[100%] md:text-xs ">
      <div id="terminal" className="overflow-y-auto bg-[#757575] pt-2">
        {/* <ProgressBar
          redProgress={redProgress}
          greenProgress={greenProgress}
          blueProgress={blueProgress}
        /> */}
        <div className="flex  h-[110px] flex-col items-start border-b-[1px] border-black font-semibold">
          <span className="pb-1 pl-2 pt-1">
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
        <div className="mt-3 pl-[6px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          blanditiis temporibus voluptate ipsam repellendus doloremque. Porro
          quidem soluta eaque reiciendis, tenetur maiores facere neque eos nihil
          iste quis! Sequi modi fugit officiis nesciunt esse inventore magnam
          harum provident, sed dolore explicabo! pariatur!
        </div>
        {/* <span className="color2 ml-[15px]">Welcome to Devsoc web terminal.</span> */}
        {/* <span className="color2 ml-[15px]">For a list of available commands, type</span> <span className="command">'help'</span><span className="color2">.</span> */}
        {commands.map((cmdObj, index) => (
          <div key={index}>
            <div className="command-line">
              <span>devsoc@2024.com:~${cmdObj.command}</span>
            </div>
            {cmdObj.output.map((line, lineIndex) => (
              <div
                key={lineIndex}
                className="command-output"
                dangerouslySetInnerHTML={{ __html: line }}
              ></div>
            ))}
          </div>
        ))}
        <div id="command" className="flex">
          <div id="liner" className="ml-[15px] flex-1">
            <span>devsoc@2024.com:~${inputValue}</span>
            <b className="cursor">█</b>
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
          margin-left: 25px;
        }
        .command-line {
          margin-bottom: 15px;
          margin-left: 15px;
        }
        .command {
          margin-bottom: 15px;
          margin-left: 15px;
        }
      `}</style>
    </div>
  );
};

export default Terminal;
