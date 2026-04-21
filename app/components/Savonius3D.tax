'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

/**
 * One Savonius blade (semi-cylinder).
 * We use CylinderGeometry with thetaLength = PI (half cylinder).
 */
function Blade({
  radius = 0.25,
  height = 1,
  color = '#2563eb',
  rotationY = 0,
  xOffset = 0,
}: {
  radius?: number;
  height?: number;
  color?: string;
  rotationY?: number;
  xOffset?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh ref={ref} rotation={[0, rotationY, 0]} position={[xOffset, 0, 0]}>
      <cylinderGeometry
        args={[radius, radius, height, 64, 1, false, 0, Math.PI]}
      />
      <meshStandardMaterial
        color={color}
        metalness={0.4}
        roughness={0.35}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/**
 * Rotor assembly: two offset half-cylinders (S-shape) + end plates + shaft.
 */
function Rotor() {
  const group = useRef<THREE.Group>(null!);

  // continuous rotation
  useFrame((_, delta) => {
    group.current.rotation.y += delta * 1.2; // speed
  });

  const R = 0.25;     // blade radius
  const H = 1.0;      // height
  const overlap = 0.08; // overlap offset (meters-ish scene units)

  return (
    <group ref={group}>
      {/* Shaft */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, H + 0.2, 32]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Top & Bottom end plates */}
      <mesh position={[0, H / 2 + 0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[R * 1.15, R * 1.15, 0.04, 64]} />
        <meshStandardMaterial color="#e5e7eb" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, -H / 2 - 0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[R * 1.15, R * 1.15, 0.04, 64]} />
        <meshStandardMaterial color="#e5e7eb" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Blade A */}
      <Blade
        radius={R}
        height={H}
        color="#2563eb"
        rotationY={0}
        xOffset={overlap}
      />

      {/* Blade B (mirrored + rotated 180°) */}
      <Blade
        radius={R}
        height={H}
        color="#ef4444"
        rotationY={Math.PI}
        xOffset={-overlap}
      />
    </group>
  );
}

export default function Savonius3D() {
  return (
    <div className="w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-white">
      <Canvas
        camera={{ position: [2.2, 1.4, 2.2], fov: 50 }}
        shadows
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[3, 3, 3]}
          intensity={1.1}
          castShadow
        />

        {/* Ground hint */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.7, 0]}>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.15} />
        </mesh>

        {/* Rotor */}
        <Rotor />

        {/* Controls */}
        <OrbitControls enablePan={false} maxDistance={6} minDistance={1.5} />
      </Canvas>
    </div>
  );
}