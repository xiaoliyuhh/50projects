const bg = document.getElementById('background')
const pwd = document.getElementById('pwd')
pwd.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blurValue = 20 - length * 2
    bg.style.filter = `blur(${blurValue}px)`
})