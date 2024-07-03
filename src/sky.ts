import GUI from 'lil-gui';
import { MathUtils, Vector3 } from 'three';
import { Sky } from 'three/addons/objects/Sky.js';

export const getSky = ({ gui }: { gui: GUI }) => {
  const sky = new Sky();
  sky.scale.setScalar(40);

  const phi = MathUtils.degToRad(90);
  const theta = MathUtils.degToRad(145);
  const sunPosition = new Vector3().setFromSphericalCoords( 1, phi, theta );

  sky.material.uniforms.sunPosition.value = sunPosition;
  sky.material.uniforms.turbidity.value = 1.5;
  sky.material.uniforms.rayleigh.value = 0.14;
  sky.material.uniforms.mieCoefficient.value = 0.002;
  sky.material.uniforms.mieDirectionalG.value = 0.619;
  sky.material.uniforms.mieCoefficient.value = 0.005;

  gui.add(sky.material.uniforms.turbidity, "value").min(0).max(5).step(0.01)
  gui.add(sky.material.uniforms.rayleigh, "value").min(0).max(5).step(0.01)
  gui.add(sky.material.uniforms.mieDirectionalG, "value").min(0).max(1).step(0.001)
  gui.add(sky.material.uniforms.mieCoefficient, "value").min(0).max(1).step(0.00001)

  return sky
}
