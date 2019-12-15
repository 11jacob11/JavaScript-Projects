var Car = {
    size:"big",
    color:"pink",
    sound:"Vroom!",
    wheels:4,
}

delete Car.sound;

function carNoise() {
    document.getElementById("Dict").innerHTML = Car.sound
}