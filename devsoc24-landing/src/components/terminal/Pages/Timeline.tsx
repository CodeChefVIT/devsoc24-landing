import React, { useState } from "react";
import TimelineCard from "@/components/TimelineCard";

const timelineData = [
  {
    day: 1,
    title: "Entry and Registration",
    time: "18:00",
    image: "entry.svg",
  },
  {
    day: 1,
    title: "Hacking Starts",
    time: "20:00",
    image: "windows.svg",
  },
  {
    day: 2,
    title: "Review 1",
    time: "3:00",
    image: "address.svg",
  },
  {
    day: 2,
    title: "ContentStack speaker session",
    time: "12:00",
    image: "microphone.svg",
  },
  {
    day: 2,
    title: "Akhil Sharma speaker session",
    time: "16:00",
    image: "microphone.svg",
  },
  {
    day: 2,
    title: "Saurabh Soni speaker session",
    time: "22:00",
    image: "microphone.svg",
  },
  // {
  //   day: 3,
  //   title: "Fun activity/competition (tbd)",
  //   time: "1:00",
  //   image: "",
  // },
  {
    day: 3,
    title: "Review 2",
    time: "2:00",
    image: "address.svg",
  },
  // {
  //   day: 3,
  //   title: "Fun activity/competition (tbd)",
  //   time: "12:00",
  //   image: "",
  // },
  {
    day: 3,
    title: "End of Hacking",
    time: "13:00",
    image: "computer.svg",
  },
  {
    day: 3,
    title: "Final Pitches",
    time: "14:00",
    image: "pitch.svg",
  },
  {
    day: 3,
    title: "Prize distribution and Closing",
    time: "16:00",
    image: "winner.svg",
  },
];

export default function Timeline() {
  return (
    <div
      className={`bgImg  pt-10 relative flex h-full min-h-[92vh] w-full flex-wrap gap-6 pl-[30px]`}
    >
      {timelineData.map((item, index) => (
        <TimelineCard
          key={index}
          day={item.day}
          title={item.title}
          time={item.time}
          image={item.image}
        />
      ))}
    </div>
  );
}
