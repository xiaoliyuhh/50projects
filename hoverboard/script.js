const container = document.getElementById('container')
const colors = ['#cc4747', '#eb7e30', '#e5eb30', '#76cc3e', '#67cedd', '#ac67dd']

for (let i = 0; i < 500; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.addEventListener('mouseover', () => setColor(cell))
    cell.addEventListener('mouseout', () => removeColor(cell))
    container.appendChild(cell)
}
function setColor(e) {
    const color = changeColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`

}
function removeColor(e) {
    e.style.backgroundColor = '#3e3c3c'
    e.style.boxShadow = `0 0 2px #000`

}
function changeColor() {
    return colors[Math.floor(Math.random() * 6)]
}
