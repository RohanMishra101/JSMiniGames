let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let topCanvas = document.createElement("canvas");
let topContext = topCanvas.getContext("2d");

topCanvas.width = canvas.width;
topCanvas.height = canvas.height;
// topCanvas.style.backgroundColor = "red";
topCanvas.style.position = "absolute";
topCanvas.style.top = "0";
topCanvas.style.left = "0";
topCanvas.style.pointerEvents = "none"; 

document.body.appendChild(topCanvas);

let targetX,targetY;
let posX, posY;

//Top layer for target to follow 
function paintBall(posX, posY) {
    topContext.clearRect(0, 0, topCanvas.width, topCanvas.height);

    topContext.beginPath();
    topContext.strokeStyle = "White"
    topContext.lineWidth = 5;
    topContext.fillStyle = "red";
    topContext.arc(posX, posY, 90, 0, 2 * Math.PI);
    topContext.fill();
    topContext.stroke();
}


// Target follows mouse
canvas.addEventListener("mousemove", (e) => {
    let X = parseInt(e.clientX);
    let Y = parseInt(e.clientY);
    targetX = X;
    targetY = Y;

    paintBall(targetX, targetY);
});

// Print the target on the screen when clicked
canvas.addEventListener("mousedown", (e) => {
    let X = parseInt(e.clientX);
    let Y = parseInt(e.clientY);
    targetX = X;
    targetY = Y;
    
    console.log("X : ", targetX, " Y : ", targetY );  

    ctxPaintBall(targetX,targetY)
});

function ctxPaintBall(posX,posY){
    context.beginPath();
    context.strokeStyle = "White";
    context.lineWidth = 5;
    context.fillStyle = "Red";
    context.arc(targetX, targetY, 90, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
}

