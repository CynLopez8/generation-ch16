
//Bucle for: (control, condición, modificador de la variable de control) let i=0 es control, i<5 es la condición, 

//Con incremento:

for (let i = 0; i < 5; i=i+2) { //Lo imprime 5 veces porque empieza con el 0 y termina con el 4, va de 0 -4, el 5 ya no se cuenta
    console.log("El valor de i es: " +i);
    
}

//Con decremento:

for (let i = 5; i > 0; i--) { 

    console.log("El valor de i es: " + i);
    
}

//While

let control = 0; //Variable de inicio

while (control<5) {
    console.log("while: " + control);
    control++; //modificador

}

let control2 = true;

while (control2 === false) {
    alert("Estoy trabajando"); //Con el alert también se detiene
    
}

//Do - While
//Hacer... hasta/mientras

let numero = 0;

do {
    console.log("Do..While" + numero);
    numero++;

} while (numero < 5);