const images = document.querySelectorAll('.image')

images.forEach(item => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
    })
})
function removeActive() {
    images.forEach(item => {
        item.classList.remove('active')
    })
}
