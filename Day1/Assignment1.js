let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

//Background
context.beginPath();
context.rect(122,180,260,70);
context.fill();

// red light
context.beginPath();
context.fillStyle = "Red";
context.arc(180,215,25,0,360);
context.fill();
context.stroke();

// Yellow light
context.beginPath();
context.fillStyle = "Yellow";
context.arc(250,215,25,0,360);
context.fill();
context.stroke();

// red light
context.beginPath();
context.fillStyle = "Green";
context.arc(320,215,25,0,360);
context.fill();
context.stroke();



