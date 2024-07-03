import * as THREE from "three"
import GUI from "lil-gui"
import { getTextures } from "./textures";

export const getHouse = ({ gui }: { gui: GUI }) => {
  const house = new THREE.Group();
  const {
    brickARMTexture,
    brickColorTexture,
    brickDisplacementTexture,
    brickNormalTexture
  } = getTextures()

  // Walls
  const wall = new THREE.Mesh(
    new THREE.SphereGeometry(3, 20, 20, 0, Math.PI * 2, 0, Math.PI/2 - 0.2),
    new THREE.MeshStandardMaterial({
      map: brickColorTexture,
      aoMap: brickARMTexture,
      roughnessMap: brickARMTexture,
      metalnessMap: brickARMTexture,
      normalMap: brickNormalTexture,
      displacementMap: brickDisplacementTexture,
      displacementScale: 0.1,
      displacementBias: -0.03,
      side: THREE.DoubleSide
    })
  )

  wall.position.y = -0.35
  wall.castShadow = true

  house.add(wall)

  return house;
}
