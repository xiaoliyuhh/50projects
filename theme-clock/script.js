const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const time = document.querySelector('.time')
const dd = document.querySelector('.date')
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
clock()
setInterval(clock, 1000)
function clock() {
    let date = new Date();
    // 时间
    let hourDeg = date.getHours() % 12 * 30;
    let minuteDeg = date.getMinutes() * 6
    let secondDeg = date.getSeconds() * 6
    hour.style.transform = `rotate(${hourDeg}deg)`
    minute.style.transform = `rotate(${minuteDeg}deg)`
    second.style.transform = `rotate(${secondDeg}deg)`
    time.innerText = `${date.getHours()}:${date.getMinutes()}PM`
    // 日期
    let week = date.getDay();
    let month = date.getMonth();
    let day = date.getDate();
    dd.innerHTML = `${days[week]},${months[month]}<span>${day}</span>`
}
