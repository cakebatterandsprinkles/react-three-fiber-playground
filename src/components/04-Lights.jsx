// Adding Lights:

import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/Addons.js";

extend({ OrbitControls: OrbitControls });

const Lights = () => {
  const { camera, gl } = useThree();

  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />;
      {/* In order for the lights to work, the mesh material has to be meshStandardMaterial
       * By default, the lights come from straight above and it targets the center of the scene
       * To change it you need to use the 'position' property
       * You can also change color and intensity properties
       */}
      <directionalLight position={[1, 2, 3]} intensity={4} />
      {/* To make the shadows more realistic you need an ambient light (or shadows are strictly black) */}
      <ambientLight intensity={1.5} />
      <group>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh
          ref={cubeRef}
          position-x={2}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="yellowgreen" />
      </mesh>
    </>
  );
};

export default Lights;
