// R3F Performance: https://r3f.docs.pmnd.rs/advanced/scaling-performance

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
  const cameraSettings = {
    fov: 40,
    near: 0.1,
    far: 100,
    position: [0, 5, 10],
  };

  return (
    // Antialias is on by default, you can turn it off by providing a gl attribute to canvas
    // Tone mapping: R3F sets the toneMapping to ACESFilmicToneMapping by default
    // This tweaks the colors to make is look like HDR (although it is actually LDR)
    // to remove it you can use the "flat" attribute on canvas
    // if you want to change the toneMapping to another value, you need to import the toneMapping value from three.js and provide the toneMapping attribute to gl
    // example: gl={{ toneMapping: THREE. CineonToneMapping }}
    // you can also change the color encoding by providing the "outputColorSpace" attribute to gl
    // example: gl={{ toneMapping: THREE. CineonToneMapping, outputColorSpace: THREE.SRGBColorSpace }}
    // The background of the render is transparent by default. If you want to change the background color you can use the "background" css property for the body in App.css.
    // R3F handles the changes in pixel ratios automatically, but it is good to have a upper limit so users that have retina screens do not experience any performance issues. You can use the "dpr" attribute on canvas to give it a min and a max value.
    <Canvas camera={cameraSettings} dpr={[1, 2]}>
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
