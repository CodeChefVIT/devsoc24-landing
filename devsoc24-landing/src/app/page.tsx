"use client";
import React, { Suspense, useEffect } from "react";
import Head from "next/head";
import glitch from "@/assets/images/footer-glitch.gif";
import Details from "@/components/Screens/Details";
import Main from "@/components/Screens/Main";
import SmoothScrolling from "@/components/SmoothScrolling";
import useGlitchStore from "@/store/store";
import Footer from "@/components/Screens/Footer";
import bgimage from "@/assets/images/DEVSOCLOGOBIG.svg";
import Image from "next/image";
import { useFooterStore } from "@/store/store";
import HomeLoader from "./loading";

export default function HomePage() {
  const { showFooter, setShowFooter } = useFooterStore();
  const { showGlitch } = useGlitchStore();

  useEffect(() => {
    if (showGlitch && !showFooter) {
      const glitchTimeout = setTimeout(() => {
        setShowFooter(true);
      }, 1000);
      return () => clearTimeout(glitchTimeout);
    }
  }, [showGlitch, showFooter, setShowFooter]);

  return (
    <>
      <Head>
        <title>DEVSOC&apos;24</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <Suspense fallback={<HomeLoader />}>
        <SmoothScrolling>
          {showGlitch && !showFooter && (
            <Image
              src={glitch}
              alt="Glitch"
              className="absolute -z-10 h-[125vh] w-screen min-[450px]:h-screen"
            />
          )}
          {showGlitch && showFooter && <Footer />}
          {!showGlitch && (
            <>
              <div className="fixed z-40 flex h-screen items-center justify-center">
                <Image
                  src={bgimage as HTMLImageElement}
                  alt="bg"
                  className="w-screen"
                />
              </div>
              <div className="z-50">
                <section id="Main">
                  <Main />
                </section>
              </div>
              <section id="About">
                <Details />
              </section>
            </>
          )}
        </SmoothScrolling>
      </Suspense>
    </>
  );
}
