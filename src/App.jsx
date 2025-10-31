import "./App.css";
import { Canvas } from "@react-three/fiber";
import FirstMesh from "./components/01-FirstMesh";

function App() {
  return (
    <Canvas>
      {/* R3F hooks can only be used inside a Canvas component. */}
      <FirstMesh />
    </Canvas>
  );
}

export default App;
