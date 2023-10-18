const result = document.querySelector('.result')
const btn = document.querySelector('.btn')
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '>', '<']
const icon = document.querySelector('.icon')
btn.addEventListener('click', () => {
    const upper = document.getElementById('upper').checked
    const lower = document.getElementById('lower').checked
    const num = document.getElementById("num").checked
    const sym = document.getElementById("sym").checked
    const len = +document.getElementById('len').value
    console.log('111')
    result.innerText = generator(upper, lower, num, sym, len)
})

icon.addEventListener('click', () => {
    const pass = result.innerText;
    if (!pass) {
        return;
    }
    // 复制到剪切板
    navigator.clipboard.writeText(pass);
    alert('Password copied to clipboard!')
})
const randomFunc = {
    upper: getUp,
    lower: getLow,
    num: getNumber,
    sym: getSymbol
}
function generator(upper, lower, num, sym, len) {
    let pwd = ''
    console.log('222')
    const typesArr = [{ upper }, { lower }, { num }, { sym }]
    console.log(typesArr)
    const needCount = upper + lower + num + sym
    if (needCount === 0) {
        return ''
    }
    // Object.values() 方法返回给定对象自己可枚举属性的值数组[true]
    const needArr = typesArr.filter(item => {
        // 如果箭头函数写了{}，就要写return
        return Object.values(item)[0]
    })
    console.log(needArr)
    for (let i = 0; i < len; i += needCount) {
        console.log(len)
        needArr.forEach(item => {
            const key = Object.keys(item)[0]
            // 调用需要的字符对应的获取函数
            pwd += randomFunc[key]()
        })
    }
    console.log(pwd)
    const finalPwd = pwd.slice(0, len)

    console.log('333')
    return finalPwd
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
