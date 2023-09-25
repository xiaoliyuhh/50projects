const textarea = document.querySelector('.content')
const container = document.querySelector('.container')

textarea.addEventListener('keyup', (event) => {
    const arr = event.target.value.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    container.innerHTML = ''
    arr.forEach(item => {
        const box = document.createElement('span')
        box.classList.add('box')
        box.innerText = item
        container.appendChild(box)
    })
    if (event.key === 'Enter') {
        event.target.value = ''
        randomSelect()
    }
})
function randomSelect() {
    const interval = setInterval(() => {
        const spans = document.querySelectorAll('.box')
        const randomSpan = spans[Math.floor(Math.random() * spans.length)]
        if (randomSpan !== undefined) {
            randomSpan.classList.add('highlight')
        }
        setTimeout(() => {
            randomSpan.classList.remove('highlight')
        }, 100)
        clearTimeout(timeOut)
    }, 100)
    setTimeout(() => {
        clearInterval(interval)
    }, 3000)
}

