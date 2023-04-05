import * as THREE from 'three'

/**
 * Получить прерывистую линию
 *
 * @param  {number}  x1 - Начальная позиция по x.
 * @param  {number}  y1 - Начальная позиция по y.
 * @param  {number}  z1 - Начальная позиция по z.
 * @param  {number}  x2 - Конечная позиция по x.
 * @param  {number}  y2 - Конечная позиция по y.
 * @param  {number}  z2 - Конечная позиция по z.
 *
 * @return {THREE.Mesh} Mesh объект линии.
 */
export function GetLine(x1, y1, z1, x2, y2, z2)
{
    const points = [];
    points.push( new THREE.Vector3( x1, y1, z1 ) )
    points.push( new THREE.Vector3( x2, y2, z2 ) )

    const geometry = new THREE.BufferGeometry().setFromPoints( points )
    const material = new THREE.LineDashedMaterial({
        color: 0xf000f0,
        dashSize: 1,
        gapSize: 1
    })

    const line =  new THREE.Line(geometry, material)
    line.computeLineDistances()

    return line
}

/**
 * Получить точку
 *
 * @param  {number}  x - Начальная позиция картера по x.
 * @param  {number}  y - Начальная позиция картера по y.
 * @param  {number}  z - Начальная позиция картера по z.
 *
 * @return {THREE.Mesh} Mesh объект точки.
 */
export function GetPoint(x, y, z)
{
    const point =  new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.3, 0.3),
        new THREE.MeshBasicMaterial({
            color: 0x00ff00
        })
    )

    point.position.set(x, y, z)

    return point
}

/**
 * Получить кривую Безье
 *
 * @param  {{
 *      startVector: number[],
 *      aCP1: number[],
 *      aCP2: number[],
 *      endVector: number[]
 *  }}  vectors - Вектора.
 *
 * @return {THREE.Mesh} Mesh объект кривой Безье.
 */
export function GetCubicBezierCurve(vectors)
{
    const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(...vectors.startVector),
        new THREE.Vector3(...vectors.aCP1),
        new THREE.Vector3(...vectors.aCP2),
        new THREE.Vector3(...vectors.endVector)
    )

    const points = curve.getPoints( 50 )
    const geometry = new THREE.BufferGeometry().setFromPoints( points )
    const material = new THREE.LineBasicMaterial( { color: 0xff0000 } )

    return new THREE.Line( geometry, material )
}