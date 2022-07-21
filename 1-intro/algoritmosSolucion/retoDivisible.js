
let numero = prompt ("Introduce un número entero: ");

parseInt(numero);

console.log("Tu número es:", numero);

let residuo1 = numero % 7;
//console.log(residuo1);
let residuo2 = numero % 8;
//console.log(residuo2);

if ((residuo1 == 0) && (residuo2 == 0)) {

    console.log("El número", numero, "SI es divisible entre 7 y 8");
    console.log("Verdadero");

} else if ((residuo1 > 0) && (residuo2 > 0) || (residuo1 < 0) && (residuo2 < 0) ){
    console.log("El número ", numero, "NO es divisible entre 7 y 8");
    console.log("Falso");

} else {
        console.log("El dato ingresado es incorrecto, intenta nuevamente");
}

console.log("Fin del programa");
