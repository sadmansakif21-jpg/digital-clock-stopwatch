// Digital Clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}
setInterval(updateClock, 1000);
updateClock();

// Stopwatch
let stopwatchInterval;
let elapsedSeconds = 0;

function formatTime(sec) {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const secs = String(sec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

document.getElementById('startBtn').addEventListener('click', () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            elapsedSeconds++;
            document.getElementById('stopwatch').textContent = formatTime(elapsedSeconds);
        }, 1000);
    }
});

document.getElementById('stopBtn').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    elapsedSeconds = 0;
    document.getElementById('stopwatch').textContent = "00:00:00";
});