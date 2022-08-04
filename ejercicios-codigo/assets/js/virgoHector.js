// CASA VIRGO
'use scrict';
let pedidoPayaso = Number(prompt("Ingresa el numero de payasos: "));
let pedidoMunecas = Number(prompt("Ingresa el número de muñecas: "));

let pesoPayaso = pedidoPayaso * 112;
let pesoMunecas = pedidoMunecas * 75;

let pesoTotal = pesoPayaso + pesoMunecas;
let numPaquetes = 0; 


if (pesoTotal <= 1000) {
  numPaquetes = 1;
} else if (pesoTotal > 1000) {
   numPaquetes = Math.ceil(pesoTotal/1000);
} //math.ceil redondea al numero entero que sigue

//Plantillas literales: te permite escribir cadenas multilinea con el ' e interpolación: llamas a la variable y la introduces en la cadena
alert(`Peso total de muñecas: ${pesoMunecas}g
Peso total de payasos: ${pesoPayaso}g
Paquetas totales a enviar: ${numPaquetes}`);