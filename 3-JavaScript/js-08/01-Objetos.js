let x = 10;
console.log(x.length);

let obj_persona = {
    nombre: "Cyn",
    apellido: "López",
    correo_electrónico: "cyntya@gmail.com",
    edad: "20"
}

console.log(obj_persona);

/* //Carlos Camilo

let personas = new Object();
personas.nombre = "David";
personas.edad = 30;
personas.correo= d@gmail.com


console.log(personas.nombre);
console.log(personas.nombre);
console.log(personas.nombre); */

//Funciones dentro de objetos
let personas = {
    nombre: "Juan", 
    apellido: "Fernández",
    edad: 23,
    mail: "usuario@gmail.com",
    /* nombreCompleto: function (){
        return this.nombre + "  " + this.apellido;
    } */

   

    //Atributo GET: metodo accesor, una de las buenas practicas Para acceder a los atributos del objeto si no tenemos una función. los getters y los setters son construcciones habituales de los objetos que permiten acceder a valores o propiedades, sin revelar la forma de implementación de las clases.
    idioma: "es", 
    get leng (){
        return this.idioma.toUpperCase();
        },
        
        set leng (Lang){
            this.idioma = Lang.toLowerCase();

        }
    }
console.log(personas.leng);
personas.leng = "ALEMAN";
console.log(personas.idioma);

personas.tel = "5512345678"
personas.tel = "785687587" // Aquí sobreescribimos el dato anterior

console.log(personas);
console.log(personas.nombre);
/* console.log(personas.nombreCompleto()); */

// FOR IN

for (varPropiedad in personas) {
    console.log(personas[varPropiedad]);
}

//JSON

let personasString = JSON.stringify(personas);
console.log(personasString);