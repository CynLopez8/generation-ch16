// URL a consumir: 

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"; 

// Elementos del DOM:

const imgPokemon = document.getElementById("img-pokemon");
/* console.log(imgPokemon); */

const idPokemon = document.getElementById("id-pokemon");
/* console.log(idPokemon); */

const nombrePokemon = document.getElementById("nombre-pokemon");
/* console.log(nombrePokemon); */

const listaHabilidades = document.getElementById("lista-habilidades");

const listaTipos = document.getElementById ("lista-tipos");
/* console.log(listaTipos); */

const formulario = document.getElementById("buscador-pokemon");
console.log(formulario);

//Eventos:
formulario-addEventListener("submit", (e)=>{
    e.preventDefault(); //Lo usamos para que no recargue la pagina hasta que yo le diga, por eso lo primero que hacemos es detener el efecto

    console.log("Boton");

    const inputPokemon = document.getElementById("busqueda-pokemon"); //Con esto traemos el input del HTML

    console.log(inputPokemon.value);

    const nuevaBusqueda = urlPokemon + inputPokemon.value; 
    
    console.log(nuevaBusqueda);

    obtenerPokemon(nuevaBusqueda);

})

//Funciones:
async function obtenerPokemon(url) {
    try {
        const respuesta = await fetch (url);
    const datos = await respuesta.json();

/*     console.log(datos);
    console.log(datos.forms[0].name);
    console.log(datos.abilities);
    console.log(datos.id);
    console.log(datos.types);
    console.log(datos.sprites.other["official-artwork"].front_default);
 */

    const pokemon = {
        nombre: datos.forms[0].name,
        habilidades:datos.abilities,
        id: datos.id,
        tipos: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default 
    }

    //Imagen, nombre & ID
    imgPokemon.src = pokemon.imagen;
    idPokemon.textContent = `ID: ${pokemon.id}` ; //cONCATENAMOS EL VALOR JALADO CON EL ID:
    nombrePokemon.textContent = pokemon.nombre;

    //Habilidades
    console.log(pokemon.habilidades.length);
    
    let template = '';

    for (let i = 0; i < pokemon.habilidades.length; i++) {
        const nombreHabilidad = pokemon.habilidades[i].ability.name;
        
        console.log(nombreHabilidad);
        
        template += 
        `<li class="list-group-item"> ${nombreHabilidad} </li>`;
    }    


    listaHabilidades.innerHTML = template;

// Tipos

console.log(pokemon.tipos);

let templateTipos = "";

pokemon.tipos.forEach(tipo => {
    const nombreTipo = tipo.type.name;
    console.log(nombreTipo);

    templateTipos += `<li class="list-group-item"> ${nombreTipo}</li>`;
    });

    listaTipos.innerHTML = templateTipos;
    } catch (e) {
        alert("dsgfs");
    }

} 

/* obtenerPokemon(urlPokemon); */