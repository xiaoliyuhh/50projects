const btn = document.querySelector('.btn')
let offX = btn.offsetX
let offY = btn.offsetY
btn.addEventListener('click', (e) => {
    // 鼠标指针在页面的距离，不需要关心具体触发事件的元素
    const x = e.pageX
    const y = e.pageY
    // 获取触发事件的具体元素
    const btnx = e.target.offsetLeft
    const btny = e.target.offsetTop

    try {
        const ndiv = document.querySelector('.ndiv')
        if (ndiv) btn.removeChild(ndiv)
    } catch {
        console.error(e.message)
    }
    const ndiv = document.createElement('div')
    ndiv.classList.add('ndiv')
    ndiv.style.left = (x - btnx) + 'px'
    ndiv.style.top = (y - btny) + 'px'
    btn.appendChild(ndiv)
})