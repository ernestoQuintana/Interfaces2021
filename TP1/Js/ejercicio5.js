"use strict";

let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

let width = canvas.width; // me traigo los parametros del canvas en html
let height = canvas.height;
let imageData = ctx.createImageData(width, height);

let r = 255;
let g = 0;
let b = 255;
let a = 255;
console.log(a);


function drawRect(imageData,r, g,b,a){
    
    for (let x = 0; x < width; x++) {
        let r, g , b;
        if(x <= width / 2){
            let coeficiente = 255 / (width / 2);
            r = coeficiente*x;
            g = coeficiente*x;
            b = 0;
        }else if(x > width / 2){
            let coeficiente = 255 / (width / 2);
            r = coeficiente * x;
            g = coeficiente * x;
            b = 0;
        }
        for (let y = 0; y < height; y++) {
            setPixel(imageData,x,y,r,g,b,a)
        }

    }
}
function setPixel(imageData,x,y,r,g,b,a){
    let index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
    
}

drawRect(imageData,r,g,b,a);
ctx.putImageData(imageData, 0, 0)*4; //renderiza en el canvas
