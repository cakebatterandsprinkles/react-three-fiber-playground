import "./App.css";
import { Canvas } from "@react-three/fiber";
import FirstMesh from "./components/01-FirstMesh";
import BasicScene from "./components/02-BasicScene";

function App() {
  return (
    <Canvas>
      {/* R3F hooks can only be used inside a Canvas component. */}
      {/* <FirstMesh /> */}
      <BasicScene />
    </Canvas>
  );
}

export default App;
