'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Mesh, Group } from 'three';

interface PerfumeBottleProps {
  color?: string;
}

export function PerfumeBottle({ color = '#c9a84c' }: PerfumeBottleProps) {
  const group = useRef<Group>(null);
  const liquid = useRef<Mesh>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.4;
      group.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }
  });

  return (
    <group ref={group}>
      {/* Glass body */}
      <mesh position={[0, -0.3, 0]} castShadow>
        <boxGeometry args={[1.3, 2, 0.8]} />
        <meshPhysicalMaterial
          color="#1a1a1a"
          transmission={0.6}
          thickness={1}
          roughness={0.05}
          metalness={0.1}
          clearcoat={1}
          ior={1.5}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* Liquid */}
      <mesh ref={liquid} position={[0, -0.55, 0]}>
        <boxGeometry args={[1.15, 1.3, 0.65]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.1}
          metalness={0.3}
          transmission={0.4}
          transparent
          opacity={0.9}
        />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.22, 0.28, 0.4, 32]} />
        <meshPhysicalMaterial
          color="#1a1a1a"
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* Gold cap */}
      <mesh position={[0, 1.25, 0]} castShadow>
        <cylinderGeometry args={[0.32, 0.32, 0.55, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={1}
        />
      </mesh>
      {/* Cap top accent */}
      <mesh position={[0, 1.55, 0]}>
        <cylinderGeometry args={[0.34, 0.32, 0.06, 32]} />
        <meshStandardMaterial color="#e8d5a3" roughness={0.1} metalness={1} />
      </mesh>
    </group>
  );
}
