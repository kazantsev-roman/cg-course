import * as THREE from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 3)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xffffff);

document.body.appendChild( renderer.domElement )

const initValueOfRange = 0
const finalValueOfRange = 2 * Math.PI
const step = Math.PI / 1000

const geometry = new THREE.BufferGeometry()
const vertices = []
for (let x = initValueOfRange; x < finalValueOfRange; x += step) {
    vertices.push(x, 0, 0)
}
geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3)
)

const material = new THREE.ShaderMaterial({
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText,
})

const cannabis = new THREE.Line(geometry, material)
scene.add(cannabis)

renderer.render( scene, camera )

window.addEventListener( 'resize', onWindowResize, false )

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}