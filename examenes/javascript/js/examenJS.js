//pregunta parangaricutirimicuaro, contar las i:

let cadena = "parangaricutirimicuaro";
let caracter = "i";

let enumerar = (cadena, caracter) => cadena.split(caracter).length-1;

console.log(enumerar(cadena,caracter));

//pregunta factorial : En el siguiente código encontrarás una función llamada "calcularFactorial" que toma como parámetro un número para después calcular su factorial. Por ejemplo, si el número es 4, el factorial es 1*2*3*4=24. ¿Cuál de las siguientes opciones representa la  refactorización de dicha función? 


function calcularFactorial(num){
    let factorial = 1;

    for (let i = 1; i <= num ; i++) {
        factorial *= i;        
    }
    return factorial;
}

console.log(calcularFactorial(4)); // regersa 24 en consola

function calcularFactorial2 (num){
    return (num === 0)?1 : num * calcularFactorial2(num-1)
}

console.log(calcularFactorial2(4));

//Pregunta PROMESA:

