const btn = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.getElementById('input')
btn.addEventListener('click', () => {
    if (input.type === 'text') {
        input.type = 'hidden'
    }
    else {
        input.type = 'text'
    }
})