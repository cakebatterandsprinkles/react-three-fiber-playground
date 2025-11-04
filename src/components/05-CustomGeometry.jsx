// Creating custom geometries:

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const CustomGeometry = () => {
  // Custom objects are created by individual triangles. For 10 triangles, you need 10*3 vertices:
  const verticesCount = 10 * 3;

  const geometryRef = useRef();

  // Without useMemo, each time the component re-renders, the computer has to compute and draw the same triangles
  const positions = useMemo(() => {
    // Each vertex (point in space) needs to have 3 coordinates to denote their position in space (x,y,z):
    const positions = new Float32Array(verticesCount * 3);

    // Let's fill int the positions array with some arbitrary values:
    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, [verticesCount]);

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <>
      <mesh>
        {/* For correct lightning, the mesh needs to have a "normal" attribute, since the materials need this attribute to calculate lighting per-pixel  */}
        <bufferGeometry ref={geometryRef}>
          {/* attaches to 'geometry.attributes.position' */}
          <bufferAttribute
            attach="attributes-position"
            count={verticesCount}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        {/* to make both sides of the triangle visible, you need to use THREE.DoubleSide */}
        {/* Materials: https://medium.com/geekculture/threejs-tutorial-comparing-the-most-common-materials-424eef8942a4 */}
        {/* MeshBasicMaterial: Meshes that apply this material usually show only a single colour and lighting does not affect it */}
        {/* MeshLambertMaterial: uses the Lambertian reflectance to simulate the lighting on non-shiny or matte surfaces. Lighting is calculated at each vertex of your model and interpolated between vertexes. You can also provide it a "emissive" property.*/}
        {/* MeshPhongMaterial: it can simulate shiny surfaces with specular lighting. Lighting is calculated per pixel instead of per vertex, so the result is more realistic. You can set the "shinininess" property. */}
        {/* MeshStandardMaterial: Provides very realistic lightning. Lighting is calculated per-pixel for maximum accuracy, like MeshPhongMaterial. You can provide it "roughness" and "metalness" attributes. */}
        <meshStandardMaterial color="red" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default CustomGeometry;
