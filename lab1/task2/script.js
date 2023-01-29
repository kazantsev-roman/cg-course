const image = document.getElementById('svg')
const pageWidth = 5760
const pageHeight = 2937

image.onmousedown = function(event) {
    let shiftX = event.clientX - image.getBoundingClientRect().left
    let shiftY = event.clientY - image.getBoundingClientRect().top

    function onMouseDown() {
        image.style.position = 'absolute'
        image.style.zIndex = '1000'

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
    }

    onMouseDown()

    function onMouseMove(event) {
        let positionX = event.pageX - shiftX
        let positionY = event.pageY - shiftY

        const minBorderX = 0
        const maxBorderX = pageWidth - image.getBoundingClientRect().width

        const minBorderY = 0
        const maxBorderY = pageHeight - image.getBoundingClientRect().height

        positionX = positionX < minBorderX ? minBorderX : positionX
        positionX = positionX > maxBorderX ? maxBorderX : positionX

        positionY = positionY < minBorderY ? minBorderY : positionY
        positionY = positionY > maxBorderY ? maxBorderY : positionY

        image.style.left = positionX + 'px'
        image.style.top = positionY + 'px'
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
    }

}
