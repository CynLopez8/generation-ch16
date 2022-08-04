/* Control de flujo */
/* Condicionales */
/* If - Estructura:*/

let condicion = "A"; // Un igual de asignación
// == igual que, devuelve un verdadero cuando se cumple la condición

if (condicion === "A") {

    /* Codigo que se ejecuta si se cumple la condición A */
    console.log("Entro en la condición A");

} else if (condicion === "B") {

    /* Codigo que se ejecuta si se cumple la condición B */
    console.log("Entro en la condición B");

} else if (condicion === "C") {

    /* Codigo que se ejecuta si se cumple la condición C */
    console.log("Entro en la condición C");

} else{

    /* Codigo que se ejecuta si no se cumple ninguna de las condiciones anteriores
    Condición por defecto */
    console.log("No entró en ninguna condición");
}

function dividir (a, b) {

    if (b === 0) {
        console.log("No se puede realizar la operación");
    } else{
    console.log(a / b);
    }
}
dividir(10,3)

/* Switch */
/* Es similar a un if, dependiendo de la condición ejecutamos */

let nuevaCondicion = "Hola"; //Valor inicial
let edad = 18;

/* Un == regresa un true si la condición se cumple */
switch (nuevaCondicion) {
    case "Hola":

        console.log("Buenos días");
        console.log("Espero que te encuentres bien");
    
        break;

    case "Adios":

        console.log("Nos vemos");
        break;

    case true:

        console.log("Te mando un saludo");
        break;
    
    default:
            console.log("No entendí tu mensaje");
}

let edad2 = 30;

switch(edad2 >= 18){
    case true:
        console.log("mayor");
    break
    
    case false:
            console.log("menor");
}

let elegir= "dividir";


switch(elegir){
    case "sumar":
        console.log("Vamos a sumar");
    break
    
    case "restar":
        console.log("Vamos a restar");
    break

    case "dividir":
        console.log("Vamos a dividir");
    break

    case "multiplicar":
        console.log("Vamos a multiplicar");
    break

    default:
        console.log("No entiendo");
}

/** Con if */

if (elegir === "sumar") {

    console.log("Vamos a sumar");  

} else if (elegir === "restar") {

    console.log("Vamos a restar");  

} else if (elegir === "dividir") {

    console.log("Vamos a dividir"); 

} else if (elegir === "multiplicar") {

    console.log("Vamos a multiplicar"); 

} else {

    console.log("No entiendo");
    
}