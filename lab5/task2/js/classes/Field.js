import {Cell} from "./Cell.js"

class Field {
    cells = []
    /**
     * @type {Cell | null}
     */
    firstSelectedCell = null
    /**
     * @type {Cell | null}
     */
    secondSelectedCell = null

    isReadyForPlaying = true

    constructor(cells) {
        this.cells = cells
    }

    GetCells()
    {
        return this.cells
    }

    CheckCells(gameOverAction)
    {
        if (this.isReadyForPlaying) {
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
            } else if (this.GetCells().length === 0)
            {
                gameOverAction()
            }

        }
    }

    AreSelectedCellsEqual()
    {
        if (this.firstSelectedCell === null || this.secondSelectedCell === null)
        {
            return false
        }

        return this.firstSelectedCell.textureId === this.secondSelectedCell.textureId
    }

    SetSelectedCell(mesh)
    {
        const cell = this.GetCellByMesh(mesh)
        if (this.firstSelectedCell === null)
        {
            this.firstSelectedCell = cell
            cell.ChangeVisibility()
            return
        }

        if (this.secondSelectedCell === null)
        {
            this.secondSelectedCell = cell
            cell.ChangeVisibility()
        }
    }

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