const num = 10;

console.log(num);

console.log(2);

setTimeout(() => {
    console.log("Hola");

}, 2000); //Funcion que nos permite ejecutar otra función despues de determinado tiempo, en este caso como tiene retraso de 2 segundos para ejecutarse aparece despues el mensaje de Hola

console.log(3);

setTimeout(() => {
    console.log("Adios");

}, 0);

console.log(4);

for (let i = 0; i < 100; i++) {
    console.log("Estoy procesando");
}

console.log(5);