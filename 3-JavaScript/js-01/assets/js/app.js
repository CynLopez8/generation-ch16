"use strict"; //Siempre USARLO

//Javascript de forma estricta

/*Tipos de datos*/

/*Tipos de Variables*/
let a = 20; //local
const b = 0; //constante y local

var c; //global

const PI = 3.1416;

/* Scope - contexto
Espacio en el que vive la variable, let y const son locales,
solo que const es constante, no se puede reasignar su valor,
no cambia. */

if(true){
    var d = 15;
}

//var d = "hola";
d = "hola";

//console.log(d);

// String: Cadena de texto

let cadena = "Hola Mundo!";

//Number
let numero =5 ;
let numero1 = 5.89;
let numero3 = -5.89;

//Boolean
let booleano = true;
let booleano2 = false;

//Undefined: indefinido
let variable;
//console.log(variable + 5);

//Null: 
let vacio = null;

// NaN - Not a Number
/* No es un numero, ocurre cada que tratamos de hacer 
una operación aritmetica de una letra y un numero */

/* Plantillas literales
    Template Strings
    Literal Strings
    Interpolación
*/

console.log(`Esta es una cadena ${5+4}`);
console.log("Esta es una cadena normal ${5+4}");

let nombre = 'Cyn';

//let presentacion = ``;
console.log("Mi nombre es" + nombre);
console.log(`Yo me llamo ${nombre}`);

/* console.log("<h1>Hola</h1>");
console.log(`<h1>Hola</h1>`); */

/* Arreglos - matrices - arrays */

let arr = [1, "A", null, undefined, [true, false]];

console.log(arr[4][0]); // lo usamos para acceder al valor 4
// es la notación de corchetes

let arr2 = new Array ("B", 2);
console.log(arr2);

/* Objetos */
// Diccionarios, tienen una estructura de clave y valor
// Son parejas de elementos que podemos usar y agregar sin orden específico

const persona = {
    nombre: 'Raúl', 
    edad: 31,
    hobbies: [
        "Leer", 
        "Ver Shrek 1 y 2", 
        "Comer"
    ],
    auto: {
        marca: "VW",
        modelo: "Pointer",
        year: 2000,
    },
    saludar: function (){
        return "Saludar";
    }

};

persona.nombre= "Panchito";

//Notacion de puntos
console.log(`Mi nombre es ${persona.nombre}`);
console.log(`Mi hobbie favorito es ${persona.hobbies[1]}`);

console.log(`La marca de mi carro es ${persona.auto.marca}`);

console.log(`La acción que realizo es: ${persona.saludar()}`);


//Arreglo de objetos
/*[{},{},{}] */
