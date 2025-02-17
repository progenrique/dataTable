 const pokeApi=[{id:1,name:"charmander",tipo:"fuego"},
    {id:2,name:"pikachu",tipo:"electrico"},
    {id:3,name:"bulbasaur",tipo:"planta"},
    {id:4,name:"squirtle",tipo:"agua"},
    {id:5,name:"new",tipo:"psyquico"},
    {id:6,name:"articuno",tipo:"hielo"},
    {id:7,name:"grayninja",tipo:"agua"}]


const $tabla =document.querySelector(".tabla_datos")
const $fragment =document.createDocumentFragment()


pokeApi.forEach((pokemon)=>{
    const $tr=document.createElement("tr") 
    const $tdId=document.createElement("td")
    const $tdName=document.createElement("td")
    const $tdTipo=document.createElement("td")

    $tdId.textContent=pokemon.id
    $tdName.textContent=pokemon.name
    $tdTipo.textContent=pokemon.tipo

    $tr.appendChild($tdId)
    $tr.appendChild($tdName)
    $tr.appendChild($tdTipo)

    $fragment.appendChild($tr)
})


$tabla.appendChild($fragment)





