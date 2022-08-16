/* const palindromo = (palabra) => {

    let palabraInvertida = palabra.split("").reverse().join("");

    if (palabra === palabraInvertida){
        return "Es un palindromo";
    }else{
        return "No es un palindromo";
    }
    
} */

//operador terniario
//(Condición) ? Verdadera : Falsa

//(Condición) ? If : else



const palindromo = (palabra) => {

    if (typeof palabra === 'number') return 'No es una palabra';

    let palabraInvertida = palabra.split("").reverse().join("");

    return palabra === palabraInvertida ? "Es un palindromo" : "No es un palindromo";
    
    
}

console.log(palindromo(1));

module.exports = palindromo;