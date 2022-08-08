//Crear una imagen:
const imagen = document.createElement("img");

//Modificar los atributos HTML del elemento:

imagen.src="https://placeimg.com/200/200/people?t=1659991168616"; //Con esto ya aparece la imagen
imagen.alt =  "Imagenes aleatorias de personas";

console.log(imagen);

//Lo insertamos en un elemento padre
document.body.appendChild(imagen); //No se considera tan buena practica, porque no tenemos control de en que parte del documento se agrega la imagen, para modificarlo se hace asi:

document.body.insertAdjacentElement("afterbegin", imagen); //Se coloca inmediatamente despues del inicio
document.body.insertAdjacentElement("beforeend", imagen); 

//Forma correcta de insertar un elemento o imagen:
// 1 Se crea el elemento padre que contendra la imagen
// 2 seleccionamos el elemento padre
// 3 Declaramos la variable

const padreImg = document.getElementById("padreImg");

// 4 Crear el elemento

const imagen2 = document.createElement("img");

// 5 modificamos los atributos del elemento
imagen2.src = "https://placeimg.com/200/200/nature"; 
imagen.alt = "Imagenes aleatorias de naturaleza";

// 6 Insertar un elemento:
padreImg.appendChild(imagen2);

//Utilizar forEach para pintar datos:
const frutas = ["Toronja", "Manzana", "Mandarina", "Limón", "Granada", "Melón", "Plátano", "Guayaba"];

const listarFrutas = document.getElementById("frutas");

//Forma 1:
/* 
frutas.forEach((element) => { // Recibe adentro de los parecntesis una función flecha, solo hay tres tipos de argumentos, el primero representa cada uno de los valores que tiene el elemento por dentro
    const li = document.createElement("li"); //Creamos un li adentro de cada elemento
    li.textContent = element;
    listarFrutas.appendChild (li);

});   */

//Forma 2

frutas.forEach((el)=> {
    listarFrutas.innerHTML += `<li> ${el} </li>`; 

})