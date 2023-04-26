import * as THREE from 'three'

/**
 * Получить Mesh объект круга
 *
 * @param  {number}  radius - Радиус круга.
 * @param  {number}  x - Позиция круга по x.
 * @param  {number}  y - Позиция круга по y.
 * @param  {number}  z - Позиция круга по z.
 * @param  {number}  color - Цвет круга.
 * @param  {number}  factorX - Фактор круга по x.
 *
 * @return {[THREE.Mesh, THREE.LineSegments]} Mesh объект и обводка круга.
 */
function GetCircle(radius, x, y, z, color, factorX = 1.35)
{
    const shape = new THREE.Shape()
    shape.moveTo(x, y + radius)
    shape.bezierCurveTo(x + radius * factorX, y + radius, x + radius * factorX, y - radius, x, y - radius)
    shape.bezierCurveTo(x - radius * factorX, y - radius, x - radius * factorX, y + radius, x, y + radius)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial( { color: color} )

    const circle = new THREE.Mesh(geometry, material)

    circle.position.set(x, y, z)

    const line = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial({
            color: 0x8c3d1c,
        })
    )
    line.position.set(x, y, z)

    return [circle, line]
}

function GetLeg(x, y, z, color)
{
    const shape = new THREE.Shape()
    shape.moveTo(x, y)
    shape.bezierCurveTo(x + 100, y + 500, x + 200, y + 500, x + 400, y)
    shape.bezierCurveTo(x + 450, y - 200, x + 250, y - 200, x + 200, y - 70)
    shape.bezierCurveTo(x + 150, y - 200, x, y - 200, x, y)


    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial( { color: color} )

    const leg = new THREE.Mesh(geometry, material)

    leg.position.set(x, y, z)

    const line = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial({
            color: 0x8c3d1c,
        })
    )
    line.position.set(x, y, z)

    return [leg, line]
}

function GetRightEyelid(radius, x, y, z, color)
{
    const factor = 1.3

    const shape = new THREE.Shape()
    shape.moveTo(x - radius - 2, y)
    shape.bezierCurveTo(x - radius, y + radius * factor, x + radius, y + radius * factor, x + radius, y - 30)
    shape.bezierCurveTo(x + 20, y + 50, x - 20, y + 50, x - radius, y)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial( { color: color} )

    const eyelid = new THREE.Mesh(geometry, material)

    eyelid.position.set(x + 5, y + 6, z)

    return eyelid
}

function GetLeftEyelid(radius, x, y, z, color)
{
    const factor = 1.3

    const shape = new THREE.Shape()
    shape.moveTo(x - radius, y - 30)
    shape.bezierCurveTo(x - radius, y + radius * factor, x + radius, y + radius * factor, x + radius, y)
    shape.bezierCurveTo(x + 10, y + 60, x - 20, y + 50, x - radius, y - 30)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial( { color: color} )

    const eyelid = new THREE.Mesh(geometry, material)

    eyelid.position.set(x - 3, y + 6, z)

    return eyelid
}

function GetRightEye(x, y, z, color)
{
    const eye = GetCircle(300, x, y, z, 0xffffff)
    const eyeball = GetCircle(120, x + 80, y - 60, z, 0x1f1a17, 1)
    const reflection = GetCircle(35, x + 105, y - 35, z, 0xffffff, 1)
    const eyelid = GetLeftEyelid(302, x, y, z, color)

    return [
        ...eye,
        ...eyeball,
        ...reflection,
        eyelid
    ]
}

function GetLeftEye(x, y, z, color)
{
    const eye = GetCircle(300, x, y, z, 0xffffff)
    const eyeball = GetCircle(120, x - 80, y - 60, z, 0x1f1a17, 1)
    const reflection = GetCircle(35, x - 55, y - 35, z, 0xffffff, 1)
    const eyelid = GetRightEyelid(302, x, y, z, color)

    return [
        ...eye,
        ...eyeball,
        ...reflection,
        eyelid
    ]
}

function GetNose(x, y, z, color)
{
    const noseShape = new THREE.Shape()
    noseShape.moveTo(x, y)
    noseShape.bezierCurveTo(x, y - 180, x - 120, y - 300, x - 300, y - 300)
    noseShape.bezierCurveTo(x - 400, y - 350, x - 500, y - 650, x - 200, y - 700)
    noseShape.bezierCurveTo(x - 100, y - 720, x + 100, y - 720, x + 200, y - 700)
    noseShape.bezierCurveTo(x + 500, y - 650, x + 400, y - 350, x + 300, y - 300)
    noseShape.bezierCurveTo(x + 120, y - 300, x, y - 180,  x, y)

    const noseGeometry = new THREE.ExtrudeGeometry(noseShape)
    const moseMaterial = new THREE.MeshBasicMaterial( { color: color} )

    const nose = new THREE.Mesh(noseGeometry, moseMaterial)

    nose.position.set(x, y, z)

    const leftNostrilShape = new THREE.Shape()
    leftNostrilShape.moveTo(x - 250, y - 460)
    leftNostrilShape.bezierCurveTo(x - 200, y - 460, x - 200, y - 500, x - 250, y - 550)

    const leftNostrilGeometry = new THREE.ExtrudeGeometry(leftNostrilShape)
    const leftNostrilMaterial = new THREE.MeshBasicMaterial({color: 0x85241f})

    const leftNostril = new THREE.Mesh(leftNostrilGeometry, leftNostrilMaterial)

    leftNostril.position.set(x, y, z)

    const rightNostrilShape = new THREE.Shape()
    rightNostrilShape.moveTo(x + 250, y - 460)
    rightNostrilShape.bezierCurveTo(x + 200, y - 460, x + 200, y - 500, x + 250, y - 550)

    const rightNostrilGeometry = new THREE.ExtrudeGeometry(rightNostrilShape)
    const rightNostrilMaterial = new THREE.MeshBasicMaterial({color: 0x85241f})

    const rightNostril = new THREE.Mesh(rightNostrilGeometry, rightNostrilMaterial)

    rightNostril.position.set(x, y, z)

    return [nose, leftNostril, rightNostril]
}

function GetLeftHorn(x, y, z, color)
{
    const shape = new THREE.Shape()
    shape.moveTo(x - 500, y + 600)
    shape.bezierCurveTo(x - 500, y + 755, x - 750, y + 725, x - 550, y + 725)
    shape.bezierCurveTo(x - 1750, y + 600, x - 1875, y + 1225, x - 1625, y + 1500)
    shape.bezierCurveTo(x - 1250, y + 1800, x - 1500, y + 1100, x - 1250, y + 1100)
    shape.bezierCurveTo(x - 1400, y + 1700, x - 1000, y + 1800, x - 1000, y + 1100)
    shape.bezierCurveTo(x - 1000, y + 1100, x - 900, y + 1100, x - 900, y + 1100)
    shape.bezierCurveTo(x - 1000, y + 1700, x - 600, y + 1700, x - 700, y + 1100)
    shape.bezierCurveTo(x - 400, y + 1100, x - 500, y + 590, x - 150, y + 700)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial({color: color})

    const horn = new THREE.Mesh(geometry, material)

    horn.position.set(x, y, z)

    return horn
}

function GetRightHorn(x, y, z, color)
{
    const shape = new THREE.Shape()
    shape.moveTo(x, y)
    shape.bezierCurveTo(x, y + 155, x + 250, y + 125, x + 50, y + 125)
    shape.bezierCurveTo(x + 1250, y, x + 1375, y + 625, x + 1125, y + 900)
    shape.bezierCurveTo( x + 750, y + 1200, x + 1000, y + 500, x + 750, y + 500)
    shape.bezierCurveTo( x + 900, y + 1100, x + 500, y + 1200, x + 500, y + 500)
    shape.bezierCurveTo( x + 500, y + 500, x + 400, y + 500, x + 400, y + 500)
    shape.bezierCurveTo( x + 500, y + 1100, x + 100, y + 1100, x + 200, y + 500)
    shape.bezierCurveTo( x - 100, y + 500, x, y - 10, x - 350, y + 100)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial({color: color})

    const horn = new THREE.Mesh(geometry, material)

    horn.position.set(x, y, z)

    return horn
}

function GetRightArm(x, y, z, color)
{
    const shape = new THREE.Shape()
    shape.moveTo(x + 40, y - 5)
    shape.bezierCurveTo(x + 150, y + 200, x + 300, y + 200, x + 300, y)
    shape.bezierCurveTo(x + 250, y - 200, x + 300, y - 400, x + 380, y - 600)
    shape.bezierCurveTo(x + 400, y - 700, x + 350, y - 700, x + 250, y - 600)
    shape.bezierCurveTo(x + 200, y - 700, x + 200, y - 700, x + 100, y - 600)
    shape.bezierCurveTo(x - 20, y - 500, x + 20, y + 50, x + 50, y)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial({color: color})

    const arm = new THREE.Mesh(geometry, material)

    arm.position.set(x, y, z)

    const line = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial({
            color: 0x8c3d1c,
        })
    )
    line.position.set(x, y, z)

    return [arm, line]
}

function GetLeftArm(x, y, z, color)
{
    const shape = new THREE.Shape()
    shape.moveTo(x - 40, y - 7)
    shape.bezierCurveTo(x - 150, y + 200, x - 300, y + 200, x - 300, y)
    shape.bezierCurveTo(x - 250, y - 200, x - 300, y - 400, x - 380, y - 600)
    shape.bezierCurveTo(x - 400, y - 700, x - 350, y - 700, x - 250, y - 600)
    shape.bezierCurveTo(x - 200, y - 700, x - 200, y - 700, x - 100, y - 600)
    shape.bezierCurveTo(x + 20, y - 500, x - 20, y + 50, x - 50, y)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial({color: color})

    const arm = new THREE.Mesh(geometry, material)

    arm.position.set(x, y, z)

    const line = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial({
            color: 0x8c3d1c,
        })
    )
    line.position.set(x, y, z)

    return [arm, line]
}

function GetRightEyebrow(x, y, z, color)
{
    const shape = new THREE.Shape()
    shape.moveTo(x, y)
    shape.bezierCurveTo(x - 50 , y - 25, x - 125, y + 100, x, y + 100)
    shape.lineTo(x + 200, y + 100)
    shape.bezierCurveTo(x + 170, y + 100, x + 190 , y + 100, x + 200, y + 50)
    shape.lineTo(x, y)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial({color: color})

    const eyebrow = new THREE.Mesh(geometry, material)

    eyebrow.position.set(x, y, z)

    return eyebrow
}

function GetLeftEyebrow(x, y, z, color)
{
    const shape = new THREE.Shape()
    shape.moveTo(x, y)
    shape.bezierCurveTo(x + 50 , y - 25, x + 125, y + 100, x, y + 100)
    shape.lineTo(x - 200, y + 100)
    shape.bezierCurveTo(x - 170, y + 100, x - 190 , y + 100, x - 200, y + 50)
    shape.lineTo(x, y)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial({color: color})

    const eyebrow = new THREE.Mesh(geometry, material)

    eyebrow.position.set(x, y, z)

    return eyebrow
}

function GetLeftSmile(x, y, z, color)
{
    const shape = new THREE.Shape()
    shape.moveTo(x, y)
    shape.lineTo(x - 150, y + 60)
    shape.bezierCurveTo(x - 150, y + 120, x - 175, y + 140, x - 200, y + 150)
    shape.bezierCurveTo(x - 170, y + 60 , x - 170, y + 10, x - 200, y - 10)
    shape.bezierCurveTo(x - 175, y - 40, x - 150, y - 20, x - 150, y + 30)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial({color: color})

    const smile = new THREE.Mesh(geometry, material)

    smile.position.set(x, y, z)

    return smile
}

function GetRightSmile(x, y, z, color)
{
    const shape = new THREE.Shape()
    shape.moveTo(x, y)
    shape.lineTo(x + 150, y + 60)
    shape.bezierCurveTo(x + 150, y + 120, x + 175, y + 140, x + 200, y + 150)
    shape.bezierCurveTo(x + 170, y + 60 , x + 170, y + 10, x + 200, y - 10)
    shape.bezierCurveTo(x + 175, y - 40, x + 150, y - 20, x + 150, y + 30)

    const geometry = new THREE.ExtrudeGeometry(shape)
    const material = new THREE.MeshBasicMaterial({color: color})

    const smile = new THREE.Mesh(geometry, material)

    smile.position.set(x, y, z)

    return smile
}

export function GetMooseGroup()
{
    const group = new THREE.Group()
    const body = GetCircle(1000, 0, -100, -0.2, 0xf2a300)
    group.add(...body)

    const rightLeg = GetLeg(-220, -750, 0, 0xf2a300)
    const leftLeg = GetLeg(70, -750, 0, 0xf2a300)
    group.add(...rightLeg, ...leftLeg)

    const rightEye = GetRightEye(-150, 20, 0, 0xf2a300)
    const leftEye = GetLeftEye(150, 20, 0, 0xf2a300)
    group.add(...rightEye, ...leftEye)

    const nose = GetNose(0, 20, 0, 0xc9521a)
    group.add(...nose)

    const leftHorn = GetLeftHorn(0, 0, 0, 0x85241f)
    const rightHorn = GetRightHorn(250, 300, 0, 0x85241f)
    group.add(leftHorn, rightHorn)

    const rightArm = GetRightArm(-610, -100, 0, 0xf2a300)
    const leftArm = GetLeftArm(610, -100, 0, 0xf2a300)
    group.add(...rightArm, ...leftArm)

    const rightEyebrow = GetRightEyebrow(-220, 180, 0, 0x85241f)
    const leftEyebrow = GetLeftEyebrow(220, 180, 0, 0x85241f)
    group.add(rightEyebrow, leftEyebrow)

    const leftSmile = GetLeftSmile(-160, -250, -0.1, 0x8c3d1c)
    const rightSmile = GetRightSmile(160, -250, -0.1, 0x8c3d1c)
    group.add(leftSmile, rightSmile)

    return group
}