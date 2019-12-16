var sand = 4;

function sandcastle(sandAmount) {
    var sandMultiplyer = 2;
    return sand * sandMultiplyer;
}

function time() {
    var currentTime = new Date().getHours();
    document.getElementById("time").innerHTML = currentTime;
}

// if (7 == "7") {
//     console.log("Yay!");
// }

function numCheck() {
    var numToCheck = document.getElementById("numInput").value;
    if (numToCheck <= 57) {
        document.getElementById("answer").innerHTML = "Too small!";
    } else if (numToCheck == 58) {
        document.getElementById("answer").innerHTML = "The perfect number!";
    } else {
        document.getElementById("answer").innerHTML = "Too big!";
    }
}