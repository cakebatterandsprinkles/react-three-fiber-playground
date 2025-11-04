// Rotating the camera:

// OrbitControls isn’t part of the default Three.js classes (those available in the THREE variable).
// This means that we can’t simply declare it like we declare a <mesh>, a <meshBasicMaterial> or a <sphereGeometry>.
// We are going to import it and “convert” it to a declarative version.

import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/Addons.js";

extend({ OrbitControls: OrbitControls });

const OrbitControlsExp = () => {
  // useThree hook: (R3F)
  // useThree hook is super similar to useFrame hook, it returns back the same state object the useFrame hook has
  // The difference is with useThree hook that it will only be called on component mount (once)
  // meanwhile with useFrame hook the callback function provided will be called on each frame before rendering the scene
  const { camera, gl } = useThree();
  // gl.domElement is the canvas

  const cubeRef = useRef();

  useFrame((state, delta) => {
    // if you want to move the camera in the x and z axis (in a circle around an object), you need to create an angle and provide sin(x) and cos(z)
    // you can also provide the center point for the camera with "lookAt" property
    // For bigger or smaller circles multiply the sin and cos values
    const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle);
    state.camera.position.z = Math.cos(angle);
    state.camera.lookAt(0, 0, 0);

    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      {/* When you're creating an instance of orbitControls, you need to give it 2 arguments:
       * camera and renderer DOM element
       * https://threejs.org/docs/#OrbitControls */}
      <orbitControls args={[camera, gl.domElement]} />;
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

export default OrbitControlsExp;
