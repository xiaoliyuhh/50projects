const boxes = document.querySelectorAll('.box')
let num = 220
let currentTop = 0

check()

window.addEventListener('scroll', check)
function check() {
    const max = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < max) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    })
}
boxes.forEach(box => {
    box.style.top = `${currentTop}px`
    currentTop += num

})
