const pic = document.querySelector('.pic')
const times = document.getElementById('times')
pic.addEventListener('dblclick', (event) => {
    event.preventDefault();
    const time = parseInt(times.innerText) + 1
    times.innerText = `${time}`
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    const x = event.clientX
    const y = event.clientY
    const osX = event.target.offsetLeft
    const osY = event.target.offsetTop
    const inX = x - osX
    const inY = y - osY
    heart.style.top = `${inY}px`
    heart.style.left = `${inX}px`
    pic.appendChild(heart)
    setTimeout(() => { heart.remove() }, 3000)
})
