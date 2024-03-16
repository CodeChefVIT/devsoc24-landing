"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Euler, Vector3, type Mesh } from "three";

function MeshComponent() {
  const fileUrl = "../../DevsocMoniFinal1.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  return <primitive object={gltf.scene} ref={mesh} />;
}

const ThreeComputer = () => {
  const [isSmaller, setIsSmaller] = useState(false); // Default state for server-side rendering

  useEffect(() => {
    // Check if window is defined (i.e., we're on the client side)
    if (typeof window !== 'undefined') {
      // Handle resize only on the client side
      function handleResize() {
        setIsSmaller(window.innerWidth < 1024);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="h-[80vh] w-[80vh] ">
      <Canvas className="h-2xl w-2xl">
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={5}
        />
        <ambientLight intensity={0.1} />
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* 0.5, 0.3 smaller than 425 px */}
        <mesh
          position={[0, isSmaller ? -0.5 : -1.8, 0]}
          scale={isSmaller ? 0.03 : 0.05}
        >
          <MeshComponent />
        </mesh>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeComputer;
