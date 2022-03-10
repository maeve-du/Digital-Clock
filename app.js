const clock = document.querySelector('.clock');
const audio = new Audio('./tick.m4a');
const soundBtn = document.querySelector('.sound')
const svgOn = `<svg class="sound-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
style="fill: rgb(255, 255, 255);">
<path
    d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z">
</path>
<path
    d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z">
</path>
</svg>`
const svgOff = `<svg class="sound-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
style="fill: rgb(255, 255, 255);">
<path
    d="m7.727 6.313-4.02-4.02-1.414 1.414 18 18 1.414-1.414-2.02-2.02A9.578 9.578 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.13 8.13 0 0 1-1.671 4.914l-1.286-1.286C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V2.132L7.727 6.313zM4 17h2.697L14 21.868v-3.747L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z">
</path>
</svg>`;

isOn = false;

soundBtn.addEventListener('click', () => {
    isOn = !isOn
    soundHtml = isOn ? svgOn : svgOff
    soundBtn.innerHTML = soundHtml

})

soundBtn.addEventListener('gestureend', () => {
    isOn = !isOn
    soundHtml = isOn ? svgOn : svgOff
    soundBtn.innerHTML = soundHtml

})


const tick = () => {
    const now = new Date();
    // console.log(now);
    const h = now.getHours();

    let m = now.getMinutes();
    let s = now.getSeconds()
    // console.log('h', h, 'm', m, 's', s);
    // console.log(clock);

    let mHTML = '';

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

setInterval(() => {
    tick();
    audio.autoplay = false;
    if (isOn) {
        audio.src = './tick.m4a'
        audio.play().catch(err => {
            console.log('Error:', err)
        });

    }
}, 1000)