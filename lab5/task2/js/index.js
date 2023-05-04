import * as THREE from 'three'
import {CellCreator} from "./classes/CellCreator.js"
import {Field} from "./classes/Field.js"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(0x000000, 0)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

camera.position.set(0, 5, 9)

const cellCreator = new CellCreator()
const cells = cellCreator.GetCells()

const field = new Field(cells)

function GameOverAction() {
    if (confirm('Игра окончена! Вы большой молодец :)')) {
        window.location.reload()
    }
}

function animate() {
    scene.clear()
    const meshes = field.GetCells().map(cell => {
        return cell.GetMesh()
    })
    scene.add(...meshes)

    requestAnimationFrame(animate)
    field.CheckCells(GameOverAction)
    TWEEN.update()

    renderer.render(scene, camera)
}
animate()

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObjects(scene.children)
    if (intersects[0]) {
        field.SetSelectedCell(intersects[0].object)
    }
}

window.addEventListener('click', onMouseClick, false)