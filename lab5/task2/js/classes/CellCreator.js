import { Cell } from "./Cell.js"

class CellCreator {
    /** @private */
    textureIds = []
    /** @private */
    positions = []
    /** @private */
    cells = []

    constructor()
    {
        const numberOfCells = 28
        for (let id = 0; id < numberOfCells / 2; ++id)
        {
            this.textureIds.push(id)
            this.textureIds.push(id) // для пары
        }

        for (let y = 2; y <= 8; y += 2)
        {
            for (let x = -6; x <= 6; x += 2)
            {
                this.positions.push({
                    x: x,
                    y: y,
                    z: 0
                })
            }
        }

        /**
         * @type {[THREE.Mesh]}
         */
        let cells = []

        for (let index = 0; index < 28; ++index)
        {
            const textureId = this.GetFreeTextureId()
            const position = this.GetFreePosition()

            const cell = new Cell(position, textureId)

            cells.push(cell)
        }

        this.cells = cells
    }

    /**
     * @public
    * @return {[Cell]} cells
    */
    GetCells()
    {
        return this.cells
    }

    /** @private */
    GetFreePosition()
    {
        const randomIndex = Math.floor(Math.random() * this.positions.length)
        const position = this.positions[randomIndex]
        this.positions.splice(randomIndex, 1)

        return position
    }

    /** @private */
    GetFreeTextureId()
    {
        const randomIndex = Math.floor(Math.random() * this.textureIds.length)
        const id = this.textureIds[randomIndex]
        this.textureIds.splice(randomIndex, 1)

        return id
    }
}

export {
    CellCreator
}