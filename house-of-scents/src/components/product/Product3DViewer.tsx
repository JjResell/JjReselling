'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';
import { PerfumeBottle } from '@/components/3d/PerfumeBottle';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

interface Product3DViewerProps {
  color?: string;
  className?: string;
}

export function Product3DViewer({ color, className }: Product3DViewerProps) {
  return (
    <div className={className ?? 'relative h-[480px] w-full'}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <spotLight position={[5, 8, 5]} intensity={1.2} angle={0.4} penumbra={1} />
        <pointLight position={[-5, -2, -5]} intensity={0.6} color="#c9a84c" />
        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5}>
            <PerfumeBottle color={color} />
          </Float>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
      <noscript>
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </noscript>
    </div>
  );
}
