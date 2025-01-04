import React from "react";
import Image from "next/image";
import pattern from "@/assets/images/pattern.svg";
import glitch from "@/assets/images/footer-glitch.gif";
import { useLenis } from "@studio-freight/react-lenis";
import useGlitchStore, { useFooterStore } from "@/store/store";
import { useRouter } from "next/navigation";

const Footer = () => {
  const { setGlitch } = useGlitchStore();
  const { setShowFooter } = useFooterStore();
  const router = useRouter();

  const lenis = useLenis(({ scroll }) => {
    // console.log(scroll);
  });

  return (
    <>
      <Image
        src={glitch}
        alt="smtg"
        height={0}
        width={0}
        className="absolute -z-10 h-[100vh] w-screen min-[450px]:h-screen"
      />
      <div className="flex flex-col items-center justify-center my-auto h-[90vh] sm:h-screen">
        <div
          className={`flex select-none items-center justify-center overflow-hidden`}
        >
          <div className="h-fit w-fit border-2 border-black bg-[#7F32DA] p-[1px]">
            <div className=" h-fit w-[320px] flex-row overflow-hidden border-2 border-black bg-[#7F32DA] min-[420px]:w-[400px]">
              <div className="relative flex justify-center border-b-2 border-black">
                <Image
                  src={pattern as HTMLImageElement}
                  alt="pattern"
                  height={0}
                  width={0}
                  className="w-[100%]"
                />
                <div className="font-vcr mx-2 text-black">Message</div>
                <Image
                  src={pattern as HTMLImageElement}
                  alt="pattern"
                  height={0}
                  width={0}
                  className="w-[100%]"
                />
                <div
                  className="font-vcr absolute right-0 flex h-[100%] w-fit items-center justify-center border-l-2 border-black bg-[#7F32DA] p-1 text-black hover:cursor-pointer hover:bg-black hover:text-white"
                  onClick={() => {
                    lenis?.scrollTo("#Main", { lerp: 0.1, duration: 1 });
                    setGlitch(false);
                    setShowFooter(false);
                  }}
                >
                  X
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-2 text-black">
                <div className="block-text my-2">
                  <p>
                    ██████╗&nbsp;███████╗██╗&nbsp;&nbsp;&nbsp;██╗███████╗&nbsp;██████╗&nbsp;&nbsp;██████╗
                  </p>
                  <p>
                    ██╔══██╗██╔════╝██║&nbsp;&nbsp;&nbsp;██║██╔════╝██╔═══██╗██╔════╝
                  </p>
                  <p>
                    ██║&nbsp;&nbsp;██║█████╗&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;██║███████╗██║&nbsp;&nbsp;&nbsp;██║██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <p>
                    ██║&nbsp;&nbsp;██║██╔══╝&nbsp;&nbsp;╚██╗&nbsp;██╔╝╚════██║██║&nbsp;&nbsp;&nbsp;██║██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <p>
                    ██████╔╝███████╗&nbsp;╚████╔╝&nbsp;███████║╚██████╔╝╚██████╗
                  </p>
                  <p>
                    ╚═════╝&nbsp;╚══════╝&nbsp;&nbsp;╚═══╝&nbsp;&nbsp;╚══════╝&nbsp;╚═════╝&nbsp;&nbsp;╚═════╝
                  </p>
                </div>

              <p className="font-vcr my-2 whitespace-pre-wrap text-sm font-light">
                Trying to Learn More? We can help you. Top Secret Information is
                right at your finger tips. To take the leap is what you choose.
              </p>
              <button
                // onClick={() => {
                //   void router.push("/menu");
                // }}
                className="font-vcr z-[100] my-2 flex h-[50px] w-[100px] items-center justify-center border-2 border-black bg-white text-black hover:cursor-pointer hover:bg-black hover:text-white sm:self-start"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex w-full flex-col items-center justify-between text-[10px] min-[450px]:absolute min-[450px]:bottom-0 md:flex-row md:text-[15px]`}
      >
        <div className="font-disket mx-10 my-5 flex flex-col gap-2 self-center text-white md:self-end">
          <div className="flex flex-row  justify-between gap-0 md:justify-start md:gap-10">
            <a
              href="https://www.instagram.com/codechefvit?igsh=Z3ZzeGQwcndmNXUy"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-black px-1 uppercase hover:cursor-pointer hover:bg-[#CFCFCF] hover:text-black"
            >
              instagram
            </a>
            <a
              href="https://www.linkedin.com/company/codechef-vit-chapter/"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-black px-1 uppercase hover:cursor-pointer hover:bg-[#CFCFCF] hover:text-black"
            >
              linkedin
            </a>
          </div>
          <div className="flex flex-col">
            <div className="bg-black px-1 uppercase">
              © Copyright 2024 codechef-vit
            </div>
            <div className="bg-black px-1 uppercase">All rights reserved.</div>
          </div>
        </div>
        <div className="font-disket mx-10 my-5 flex flex-row gap-2 text-center text-white sm:self-end">
          <a
            href="https://www.youtube.com/watch?v=s-NfumQCiVE"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-black px-1 uppercase hover:cursor-pointer hover:bg-[#CFCFCF] hover:text-black"
          >
            privacy policy
          </a>

            <a
              href="https://haveibeenpwned.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-black px-1 uppercase hover:cursor-pointer hover:bg-[#CFCFCF] hover:text-black"
            >
              cookie policy
            </a>

            <a
              href="https://medium.com/humanid/why-not-reading-terms-of-service-is-okay-b47cc271c4f4"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-black px-1 uppercase hover:cursor-pointer hover:bg-[#CFCFCF] hover:text-black"
            >
              terms of service
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
