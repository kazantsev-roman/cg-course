import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(0x000000, 0)
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const mobiusFunction = ( u, v, target ) => {
    u *= 2 * Math.PI
    v *= 2 * Math.PI

    const a = 0.025
    const b = 0.65

    const k = a * Math.cos( v ) * Math.cos( u / 2 ) - b * Math.sin( v ) * Math.sin( u / 2 )

    const x = ( 1 + k ) * Math.cos( u )
    const y = ( 1 + k ) * Math.sin( u )
    const z = a * Math.cos( v ) * Math.sin( u / 2 ) + b * Math.sin( v ) * Math.cos( u / 2 )

    target.set( x, y, z )
}

const geometry = new ParametricGeometry( mobiusFunction, 100, 999 )
const material = new THREE.ShaderMaterial({
    uniforms: {
        color1: { value: new THREE.Color("red") },
        color2: { value: new THREE.Color("green") }
    },
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText
})
const mobius = new THREE.Mesh( geometry, material )
scene.add( mobius )

const controls = new OrbitControls( camera, renderer.domElement )
controls.update()

camera.position.z = 5

function animate() {
    requestAnimationFrame( animate )
    controls.update()
    renderer.render( scene, camera )
}
animate()

function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize( window.innerWidth, window.innerHeight )
}

window.addEventListener( 'resize', onWindowResize, false )