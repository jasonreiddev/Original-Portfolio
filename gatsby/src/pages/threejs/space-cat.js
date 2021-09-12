import React, {useRef, useState, useMemo} from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import * as THREE from 'three';
import {MathUtils} from 'three';
import Layout from '../../components/Layout';

const Cat = (props) => {
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // This reference will give us direct access to the mesh so we can animate it
  const group = useRef();
  useFrame(() => (group.current.rotation.x = group.current.rotation.y += MathUtils.randFloat(0.01, 0.015)));

  return (
    <group // Cat
      ref={group}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <mesh // Body
        {...props}
        scale={[1.5, 1.2, 1.75]}>
        <sphereBufferGeometry args={[0.7, 35, 35]} attach="geometry"/>
        <meshStandardMaterial
          attach="material"
          color={hovered ? 'white' : 'grey'}
        />
      </mesh>
      <mesh // Tail
        {...props}
        scale={[0.5, 0.5, 3]}
        position={[0, 0, -2]}>
        <sphereBufferGeometry args={[0.5, 35, 35]} attach="geometry"/>
        <meshStandardMaterial
          attach="material"
          color={hovered ? 'white' : 'grey'}
        />
      </mesh>
      <mesh // Front Right Leg
        {...props}
        scale={[0.5, 0.5, 0.5]}
        position={[0.5, -0.7, -0.4]}>
        <sphereBufferGeometry args={[0.5, 35, 35]} attach="geometry"/>
        <meshStandardMaterial
          attach="material"
          color={hovered ? 'white' : 'grey'}
        />
      </mesh>
      <mesh // Front Left Leg
        {...props}
        scale={[0.5, 0.5, 0.5]}
        position={[-0.5, -0.7, -0.4]}>
        <sphereBufferGeometry args={[0.5, 35, 35]} attach="geometry"/>
        <meshStandardMaterial
          attach="material"
          color={hovered ? 'white' : 'grey'}
        />
      </mesh>
      <mesh // Back Right Leg
        {...props}
        scale={[0.5, 0.5, 0.5]}
        position={[0.5, -0.7, -1.5]}>
        <sphereBufferGeometry args={[0.5, 35, 35]} attach="geometry"/>
        <meshStandardMaterial
          attach="material"
          color={hovered ? 'white' : 'grey'}
        />
      </mesh>
      <mesh // Back Left Leg
        {...props}
        scale={[0.5, 0.5, 0.5]}
        position={[-0.5, -0.7, -1.5]}>
        <sphereBufferGeometry args={[0.5, 35, 35]} attach="geometry"/>
        <meshStandardMaterial
          attach="material"
          color={hovered ? 'white' : 'grey'}
        />
      </mesh>
      <group // Head
        scale={active ? [2, 2, 2] : [1, 1, 1]}
      >
        <mesh // Base
          {...props}
          scale={[0.6, 0.5, 0.5]}
          position={[0, 0, 0.1]}>
          <sphereBufferGeometry args={[0.7, 35, 35]} attach="geometry" />
          <meshStandardMaterial
            attach="material"
            color={hovered ? 'white' : 'grey'}
          />
        </mesh>
        <mesh // Right Eye
          {...props}
          scale={[0.1, 0.1, 0.1]}
          position={[0.1, 0, 0.4]}>
          <sphereBufferGeometry args={[0.7, 35, 35]} attach="geometry" />
          <meshStandardMaterial
            attach="material"
            color={hovered ? 'grey' : 'black'}
          />
        </mesh>
        <mesh // left Eye
          {...props}
          scale={[0.1, 0.1, 0.1]}
          position={[-0.1, 0, 0.4]}>
          <sphereBufferGeometry args={[0.7, 35, 35]} attach="geometry" />
          <meshStandardMaterial
            attach="material"
            color={hovered ? 'grey' : 'black'}
          />
        </mesh>
        <mesh // Snout
          {...props}
          scale={[0.2, 0.15, 0.2]}
          position={[0, -0.15, 0.4]}>
          <sphereBufferGeometry args={[0.7, 35, 35]} attach="geometry" />
          <meshStandardMaterial
            attach="material"
            color={hovered ? 'white' : 'grey'}
          />
        </mesh>
        <mesh // Tongue
          {...props}
          scale={[0.1, 0.2, 0.05]}
          position={[0, -0.2, 0.4]}>
          <sphereBufferGeometry args={[0.7, 35, 35]} attach="geometry" />
          <meshStandardMaterial
            attach="material"
            color={hovered ? 'pink' : 'red'}
          />
        </mesh>
        <mesh // Right Ear
          {...props}
          scale={[0.1, 0.2, 0.05]}
          position={[-0.2, 0.2, 0.3]}>
          <sphereBufferGeometry args={[0.7, 35, 35]} attach="geometry" />
          <meshStandardMaterial
            attach="material"
            color={hovered ? 'white' : 'grey'}
          />
        </mesh>
        <mesh // Left Ear
          {...props}
          scale={[0.1, 0.2, 0.05]}
          position={[0.2, 0.2, 0.3]}>
          <sphereBufferGeometry args={[0.7, 35, 35]} attach="geometry" />
          <meshStandardMaterial
            attach="material"
            color={hovered ? 'white' : 'grey'}
          />
        </mesh>
      </group>
    </group>
  );
};

function StarsBackground() {
  const group = useRef();
  let theta = 0;
  useFrame(() => {
    // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
    const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.05)));
    group.current.rotation.set(r, r, r);
  });
  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 10, 10);
    const mat = new THREE.MeshBasicMaterial({color: new THREE.Color('lightblue')});
    const coords = new Array(2000).fill().map((i) =>
      [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400]);
    return [geo, mat, vertices, coords];
  }, []);
  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
}

export default function ThreeJS() {
  return (
    <Layout title="Space Cat">
      <div className="space">
        <Canvas >
          <StarsBackground/>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Cat position={[0, 0, -1]}/>
        </Canvas>
      </div>
    </Layout>
  );
};
