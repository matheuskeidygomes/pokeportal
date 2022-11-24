import React from 'react';
import "./index.css";
import { Canvas, useLoader } from '@react-three/fiber';
import { Environment, OrbitControls} from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Pokeballs() {

  function PokeballsModel(props) {
    const gltf = useLoader(GLTFLoader, 'models/pokeballs/scene.gltf');
    return <primitive object={gltf.scene} {...props} castShadow />
  }

  return <>
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
      <Canvas shadows gl={{ outputEncoding: THREE.sRGBEncoding }}>
        <OrbitControls />
        <axesHelper args={[15]} />
        <ambientLight args={["white", 0.25]} />
        <PokeballsModel position={[0, 0, 0]} />
        <directionalLight args={["yellow", 1]} position={[5, 4, 0]} castShadow />
        <Environment background>
          <mesh>
            <sphereGeometry args={[50, 100, 100]} />
            <meshBasicMaterial color='rgb(0, 135, 246)30, 88, 136)' side={THREE.BackSide} />
          </mesh>
        </Environment>
      </Canvas>
    </div>
  </>
}