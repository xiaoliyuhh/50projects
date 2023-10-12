const nav = document.querySelector('.container')
const pic = document.querySelector('.pic')
const content = document.querySelector('.content')
window.addEventListener('scroll', () => {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('change')
    } else {
        nav.classList.remove('change')
    }
})