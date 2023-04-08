import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js'
import { ParametricGeometries } from 'three/addons/geometries/ParametricGeometries.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(0x000000, 0)
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const geometry = new ParametricGeometry( ParametricGeometries.mobius3d, 999, 999 )
const material = new THREE.ShaderMaterial({
    uniforms: {
        color1: { value: new THREE.Color("red") },
        color2: { value: new THREE.Color("purple") }
    },
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText,
    wireframe: true
})
const mobius = new THREE.Mesh( geometry, material )
scene.add( mobius )

const controls = new OrbitControls( camera, renderer.domElement )
controls.update()

camera.position.z = 10

function animate() {
    requestAnimationFrame( animate )
    controls.update()

    renderer.render( scene, camera )
}
animate()