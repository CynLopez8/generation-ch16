//console.log(document);

//getElementByID()
//Siempre iniciamos con document para llamar el doc que vamos a usar, ejemplo:

console.log(document.getElementById('parrafo1').textContent); //Concatenamos dos metodos, el primero lo llama y text content 

const parrafo1 = document.getElementById('parrafo1');

console.log(parrafo1.textContent); //seleccionamos el parrafo y atributos

parrafo1.textContent = ""; // Lo reemplaza por un espacio vacio, aparece en la consola pero no se muestra en pantalla , text content muestra el contenido de texto de ese elemento

console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el párrafo 1";

console.log(parrafo1.textContent);

console.log(parrafo1.style); // devuelve los atributos que tiene esa propiedad, el CSS

parrafo1.style.background = "yellow";

//querySelector()
//etiqueta = p
//clase .parrafo
//id = #parrafo1

const parrafo2 = document.querySelector ('.parrafo');
console.log(parrafo2.textContent);

parrafo2.textContent += " \n Modificando el contenido desde JavaScript"; // Concatena el texto original y la moficicacion

console.log(parrafo2.textContent);

// \n -- inserta un salto de linea => <br/>

//querySelector(All) Lista de nodos -- nodelist

const parrafos = document.querySelectorAll('p'); //permite llamar IDs, eqtiquetas o parrafos

console.log(parrafos[2]); //Tambien podemos seleccionar como en los arreglos un elemento particular que queremos usar o mostrar

parrafos[2].style.fontSize = "2rem";


//Gramaticas de los lenguajes: 
// CSS - font-size
// Js - fontSize -- Lower camel case


//Métodos para modificar los atributos HTML:
//creamos variable llamada enlace con el id que creamos en HTML

const enlace = document.getElementById('enlace');
console.log(enlace);

//getElementsByName (name) - Busca elementos con el atributo name. Si no, devuelve []

enlace.href = "https://www.youtube.com/";
enlace.target = "_blank"; // Para que se abra en una nueva pestaña, no en la misma
enlace.textContent = "Enlace de youtube";

//ACTIVIDAD:
/* Seleccionar 3 elementos de los que ya tenemos y modifica rlo que queramos, 10 mins para jugar con selectores y atributos: por lo menos 3 elementos cambiar algun atrubuto de CSS o texto */

// Reemplazar contenido:

const parrafo4 = document.getElementById ("parrafo4");

console.log(parrafo4.nodeName); //muestra el tipo de elemento del nodo, que tipo de nodo estamos usando, como un typeof pero para nodos
console.log(parrafo4.textContent); //muestra el contenido de texto de la etiqueta
console.log(parrafo4);

console.log(parrafo4.innerHTML); //Muestra el HTML que haya en el interior del elemento, sea texto o no

console.log(document.body.innerHTML); //Apuntamos a todo el body y te muestra todo el contenido con todo y etiquetas, el HMTL compledo del body

console.log(parrafo4.outerHTML);// Muestra todo el elemento como tal, incluyendo el elemento

//parrafo4.innerHTML = '<a href = "http://google.com">Enlace</a>'; // Con inerHTML reemplazamos el contenido del elemento parrafo4 por un enlace

//parrafo4.outerHTML = '<a href = "http://google.com">Enlace</a>'; // Reemplaza el elemento completo

/* parrafo4.innerHTML = '<div class = "elemento"> "Este es un div" </div>'; //aunque le pongamos div no modifica el elemento parrafo, pero si modifica el contenido

parrafo4.outerHTML = '<div class = "elemento">"Este es otro div</div>'; //Este si cambio el elemento a div, con todo y las caracteristicas, inner lo dejo como parrafo */

//JS permite modificar las clases CSS
//Utilizando style
//Usando metodos de classlist

console.log(parrafo4.classList.contains("elemento")); // Con este comando buscamos si parrafo4 contiene la clase "elemento", devuelve true or false, en este caso devolvio false


//Podemos cambiar propiedades añadiendo una constante de una clase:
const cambiarColor = () => {
    parrafo4.classList.toggle ("elemento");
}

cambiarColor(); //En esta se agrega la clase
cambiarColor(); //En esta se quita la clase 