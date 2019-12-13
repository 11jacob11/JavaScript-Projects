function doThing1() {
    var str = "This text is Green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

function doThing2() {
    var sentence = "I am Learning";
    sentence += " a lot from this book";
    document.getElementById("concatenate").innerHTML = sentence;
}