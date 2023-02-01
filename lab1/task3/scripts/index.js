import drawAndFillCircle from "./drawing.js"
import getLineLength from "./utils.js"

const canvas = document.getElementById('canvas')
let center = {x: 0, y: 0}

function secondClick(event)
{
    const radius = getLineLength(center.x, center.y, event.clientX, event.clientY)

    drawAndFillCircle(canvas, radius, center)

    canvas.removeEventListener('click', secondClick)
    canvas.addEventListener('click', firstClick)
}

function firstClick(event)
{
    center = {x: event.clientX, y: event.clientY}

    canvas.removeEventListener('click', firstClick)
    canvas.addEventListener('click', secondClick)
}

canvas.addEventListener('click', firstClick)