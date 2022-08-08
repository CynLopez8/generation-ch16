//Sort ()
//Ordenar los elementos de un arreglo

const arr = ["X", "A", "H", "a", "W", "b"];
console.log(arr);

arr.sort(); //Lo ordena en forma alfabética
console.log(arr);

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
console.log(arr2);
arr2.sort();
console.log(arr2);


const arr3 = [5, 1231, 553, 567, 1, 80];
console.log(arr3);

arr3.sort();
console.log(arr3);

arr3.sort((a, b) => a - b); //funcion recursiva, ordenamiento de burbuja de menor a mayor (a,b) representan a cada uno de los numeros de nuestro arreglo, internamente es cmo un ciclo, los va ordenando por parejas y al final los ordena
console.log(arr3);

arr3.sort((a, b) => b - a ); //funcion recursiva, ordenamiento de burbuja de mayor a menor
console.log(arr3);

//Función declarada
//Hoisting - las podemos llamar desde cualquier parte del codigo
//Un proceso de reacomodo automático del código

function sumar(a,b) {
    return a + b;
    
}console.log(sumar(12,2));

let a = 2;
console.log(a);

//Función Expresada
//Hoisting no funciona, no podemos llamar variables antes de declararlas, 

const multiplicar = function(a,b){
    return a*b;
}
console.log(multiplicar(3,5));

//Otro tipo de funciones expresadas:
//Funciones flecha: es una forma mas simple de una funcióne xpresada normal en cuanto a cmo lo escribimos

const dividir = (a,b) => {
    return a/b;
}

console.log(dividir (10,2));

/* Se puede expresar también así:  */

const dividir2 = (a,b) => a/b;

console.log(dividir2 (10,2));

//forEach()
//Un ciclo que recorre en automático todo nuestro arreglo

//Con For normal se hace así: 
const arrNumeros = [1,4,6,8,10,20,30];

for (let i = 0; i < arrNumeros.length; i++) {
    arrNumeros[i] =arrNumeros [i]*2;
    
}console.log(arrNumeros);

//Ahora con foreach:

arrNumeros.forEach((elemento) => console.log(elemento));

arrNumeros.forEach((elemento) => console.log(elemento*= 2)); // elemento = elemento*2, ó elemento *=2.

//forEach (elemento, indice, arreglo completo)
