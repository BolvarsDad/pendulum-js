const colors = [
    "#FF0000",   // red              [strings]
    "#FFFFFF",   // white            [background]
    "#000000"    // black            [bob] 
]

const canvas = document.querySelector("canvas");
const SIZE = 750;
let ctx = canvas.getContext("2d");

canvas.height = SIZE;
canvas.width = SIZE;

ctx.clearRect(0, 0, SIZE, SIZE);
ctx.fillStyle = colors[1];
ctx.fillRect(0, 0, SIZE, SIZE);
