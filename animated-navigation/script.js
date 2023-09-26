const nav = document.querySelector('.navigation')
const toggle = document.getElementById('toggle')
toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
})