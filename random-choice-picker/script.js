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
    }
})

