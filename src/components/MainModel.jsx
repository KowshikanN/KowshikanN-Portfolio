import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useGLTF,
} from "@react-three/drei";

const MainModel = () => {
  const model = useGLTF("/planet/scene.gltf");
  return (
    <primitive object={model.scene} scene={3} position-y={0} rotation={0} />
  );
};

const MainModelCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      drp={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MainModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MainModelCanvas;
