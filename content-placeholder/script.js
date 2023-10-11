const animatedbg = document.querySelector('.animated-bg')
const pic = document.querySelector('.pic')
const title = document.querySelector('.title')
const content = document.querySelector('.content')
const uname = document.querySelector('.name')
const left = document.querySelector('.left')
const date = document.querySelector('.date')
const animatedtexts = document.querySelectorAll('.animated-text')
setTimeout(show, 10000)
function show() {
    pic.style.backgroundImage = 'url(/images/v2-886e2dba494fff222a393afb11e51e04_r.jpg)'
    pic.classList.remove('animated-bg')
    uname.innerHTML = 'John Doe'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    content.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    date.innerText = 'Oct 08,2020'
    animatedtexts.forEach(item => {
        item.classList.remove('animated-bg')
    })
}