const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(item => {
    item.addEventListener('change', (e) => {
        // 每次复选框的状态变化都判断是否满，满了取消一个
        cancel(e.target)
    })
})
function cancel(element) {
    // 如果满
    if (good.checked && cheap.checked && fast.checked) {
        // 满时点击的是good，取消cheap
        if (element === good) {
            fast.checked = false
        }
        else if (element === cheap) {
            good.checked = false
        }
        else if (element === fast) {
            cheap.checked = false
        }
    }
}
