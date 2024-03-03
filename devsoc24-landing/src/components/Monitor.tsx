"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Monitor from "../../public/Monitor";

const ThreeComputer = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log(ref.current);
  }, [ref.current]);

  return (
    <div className=" h-[100vh] w-[100vw]">
      <Suspense fallback={<p className="">loading</p>}>
        <Canvas camera={{ position: [70, 20, -50], fov: 60 }} ref={ref}>
          <ambientLight intensity={5} />
          {/* <OrbitControls /> */}
          <OrbitControls autoRotate={true} autoRotateSpeed={5} enableZoom={false}/>
          <Monitor />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ThreeComputer;
