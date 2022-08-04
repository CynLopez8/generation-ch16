/******* Funciones como Objetos */

function miFuncion(a = 6, b = 7) {
    let res = 0; // propiedad, estado de inicio donde va a partir
    res = (a * b); //acción o proceso, reasigno el valor del resultado del proceso
    return res;
}

console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString(); // Convierte la función en un texto
console.log(miFuncionTexto); 