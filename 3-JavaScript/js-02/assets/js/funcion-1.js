/* Para declarar una funcion se debe poner
el nombre de la funcion si son mas de dos palabras 
debe ir en camelCase */

function miSuma(a, b){
    let resultado = (a + b);
    console.log("la suma es:" + resultado);
}

    miSuma(2,3);

function miSuma(a, b){
    console.log("la suma es:" + (a + b));
}

    miSuma(4,6);

function miProducto (a, b){
        return (a * b);

    }

    console.log("El producto es " + miProducto (4,5));


let res;    
function miResta (a, b){
        return (a - b);

    }

    res = miResta;

    console.log("La resta es " + miResta(10,4));

//Estilo Victor
let res2;    
function miResta2 (a, b){
        return (a - b);
    }

    res2 = miResta2(10,4);

    console.log("La resta es " + res2);

/*     Ejercicios:
1 Función Nombre completo con 3 variables: nombres, ap materno, ap paterno
2 Operación división 
agregas un espacio
"nombre " + "apellido"
nombre + " " + apellido
nombre, apellido
*/
let appaterno = " López";
let apmaterno = " López";
let nombres = "Cyntya Eréndira";

function miNombre (nombres, appaterno, apmaterno){
 
    return (nombres + appaterno + apmaterno);   
}


console.log("Mi nombre completo es es: " + miNombre(nombres,  appaterno,  apmaterno));

