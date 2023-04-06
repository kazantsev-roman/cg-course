import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(0x000000, 0)
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const light = new THREE.HemisphereLight( 0x0000ff, 0x00ff00, 0.6 )
light.position.set(0, 10, 1)
scene.add(light)

const geometry = new THREE.DodecahedronGeometry(1)
const material = new THREE.MeshPhongMaterial( {
    color: 0xFF00FF
})
const dodecahedron = new THREE.Mesh( geometry, material )
scene.add(dodecahedron)

const controls = new OrbitControls( camera, renderer.domElement )
controls.update()

camera.position.z = 3

function animate() {
    requestAnimationFrame( animate )
    controls.update()

    renderer.render( scene, camera )
}
animate()