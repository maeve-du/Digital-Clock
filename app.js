const clock = document.querySelector('.clock')
const audio = new Audio('tick.m4a');

const tick = () => {
    const now = new Date();
    // console.log(now);
    const h = now.getHours();

    let m = now.getMinutes();
    let s = now.getSeconds()
    // console.log('h', h, 'm', m, 's', s);
    // console.log(clock);

    let mHTML = ''

    m < 10 ? mHTML = `<span class="time">0${m}</span>`
        : m === 0 ? mHTML = `<span class="time">00</span>`
            : mHTML = `<span class="time">${m}</span>`

    let sHTML = '';
    if (s < 10) {
        sHTML = `<span class="time">0${s}</span>`
    } else if (s === 0) {
        sHTML = `<span class="time">00</span>`
    }
    else {
        sHTML = `<span class="time">${s}</span>`
    };

    clock.innerHTML = `
    <span class="time"> ${h}</span><span class="flash"> : </span>
    ${mHTML}<span class="flash"> : </span>
    ${sHTML}
    `
}

// const btn = document.querySelector('button')
// const audio = new Audio('tick.m4a');
// btn.addEventListener('click', () => {

// })


setInterval(() => {
    tick()
    audio.play()
}, 1000)
