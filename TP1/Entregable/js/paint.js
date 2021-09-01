document.addEventListener('DOMContentLoaded', () =>{
    "use strict"
    

    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');
    let ruta = false;
    let x , y ;
    
    ctx.lineWidth = 1; //tamanio de linea
    function dibujarLapiz(evento){
        x = evento.clientX;
        y = evento.clientY;
        if(ruta == true){ 
            ctx.lineTo(x,y); // genera linea
            console.log("position x:"+x+ " Y:"+y);
            ctx.stroke(); //para que se dibuje la linea
        }

    }
    canvas.addEventListener('mousemove', dibujarLapiz);
    canvas.addEventListener('mousedown', function(){ // evento que se activa al dar click
        ruta = true;
        ctx.beginPath(); //arrancar a dibujar
        ctx.moveTo(x,y); //cordenadas iniciales
        console.log("Posicion Inicial X:"+x+" Y:"+y)
        canvas.addEventListener('mousemove', dibujarLapiz);
    })

    canvas.addEventListener('mouseup'), function(){
        ruta = false;
    }

})