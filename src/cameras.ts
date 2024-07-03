import * as THREE from "three"

export const getCamera = (aspect: number) => {
  const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 100)

  camera.position.x = 2
  camera.position.y = 0.7
  camera.position.z = 6

  return camera;
}
