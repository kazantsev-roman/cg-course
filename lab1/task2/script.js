const image = document.getElementById('svg')

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

    function moveAt(pageX, pageY) {
        let positionX = pageX - shiftX
        let positionY = pageY - shiftY

        const borderX = 5760 - image.getBoundingClientRect().width
        const borderY = 2937 - image.getBoundingClientRect().height

        positionX = positionX < 0 ? 0 : positionX
        positionX = positionX > borderX ? borderX : positionX
        positionY = positionY < 0 ? 0 : positionY
        positionY = positionY > borderY ? borderY : positionY

        image.style.left = positionX + 'px'
        image.style.top = positionY + 'px'
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY)
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
    }

}
