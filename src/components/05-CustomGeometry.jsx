// Creating custom geometries:

import { useMemo } from "react";
import * as THREE from "three";

const CustomGeometry = () => {
  // Custom objects are created by individual triangles. For 10 triangles, you need 10*3 vertices:
  const verticesCount = 10 * 3;

  // Without useMemo, each time the component re-renders, the computer has to compute and draw the same triangles
  const positions = useMemo(() => {
    // Each vertex (point in space) needs to have 3 coordinates to denote their position in space (x,y,z):
    const positions = new Float32Array(verticesCount * 3);

    // Let's fill int the positions array with some arbitrary values:
    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, []);

  return (
    <>
      <mesh>
        <bufferGeometry>
          {/* attaches to 'geometry.attributes.position' */}
          <bufferAttribute
            attach="attributes-position"
            count={verticesCount}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        {/* to make both sides of the triangle visible, you need to use THREE.DoubleSide */}
        <meshBasicMaterial color="red" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default CustomGeometry;
