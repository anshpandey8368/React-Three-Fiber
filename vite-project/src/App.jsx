import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing";
import './style.css';
import Cyl from './Cyl';

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <Bloom 
        mipmapBlur={true}
        intensity={4.0} 
        luminanceThreshold={0} 
        luminanceSmoothing={0.2}
         />
         <ToneMapping adaptive={true} />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
