import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

export const getTextures = () => {
  const floorAlphaTexture = textureLoader.load("/textures/alpha.jpg");
  const floorColorTexture = textureLoader.load("/textures/snow/diffuse.jpg");
  const floorARMTexture = textureLoader.load("/textures/snow/arm.jpg");
  const floorDisplacementTexture = textureLoader.load("/textures/snow/displacement.jpg");
  const floorNormalTexture = textureLoader.load("/textures/snow/normal.jpg");

  const brickColorTexture = textureLoader.load("/textures/brick/diffuse.jpg");
  const brickARMTexture = textureLoader.load("/textures/brick/arm.jpg");
  const brickDisplacementTexture = textureLoader.load("/textures/brick/displacement.jpg");
  const brickNormalTexture = textureLoader.load("/textures/brick/normal.jpg");

  const repeatFloorS = 1;
  const repeatFloorT = 1;

  floorColorTexture.repeat.set(repeatFloorS, repeatFloorT)
  floorColorTexture.colorSpace = THREE.SRGBColorSpace
  floorColorTexture.wrapS = THREE.RepeatWrapping
  floorColorTexture.wrapT = THREE.RepeatWrapping

  floorARMTexture.repeat.set(repeatFloorS, repeatFloorT)
  floorARMTexture.wrapS = THREE.RepeatWrapping
  floorARMTexture.wrapT = THREE.RepeatWrapping

  floorDisplacementTexture.repeat.set(repeatFloorS, repeatFloorT)
  floorDisplacementTexture.wrapS = THREE.RepeatWrapping
  floorDisplacementTexture.wrapT = THREE.RepeatWrapping

  floorNormalTexture.repeat.set(repeatFloorS, repeatFloorT)
  floorNormalTexture.wrapS = THREE.RepeatWrapping
  floorNormalTexture.wrapT = THREE.RepeatWrapping

  const repeatBrickS = 2;
  const repeatBrickT = 1;

  brickColorTexture.repeat.set(repeatBrickS, repeatBrickT)
  brickColorTexture.colorSpace = THREE.SRGBColorSpace
  brickColorTexture.wrapS = THREE.RepeatWrapping
  brickColorTexture.wrapT = THREE.RepeatWrapping

  brickARMTexture.repeat.set(repeatBrickS, repeatBrickT)
  brickARMTexture.wrapS = THREE.RepeatWrapping
  brickARMTexture.wrapT = THREE.RepeatWrapping

  brickDisplacementTexture.repeat.set(repeatBrickS, repeatBrickT)
  brickDisplacementTexture.wrapS = THREE.RepeatWrapping
  brickDisplacementTexture.wrapT = THREE.RepeatWrapping

  brickNormalTexture.repeat.set(repeatBrickS, repeatBrickT)
  brickNormalTexture.wrapS = THREE.RepeatWrapping
  brickNormalTexture.wrapT = THREE.RepeatWrapping

  return {
    floorAlphaTexture,
    floorARMTexture,
    floorColorTexture,
    floorDisplacementTexture,
    floorNormalTexture,
    brickARMTexture,
    brickColorTexture,
    brickDisplacementTexture,
    brickNormalTexture,
  };
}
