import * as THREE from "three"

class Cell {
    /** @private
     *  @type {{x: number, y: number, z: number}}
     */
    position

    /** @private
     * @type {number}
     */
    textureId

    /** @private
     * @type {THREE.Mesh}
     */
    mesh

    /** @constructor
     * @param {{x: number, y: number, z: number}} position
     * @param {number} textureId
     */
    constructor(position, textureId)
    {
        this.position = position
        this.textureId = textureId

        const geometry = new THREE.BoxGeometry( 1.5, 1.5, 0.1  )

        const colorMaterial = new THREE.MeshBasicMaterial({color: 0xB7FF18})

        const loader = new THREE.TextureLoader()
        const imageMaterial = new THREE.MeshBasicMaterial({
            map: loader.load(`./images/cat-${textureId}.jpg`, () => {}, () => {}, () => {})
        })

        const materials = [
            colorMaterial,
            colorMaterial,
            colorMaterial,
            colorMaterial,
            colorMaterial,
            imageMaterial
        ]

        this.mesh = new THREE.Mesh(geometry, materials)

        this.mesh.position.set(this.position.x, this.position.y, this.position.z)
    }

    /** @public */
    ChangeVisibility()
    {
        new TWEEN.Tween( this.mesh.rotation )
            .to( { y:  this.mesh.rotation.y + Math.PI}, 1000 )
            .easing( TWEEN.Easing.Quadratic.Out)
            .start()
    }

    /** @public
     * @return {number}
     */
    GetTextureId()
    {
        return this.textureId
    }

    /** @public
     * @return {THREE.Mesh}
     */
    GetMesh()
    {
        return this.mesh
    }
}

export {
    Cell
}