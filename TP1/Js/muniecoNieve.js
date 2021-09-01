let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext('2d');

let posicion = {
    x: 0,
    y: 0,
    tamanio: 0
}

ctx.fillStyle = "#fff";
ctx.strokeStyle = "#000";

let posX = posicion.x;
let posY = posicion.y;
let posTamanio = posicion.tamanio;

//body
function drawMunieco(posX, posY, posTamanio) {
    ctx.beginPath();
    ctx.arc(posX, posY, posTamanio, 0, Math.PI * 2);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}
drawMunieco(250, 380, 100);
drawMunieco(250, 210, 70);
drawMunieco(250, 100, 40);
drawMunieco(230, 80, 5);
drawMunieco(270, 80, 5);
drawMunieco(250, 100, 8);

//smile
ctx.beginPath();
ctx.arc(250, 100, 20, 50, Math.PI);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//arms

ctx.beginPath(); //comienza el trazo
ctx.lineWidth = 5; //define ancho de linea
ctx.moveTo(90,100); // define donde arranca
ctx.lineTo(180,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath(); //comienza el trazo
ctx.lineWidth = 5; //define ancho de linea
ctx.moveTo(360,350); // define donde arranca
ctx.lineTo(320,200);
ctx.stroke();
ctx.closePath();