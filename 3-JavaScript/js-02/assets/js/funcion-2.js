function miFuncion(a, b) {
    return (a + b);
}

let resultado = miFuncion (3,6);
console.log("El resultado es: " + resultado);

// ******** Función Expresión *************

let suma = function (a, b) { return (a + b)};

//Esta funcion lleva los dos puntos al final

let res = suma (2, 3);
let caracteres = "La suma es: "
console.log("La suma es: " + res);
console.log(caracteres + res);

/* Actividad: Hacer funciones de expresión para todas las operaciones aritmeticas */

let suma1 = function (a, b) { return (a + b)};
let resSuma1 = suma (3,4);
console.log("El resultado de la suma es: " + resSuma1);

let resta = function (a,b) { return (a -b)};
let resResta = resta (10,6);
console.log("El resultado de la resta es: " + resResta);

let division = function (a,b) { return (a / b)};
let resDivision = division (9,3);
console.log("El resultado de la división es: " + resDivision);

let producto = function (a,b) { return (a * b)};
let resProducto = producto (5,3);
console.log("El resultado del producto es: " + resProducto);


/************** Self Invoking, se expresa de la siguiente forma, tambien es anonima y solo se puede ejecutar una vez, solo se llama una vez*/

(function (a, b){
    console.log("El resultado de Self Invoking es: " + (a + b));
}) (3,4);