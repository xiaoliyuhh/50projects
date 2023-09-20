const container = document.querySelector('.container')
window.addEventListener('keydown', (event) => {
    container.innerHTML = `
    <div class="box">
        ${event.key === '' ? 'Space' : event.key}
        <small>event.key</small>
    </div>
    <div class="box">
        ${event.code}
        <small>event.code</small>
    </div>
    `
})