const suma = require('../js/suma');

//pedir un valor esperado
//Y vamos a despues comparar el resultado con el valor esperado

//metodo test:

test ('Sumar 1 + 2 deber ser 3', () => {
    expect (suma(1,2)).toBe (3)
});

test ('1 + 4 no debe ser 0', () => {
    expect (suma(1,4)).not.toBe(0);
});