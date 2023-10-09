let canvas = document.getElementById("canvas")
let decrease = document.getElementById("decrease")
let increase = document.getElementById("increase")
let sizes = document.getElementById("size")
let colors = document.getElementById('color')
const clear = document.getElementById('clear')


const ctx = canvas.getContext("2d");
colors.value = 'black'
let color = colors.value;
let size = 10;

// 画笔状态，鼠标按下时painting为true,表示在画
let painting = false;
// 记录画笔最后一次的位置
let lastPoint = { x: undefined, y: undefined };
// 鼠标按下事件
canvas.addEventListener('mousedown', (e) => {
    painting = true;
    let x = e.offsetX;
    let y = e.offsetY;
    lastPoint = { 'x': x, 'y': y };
    drawCirle(x, y);
})
// 鼠标移动事件
canvas.addEventListener('mousemove', (e) => {
    if (painting) {
        const x = e.offsetX;
        const y = e.offsetY;
        const newPoint = { 'x': x, 'y': y };
        drawCirle(x, y);
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        // 不断更新鼠标的点，连成线
        lastPoint = newPoint;
    }
})
// 鼠标松开事件
canvas.addEventListener('mouseup', (e) => {
    painting = false;
})


function drawCirle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = color
    // 使用fill会自动闭合路径
    ctx.fill()
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    // 使用stroke不会自动闭合路径
    ctx.stroke();
}

// 改变画笔粗细功能
function updateSize() {
    sizes.innerText = size
}
// 点击增加按钮
increase.addEventListener('click', () => {
    size += 5;
    if (size > 50) size = 50;
    updateSize();
})
decrease.addEventListener('click', () => {
    size -= 5;
    if (size < 5) size = 5;
    updateSize();
})

// 改变颜色
colors.addEventListener('change', (e) => {
    color = e.target.value;
})

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
