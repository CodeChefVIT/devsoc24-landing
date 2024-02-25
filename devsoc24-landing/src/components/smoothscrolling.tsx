"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollingProps {
  children: ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
