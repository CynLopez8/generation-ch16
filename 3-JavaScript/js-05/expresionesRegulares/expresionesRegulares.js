let texto = "Hoy parece que va a salir el sol";
let buscar = /sol/;

console.log(buscar.test(texto)); //devuelve un booleano: true or false 


let texto1 = "La espero en el aeropuerto de LA";
let buscar1 = /LA/;

console.log(buscar1.test(texto1)); //devuelve un booleano: true or false 

//Corchetes
let texto2 = "te marqué anoche"
let buscar2 = /[eo]/ // Va a buscar e u o
console.log(buscar2.test(texto2));

buscar2 = /[aeiou]/;
console.log(buscar2.test(texto2));

//Para buscar numeros:
let texto3 = "o =1";
let buscar3 = /[1-5]/; //Va sin espacios
console.log(buscar3.test(texto3));

//Cuantificadores

let texto4 = "Los numerps primos son 235 7 dentro de los primeros 10 numeros";

let buscar4 = /\d(3)/; //  busca si contiene digitos o cifras, que sean numeros y que haya 3 números juntos, en este caso da verdadero

console.log(buscar4.test(texto4));

//Buscamos un formato de correo electrónico
let texto5 = "usuario@servidor.com";
let buscar5 = /[\w] + @{1}[\w]+\.[a-z]{2,3}/; // el {2,3} indica de dos a tres ocurrencias del caracter especificado, dice que después del punto deben ser letras y pueden ser 2 o 3


console.log(buscar5.test(texto5));