const left = document.querySelector('.left')
const right = document.querySelector('.right')
const images = document.querySelectorAll('.image')
const body = document.querySelector('body')
let activeimg = 0;
add()
left.addEventListener('click', () => {
    activeimg--;
    if (activeimg < 0) {
        activeimg = images.length - 1
    }
    setactive()
    add()
})
right.addEventListener('click', () => {
    activeimg++;
    if (activeimg > images.length - 1) {
        activeimg = 0
    }
    add()
    setactive()
})


function add() {
    body.style.backgroundImage = images[activeimg].style.backgroundImage
}
function setactive() {
    images.forEach((item) => {
        item.classList.remove('active')
    })
    images[activeimg].classList.add('active')

}


