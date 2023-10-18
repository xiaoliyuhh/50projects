const show = document.querySelector('.show')
const len = document.getElementById('len').value
const upper = document.getElementById('upper').checked
const lower = document.getElementById('lower').checked
const num = document.getElementById("num").checked
const sym = document.getElementById("sym").checked
const btn = document.querySelector('.btn')
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '>', '<']

btn.addEventListener('click', () => {

})

function generator(upper, lower, num, sym, len) {
    const typesArr = [{ upper }, { lower }, { num }, { sym }, { len }]
    // Object.values() 方法返回给定对象自己可枚举属性的值数组
    const needArr = typesArr.filter(item => { Object.values(item)[0] })
}
function getUp() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26))
}
function getLow() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26))
}
function getNumber() {
    return Math.floor(Math.random() * 10)
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * 10)]
}
