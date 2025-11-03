import "./App.css";
import { Canvas } from "@react-three/fiber";
import FirstMesh from "./components/01-FirstMesh";
import BasicScene from "./components/02-BasicScene";
import OrbitControlsExp from "./components/03-OrbitControls";
import Lights from "./components/04-Lights";
import CustomGeometry from "./components/05-CustomGeometry";

function App() {
  return (
    <Canvas>
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
