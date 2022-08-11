//JS considera a un prototipo como objeto

//Tipo predefinido:

let tiempo = new Date();
console.log(tiempo);
console.log(Math); // Clase estática que permite tener metodos y funciones matemáticas, se llama llamada estática porque no declaramos ninguna variable u objeto porque ya esta creado en si mismo

let obj_literal = {
    nombre: "Juan",
    edad: 35
}

let obj_constructor = new Object();

obj_constructor.nombre = "Dona";
obj_constructor.edad = 23;

console.log(obj_literal);
console.log(obj_constructor);

obj_literal["nombre"];
let llave = "nombre";
console.log("Esto es con llave " + obj_literal[llave]);

//Tipo Cadena
let cadena = "Esto es una cadena"; //Aqui definimos el objeto de manea primitiva, objeto primitivo, y abajo ocupamos un constructor o función
let cadena_obj = new String ("Esto es otra cadena obj");//Variable declarada, le asignamos un objeto, declaración de un objeto de forma clasica, todas las clases las añadimos con una letra mayuscula al inicio de su nombre, como String y a traves del metodo new

console.log(cadena);
console.log(cadena_obj);

//TIPO NUMERICO:
let numero =13; //tipo primitivo
let numero_obj = new Number (13.13);
console.log(numero);
console.log(numero_obj);

//TIPO ÚNICO O COMPUESTO: ARREGLOS

let lista = ["2", "3", "5", "7"];
let lista_obj = new Array ("1", "4", "6", "8", "9");
console.log(lista);
console.log(lista_obj);