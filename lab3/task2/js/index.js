import * as THREE from 'three'
import {GetCrankcase, GetCrankcaseBackground, GetCrankShaft} from "./objects.js"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(0x000000, 0)
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const carterBackground = GetCrankcaseBackground(0, -0.5, 0xe5e6e8)
const carter = GetCrankcase(0, -0.5, 0x656565)
const [circle, crankshaft] = GetCrankShaft(0.2, 0, -1.8, 0xfffdff)
scene.add(carterBackground, carter, circle, crankshaft)

camera.position.set(0, 0, 10)

renderer.render( scene, camera )
