import "./style.css"
import * as THREE from "three"
import GUI from "lil-gui";
import { getCamera } from "./cameras";
import { getControl } from "./controls";
import { Timer } from "three/examples/jsm/Addons.js";
import { getAmbientLight, getDirectionalLight } from "./lights";
import { getFloor } from "./floor";
import { getHouse } from "./house";
import { getSky } from "./sky";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const gui = new GUI()
const canvas = document.getElementById("three");
const scene = new THREE.Scene();
const camera = getCamera(sizes.width/sizes.height);
const control = getControl(camera, canvas!)
const renderer = new THREE.WebGLRenderer({ canvas: canvas! })
const ambientLight = getAmbientLight();
const directionalLight = getDirectionalLight();

const floor = getFloor({ gui });
const house = getHouse({ gui });
const sky = getSky({ gui });

scene.add(ambientLight)
scene.add(directionalLight)
scene.add(floor)
scene.add(house)
scene.add(sky)
// scene.add(axesHelper)

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

window.addEventListener('resize', () =>
  {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

const timer = new Timer()

const tick = () =>
  {
    // Timer
    timer.update()
    const elapsedTime = timer.getElapsed()

    // Update controls
    control.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }
  
  tick()