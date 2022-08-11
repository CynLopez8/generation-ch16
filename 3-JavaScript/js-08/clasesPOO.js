class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    get nombre (){
        return this.nombre;
    } 
    set nombre(nombre){
        this.nombre = nombre;
    }
}

let persona1 = new Persona("Jose", "Perez");
console.log(persona1);

persona1.nombre = "Hugo Sanchez";
console.log(persona1);


let persona2 = new Persona ("Ana", "Cruz");
console.log(persona2.nombre);

console.log(persona1, persona2);