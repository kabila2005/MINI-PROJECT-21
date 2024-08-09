// Real-time clock
let clockInterval;

function updateClock() {
    const date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
}

const startClock = () => {
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
}

startClock();

// Stopwatch
let stopwatchInterval;
let stopwatchRunning = false;
let elapsedTime = 0;

const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateStopwatch() {
    elapsedTime++;
    document.getElementById("stopwatch").innerHTML = formatTime(elapsedTime);
}

const startStopwatch = () => {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    }
}

const stopStopwatch = () => {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
}

document.getElementById("startStopwatch").addEventListener("click", startStopwatch);
document.getElementById("stopStopwatch").addEventListener("click", stopStopwatch);
