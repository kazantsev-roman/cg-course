import * as THREE from 'three'
import { GetMooseGroup } from "./objects.js"
import { DragControls } from 'three/addons/controls/DragControls.js'

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000, 0)

document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 2)
camera.position.set(0, 0, 3)

const mooseGroup = GetMooseGroup()
scene.add(mooseGroup)

const controls = new DragControls([mooseGroup], camera, renderer.domElement)
controls.transformGroup = true

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()