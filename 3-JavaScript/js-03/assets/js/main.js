/* Bucles o ciclos */

/* Estructura que nos permite repetir nuestro código X cantidad de veces, hay diferentes tipos: for */

/*For*/
/* Es un ciclo controlado */

/* Se le tiene que indicar lo siguiente: 
    * La variable con la que va a trabajar: 
        i, j, k, l
    * Condición para que se ejecute
    * El cambio de nuestra variable de trabajo
*/

for (let i = 0; i < 10; i++) {
    console.log("El valor de i es " + i);
    
}


/* While */
/* Ciclo infinito o no controlado */

/* Se necesita:
    * Una condición --> True or false 
 */

// Mientras la condición se cumpla, se va a ejecutar lo que yo mande

let saludo; 

 while (saludo !== "Hola") {
    saludo = prompt("Saludame");
    
}

//Siempre y cuando saludo sea diferente de Hola, vamos a estar mandando el Saludame