const container = document.querySelector('.container')
const text = document.querySelector('.text')

function update() {
    let opacity = 0;
    let num = 0
    let indervalId = setInterval(() => {
        opacity += 0.01;
        if (opacity >= 1.01) {
            clearInterval(indervalId);
            text.style.display = "none"
        }
        container.style.opacity = opacity
        text.innerHTML = `${num++}%`
    }, 20);
}
update();