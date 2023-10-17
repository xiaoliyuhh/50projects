const show = document.getElementById('show')
const speed = document.getElementById('speed')
const text = "We Love Programming"
let spd = 300 / speed.value
let idx = 1;
writeText()

function writeText() {
    show.innerHTML = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, spd)
}
speed.addEventListener('input', (e) => spd = 300 / e.target.value)