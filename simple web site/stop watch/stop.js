const miniteEle = document.getElementById('minite');
const secEle = document.getElementById('sec');
const milisecEle = document.getElementById('mili');


const lampElement = document.getElementById('lamp');
const startElement = document.getElementById('start');
const resetElement = document.getElementById('reset');


let sec = 0;
let min = 0;
let milisecendCounter = 0;
let isStop = true;
let intervalId;


startElement.addEventListener('click', function () {
    if (isStop) {
        setCss('Stop', 'red', false);
        intervalId = setInterval(() => {

            ++milisecendCounter;

            if (`${milisecendCounter}`.length < 2) {
                milisecEle.textContent = `0${milisecendCounter}`;
            } else {
                milisecEle.textContent = ++milisecendCounter;
            }


            if (milisecendCounter === 99) {
                if (sec < 9) {
                    secEle.textContent = `0${++sec}`;
                } else {
                    secEle.textContent = ++sec;
                }
                milisecendCounter = 0;


            } else if (sec === 59) {
                if (sec < 9) {
                    milisecEle.textContent = `0${++sec}`;
                } else {
                    milisecEle.textContent = ++sec;
                }
                sec = 0;
            }
        }, 10);

    } else {
        setCss('Start', 'rgb(0, 255, 200)', true);
        clearInterval(intervalId);

    }
})

resetElement.addEventListener('click', function () {
    clearInterval(intervalId);
    sec = 0;
    min = 0;
    milisecendCounter = 0;
    isStop = true;

    secEle.textContent = '00';
    miniteEle.textContent = '00';
    milisecEle.textContent = '00';

    startElement.innerText = 'Start';
    startElement.style.backgroundColor = 'rgb(0, 255, 200)';
})


let lamp_info = document.querySelector('.stop-watch-history');
let lamp_con = document.querySelector('.lamp-con');
let no_history = document.querySelector('#no-history');
let cleanEle = document.querySelector('#clean');

let lampCounter = 0;
let order = 0;

lampElement.addEventListener('click', function () {
    no_history.style.display = 'none';
    cleanEle.style.display = 'block';

    let div = document.createElement('div');
    div.classList.add('history-info');
    div.style.order = --order;

    div.innerHTML = `
    <p id="lamp-info">lamp:<span>${++lampCounter}</span></p>
    <p><span id="l-minite" class="minite">${min}</span>:<span id="l-sec" class="sec">${sec}</span>:<span id="l-mili" class="mili">${milisecendCounter}</span></p>
    `;

    lamp_con.appendChild(div);
})


// for clean the all lemp 
cleanEle.addEventListener('click', function(){
    // console.log(lamp_info.children.length - 2);
    lamp_con.innerHTML = '';
    no_history.style.display = 'block';
    cleanEle.style.display = 'none';

    
})



function setCss(text, color, trueOrFalse) {
    startElement.innerText = text;
    startElement.style.backgroundColor = color;
    isStop = trueOrFalse;
}