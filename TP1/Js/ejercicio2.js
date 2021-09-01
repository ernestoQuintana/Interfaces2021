let canvas = document.querySelector("#myCanvas");
let ctx =  canvas.getContext('2d');

ctx.fillStyle = "#fd0";
ctx.strokeStyle = "#000";
ctx.fillRect(20, 20 , 150, 150);
ctx.strokeRect(20 , 20 , 150 , 150 );