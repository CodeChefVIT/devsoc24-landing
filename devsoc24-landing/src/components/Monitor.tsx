"use client"
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Euler, type Mesh } from "three";

function MeshComponent() {
  const fileUrl = "../../monitor.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useEffect(() => {
    if (mesh.current && gltf.scene) {
      mesh.current.scale.set(0.1, 0.1, 0.1);
    }
  }, [gltf.scene]);

  const euler = new Euler(0, 0, 0);

  if (mesh.current) {
    mesh.current.rotation.set(euler.x, euler.y, euler.z);
  }

  return <primitive object={gltf.scene} ref={mesh} position={[1, -0.4, 0]} />;
}

const ThreeComputer = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas className="h-2xl w-2xl">
        <OrbitControls enableZoom={false} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh position={[1, -0.4, 0]}>
          <MeshComponent />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ThreeComputer;
