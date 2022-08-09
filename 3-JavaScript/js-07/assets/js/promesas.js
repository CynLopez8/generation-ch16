//Variable que simula los pedidos
const saludo = "Hola mundo";
const datos = [
    {
    nombre: "Jonathan",
    apellido : "Vazquez"
    },
    {
    nombre: "Jonathan",
    apellido : "Vazquez"
    },
    {
    nombre: "Jonathan",
    apellido : "Vazquez"    
    }
]

console.log(saludo);

//Funcion para simular una petición

/* function obtenerDatos (){
    setTimeout(() =>{
        return saludo;
    }, 2000)
}
console.log(obtenerDatos()); //Esta ejecución no funciona porque el código hace primero una función y después la otra, estas intentando imprimir una función que no tiene nada, regresa undefined. Si yo llamo una función que tiene un setTimeout no se puede, da undefinido */

function obtenerDatos (){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            if(true){

                resolve(datos);

            } else{

                reject ("No se pudo obtener datos");

            }

        }, 2000)
    })
}

//Forma #1

obtenerDatos().then((datos)=>{
    console.log(datos);
}).catch ((error) => {
    console.log("Existe un error en la petición 1");
    console.log(error);
})

//Forma #2 - Funciones asíncronas, await async

async function funcionAsincrona (){

    try{
        const datos = await obtenerDatos();
        console.log(datos);

    } catch(error){

        console.log(error);

    }
} funcionAsincrona();