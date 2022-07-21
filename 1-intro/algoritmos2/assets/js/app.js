function saludo () { 
    console.log("Hola mundo");

}

saludo();

//Arreglos
let num = []; 
console.log(num);

let arr1 = new Array ();
console.log(arr1);

//usar un arreglo:

const arr  = [1,2,3,4,5];
// notación de corchetes {}, te muestra el elemento en la posición 0, que es el espacio 1
console.log(arr[0]);

arr[5] = 25;
arr[6] = 8;
arr[6]=0;
arr[10]=40; 


console.log(arr);

// Propiedades de los arreglos
// descripción de nuestro arreglo
console.log(arr.length);

//Métodos
// acciones que puede realizar un arreglo: 

const frutas = ["Manzana", "Platano"];
console.log(frutas);
console.log(frutas.length);

//push()
//agrega un valor al final del arreglo

frutas.push ("Naranja");
console.log(frutas);

let fruta = "Toronja"

frutas.push (fruta);
console.log(frutas);

// Método pop ()

//quita un elemento del final del arreglo y devuelve el valor eliminado

frutas.pop();
console.log(frutas);

let elementoBorrado = frutas.pop();
console.log(frutas);
console.log(elementoBorrado);

// Método unshift()
//agrega uno o más elementos al inicio del arreglo, y devuelve la nueva longitud del arreglo.

frutas.unshift ("Uva");
console.log(frutas);

let devolver = frutas.unshift("Uva", "Pera");
console.log(frutas);
console.log(devolver);


// Arreglo multidimensional
//Vectores concatenados, un vector dentro de otro vector o arreglo

const newArr = [1, 45, "Hola", "Adiós", true, null, [30, 31, 32], ["Azul", "Amarillo", "Verde"]]

console.log(newArr[6][1]); //Muestra la segunda posición del segundo arreglo
console.log(newArr[7][1]); //Muestra la segunda posición del tercer arreglo

// Objetos:
// estructura especial llamada objeto
// key : value
// llave : valor

const obj = {
    nombre : "Pedro",
    edad: 25,
    color : "Azul",
    hobbies : ["Leer", "Correr"]

};

console.log(obj.edad);
console.log(obj.hobbies[1]);
