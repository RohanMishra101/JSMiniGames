const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let totalBalls = 10;
let wmin = 70;
let wmax = canvas.width - 70;
let hmin = 70;
let hmax = canvas.height - 70;
let rmin = 20;
let rmax = 70;


window.addEventListener('resize', () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// let i;
class Balls{
    constructor() {
        // this.x = Math.floor(Math.random() * (wmax - wmin + 1) + wmin);
        // this.y = Math.floor(Math.random() * (hmax - hmin + 1) + hmin);

        this.randomLocation;
        this.x = this.generateLocation("x");
        this.y = this.generateLocation("y");
        
        this.r = Math.floor(Math.random() * (rmax - rmin + 1) + rmin);
        this.randomDirX = (Math.random() - 0.5) * 4; // Random value between -1 and 1 for X direction
        this.randomDirY = (Math.random() - 0.5) * 4;
        this.opacitiy = Math.random() * (0.8 - 0.4 + 1) + 0.4;
        // this.randomDir;
        this.color = this.generateRandomColor();
    }

    draw(){
        c.shadowColor = "White"; // Color of the glow
        c.shadowBlur = 10; // Blur radius of the glow
        c.shadowOffsetX = 0; // Horizontal offset of the glow
        c.shadowOffsetY = 0; // Vertical offset of the glow    

        c.beginPath();
        c.globalAlpha = this.opacitiy;
        c.fillStyle = this.color;
        c.strokeStyle = "white";
        c.lineWidth = 4;
        console.log(this.x , " " , this.y);
        c.arc(this.x,this.y,this.r,0,2 * Math.PI);
        c.fill();
        c.stroke();
        this.checkCollision();
        this.move();
        // this.checkBallsDistance;
    }
    move() {
        // Update ball position based on random direction
        this.x += this.randomDirX;
        this.y += this.randomDirY;

        // Check collision with canvas edges
        if (this.x - this.r < 0) {
            this.randomDirX = Math.abs(this.randomDirX); // Change X direction to move right
        }
        if (this.x + this.r > canvas.width) {
            this.randomDirX = -Math.abs(this.randomDirX); // Change X direction to move left
        }
        if (this.y - this.r < 0) {
            this.randomDirY = Math.abs(this.randomDirY); // Change Y direction to move down
        }
        if (this.y + this.r > canvas.height) {
            this.randomDirY = -Math.abs(this.randomDirY); // Change Y direction to move up
        }
    }
    checkCollision(){
        for(let i = 0; i < particalsArray.length; i++){
            if(this == particalsArray[i]) continue;

            //checking Distance betwenn two balls
            this.checkBallsDistance = Math.sqrt(Math.pow(this.x - particalsArray[i].x,2) + Math.pow(this.y - particalsArray[i].y,2));

            //Collision part
            if( this.checkBallsDistance < this.r + particalsArray[i].r){//checking if the distance is less then the current ball and the ball with which the current ball collided.
                const tempX = this.randomDirX;
                this.randomDirX = particalsArray[i].randomDirX;
                particalsArray[i].randomDirX = tempX;

                const tempY = this.randomDirY;
                this.randomDirY = particalsArray[i].randomDirY;
                particalsArray[i].randomDirY = tempY;
            }

        }
    }
    generateRandomColor(){
        const randomR = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red component
        const randomG = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green component
        const randomB = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue component
        return `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    generateLocation(arg) {
        let temp = arg;
        let overlapping = true;
    
        while (overlapping) {
            overlapping = false;
    
            if (temp === "x") {
                this.randomLocation = Math.floor(Math.random() * (wmax - wmin + 1) + wmin);
            } else if (temp === "y") {
                this.randomLocation = Math.floor(Math.random() * (hmax - hmin + 1) + hmin);
            }
    
            // Check for overlap with existing balls
            for (let i = 0; i < particalsArray.length; i++) {
                if (this === particalsArray[i]) continue;
    
                this.checkBallsDistance = Math.sqrt(Math.pow(this.randomLocation - particalsArray[i].x, 2) + Math.pow(this.y - particalsArray[i].y, 2));
    
                if (this.checkBallsDistance < this.r + particalsArray[i].r) {
                    overlapping = true;
                    break;
                }
            }
        }
    
        return this.randomLocation;
    }
}


const particalsArray = [];


// const particalObj;

let i;
for(i = 0;i < totalBalls;i++){
    const ball = new Balls();
    particalsArray.push(ball);
}

function spawnBalls(){
    for(i = 0;i < totalBalls;i++){
        particalsArray[i].draw();
    }
}





//Game loop Function
function game(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    spawnBalls();

    requestAnimationFrame(game);
}




//Game loop
game();


