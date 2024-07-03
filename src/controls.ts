import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js"

export const getControl = (camera: THREE.Camera, canvas: HTMLElement) => {
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.enablePan = false
  controls.enableZoom = false
  controls.autoRotate = true
  controls.maxPolarAngle = Math.PI / 2 - 0.15

  return controls;
}
