function doThing1() {
    var num = 7 + 8;
    document.getElementById("add").innerHTML = "7 + 8 = " + num;
}

function doThing2() {
    var num = 7 - 5;
    document.getElementById("minus").innerHTML = "7 - 5 = " + num;
}

function doThing3() {
    var num = 7 * 8;
    document.getElementById("mult").innerHTML = "7 * 8 = " + num;
}

function doThing4() {
    var num = 7 / 8;
    document.getElementById("divide").innerHTML = "7 / 8 = " + num;
}

function doThing5() {
    var num = 1 + 2 * 3 / 4;
    document.getElementById("all").innerHTML = "1 + 2 * 3 / 4 = " + num;
}

function doThing6() {
    var num = 114 % 17;
    document.getElementById("remain").innerHTML = "114 / 17 has a remainder of " + num;
}

function doThing7() {
    var num = 10;
    document.getElementById("neg").innerHTML = "The negative equivalent of 10 is " + -num;
}

function doThing8() {
    var num = 5;
    num++;
    document.getElementById("inc").innerHTML = "One more than 5 is " + num;
}

function doThing9() {
    var num = 5;
    num--;
    document.getElementById("dec").innerHTML = "One less than 5 is " + num;
}

function doThing10() {
    var num = Math.ceil(Math.random() * 100);
    document.getElementById("rand").innerHTML = "A number between 1 and 100 is " + num;
}