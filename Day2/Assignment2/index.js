
alert("Click for arrow");


let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let topCanvas = document.createElement("canvas");
let topContext = topCanvas.getContext("2d");

topCanvas.width = canvas.width;
topCanvas.height = canvas.height;
topCanvas.style.position = "absolute";
topCanvas.style.top = "0";
topCanvas.style.left = "0";
topCanvas.style.pointerEvents = "none"; 

document.body.appendChild(topCanvas);

let arrowCanvas = document.createElement("canvas");
let arrowContext = arrowCanvas.getContext("2d");

arrowCanvas.width = canvas.width;
arrowCanvas.height = canvas.height;

arrowCanvas.style.position = "absolute";
arrowCanvas.style.top = "0";
arrowCanvas.style.left = "0";
arrowCanvas.style.pointerEvents = "none"; 

document.body.appendChild(arrowCanvas);


let targetX, targetY;
let min = 0,max = 2;


let tempPosX,tempPosY;
let targetPosX;
let targetPosY;

let arrwoLastPosX,arrowLastPosY;
let outerRandomColor = generateRandomColor();
let middleRandomColor = generateRandomColor();
let innerRandomColor = generateRandomColor();

function generateRandomColor(){
     const randomR = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red component
     const randomG = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green component
     const randomB = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue component
     return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

//Top layer for target to follow 
function paintTarget(posX, posY) {
    topContext.clearRect(0, 0, topCanvas.width, topCanvas.height);

    topContext.beginPath();
    topContext.strokeStyle = "White"
    topContext.lineWidth = 5;
    topContext.fillStyle = outerRandomColor;
    topContext.arc(posX, posY, 90, 0, 2 * Math.PI);
    topContext.fill();
    topContext.stroke();

    topContext.beginPath();
    topContext.fillStyle = middleRandomColor;
    topContext.arc(posX, posY, 60, 0, 2 * Math.PI);
    topContext.fill();

    topContext.beginPath();
    topContext.fillStyle = innerRandomColor;
    topContext.arc(posX, posY, 30, 0, 2 * Math.PI);
    topContext.fill();

    
}
setInterval(() =>{
    innerRandomColor = generateRandomColor();
    middleRandomColor = generateRandomColor();
    outerRandomColor = generateRandomColor();
},500);

// Target follows mouse
canvas.addEventListener("mousemove", (e) => {
    let X = parseInt(e.clientX);
    let Y = parseInt(e.clientY);
    targetX = X;
    targetY = Y;

    paintTarget(targetX, targetY);
});

// Print the target on the screen when clicked
canvas.addEventListener("mousedown", (e) => {
    let X = parseInt(e.clientX);
    let Y = parseInt(e.clientY);
    targetX = X;
    targetY = Y;

    
    tempPosX = targetX;
    tempPosY = targetY;
    targetPosX = 10;
    
    console.log("X : ", targetX, " Y : ", targetY );

    context.beginPath();
    context.strokeStyle = "White";
    context.lineWidth = 5;
    context.fillStyle = outerRandomColor;
    context.arc(targetX, targetY, 90, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle = middleRandomColor;
    context.arc(targetX, targetY, 60, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.fillStyle = innerRandomColor;
    context.arc(targetX, targetY, 30, 0, 2 * Math.PI);
    context.fill();

    let max = tempPosY+88;
    let min = tempPosY-88;
    targetPosY = Math.floor(Math.random() * (max - min) + min);
    console.log(targetPosY);


    createArrow();
 
    
});


function createArrow() {
    
    if (targetPosX < tempPosX -120) {
        arrowContext.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height);
        console.log("Arrow Created");
        arrowContext.beginPath();
        
        arrowContext.fillStyle = "White";
        arrowContext.rect(targetPosX, targetPosY, 120, 5);
        arrowContext.fill();

        if (targetPosX < tempPosX) {
            setTimeout(createArrow, 1); 
            targetPosX += 20;

        }
    }else{
        context.beginPath();
        context.strokeStyle = "White"
        context.fillStyle = "White";
        context.rect(targetPosX-10, targetPosY, 120, 5);
        context.fill();
        context.stroke();
    }
}











