let timerInterval;

function startTimer() {
    clearInterval(timerInterval); // Reset timer

    let hours = parseInt(document.getElementById("hours").value) || 0;
    let minutes = parseInt(document.getElementById("minutes").value) || 0;
    let seconds = parseInt(document.getElementById("seconds").value) || 0;

    let totalTime = hours * 3600 + minutes * 60 + seconds;

    if (totalTime <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    updateTimerDisplay(totalTime);

    timerInterval = setInterval(() => {
        totalTime--;
        updateTimerDisplay(totalTime);

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").textContent = "Time's Up!";
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay(time) {
    let hrs = Math.floor(time / 3600);
    let mins = Math.floor((time % 3600) / 60);
    let secs = time % 60;

    document.getElementById("timer").textContent =
        `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
