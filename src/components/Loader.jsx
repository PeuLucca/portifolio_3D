import React from 'react';
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div className="canvas-load">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '4px solid #f1f1f1',
              borderRadius: '50%',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                border: '4px solid transparent',
                borderTopColor: '#3498db',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            ></div>
          </div>
        </div>
        {progress.toFixed(2)}%
      </div>
    </Html>
  );
};

export default Loader;
