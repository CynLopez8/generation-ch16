`use strict`

//URLs para consumir

const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

//Elementos del DOM

const imagenPerrito = document.getElementById("img-perrito");
console.log(imagenPerrito);

const btn = document.getElementById("btn-perrito");
console.log(btn);

//Eventos:

btn.addEventListener("click", () => {
    console.log("Boton presionado");

    //Ahora agregamos la funcionalidad:

    obtenerPerritoAleatorio(urlAleatorios);
    
})




//Funciones:
async function obtenerPerritoAleatorio(url){
    const respuesta = await fetch (url);
    const datos = await respuesta.json();

    console.log(datos);
    console.log(datos.message); //Regresa la URL de la foto
    console.log(datos.status); //Regresa el dato del objeto en estatus, accedes al valor mediante la llave

    imagenPerrito.src = datos.message; 

} 
//obtenerPerritoAleatorio(urlAleatorios);






