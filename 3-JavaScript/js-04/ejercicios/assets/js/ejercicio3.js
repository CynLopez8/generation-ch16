let xValue = 6;
function xVal(xValue) {

    for (let i = xValue; i >= 0; i=i-0.5){
        console.log(i)  
    }
}

 // xVal(9)

//----------------

let nInpares = 100;

function inpares(nInpares) {
    for (let i = 1; i <= nInpares; i++) {
        if (i%2==0) /* si sale 1 = inpar */{
            
        } else{
            console.log(i)
        }
    }
}

// inpares(100)

//------------------

let numero = 8
let j = 1
let arr = ""

function sBrackets(numero) { 

while ( j <= numero) {
    arr += ( "[" + j + "]")
    j++
    
}
console.log(arr)
}
// sBrackets(5)

//--------------------

let n = 5;
let k = 1;
let suma=0
function sConsecutiva(n) {
    
    while ( k <= n ) {
        suma=suma+k
        k++
    }
    console.log(suma)
}

// sConsecutiva(19)