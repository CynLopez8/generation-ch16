// Ejercicio:

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(personas);				
//Escribe un comando para remover a "Dani" del arreglo

personas.splice(1, 1);
console.log(personas);

//Escribe un comando para remover a "Juan del arreglo"

personas.splice (2,1);
console.log(personas);

//Escribe un comando para agregar a "Luis" al inicio del arreglo
//Metodo 1
personas.unshift(personas.splice(1,1)[0]);
console.log(personas);

// Metodo 2:
/* personas.splice(1,1);
personas.unshift ("Luis");
console.log(personas); */

//Escribe el comando para agregar tu nombre al final del arreglo

personas.push("Room1");
console.log(personas);

//Escribe el comando para mostrar la posición de "Maria"

console.log (personas.indexOf ("Maria"));

//Escribe el comando para mostrar la posición de tu nombre

console.log (personas.indexOf ("Room1"));