function Call_Loop() {
    var num = 0;
    while (num < 51) {
        num++;
    }
}

// This is my for loop function
function for_Loop() {
    var num = 0
    for (var i = 0; i < 15; i++) {
        num++;
        console.log(num);
    }
}

function array_function(typeNum) {
    var array = ["sand", "gravel", "dirt", "concrete", "grass"];
    document.getElementById("array").innerHTML = array[typeNum];
}

const Jacob1 = {
    name: "Jacob S",
    gender: "M",
    hairColor: "Brown",
}

function constant_function() {
    document.getElementById("constant").innerHTML = Jacob.name;
}

let ham = "tasty";

let Jacob2 = {
    name: "Jacob S",
    gender: "M",
    hairColor: "Brown",
    speak: function() {
        return "Hello there, my name is Jacob.";
    }
}