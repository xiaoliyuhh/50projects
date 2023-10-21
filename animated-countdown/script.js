const replay = document.querySelector('.replay')
const sleep = document.querySelector('.sleep')
const count = document.querySelector('.count')
const start = document.querySelector('.start')
const nums = document.querySelectorAll('.count span')
function resetDOM() {
    sleep.classList.add('hidden')
    start.classList.remove('hidden')


    nums.forEach((num) => {
        num.classList.value = ''
    })
    nums[0].classList.add('in')
}
function countdown() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1
        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                start.classList.add('hidden')
                sleep.classList.remove('hidden')
            }
        })
    })
}
replay.addEventListener('click', () => {
    resetDOM()
    countdown()
})
