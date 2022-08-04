// Arreglos
//Colección de elementos
//Cada elemento ocupa una posición
//Esa posición se conoce como índice y comienza a partir de 0 

let arr = [1,2,3,4];
console.log(arr);

//Propiedades - describen
//Métodos - acciones que puede realizar

console.log(arr[2]);


//Formas de asignar datos a los arreglos:

console.log(arr[0]);
arr[4] = 190;
arr[4] = "Hola";
console.log(arr);

//Metdoros de arreglos

const arreglo =["adios"];

//Push nos permite agregar valores al FINAL de nuestro arreglo

arreglo.push(2);
arreglo.push(true);

let num = 500;

arreglo.push(num);
console.log(arreglo);

//Unshift() nos permite agregar valores al INICIO de nuestro arreglo

arreglo.unshift ("A");
arreglo.unshift ("B");

console.log(arreglo);

/* también puedes ver que tipo de dato es con el console.log(typeof(arreglo [])); */
console.log(typeof(arreglo[4]));

//Métodos para quitar elementos:
//pop()
//Quita un elemento del FINAL del arreglo
// En este caso lo quitamos y guardamos en una variable:

let dato1 = arreglo.pop();
console.log(dato1);

console.log(arreglo);

//Shift()
//Quita un elemento del INICIO del arreglo

let dato2= arreglo.shift();
console.log(dato2);
console.log(arreglo);

//Splice()
//Quita un elemento de una posición especifica del arreglo:
//Permite reemplazar un elemento
//permite insertar un elemento en una posición en específico

arreglo.splice(1, 1, "parangari");
//Primer elemento: posicion de inicio
//Segundo elemento: candidad de elementos a afectar
//Elemento o elementos que queremos insertar en la misma posicion indicada
console.log(arreglo);

arreglo.splice (4,0,"cutirimicuaro"); //Aqui no eliminamos solo añadimos el tercer punto en la posición que indica ahi, que es 4

console.log(arreglo);

//Modifican el arreglo original


//Metodos que no modifican el arreglo original
//Hacen una copia, modifican esa copia

//Slice()
//Cortar partes de un arreglo

let dato3 = arreglo.slice(0,2);
console.log(dato3);
console.log(arreglo);

//Slice(
    //posición a partir de la cual va a cortar,
    //posicion del ultimo dato que queremos cortar
//)

