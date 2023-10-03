let canvas = document.getElementById("canvas");
let result = document.getElementById("pTag");

let c = canvas.getContext("2d");



canvas.addEventListener("mousemove", (e) =>{
    console.log("X : ", e.clientX," Y : ",e.clientY);
    // result.innerHTML =  e.clientX + " " + e.clientY;
});
