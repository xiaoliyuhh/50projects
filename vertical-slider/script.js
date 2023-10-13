const left = document.querySelector('.left')
const right = document.querySelector('.right')
const next = document.querySelector('.next')
const pre = document.querySelector('.pre')
const slideLength = right.querySelectorAll('div').length
const container = document.querySelector('.container')
let i = 0
// 因为左边和右边移动的方向相反，按下一张时，left向下移，会显示上面的div，所以应该先把left这个大盒子整体向上移
left.style.top = `-${(slideLength - 1) * 100}vh`
next.addEventListener('click', () => {
    changeSlide('next')
})
pre.addEventListener('click', () => {
    changeSlide('pre')
})
const changeSlide = (btn) => {
    const slideHeight = container.clientHeight
    if (btn === 'next') {
        i++
        if (i > slideLength - 1) {
            i = 0
        }
    } else if (btn === 'pre') {
        i--
        if (i < 0) {
            i = slideLength - 1
        }
    }
    right.style.transform = `translateY(-${i * slideHeight}px)`
    left.style.transform = `translateY(${i * slideHeight}px)`
}
