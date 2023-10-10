let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

// console.log("Hello");


class Box{
    constructor(){
        this.x = 200;
        this.y = 0;
        // this.width = 50;
        // this.height = 50;
        this.r = 50;
        this.color = "red";
        this.xDirection = 1;
        this.yDirection = 1;
    }

    draw(){
        c.shadowColor = "White"; // Color of the glow
        c.shadowBlur = 7; // Blur radius of the glow
        c.shadowOffsetX = 0; // Horizontal offset of the glow
        c.shadowOffsetY = 0; // Vertical offset of the glow

        c.clearRect(0,0,canvas.width,canvas.height);
        c.beginPath();
        c.fillStyle = this.color;
        // c.rect(this.x,this.y,this.width,this.height);
        c.arc(this.x+this.r,this.y+this.r,this.r,0,2 * Math.PI);
        c.fill();
        this.move();
    }
    move(){
        this.x+=this.xDirection;
        this.y+=this.yDirection;
        
        if(this.x + this.r*2 >= canvas.width || this.x <= 0){
            this.xDirection = -this.xDirection
        }
        if(this.y +this.r*2 >=canvas.height || this.y <=0){
            this.yDirection = -this.yDirection
        }

    }
}

const box = new Box();

// Game loop
function game(){

    updateGame(); //Every game logic goes here
    
    requestAnimationFrame(game);
}

function updateGame(){
    box.draw();
}

game();