const circles = document.querySelectorAll('.circle')
const pre = document.getElementById('pre')
const next = document.getElementById('next')
const progress = document.getElementById('progress')

let currentDone = 1;
next.addEventListener('click', () => {
    currentDone++;
    if (currentDone > circles.length) {
        currentDone = circles.length;
    }
    update();
})
pre.addEventListener('click', () => {
    currentDone--;
    if (currentDone < 1) {
        currentDone = 1;
    }
    update();
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentDone) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active.circle');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentDone === 1) {
        pre.disabled = true;
    }
    else if (currentDone === circles.length) {
        next.disabled = true
    }
    else {
        pre.disabled = false;
        next.disabled = false;
    }
}

