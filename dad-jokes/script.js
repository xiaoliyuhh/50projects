const joke = document.querySelector('.joke')
const btn = document.querySelector('.btn')


btn.addEventListener('click', generateJoke)
generateJoke()
async function generateJoke() {
    // 设置请求头接收的数据是json格式
    const res = await fetch('https://icanhazdadjoke.com', { headers: { 'Accept': 'application/json', }, })
    // 将获取的json格式的数据转换成javascript对象
    const data = await res.json()
    joke.innerHTML = data.joke
}
