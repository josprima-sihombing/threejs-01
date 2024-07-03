import * as THREE from "three";
import { getTextures } from "./textures";
import GUI from "lil-gui";

export const getFloor = ({ gui }: { gui: GUI }) => {
  const {
    floorAlphaTexture,
    floorColorTexture,
    floorARMTexture,
    floorNormalTexture,
    floorDisplacementTexture,
  } = getTextures();

  const floorGeometry = new THREE.PlaneGeometry(25, 25, 30, 30)
  const material = new THREE.MeshStandardMaterial({
    alphaMap: floorAlphaTexture,
    transparent: true,
    map: floorColorTexture,
    aoMap: floorARMTexture,
    roughnessMap: floorARMTexture,
    metalnessMap: floorARMTexture,
    normalMap: floorNormalTexture,
    displacementMap: floorDisplacementTexture,
    displacementScale: 2,
    displacementBias: -0.7,
  });

  const floor = new THREE.Mesh(floorGeometry, material);

  floor.rotation.x = -Math.PI/2
  floor.position.y = 0
  floor.receiveShadow = true

  const floorGUI = gui.addFolder("Floor");

  floorGUI.close()

  floorGUI.add(material, "displacementScale").min(0).max(1).step(0.001)
  floorGUI.add(material, "displacementBias").min(-1).max(1).step(0.001)

  return floor;
}
