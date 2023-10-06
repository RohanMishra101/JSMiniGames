
// alert("The game is still under CONSTRUCTION. You can sillt try it, if you found it laggy then My Brother/Sister its time to upgrade you PC cause it works on mine!!");

let canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext("2d");

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

//Screen Center Point
let centerPointX = canvas.width/2;
let centerPointY = canvas.height/2;

// console.log("X : ", centerPointX," Y : ",centerPointY);

//Mouse Position on the body
let mousePosX;
let mousePosY;
let angle;

// 90 degrees in clockwise direction
const initialOffsetAngle = Math.PI / 2; 

//Player
class Player{
    constructor(){
        this.posX = centerPointX;
        this.posY = centerPointY;
        this.health = 100;
        this.speed = 3;
        this.angle;
    }
    draw(){
        // Set shadow properties for the glow effect
        playerContext.shadowColor = "White"; // Color of the glow
        playerContext.shadowBlur = 7; // Blur radius of the glow
        playerContext.shadowOffsetX = 0; // Horizontal offset of the glow
        playerContext.shadowOffsetY = 0; // Vertical offset of the glow

        playerContext.clearRect(0,0,canvas.width,canvas.height);

        playerContext.save();
        playerContext.translate(this.posX,this.posY);
        playerContext.rotate(this.angle + initialOffsetAngle);
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

    rotate(){
        const deltaX = mousePosX - this.posX;
        const deltaY = mousePosY - this.posY;
        this.angle = Math.atan2(deltaY, deltaX);

    }

    move(){
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
}

const player = new Player();



//Bullet
class Bullet{
    constructor() {
        this.x = 100;
        this.y = 100;
        this.radiusX = 100;
        this.radiusY = 50;
        this.rotation = 0;
        this.fireRate = 1;
        this.damage = 40;
    }
    
}

document.body.addEventListener("mousemove",(e)=>{
    mousePosX = parseInt(e.clientX);
    mousePosY = parseInt(e.clientY);

    // console.log("X : ", mousePosX," Y : ",mousePosY);
});

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

    requestAnimationFrame(gameLoop);
}

function updateGame(){

    player.draw();
    player.rotate();
    player.move();
}

gameLoop();