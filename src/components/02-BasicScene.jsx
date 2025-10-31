// Creating a basic scene:

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const BasicScene = () => {
  const cubeRef = useRef();

  // useFrame hook: (R3F)
  // The function you provide to useFrame hook will be called on each frame before rendering the scene
  // frame rate is important here: 60 frames per second is the standard but it could be much faster,
  // so if you're using a constant number to update the rotation value, the animation speed is going to change from computer to computer

  useFrame((state, delta) => {
    // first argument (state) provides us with a bunch of information: clock, controls, events, camera (prespective camera), gl (webgl renderer), scene
    // second argument (delta) is the time passed since the last frame in milliseconds
    // using delta to update the rotation value will make the animation go at a similar speed for everyone
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <group>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh
          ref={cubeRef}
          position-x={2}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshBasicMaterial color="mediumpurple" />
        </mesh>
      </group>

      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
    </>
  );
};

export default BasicScene;
