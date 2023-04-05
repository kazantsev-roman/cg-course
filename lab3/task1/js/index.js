import * as THREE from 'three'
import { DragControls } from 'three/addons/controls/DragControls.js'
import { GetCubicBezierCurve, GetLine, GetPoint } from "./objects.js"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(0x000000, 0)
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

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

const MoveStartVectorPoint = (event) => {
    vectors.startVector[Axes.x] = event.object.position.x
    vectors.startVector[Axes.y] = event.object.position.y
    vectors.startVector[Axes.z] = event.object.position.z
}
const MoveACP1Point = (event) => {
    vectors.aCP1[Axes.x] = event.object.position.x
    vectors.aCP1[Axes.y] = event.object.position.y
    vectors.aCP1[Axes.z] = event.object.position.z
}
const MoveACP2Point = (event) => {
    vectors.aCP2[Axes.x] = event.object.position.x
    vectors.aCP2[Axes.y] = event.object.position.y
    vectors.aCP2[Axes.z] = event.object.position.z
}
const MoveEndVectorPoint = (event) => {
    vectors.endVector[Axes.x] = event.object.position.x
    vectors.endVector[Axes.y] = event.object.position.y
    vectors.endVector[Axes.z] = event.object.position.z
}

function animate()
{
    scene.clear()

    const line1 = GetLine(...vectors.startVector, ...vectors.aCP1)
    const line2 = GetLine(...vectors.aCP1, ...vectors.aCP2)
    const line3 = GetLine(...vectors.aCP2, ...vectors.endVector)
    scene.add(line1, line2, line3)

    const startVectorPoint = GetPoint(...vectors.startVector)
    const aCP1Point = GetPoint(...vectors.aCP1)
    const aCP2Point = GetPoint(...vectors.aCP2)
    const endVectorPoint = GetPoint(...vectors.endVector)
    scene.add(startVectorPoint, aCP1Point, aCP2Point, endVectorPoint)

    const startVectorPointControls = new DragControls([startVectorPoint], camera, renderer.domElement)
    const aCP1PointControls = new DragControls([aCP1Point], camera, renderer.domElement)
    const aCP2PointControls = new DragControls([aCP2Point], camera, renderer.domElement)
    const endVectorPointControls = new DragControls([endVectorPoint], camera, renderer.domElement)

    startVectorPointControls.addEventListener('drag', MoveStartVectorPoint)
    aCP1PointControls.addEventListener('drag', MoveACP1Point)
    aCP2PointControls.addEventListener('drag', MoveACP2Point)
    endVectorPointControls.addEventListener('drag', MoveEndVectorPoint)

    const curveObject = GetCubicBezierCurve(vectors)
    scene.add(curveObject)
    requestAnimationFrame(animate)
    renderer.render( scene, camera )
}
animate()

camera.position.set(0, 0, 40)