/* Exercise #2
Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * * 
*/

//Método con un solo for

let asterisco = "";

for (let x = 0; x < 5; x++) {
    asterisco += "*";
    console.log(asterisco);
    
}

//Método for anidados - Iker
let asteriscos = "";

for (let i = 1; i <= 5; i++) {
    
   for (let j = 0; j < 1; j++) {
    asteriscos +="*"; //El += es un atajo de suma
    console.log(asteriscos)
   }

}

//Metodo Raul:

for (let i = 1; i < 5; i++) {
    console.log("for principal" + i);
    for (let j=0 ; j< i; j++) {
        console.log("for interno" + j);
        
    }
    
}

