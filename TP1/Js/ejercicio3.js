let canvas = document.querySelector("#myCanvas");
let ctx =  canvas.getContext('2d');

let width = canvas.width; // me traigo los parametros del canvas en html
let height = canvas.height;

let x = 0 , y = 0; // variables de posicion
let a = 255; //variable de color

let gradient = 255/ height;
let imageData = ctx.createImageData(width, height);

drawRect(imageData,a);

ctx.putImageData(imageData, x, y)*4;

function drawRect(imageData,a){
    
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let color = gradient * y; //el valor del color cambia segun iteracion segun proporcion de la altura
            setPixel(imageData,x,y,color,color,color,a)
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
console.log(imageData.width);
