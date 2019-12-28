// var answer = prompt("Give me a number between zero and three.");
// answer = parseInt(answer);
// switch (answer) {
//     case 0:
//         alert("This number is zero.");
//         break;
//     case 1:
//         alert("This number is one.");
//         break;
//     case 2:
//         alert("This number is two.");
//         break;
//     case 3:
//         alert("This number is .");
//         break;
// }

document.getElementsByClassName("temp").innerHTML = "fancy";

// Cant get this to work
var canvas = document.getElementById("canvasOne");
var canvasContent = canvas.getContext("2d");
canvasContent.font = "30px Arial";
canvasContent.strokeText("Hello World", 10, 50);