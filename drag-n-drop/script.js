const boxs = document.querySelectorAll('.box')
const pic = document.querySelector('.pic')

pic.addEventListener("dragstart", (event) => {
    event.target.classList.add('hold')
})

pic.addEventListener('dragend', (e) => {
    e.target.classList.remove('hold')
})

boxs.forEach((item) => {
    item.addEventListener('dragover', (event) => {
        event.preventDefault()
    })

    item.addEventListener("dragenter", (event) => {
        event.preventDefault()
        item.classList.add('hovered')
    })

    item.addEventListener("dragleave", () => {
        item.classList.remove('hovered')
    })

    item.addEventListener("drop", () => {
        item.classList.remove('hovered')
        item.appendChild(pic)
    })
})

