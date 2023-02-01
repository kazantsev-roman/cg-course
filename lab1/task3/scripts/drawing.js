const strokeColor = "#a200ff"
const fillColor = "#26ffed"

function drawPixel(canvas, x, y, color) {
    const ctx = canvas.getContext("2d")

    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, 1, 0, Math.PI * 2, true)
    ctx.fill()
}

function isPixelInWindow(canvas, x, y)
{
    return 0 <= x && x <= canvas.width && 0 <= y && y <= canvas.height
}

function drawCircle(canvas, radius, center, color)
{
    let x = 0
    let y = radius

    let delta = 1 - 2 * radius
    let error = 0

    while (y >= x)
    {
        isPixelInWindow(canvas, center.x + x, center.y + y) && drawPixel(canvas, center.x + x, center.y + y, color)
        isPixelInWindow(canvas, center.x + x, center.y - y) && drawPixel(canvas, center.x + x, center.y - y, color)
        isPixelInWindow(canvas, center.x - x, center.y + y) && drawPixel(canvas, center.x - x, center.y + y, color)
        isPixelInWindow(canvas, center.x - x, center.y - y) && drawPixel(canvas, center.x - x, center.y - y, color)

        isPixelInWindow(canvas, center.x + y, center.y + x) && drawPixel(canvas, center.x + y, center.y + x, color)
        isPixelInWindow(canvas, center.x + y, center.y - x) && drawPixel(canvas, center.x + y, center.y - x, color)
        isPixelInWindow(canvas, center.x - y, center.y + x) && drawPixel(canvas, center.x - y, center.y + x, color)
        isPixelInWindow(canvas, center.x - y, center.y - x) && drawPixel(canvas, center.x - y, center.y - x, color)

        error = 2 * (delta + y) - 1

        if ((delta < y) && (error <= 0))
        {
            delta += 2 * ++x + 1
            continue
        }

        if ((delta > 0) && (error >= 0))
        {
            delta -= 2 * --y + 1
            continue
        }

        delta += 2 * (++x - --y)
    }
}

function fillCircle(canvas, radius, center)
{
    let count = radius - 1

    while (count > 0)
    {
        drawCircle(canvas, count, center, fillColor)
        --count
    }
}

export default function drawAndFillCircle(canvas, radius, center)
{
    drawCircle(canvas, radius, center, strokeColor)
    fillCircle(canvas, radius, center)
}
