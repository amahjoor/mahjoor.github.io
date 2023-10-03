let intervalId;
let minutes = 20;
let seconds = 0;
let counter = 0;

function startTimer() {
  stopTimer(); // Clear any existing intervals
  document.body.classList.add('timer-active'); // Add a class to the body when timer starts
  intervalId = setInterval(function() {
    if(seconds === 0) {
      if(minutes === 0) {
        clearInterval(intervalId);
        counter++;
        document.getElementById('counter').textContent = 'completed: ' + counter;
        alert('Time is up!');
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  document.body.classList.remove('timer-active'); // Remove the class from the body when timer stops
}

function resetTimer() {
  stopTimer();
  minutes = 20;
  seconds = 0;
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
