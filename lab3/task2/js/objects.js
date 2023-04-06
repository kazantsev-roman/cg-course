import * as THREE from 'three'

/**
 * Получить Mesh картера
 *
 * @param  {number}  x - Позиция картера по x.
 * @param  {number}  y - Позиция картера по y.
 * @param  {number}  color - Цвет картера.
 *
 * @return {THREE.Mesh} Mesh объект картера.
 */
export function GetCrankcase(x, y, color)
{
    const shape = new THREE.Shape()
    shape.moveTo(x, y)
    shape.lineTo(x + 0.5, y)
    shape.bezierCurveTo(x + 1, y, x + 1.5, y, x + 1.5, y - 1)
    shape.moveTo(x + 1.5, y - 1)
    shape.lineTo(x + 1.5, y - 2)
    shape.bezierCurveTo(x, y - 2.28, x, y - 2.28, x - 1.5, y - 2)
    shape.moveTo(x - 1.5, y - 2)
    shape.lineTo(x - 1.5, y - 1)
    shape.bezierCurveTo(x - 1.5, y, x - 1, y, x - 0.5, y)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial( { color: color} )

    const crankcase =  new THREE.Mesh(geometry, material)

    crankcase.position.set(x, y, 4)

    return crankcase
}

/**
 * Получить Mesh картера
 *
 * @param  {number}  x - Позиция картера по x.
 * @param  {number}  y - Позиция картера по y.
 * @param  {number}  color - Цвет картера.
 *
 * @return {THREE.Mesh} Mesh объект картера.
 */
export function GetCrankcaseBackground(x, y, color)
{
    const shape = new THREE.Shape()
    shape.moveTo(x + 0.02, y + 0.02)
    shape.lineTo(x + 0.51, y + 0.01)
    shape.bezierCurveTo(x + 1.01, y + 0.01, x + 1.51, y + 0.01, x + 1.51, y - 1.01)
    shape.moveTo(x + 1.51, y - 1.01)
    shape.lineTo(x + 1.51, y - 2.01)
    shape.bezierCurveTo(x + 0.01, y - 2.29, x, y - 2.29, x - 1.51, y - 2.01)
    shape.moveTo(x - 1.51, y - 2.01)
    shape.lineTo(x - 1.51, y - 1.01)
    shape.bezierCurveTo(x - 1.51, y + 0.01, x - 1.01, y + 0.01, x - 0.51, y + 0.01)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial( { color: color} )

    const crankcase =  new THREE.Mesh(geometry, material)

    crankcase.position.set(x, y, 4)

    return crankcase
}

/**
 * Получить LineLoop кривошипа
 *
 * @param  {number}  radius - Радиус кривошипа.
 * @param  {number}  x - Позиция кривошипа по x.
 * @param  {number}  y - Позиция кривошипа по y.
 * @param  {number}  color - Цвет кривошипа.
 *
 * @return {[THREE.LineLoop, THREE.Mesh]} LineLoop объект кривошипа.
 */
export function GetCrankShaft(radius, x, y, color)
{
    let circleGeometry = new THREE.CircleGeometry(radius, 999)
    const circle = new THREE.LineLoop(circleGeometry,
        new THREE.LineBasicMaterial({ color: color })
    )
    circle.position.set(x, y, 6)

    const shape = new THREE.Shape()
    shape.moveTo(x - 0.09, y + 1.56)
    shape.lineTo(x + 0.09, y + 1.56)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial( { color: 0x9b9a62} )
    const crankshaft =  new THREE.Mesh(geometry, material)
    crankshaft.position.set(x, y, 5)

    return [circle, crankshaft]
}