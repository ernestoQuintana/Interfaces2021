/************ PIRAMIDE **********/

let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = "#fb0000";
ctx.fillRect(200, 0, 50, 50); //fillRect es para un pixel / Rect es mas abarcativo

ctx.fillStyle = "#FFB111";
ctx.fillRect(150, 50, 50, 50);
 
ctx.fillStyle = "#faa";
ctx.fillRect(200, 50, 50, 50);

ctx.fillStyle = "#aac";
ctx.fillRect(250, 50, 50, 50);

ctx.fillStyle = "#FFB111";
ctx.fillRect(100, 100, 50, 50);

ctx.fillStyle = "#AAB111";
ctx.fillRect(150, 100, 50, 50);

ctx.fillStyle = "#D45431";
ctx.fillRect(200, 100, 50, 50);

ctx.fillStyle = "#F76611";
ctx.fillRect(250, 100, 50, 50);

ctx.fillStyle = "#BB1101";
ctx.fillRect(300, 100, 50, 50);
ctx.fill();