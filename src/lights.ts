import * as THREE from "three"

export const getAmbientLight = () => {
  return new THREE.AmbientLight('#ffffff', 0.8)
}

export const getDirectionalLight = () => {
  const directionalLight = new THREE.DirectionalLight('#ffffff', 5)
  directionalLight.position.set(3, 2, -4)
  directionalLight.castShadow = true

  directionalLight.shadow.mapSize.width = 256
  directionalLight.shadow.mapSize.height = 256
  directionalLight.shadow.camera.top = 8
  directionalLight.shadow.camera.right = 8
  directionalLight.shadow.camera.bottom = - 8
  directionalLight.shadow.camera.left = - 8
  directionalLight.shadow.camera.near = 1
  directionalLight.shadow.camera.far = 20

  return directionalLight
}
