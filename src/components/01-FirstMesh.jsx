// Creating a mesh:

const FirstMesh = () => {
  return (
    <>
      {/* A visible object in three.js is called Mesh. */}
      {/* An object has 3 axis: x (left-right), y (up-down), z (back-forward) */}
      {/* To set the scale, you have to give the mesh attribute a prop named scale and provide x,y,z values, respectively
       * scale={[3,2,1]} => This will do the same thing as mesh.scale.set(x,y,z) in native three.js
       * If you're providing the same value for x, y and z, you can omit the array and give the scale a single value: scale={1.5}
       * position and rotation attributes works the same, but you can also provide individual values for x, y, and z axis by using the individual props (like "position-x")
       */}
      <mesh scale={1.5} position={[2, 0, 0]} rotation-y={2}>
        {/*
         * args prop gets an array that contains radius, widthSegments, and heightSegments values
         * https://threejs.org/docs/#SphereGeometry
         * Try not to update this value frequently or animate it because it will cause re-renders
         */}
        <sphereGeometry args={[1.5, 32, 32]} />
        {/*
         * For the props for the materials, you can either give them with the args prop as following:
         * args={[{ color: "red", wireframe: true }]}
         * or as individual props as shown below:
         */}
        <meshBasicMaterial color="mediumPurple" wireframe />
      </mesh>
    </>
  );
};

export default FirstMesh;
