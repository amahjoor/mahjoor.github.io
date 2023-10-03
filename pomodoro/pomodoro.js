let workTitle = document.getElementById('grind');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;
let seconds = 0;
let intervalId; // Declare it here to make it accessible in both start and reset functions


window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
    workTitle.classList.add('active');
}

function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";
    let workMinutes = workTime;
    let breakMinutes = breakTime;
    let breakCount = 0;

    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
        seconds--;

        if (seconds < 0) {
            if (workMinutes > 0) {
                workMinutes--;
                seconds = 59;
            } else if (breakCount % 2 === 0) {
                workMinutes = breakMinutes;
                breakCount++;
                workTitle.classList.remove('active');
                breakTitle.classList.add('active');
            } else {
                workMinutes = workTime;
                breakCount++;
                breakTitle.classList.remove('active');
                workTitle.classList.add('active');
            }
        }
    }
    intervalId = setInterval(timerFunction, 1000); // Assign the intervalId here
}

function reset() {
    clearInterval(intervalId); // Now it should work
    document.getElementById('minutes').innerHTML = 25;
    document.getElementById('seconds').innerHTML = '00';
    seconds = 0;
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";
    workTitle.classList.add('active');
    breakTitle.classList.remove('active');
}
