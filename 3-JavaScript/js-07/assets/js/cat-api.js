/*  
    Ejercicio:
    Instrucciones:

    * Utilizar la API cat
        - https://api.thecatapi.com/v1/images/search

    * Con un boton se debe mostrar una imagen de un gato
    * Que las imagenes tengan un tamaño de 600x400 sin deformar la imagen

    Nota:
    Cuidado con el tipo de dato que se recibe

*/

//URLs para Consumir:

/* const urlGatos = "https://api.thecatapi.com/v1/images/search";

//Elementos del DOM:
const imagenGatito = document.getElementById("img-gatito");
console.log(imagenGatito);

const btn = document.getElementById("btn-gatito");
console.log(btn);

//Eventos:

btn.addEventListener("click", () => {
    console.log("Boton presionado");

    //Ahora agregamos la funcionalidad:

    obtenerGatitoAleatorio(urlGatos);
    
})

//Funciones:
async function obtenerGatitoAleatorio(url){
    const respuesta = await fetch (url);
    const datos = await respuesta.json();

    console.log(datos);
    console.log(datos.message); //Regresa la URL de la foto
    console.log(datos[0].url); //Regresa el dato del objeto en estatus, accedes al valor mediante la llave

    imagenGatito.src = datos[0].url; 

}  */

'use strict';
const urlGatos = 'https://api.thecatapi.com/v1/images/search';

/* Elementos DOM */
const imagenGatos = document.getElementById("img-gatito");
const btn = document.getElementById('btn-gatito');


/* Eventos */
btn.addEventListener("click", () => {

  console.log('Boton presionado');  // Comprobacion de sintaxis del AddEventListener

  obtenerGatoAleatorio();
} )

async function obtenerGatoAleatorio () {
  const respuesta = await fetch(urlGatos);
  const datos = await respuesta.json();
  console.log(datos[0].url);

  imagenGatos.src = datos[0].url;
}
