import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh, Material } from 'three';

interface ModelProps {}

export default function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF('/monitor.gltf');

  if (!nodes || !materials) {
    // Handle case where nodes or materials are not loaded yet
    return null;
  }

  return (
    <group {...props} dispose={null}>
      {nodes.Cube && (
        <mesh geometry={(nodes.Cube as Mesh).geometry} material={(materials.Material as Material)} />
      )}
      {nodes.retro_computer_setup_retro_computer_setup_Mat_0 && (
        <mesh
          geometry={(nodes.retro_computer_setup_retro_computer_setup_Mat_0 as Mesh).geometry}
          material={(materials['retro_computer_setup_Mat.001'] as Material)}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      )}
    </group>
  );
}

useGLTF.preload('/monitor.gltf');
