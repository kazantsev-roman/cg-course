import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 15)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xffffff)

document.body.appendChild(renderer.domElement)

const geometry = new THREE.PlaneGeometry(10, 10, 20, 20)
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: {
            value: 0,
        },
        indexA: {
            value: 2,
        },
        indexB: {
            value: 2,
        },
    },
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText,
    wireframe: true,
})

const plane = new THREE.Mesh(geometry, material)
plane.rotateX((-90 * Math.PI) / 180)
scene.add(plane)

const controls = new OrbitControls(camera, renderer.domElement)
const startTime = Date.now()

function animate() {
    controls.update()
    plane.material.uniforms.time.value = Date.now() - startTime
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

animate()

window.addEventListener( 'resize', onWindowResize, false )

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}