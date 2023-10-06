const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas.style.opacity = "30%";

let width = 700;
let height = 700;

let wMax = canvas.width;
let wMin = 0;

let hMax = canvas.height;
let hMin = 0;

let rMax = 300;
let rMin = 100;
let totalParticals = 20;



class particles{
    constructor(){
        this.x = Math.floor(Math.random() * (wMax - wMin + 1) + wMin);
        this.y = Math.floor(Math.random() * (hMax - hMin + 1) + hMin);
        this.r = Math.floor(Math.random() * (rMax - rMin + 1) + rMin);
        this.color = generateRandomColor();
        this.opacitiy = Math.random() * (0.8 - 0.2 + 1) + 0.2;
    }

    draw(){
        // c.clearRect(0,0,width,height);
        console.log(this.opacitiy);
        c.beginPath();
        c.globalAlpha = this.opacitiy;
        c.fillStyle = this.color;
        c.arc(this.x,this.y,this.r,0,2 * Math.PI);
        c.fill();

        this.move();
    }

    move(){
        this.x += Math.floor(Math.random() * 3) - 1;
    }

    // move(){
    //     this.x += Math.floor(Math.random() * (1 + 1 + 1) -1);
    //     this.y += Math.floor(Math.random() * (1 + 1 + 1) -1);
        
    // }

    // move() {
    //     const speed = 1; // Adjust the speed as needed
    
    //     // Calculate the distance between the current position and the target position
    //     const deltaX = Math.floor(Math.random() * (speed + speed + 1)  - speed);
    //     const deltaY = Math.floor(Math.random() * (speed + speed + 1)  - speed);
    
    //     // Update the position using linear interpolation
    //     this.x += deltaX;
    //     this.y += deltaY;
    
        // // Ensure the particles stay within the canvas boundaries
        // this.x = Math.max(rMin, Math.min(this.x, max - rMin));
        // this.y = Math.max(rMin, Math.min(this.y, max - rMin));
    // }
    
}

const particalsArray = [];


// const particalObj;

let i;
for(i = 0;i < totalParticals;i++){
    const particalObj = new particles();
    particalsArray.push(particalObj);
}

function initateBalls(){
    for(i = 0; i < totalParticals; i++){
        particalsArray[i].draw();
        // particalsArray[i].move();
    }
}

function generateRandomColor(){
    const randomR = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red component
    const randomG = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green component
    const randomB = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue component
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}


//Game loop
game();


//Game loop Function
function game(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    initateBalls();

    requestAnimationFrame(game);
}



