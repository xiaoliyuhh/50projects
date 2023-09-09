const btn = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.getElementById('input')
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    // 将焦点设置在input框，可以直接输入
    input.focus();
})