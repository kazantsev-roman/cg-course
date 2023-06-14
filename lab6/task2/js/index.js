import * as THREE from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 1)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild( renderer.domElement )

const radius = 150
const center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    z: 0
}

const geometry = new THREE.PlaneGeometry(2, 1)
const material = new THREE.ShaderMaterial({
    uniforms: {
        center: {
            value: center
        },
        radius: {
            value: radius,
        }
    },
    fragmentShader: fragmentShaderText,
})

const flag =  new THREE.Mesh(geometry, material)
scene.add(flag)

renderer.render(scene, camera)

window.addEventListener( 'resize', onWindowResize, false )

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}