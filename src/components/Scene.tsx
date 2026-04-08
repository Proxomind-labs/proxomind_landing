import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 2500 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    const color1 = new THREE.Color('#6366f1');
    const color2 = new THREE.Color('#8b5cf6');
    const color3 = new THREE.Color('#ec4899');
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      pos[i3] = (Math.random() - 0.5) * 60;
      pos[i3 + 1] = (Math.random() - 0.5) * 60;
      pos[i3 + 2] = (Math.random() - 0.5) * 60;
      
      const mix = Math.random();
      const color = mix < 0.33 ? color1 : mix < 0.66 ? color2 : color3;
      col[i3] = color.r;
      col[i3 + 1] = color.g;
      col[i3 + 2] = color.b;
    }
    
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.015;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.008) * 0.05;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        <bufferAttribute args={[colors, 3]} attach="attributes-color" />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingShapes() {
  const group = useRef<THREE.Group>(null);
  
  const shapes = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25 - 8,
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
      scale: Math.random() * 0.4 + 0.15,
      type: i % 3 === 0 ? 'octahedron' : i % 3 === 1 ? 'icosahedron' : 'dodecahedron',
      color: ['#6366f1', '#8b5cf6', '#ec4899'][i % 3],
    }));
  }, []);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <mesh 
          key={i} 
          position={shape.position}
          rotation={shape.rotation}
          scale={shape.scale}
        >
          {shape.type === 'octahedron' && <octahedronGeometry />}
          {shape.type === 'icosahedron' && <icosahedronGeometry />}
          {shape.type === 'dodecahedron' && <dodecahedronGeometry />}
          <meshStandardMaterial
            color={shape.color}
            emissive={shape.color}
            emissiveIntensity={0.4}
            transparent
            opacity={0.5}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

function NeuralNetwork() {
  const group = useRef<THREE.Group>(null);
  
  const { nodes, linePositions } = useMemo(() => {
    const nodeData = Array.from({ length: 35 }, () => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15 - 5,
      ] as [number, number, number],
      scale: Math.random() * 0.12 + 0.04,
    }));

    const lines: { start: [number, number, number]; end: [number, number, number] }[] = [];
    for (let i = 0; i < nodeData.length; i++) {
      for (let j = i + 1; j < nodeData.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodeData[i].position[0] - nodeData[j].position[0], 2) +
          Math.pow(nodeData[i].position[1] - nodeData[j].position[1], 2) +
          Math.pow(nodeData[i].position[2] - nodeData[j].position[2], 2)
        );
        if (dist < 7) {
          lines.push({ start: nodeData[i].position, end: nodeData[j].position });
        }
      }
    }

    const linePos = new Float32Array(lines.length * 6);
    lines.forEach((line, i) => {
      linePos[i * 6] = line.start[0];
      linePos[i * 6 + 1] = line.start[1];
      linePos[i * 6 + 2] = line.start[2];
      linePos[i * 6 + 3] = line.end[0];
      linePos[i * 6 + 4] = line.end[1];
      linePos[i * 6 + 5] = line.end[2];
    });

    return { nodes: nodeData, linePositions: linePos };
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.03;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node.position}>
          <sphereGeometry args={[node.scale, 12, 12]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#8b5cf6"
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute args={[linePositions, 3]} attach="attributes-position" />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

function CentralSphere() {
  const mesh = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.08;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
      mesh.current.scale.set(scale, scale, scale);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.x = Math.PI / 3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ring2Ref.current.rotation.z = Math.PI / 4;
    }
  });

  return (
    <group position={[10, 3, -8]}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[3, 0.015, 12, 100]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.5, 0.015, 12, 100]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 28], fov: 55 }}>
        <color attach="background" args={['#030308']} />
        
        <ambientLight intensity={0.15} />
        <pointLight position={[15, 15, 10]} intensity={0.4} color="#6366f1" />
        <pointLight position={[-15, -15, -10]} intensity={0.25} color="#ec4899" />
        <pointLight position={[0, 20, 5]} intensity={0.2} color="#8b5cf6" />
        
        <Particles count={3500} />
        <FloatingShapes />
        <NeuralNetwork />
        <CentralSphere />
      </Canvas>
    </div>
  );
}

export default Scene;