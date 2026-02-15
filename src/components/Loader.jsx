import React from 'react';
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[#915EFF]/20 rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-transparent border-t-[#915EFF] rounded-full animate-spin"
            style={{ animation: 'spin 1s linear infinite' }}
          ></div>
        </div>
        <p className="text-white text-sm font-medium">
          {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
