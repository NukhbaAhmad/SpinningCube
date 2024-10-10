import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Scene
const scene = new THREE.Scene();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Geometry
const Cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), [
  //PX
  new THREE.MeshBasicMaterial({ color: "red" }),
  //   NX
  new THREE.MeshBasicMaterial({ color: "yellow" }),
  //   PY
  new THREE.MeshBasicMaterial({ color: "white" }),
  //   NY
  new THREE.MeshBasicMaterial({ color: "purple" }),
  //   PZ
  new THREE.MeshBasicMaterial({ color: "blue" }),
  //   NZ
  new THREE.MeshBasicMaterial({ color: "green" }),
]);
scene.add(Cube)

// Size
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
// Camera
const camera = new THREE.PerspectiveCamera(
  55,
  size.width / size.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//Resize
window.addEventListener("resize", () => {
  // Update Size
  size.width = window.innerWidth;
  size.height = window.innerHeight;

  // Update Camera Aspect
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  // Update PixelRatio
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Update Renderer Size
  renderer.setSize(size.width, size.height);
});

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Animate
const clock = new THREE.Clock();
const SnapShot = () => {
  // ElapsedTime
  const elapsedTime = clock.getElapsedTime();

  //   Rotation
  Cube.rotation.x = elapsedTime;
  Cube.rotation.y = elapsedTime;

  //   Scene Render
  renderer.render(scene, camera);

  //   FrameRate
  window.requestAnimationFrame(SnapShot);
};
SnapShot();
