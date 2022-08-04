/* Crea una calculadora para convertir un valor ingresado por el usuario a grados Celsius, Fahrenheit y Kelvin.

Considera:

Solicitar el valor por medio de un prompt
Crear funciones para realizar los cálculos
Mostrar los resultados mediante alertas


*/

/* console.log("Esta es una calculadora para convertir un valor ingresado por ti a grados Celsius, Fahrenheit y Kelvin");

console.log("Instrucciones:");
console.log("1. Para comenzar, debes ingresar el tipo de grados que tienes actualmente:");
console.log("En la alerta ingresa si son grados de tipo:");
console.log("Celsius");
console.log("Fahrenheit");
console.log("Kelvin");

console.log("2. En la segunda alerta, ingresa el valor numérico de los grados actuales");

console.log("3. En la tercer alerta, ingresa los grados a los que quieres convertir tu dato actual: ");

console.log("Celsius");
console.log("Fahrenheit");
console.log("Kelvin");
 */

let tipoUsuario; 
let gradoUsuario;
let conversor;
let resultado;
let numeroUsuario;

tipoUsuario = prompt("Ingresa el tipo de grados que tienes actualmente y quieres convertir: Celsius, Fahrenheit o Kelvin, recuerda comenzar con mayúscula y escribirlo correctamente");

gradoUsuario = prompt("Ingresa el valor numérico de los grados actuales, ejemplo: 32");

conversor = prompt("Ingresa los grados a los que quieres convertir tu dato actual: Celsius, Fahrenheit o Kelvin, recuerda comenzar con mayúscula y escribirlo correctamente");

numeroUsuario = Number(gradoUsuario);
switch(tipoUsuario){
    case "Celsius":
            switch (conversor) {
                // Celsius a Farhenheit: (1 °C × 9/5) + 32 = 33.8 °F
                case "Celsius":
                    alert("No hay nada que convertir, los grados son iguales, es decir: " + numeroUsuario + " grados.");
                    break;
    
                case "Fahrenheit":
                    function formula(gradoUsuario) {
                        resultado = (numeroUsuario * (9/5))+32; 
                    }formula(gradoUsuario);

                    alert("Tus " + gradoUsuario + " grados Celsius equivalen a " + resultado + " grados Fahrenheit");
                    break;
                
                case "Kelvin":
                        //Celsius a Kelvin: 0 °C + 273.15 = 273.15 K
                    function formula(gradoUsuario) {
                        resultado = (numeroUsuario + 273.15); 
                    }formula(gradoUsuario);

                    alert("Tus " + gradoUsuario + " grados Celsius equivalen a " + resultado + " grados Kelvin");
                    break;
            
                default:
                    break;
            }
    
        
    break
    
    case "restar":
        console.log("Vamos a restar");
    break

    case "dividir":
        console.log("Vamos a dividir");
    break

    default:
        console.log("No entiendo");
}