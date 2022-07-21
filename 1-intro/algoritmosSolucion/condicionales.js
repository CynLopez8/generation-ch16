
//Control de flujo

/* let nombre = "Cyn";
let edad = 23; */


let nombre = prompt("Escribe tu nombre"); 
console.log(nombre);


// Casteo: convertir un tipo de dato
let edad = parseInt(prompt("Escribe tu edad"));
console.log(typeof edad);



if(nombre === "Cyn" && edad === 29){
//Scope -- contexto (lo que esta dentro del bloque)
    console.log("Eres un");
    console.log("ADMIN 💥");

} else if (nombre === "Maria") {

    console.log("Eres una mentora 💓")

} else if (nombre === "Marina"){

    console.log("Eres la jefa⚠");
} else {

    console.log("Eres un alumn@💦");

}


console.log("Fin del programa");