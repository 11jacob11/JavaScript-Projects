var cheese = "soft";
console.log(typeof cheese);

function bigNum(x) {
    if (x == 1) {
        document.getElementById("inf").innerHTML = 3E310;
    } else if (x == 0) {
        document.getElementById("neg-inf").innerHTML = -3E310;
    }
}

document.write(10 > 2);

console.log(5 + "17");
console.log(false);
console.log(5 == 5);
console.log(5 == 7);
console.log(5 === 5);
console.log("5" === false);
console.log(5 === "5");
console.log(true && true);
console.log(!false);
console.log(!true);