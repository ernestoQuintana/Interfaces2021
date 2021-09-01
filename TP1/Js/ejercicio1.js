document.addEventListener('DOMContentLoaded', function () {
    "use strict"

    let matriz = [];//arreglo
    let numeroMAX = 0;
    let numMAXFIla = 0;
    let numMINFila = 0;
    let mayorValor = 0;
    let menorValor = 0;

    for (let X = 0; X < 10; X++) {
        matriz[X] = []; //el arreglo matriz contiene un arreglo dentro    
        for (let Y = 0; Y < 10; Y++) {
            matriz[X][Y] = Math.floor(Math.random() * 1000); //se generan y se llenan 10 espacios dentro por cada lugar en X

            if (numeroMAX < matriz[X][Y]) { // va entrando y comparando una y otra vez en la matriz 
                numeroMAX = matriz[X][Y]; // e iguala al numero , sale y vuelve a comparar y si es mayor vuelve a igualar
            }

            if (Y % 0 && mayorValor < matriz[X][Y]) {
                mayorValor = matriz[X][Y];
                mayorValor = numMAXFIla;
            }

            if (Y % 1 && numMINFila < matriz[X][Y]) {
                numMINFila = recorriendoFilas(menorValor);
            }

        }

    }
    console.log(matriz);
    console.log(numeroMAX);
    console.log(numMAXFIla);
    console.log(mayorValor);

})