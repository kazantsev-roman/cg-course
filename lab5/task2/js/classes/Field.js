import {Cell} from "./Cell.js"

class Field {
    /**
     * @private
     * @type {Cell[]}
     */
    cells = []

    /**
     * @private
     * @type {Cell | null}
     */
    firstSelectedCell = null

    /**
     * @private
     * @type {Cell | null}
     */
    secondSelectedCell = null

    /**
     * @private
     * @type {boolean}
     */
    isReadyForPlaying = true

    /**
     * @constructor
     * @param {Cell[]} cells
     */
    constructor(cells) {
        this.cells = cells
    }

    /**
     * @public
     * @return {Cell[]}
     */
    GetCells()
    {
        return this.cells
    }

    /**
     * @public
     * @param {Function} gameOverAction
     */
    CheckCells(gameOverAction)
    {
        if (!this.isReadyForPlaying) {
            return
        }

        if (this.AreSelectedCellsEqual()) {
            this.isReadyForPlaying = false
            setTimeout(() => {
                this.isReadyForPlaying = true

                this.DeleteCells()
            }, 1000)
        } else if (this.firstSelectedCell !== null && this.secondSelectedCell !== null) {
            this.isReadyForPlaying = false

            setTimeout(() => {
                this.isReadyForPlaying = true

                this.firstSelectedCell?.ChangeVisibility()
                this.firstSelectedCell = null
                this.secondSelectedCell?.ChangeVisibility()
                this.secondSelectedCell = null
            }, 1000)
        } else if (this.GetCells().length === 0 && this.isReadyForPlaying)
        {
            this.isReadyForPlaying = false
            setTimeout(() => {
                gameOverAction()
            }, 1000)
        }
    }

    /**
     * @public
     * @param {THREE.Mesh} mesh
     */
    SetSelectedCell(mesh)
    {
        const cell = this.GetCellByMesh(mesh)
        if (this.firstSelectedCell === null)
        {
            this.firstSelectedCell = cell
            cell.ChangeVisibility()
            return
        }

        if (this.secondSelectedCell === null &&
            this.firstSelectedCell.position.x === mesh.position.x &&
            this.firstSelectedCell.position.y === mesh.position.y &&
            this.firstSelectedCell.position.z === mesh.position.z)
        {
            this.firstSelectedCell.ChangeVisibility()
            this.firstSelectedCell = null
            return
        }

        if (this.secondSelectedCell === null &&
            (this.firstSelectedCell.position.x !== mesh.position.x ||
            this.firstSelectedCell.position.y !== mesh.position.y ||
            this.firstSelectedCell.position.z !== mesh.position.z))
        {
            this.secondSelectedCell = cell
            cell.ChangeVisibility()
        }
    }

    /**
     * @private
     * @return {boolean}
     */
    AreSelectedCellsEqual()
    {
        if (this.firstSelectedCell === null || this.secondSelectedCell === null)
        {
            return false
        }

        return this.firstSelectedCell.textureId === this.secondSelectedCell.textureId
    }

    /**
     * @private
     * @param {THREE.Mesh} mesh
     * @return {Cell}
     */
    GetCellByMesh(mesh)
    {
        const cells = this.cells.filter(cell => {
            if (cell.position.x === mesh.position.x && cell.position.y === mesh.position.y && cell.position.z === mesh.position.z)
            {
                return cell
            }
        })

        return cells[0]
    }

    /**
     * @private
     */
    DeleteCells()
    {
        this.cells = this.cells.filter(cell => cell.GetTextureId() !== this.secondSelectedCell?.textureId)

        this.firstSelectedCell = null
        this.secondSelectedCell = null
    }
}

export {
    Field
}