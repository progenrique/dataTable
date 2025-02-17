const pokeApi = [
    { id: 1, name: "charmander", tipo: "fuego" },
    { id: 2, name: "pikachu", tipo: "electrico" },
    { id: 3, name: "bulbasaur", tipo: "planta" },
    { id: 4, name: "squirtle", tipo: "agua" },
    { id: 5, name: "mew", tipo: "psiquico" },
    { id: 6, name: "articuno", tipo: "hielo" },
    { id: 7, name: "greninja", tipo: "agua" }  
];
 
const pokemons ={
    id:Math.floor(Math.random()*100)+1,
    name:"",
    tipo:""
}

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
        const $inputEditar=document.createElement("input")
        const $inputEliminar=document.createElement("input")

        $tdId.textContent = pokemon.id;
        $tdName.textContent = pokemon.name;
        $tdTipo.textContent = pokemon.tipo;
        $inputEditar.type="button"
        $inputEditar.value="Editar"
        $inputEliminar.type="button"
        $inputEliminar.value="Eliminar"
        $inputEliminar.name=pokemon.id

        $tr.appendChild($tdId);
        $tr.appendChild($tdName);
        $tr.appendChild($tdTipo);        
        $tr.appendChild($inputEditar)
        $tr.appendChild($inputEliminar)

        $fragment.appendChild($tr);
    });
    $tabla.appendChild($fragment);
}
 
// Función para filtrar los datos
function filtrarPokemones() {
    const filtro = $inputBuscar.value.toLowerCase();
    const resultado = pokeApi.filter(pokemon =>
        pokemon.name.toLowerCase().includes(filtro) ||
        pokemon.tipo.toLowerCase().includes(filtro) ||
        pokemon.id.toString().includes(filtro)
    );
    renderTable(resultado);
}

function agregarPokemons(e){   
   if(e.target.name==="nombre")pokemons.name=e.target.value
   if(e.target.name==="tipo")pokemons.tipo=e.target.value

   
}

function eliminarPokemon(e){

   const indexPokemon=pokeApi.findIndex((pokemon)=>pokemon.id==e.target.name)

   pokeApi.splice(indexPokemon,1)

   renderTable(pokeApi);

   
}
 
$inputBuscar.addEventListener("keyup",filtrarPokemones)
$formularioAgregar.addEventListener("keyup",agregarPokemons)


document.addEventListener("click",(e)=>{
    if(e.target.value==="Editar")console.log("editar")
    if(e.target.value==="Eliminar"){eliminarPokemon(e)}
    if(e.target.value==="Agregar"){
        $formularioAgregar.classList.remove("none")    
    }
    if(e.target.value==="Enviar"){
        pokeApi.push(pokemons)
        $formularioAgregar.classList.add("none")
        renderTable(pokeApi);

    }
    })
 
 
renderTable(pokeApi);