const url = "https://dog.ceo/api/breeds/image/random"; //Formas de comunicarse con las APIs


//Respuesta de la petición
fetch(url).then((respuesta) => {
    console.log(respuesta);
})

//Obtener la información de la petición
//Forma #1
//En lugar de obtener la respuesta la transformamos en un archivo tipo Json, devuelve otra promesa

fetch(url)
.then((respuesta) => respuesta.json()) //El primero regresa la respuesta, pero no es lo que quiero, entonces le aplico el metodo JSon, convierte la respuesta a un archivo JSON porque lo que realmente lo que quiero es lo que esta adentro del then
.then((datos) => { //Pido los datos proque es lo que quiero, por eso son 2 then anidados, una vez que los tengo los puedo imprimir en consola
    console.log(datos);
}). catch((error) => {
    console.log(error);
})

//Forma #2

async function obtenerPerritoAleatorio (){
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        console.log(datos);
    } catch (error){

        console.log(error);
        
    }

} obtenerPerritoAleatorio();