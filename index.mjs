const pokeApi = [
    { id: 1, name: "charmander", tipo: "fuego" },
    { id: 2, name: "pikachu", tipo: "electrico" },
    { id: 3, name: "bulbasaur", tipo: "planta" },
    { id: 4, name: "squirtle", tipo: "agua" },
    { id: 5, name: "mew", tipo: "psiquico" },
    { id: 6, name: "articuno", tipo: "hielo" },
    { id: 7, name: "greninja", tipo: "agua" },
    { id: 8, name: "greninja", tipo: "agua" },
    { id: 9, name: "greninja", tipo: "agua" },
    { id: 10, name: "greninja", tipo: "agua" },
    { id: 11, name: "greninja", tipo: "agua" },
    { id: 12, name: "greninja", tipo: "agua" },
    { id: 13, name: "greninja", tipo: "agua" },
];
// Editar
 
let pokemonEditar = null;
 
const $tabla = document.querySelector(".tabla_datos");
const $formularioAgregar = document.querySelector(".formulario_agregar");
const $inputBuscar = document.querySelector(".buscar");
 
function renderTable(data) {
    $tabla.innerHTML = "";
    const $fragment = document.createDocumentFragment();
 
    data.forEach((pokemon) => {
        const $tr = document.createElement("tr");
        const $tdId = document.createElement("td");
        const $tdName = document.createElement("td");
        const $tdTipo = document.createElement("td");
        const $tdAcciones = document.createElement("td");        
        const $inputEditar=document.createElement("input")
        const $inputEliminar=document.createElement("input")
        $tdId.textContent = pokemon.id;
        $tdName.textContent = pokemon.name;
        $tdTipo.textContent = pokemon.tipo;
        $inputEditar.type="button"
        $inputEditar.value="Editar"
        $inputEditar.className="buttonEditar"
        $inputEditar.name=pokemon.id
        $inputEliminar.type="button"
        $inputEliminar.className="buttonEliminar"
        $inputEliminar.value="Eliminar"
        $inputEliminar.name=pokemon.id
        $tdAcciones.appendChild($inputEliminar)
        $tdAcciones.appendChild($inputEditar)
        $tr.appendChild($tdId);
        $tr.appendChild($tdName);
        $tr.appendChild($tdTipo);        
        $tr.appendChild($tdAcciones)
      
 
        $fragment.appendChild($tr);
    });
    $tabla.appendChild($fragment);
}
 
// Funcion para filtrar los datos
function filtrarPokemones() {
    const filtro = $inputBuscar.value.toLowerCase();
    const resultado = pokeApi.filter(pokemon =>
        pokemon.name.toLowerCase().includes(filtro) ||
        pokemon.tipo.toLowerCase().includes(filtro) ||
        pokemon.id.toString().includes(filtro)
    );
    renderTable(resultado);
}
 
function agregarPokemons(e) {
    console.log($formularioAgregar)
    if (e.target.name === "nombre") pokemonEditar.name = e.target.value.toLowerCase();
    if (e.target.name === "tipo") pokemonEditar.tipo = e.target.value.toLowerCase();
}
 
function eliminarPokemon(e) {
    const indexPokemon = pokeApi.findIndex((pokemon) => pokemon.id == e.target.name);
    pokeApi.splice(indexPokemon, 1);
    renderTable(pokeApi);
}
 
function editarPokemon(e) {
    const idPokemon = parseInt(e.target.name);
    pokemonEditar = pokeApi.find(pokemon => pokemon.id === idPokemon);
    document.querySelector('input[name="nombre"]').value = pokemonEditar.name;
    document.querySelector('input[name="tipo"]').value = pokemonEditar.tipo;
    $formularioAgregar.classList.remove("none");
}
 
function enviarFormulario(e) {
    if (pokemonEditar) {
        pokemonEditar.name = document.querySelector('input[name="nombre"]').value.toLowerCase();
        pokemonEditar.tipo = document.querySelector('input[name="tipo"]').value.toLowerCase();
        pokemonEditar = null;
    } else {
        const nuevoPokemon = {
            id: Math.floor(Math.random() * 100) + 1,
            name: document.querySelector('input[name="nombre"]').value.toLowerCase(),
            tipo: document.querySelector('input[name="tipo"]').value.toLowerCase()
        };
        pokeApi.push(nuevoPokemon);
    }
    $formularioAgregar.classList.add("none");
    renderTable(pokeApi);
}
 
$inputBuscar.addEventListener("keyup", filtrarPokemones);
$formularioAgregar.addEventListener("keyup", agregarPokemons);
 
document.addEventListener("click", (e) => {
    if (e.target.value === "Editar") {
       
        editarPokemon(e);
    }
    if (e.target.value === "Eliminar") {
        eliminarPokemon(e);
    }
    if (e.target.value === "Agregar") {
        $formularioAgregar.classList.toggle("none");
    }
    if (e.target.value === "Enviar") {
        enviarFormulario(e);
    }
});
 
renderTable(pokeApi);