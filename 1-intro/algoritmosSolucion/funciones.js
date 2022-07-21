// Funciones

//Estructura más simple de una función: palabra reservada function
// los parametros dentro de () y los corchetes
// Dentro de los corchetes está el scope
// Para poder utilizar una función, tengo que llamarla con el nombre

//function sumar (){

//}

function sumar (numero1, numero2){
    console.log("Voy a sumar");
    console.log("El resultado de la suma es: " + (numero1 + numero2));
}

/* sumar(10,5);
sumar(1,1);
sumar(4,5); */

//Ejercicio 2 (Sueldo) Utilizando funciones

function calculadoraSueldo (sueldoIngresado, diasTrabajados){

    let nombre = prompt("Escribe tu nombre")
    console.log(nombre);
    
    const sueldo = sueldoIngresado;
    const diasSemana = diasTrabajados;
    const semanasMes = 4; //local
    
    console.log("Sueldo semanal: " + (sueldo * diasSemana));
    console.log("Sueldo semanal: " + (sueldo * diasSemana * semanasMes));

    return (semanasMes);

}

/* let mes = calculadoraSueldo(100,2);

console.log(mes); */

//Calculadora de porcentajes
// 0.6 = 60%
function calcularPorcentaje (numero, porcentaje){

    let resultado = numero * (porcentaje/100); //local
    return resultado;

}

let resultadoFuncion = calcularPorcentaje(100, 40);
console.log(resultadoFuncion);