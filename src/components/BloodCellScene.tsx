import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function BloodCell({ position, scale = 1, speed = 1 }: { position: [number, number, number]; scale?: number; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const radius = 1;
    shape.absarc(0, 0, radius, 0, Math.PI * 2, false);

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelSegments: 12,
      bevelSize: 0.15,
      bevelThickness: 0.1,
      curveSegments: 32,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
      meshRef.current.rotation.y += 0.003 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
        <meshStandardMaterial
          color="#dc2626"
          roughness={0.3}
          metalness={0.6}
          emissive="#991b1b"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function SmallCells() {
  const cells = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4 - 2,
      ] as [number, number, number],
      scale: 0.2 + Math.random() * 0.3,
      speed: 0.5 + Math.random() * 1.5,
    }));
  }, []);

  return (
    <>
      {cells.map((cell, i) => (
        <BloodCell key={i} {...cell} />
      ))}
    </>
  );
}

export default function BloodCellScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#ef4444" />
        <pointLight position={[-5, -3, 3]} intensity={0.5} color="#dc2626" />
        <spotLight position={[0, 5, 5]} angle={0.5} penumbra={1} intensity={0.8} color="#f87171" />
        <BloodCell position={[0, 0, 0]} scale={1.2} speed={0.8} />
        <BloodCell position={[-2.5, 1.2, -1]} scale={0.7} speed={1.2} />
        <BloodCell position={[2.8, -0.8, -1.5]} scale={0.6} speed={1} />
        <SmallCells />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
