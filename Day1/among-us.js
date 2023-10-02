// document.write("Hello")


let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

//Among us head
context.beginPath();
context.fillStyle = "Red"
context.strokeStyle = "white";
context.lineWidth = 5;
context.arc(150,100,80,0,360);
context.fill();
context.stroke();


//Among us tail
context.beginPath();
context.arc(150,200,80,0,360);
context.fill();
context.stroke();


//Among us body
context.beginPath();
context.fillStyle = "Red"
context.strokeStyle = "white";
context.rect(70,100,160,100);
context.fill();
context.beginPath();
context.moveTo(229, 100); 
context.lineTo(229, 205);
context.stroke();


//Face
context.beginPath();
context.fillStyle = "white"
context.arc(120,90,30,100,360);
context.fill();

context.beginPath();
context.fillStyle = "white"
context.rect(120,60,100,60);
context.fill();

context.beginPath();
context.fillStyle = "white"
context.arc(220,90,30,0,360);
context.fill();


//Backpack
context.beginPath();
context.fillStyle = "red"
context.arc(60,130,30,0,360);
context.fill();

context.beginPath();
context.fillStyle = "red"
context.rect(30,130,60,60);
context.fill();

context.beginPath();
context.fillStyle = "red"
context.arc(60,195,30,0,360);
context.fill();


//leg
context.beginPath();
context.fillStyle = "red"
context.rect(80,230,60,70);
context.fill();

context.beginPath();
context.fillStyle = "red"
context.rect(150,230,60,70);
context.fill();

