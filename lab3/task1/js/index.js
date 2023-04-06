import * as THREE from 'three'
import { DragControls } from 'three/addons/controls/DragControls.js'
import { GetCubicBezierCurve, GetLine, GetPoint } from "./objects.js"

const Axes = {
    x: 0,
    y: 1,
    z: 2
}

const vectors = {
    startVector: [
        -10, 0, 0
    ],
    aCP1: [
        -5, 15, 0
    ],
    aCP2: [
        20, 15, 0
    ],
    endVector: [
        10, 0, 0
    ]
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(0x000000, 0)
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

function MovePoint(event) {
    this.vector[Axes.x] = event.object.position.x
    this.vector[Axes.y] = event.object.position.y
    this.vector[Axes.z] = event.object.position.z
}

const startVectorPoint = GetPoint(...vectors.startVector)
const aCP1Point = GetPoint(...vectors.aCP1)
const aCP2Point = GetPoint(...vectors.aCP2)
const endVectorPoint = GetPoint(...vectors.endVector)

const startVectorPointControls = new DragControls([startVectorPoint], camera, renderer.domElement)
const aCP1PointControls = new DragControls([aCP1Point], camera, renderer.domElement)
const aCP2PointControls = new DragControls([aCP2Point], camera, renderer.domElement)
const endVectorPointControls = new DragControls([endVectorPoint], camera, renderer.domElement)

startVectorPointControls.addEventListener('drag',
    MovePoint.bind({vector: vectors.startVector})
)
aCP1PointControls.addEventListener('drag',
    MovePoint.bind({vector: vectors.aCP1})
)
aCP2PointControls.addEventListener('drag',
    MovePoint.bind({vector: vectors.aCP2})
)
endVectorPointControls.addEventListener('drag',
    MovePoint.bind({vector: vectors.endVector})
)

camera.position.set(0, 0, 40)

function animate()
{
    scene.clear()

    const line1 = GetLine(...vectors.startVector, ...vectors.aCP1)
    const line2 = GetLine(...vectors.aCP1, ...vectors.aCP2)
    const line3 = GetLine(...vectors.aCP2, ...vectors.endVector)

    const curveObject = GetCubicBezierCurve(vectors)

    scene.add(curveObject)
    scene.add(line1, line2, line3)
    scene.add(startVectorPoint, aCP1Point, aCP2Point, endVectorPoint)

    requestAnimationFrame(animate)
    renderer.render( scene, camera )
}
animate()