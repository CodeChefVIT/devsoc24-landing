import React, { useState } from "react";
import Image from "next/image";
import { GiMoneyStack } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import book from "@/assets/images/book.svg";
import Draggable from "react-draggable";

const questions = [
  {
    question: "Is the hackathon free to attend?",
    answer:
      "Yes! DEVSOC'24 is completely free to attend thanks to our sponsors.",
  },
  {
    question: "What's the application process like?",
    answer: (
      <p>
        You are required to register for our event on the DEVSOC registrations
        portal where you will be asked for basic details and your GitHub profile
        (if applicable). You&apos;re also required to register on VTOP under the
        &quot;Event Registration&quot; tab. You can simply search for
        &quot;DEVSOC&quot; in the search tab and register for the same. Also,
        join the Discord link on the bottom right of this website.
        <br />
        <br />
        After registration, you will be required to submit a document outlining
        the idea your team will be pursuing during the hackathon. Following the
        idea submission, you will be eligible to attend the hackathon.
      </p>
    ),
  },
  {
    question: "How many team members do I need to have?",
    answer:
      "This hackathon is a team competition where you can have 2-4 members in your team. Most teams aim to have a mix of people with both design and developer skills.",
  },
  {
    question:
      "I don't have much experience with coding or tech events. Should I still participate?",
    answer:
      "We will be evaluating everyone based on different metrics. We'll take into account if you're a fresher and where you stand amongst your peers. If you don't have anything technical to add to your resume, this event is a great opportunity to lay a solid foundation for your tech journey. This hackathon will give you an opportunity to interact with your seniors and gain valuable guidance. Basically, if you're interested in coding or tech events, you're more than welcome to participate!",
  },
  {
    question: "What is a FOSS event? Is DEVSOC a FOSS event?",
    answer: (
      <p>
        A FOSS event refers to an event that focuses on Free and Open Source
        Software, that is both freely available to use and distribute, and whose
        source code is openly accessible. FOSS events can take various forms,
        such as conferences, workshops, hackathons or seminars, and they
        typically bring together developers, enthusiasts, and users of
        open-source software to collaborate.
        <br />
        <br />
        DEVSOC is indeed a Free and Open Source Software (FOSS) event. Our
        commitment to promoting open collaboration and innovation within the
        software development community drives us to organize DEVSOC as a
        platform for tech enthusiasts and experienced innovators alike to
        collaborate harnessing the power of open-source. Through workshops and
        seminars, DEVSOC fosters an inclusive environment where participants can
        learn, share, and contribute to the ever-expanding ecosystem of
        open-source software.
      </p>
    ),
  },
  {
    question: "Have any more queries?",
    answer:
      "If you have any further doubts, feel free to ask your doubts on our Discord server",
  },
];

export default function FAQs() {
  const [showModal, setShowModal] = useState(false);
  const [modalQuestion, setModalQuestion] = useState(questions[0]?.question);
  const [modalContent, setModalContent] = useState(questions[0]?.answer);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bgImg relative mt-10 flex h-full w-full px-[50px] pt-[10px] md:pl-[60px] lg:h-[93vh] 2xl:h-[89vh]">
      <div className="flex flex-row flex-wrap gap-6">
        {questions.map((item, index) => (
          <Draggable handle=".drag-handle" bounds=".boundarybox" key={index}>
            <div
              className="mb-10 flex h-fit max-h-[500px] w-[80vw] flex-col items-stretch border-2 bg-[#b2b2b2] pb-10 md:w-[30vw]"
              id={index.toString()}
            >
              <div className="drag-handle flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
                <span className="font-nokia flex items-center pl-4 text-[10px] text-white">
                  <GiMoneyStack className="pr-2 text-2xl" /> DEVSOC&apos;24
                </span>
              </div>
              <div className="flex">
                <Image src={book as HTMLImageElement} alt="book" className="w-14 p-2 pr-0" />
                <p className="font-vcr inline w-[90%] pl-4 pt-6">
                  {item.question}
                </p>
              </div>
              <button
                className="font-vcr absolute bottom-2 right-2 self-end border-b-[3px] border-r-[3px] border-[#000000] bg-[#aaa9a9] px-2 text-sm transition ease-in-out hover:scale-[1.05] hover:duration-75"
                onClick={() => {
                  setModalQuestion(questions[index]?.question);
                  setModalContent(questions[index]?.answer);
                  toggleModal();
                }}
              >
                Select
              </button>
            </div>
          </Draggable>
        ))}
      </div>
      {showModal && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/60">
          <div className="relative left-0 top-0 z-50 flex h-fit min-h-[20vh] w-fit min-w-[40vw] max-w-[90vw] flex-col border-2 border-white bg-[#b2b2b2] md:max-w-[50vw]">
            <div className="flex h-[25px] w-[100%] items-center justify-between border-b-2 bg-gradient-to-r from-blue-800 to-blue-600">
              <span className="font-nokia flex items-center pl-4 text-[10px] text-white">
                <GiMoneyStack className="pr-2 text-2xl" />
                {modalQuestion}
              </span>
              <section className="flex">
                <span
                  className="mr-1 border-b-[2px] border-r-[2px] border-[#1e1e1e] bg-[#757575] hover:cursor-pointer"
                  onClick={toggleModal}
                >
                  <IoMdClose />
                </span>
              </section>
            </div>
            <p className="font-vcr m-5">{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}
