import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Float, MeshDistortMaterial } from "@react-three/drei";

import CanvasLoader from "../Loader";

const FloatingGeometry = ({ position, color, geometry }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} castShadow receiveShadow>
        {geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {geometry === 'sphere' && <sphereGeometry args={[0.8, 32, 32]} />}
        {geometry === 'torus' && <torusGeometry args={[0.6, 0.3, 16, 100]} />}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const HeroScene = ({ isMobile }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#915EFF" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#00D9FF" />
      
      <FloatingGeometry 
        position={isMobile ? [-2, 0, 0] : [-3, 1, 0]} 
        color="#915EFF" 
        geometry="box"
      />
      <FloatingGeometry 
        position={isMobile ? [2, 0, 0] : [3, -1, 0]} 
        color="#00D9FF" 
        geometry="sphere"
      />
      <FloatingGeometry 
        position={isMobile ? [0, 2, -2] : [0, 2, -3]} 
        color="#FF6B9D" 
        geometry="torus"
      />
    </>
  );
};

const HeroCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <HeroScene isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HeroCanvas;
