
alert("The game is still under CONSTRUCTION. You can sillt try it, if you found it laggy then My Brother/Sister its time to upgrade you PC cause it works on mine!!")

let canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext("2d");

//Screen Center Point
let centerPointX = canvas.width/2;
let centerPointY = canvas.height/2;

// console.log("X : ", centerPointX," Y : ",centerPointY);

//Mouse Position on the body
let mousePosX;
let mousePosY;
let angle;

//Player

let player = {
    posX: centerPointX,
    posY: centerPointY,
    health: 100,
    speed: 3
}

// 90 degrees in anti-clockwise direction
const initialOffsetAngle = Math.PI / 2; 




//Creating a new layer for player
let playerCanvas = document.createElement("canvas");
let playerContext = playerCanvas.getContext("2d");

playerCanvas.width = canvas.width;
playerCanvas.height = canvas.height;

playerCanvas.style.position = "absolute";
playerCanvas.style.top = "0";
playerCanvas.style.left = "0";
playerCanvas.style.pointerEvents = "none";
playerCanvas.style.zIndex = "100";


document.body.appendChild(playerCanvas);






function initiatePlayer(){
    // Set shadow properties for the glow effect
    playerContext.shadowColor = "White"; // Color of the glow
    playerContext.shadowBlur = 7; // Blur radius of the glow
    playerContext.shadowOffsetX = 0; // Horizontal offset of the glow
    playerContext.shadowOffsetY = 0; // Vertical offset of the glow


    playerContext.clearRect(0,0,canvas.width,canvas.height);


    playerContext.save();
    playerContext.translate(player.posX,player.posY);
    playerContext.rotate(angle + initialOffsetAngle);
    playerContext.beginPath();
    playerContext.fillStyle = "White";
    playerContext.rect(-7.5,-45,15,80);
    playerContext.fill();

    playerContext.beginPath();
    playerContext.strokeStyle = "white";
    playerContext.lineWidth = 4;
    playerContext.fillStyle = "Red";
    playerContext.arc(0,0,35,0,360);
    playerContext.fill();
    playerContext.stroke();

    playerContext.restore();
}

function rotatePlayer(){
    const deltaX = mousePosX - player.posX;
    const deltaY = mousePosY - player.posY;
    const angle = Math.atan2(deltaY, deltaX);
    return angle;  
}

document.body.addEventListener("mousemove",(e)=>{
    mousePosX = parseInt(e.clientX);
    mousePosY = parseInt(e.clientY);

    // console.log("X : ", mousePosX," Y : ",mousePosY);
});

// canvas.addEventListener("mousemove",()=>{
//     angle = rotatePlayer();
// });

// Initialize an object to store the state of the keys
const keys = {};

// Event listeners for keydown and keyup events to track the state of the keys
document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});


function gameLoop(){
    updateGame();

    renderGame();

    requestAnimationFrame(gameLoop);
}

function updateGame(){
    playerMovement();

    angle = rotatePlayer();
}
function playerMovement(){
    if (keys["KeyW"]) {
        player.posY -= player.speed;
    }
    if (keys["KeyA"]) {
        player.posX -= player.speed;
    }
    if (keys["KeyS"]) {
        player.posY += player.speed;
    }
    if (keys["KeyD"]) {
        player.posX += player.speed;
    }
}

function renderGame(){
    //Initiallizing a player
    initiatePlayer();
}

gameLoop();





