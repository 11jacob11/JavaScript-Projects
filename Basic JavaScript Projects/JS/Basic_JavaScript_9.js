function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds--;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's Up!")
        }
    }
    tick();
}