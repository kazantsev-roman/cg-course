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

        const borderX = pageWidth - image.getBoundingClientRect().width
        const borderY = pageHeight - image.getBoundingClientRect().height

        positionX = positionX < 0 ? 0 : positionX
        positionX = positionX > borderX ? borderX : positionX
        positionY = positionY < 0 ? 0 : positionY
        positionY = positionY > borderY ? borderY : positionY

        image.style.left = positionX + 'px'
        image.style.top = positionY + 'px'
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
    }

}
