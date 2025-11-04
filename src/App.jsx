import "./App.css";
import { Canvas } from "@react-three/fiber";
import FirstMesh from "./components/01-FirstMesh";
import BasicScene from "./components/02-BasicScene";
import OrbitControlsExp from "./components/03-OrbitControls";
import Lights from "./components/04-Lights";
import CustomGeometry from "./components/05-CustomGeometry";

function App() {
  // You can add camera property to the canvas component to change the camera defaults
  // fov: field of view (default is 75), if it gets smaller you'll be zooming in, if it gets bigger you'll be zooming out
  // near: near clipping plane (default is 0.1)
  // far: far clipping plane (default is 1000)
  // position: default is [0,0,5]
  // zoom: default is 1
  // if you want to use an orthographic camera instead of a perspective camera, you can use the orthographic property
  // orthographic camera provides no perspective (no vanishing point), so objects further away don't get smaller
  const cameraSettings = { fov: 25, near: 0.1, far: 100, position: [0, 5, 10] };

  return (
    <Canvas camera={cameraSettings}>
      {/* R3F hooks can only be used inside a Canvas component. */}
      {/* <FirstMesh /> */}
      {/* <BasicScene /> */}
      {/* <OrbitControlsExp /> */}
      <Lights />
      <CustomGeometry />
    </Canvas>
  );
}

export default App;
