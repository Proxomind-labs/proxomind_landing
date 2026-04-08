import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 2500 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const color1 = new THREE.Color('#6366f1');
    const color2 = new THREE.Color('#8b5cf6');
    const color3 = new THREE.Color('#ec4899');
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      positions[i3] = (Math.random() - 0.5) * 60;
      positions[i3 + 1] = (Math.random() - 0.5) * 60;
      positions[i3 + 2] = (Math.random() - 0.5) * 60;
      
      const mix = Math.random();
      const color = mix < 0.33 ? color1 : mix < 0.66 ? color2 : color3;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    return { positions, colors };
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
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
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
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: Math.random() * 0.4 + 0.15,
      type: i % 3 === 0 ? 'octahedron' : i % 3 === 1 ? 'icosahedron' : 'dodecahedron',
      color: ['#6366f1', '#8b5cf6', '#ec4899'][i % 3],
      speed: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <mesh 
          key={i} 
          position={shape.position as [number, number, number]}
          rotation={shape.rotation as [number, number, number]}
        >
          {shape.type === 'octahedron' && <octahedronGeometry args={[shape.scale]} />}
          {shape.type === 'icosahedron' && <icosahedronGeometry args={[shape.scale]} />}
          {shape.type === 'dodecahedron' && <dodecahedronGeometry args={[shape.scale]} />}
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
  
  const nodes = useMemo(() => {
    return Array.from({ length: 35 }, () => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15 - 5,
      ],
      scale: Math.random() * 0.12 + 0.04,
    }));
  }, []);

  const lines = useMemo(() => {
    const lineData: { start: number[]; end: number[] }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodes[i].position[0] - nodes[j].position[0], 2) +
          Math.pow(nodes[i].position[1] - nodes[j].position[1], 2) +
          Math.pow(nodes[i].position[2] - nodes[j].position[2], 2)
        );
        if (dist < 7) {
          lineData.push({ start: nodes[i].position, end: nodes[j].position });
        }
      }
    }
    return lineData;
  }, [nodes]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.03;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node.position as [number, number, number]}>
          <sphereGeometry args={[node.scale, 12, 12]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#8b5cf6"
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}
      {lines.map((line, i) => (
        <line key={`line-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...line.start, ...line.end])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#6366f1" transparent opacity={0.15} />
        </line>
      ))}
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

function GradientBackground() {
  return (
    <mesh position={[0, 0, -50]} scale={[200, 200, 1]}>
      <planeGeometry />
      <shaderMaterial
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          void main() {
            vec3 color1 = vec3(0.012, 0.012, 0.03);
            vec3 color2 = vec3(0.012, 0.012, 0.03);
            vec3 color = mix(color1, color2, vUv.y);
            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
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
        <GradientBackground />
      </Canvas>
    </div>
  );
}

export default Scene;