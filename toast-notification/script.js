const btn = document.querySelector('.btn')
const msgBox = document.querySelector('.msgBox')
const msgName = ['MessageOne', 'MessageTwo', 'MessageThree', 'MessageFour']
const msgColor = ['green', 'red', 'purple']
// 或者使用这个方法消除
// setInterval(() => {
//     const msgs = document.querySelectorAll('.msg')
//     msgs[0].parentNode.removeChild(msgs[0])
// }, 4000)
btn.addEventListener('click', () => {
    const msg = document.createElement('div')
    msg.classList.add('msg')
    msg.innerText = `${msgName[Math.floor(Math.random() * 4)]}`
    msg.style.color = `${msgColor[Math.floor(Math.random() * 3)]}`
    msgBox.appendChild(msg)
    setTimeout(() => {
        msg.remove()
    }, 3000)
})