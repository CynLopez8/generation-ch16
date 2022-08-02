'use strict';

// conversión de tipos de datos
//casteo parseo
// casting parsing

let num = 5;
let num2 = "10";

//concatenación
//los toma como tipo texto y el resultado en consola es 510
//unimos un numero con una cadena de texto
console.log(num - num2);


/* Number () */

let num3 = "56";
console.log(num3); //Lo muestra como cadena de texto, si lo queremos convertir, ocupamos la funcion number, esto convierte el dato a un número:

console.log(Number(num3));

let num4 = false;
console.log(num4);
console.log(Number(num4));

/*STRING()*/
// Convierte numeros o booleanos a cadenas

let num5 = String(5);
console.log(num5); //lo despliega en consola como numero
console.log(typeof(num5));

// Boolean ()
//Convierte numeros y cadenas a booleanos
// 0, "", null, undefined, NaN- false
//Se llaman faultsy values - valores que tienden a falso
// todos los demás numeros los convierte a true, incluidos numeros negativos

let num6 = Boolean(1);
console.log(num6);
console.log(typeof num6);