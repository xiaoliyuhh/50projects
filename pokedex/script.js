const pokeContainer = document.querySelector('.poke-container')

const pokeCount = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}
const types = Object.keys(colors)
async function fetchPokemons() {
    for (let i = 1; i <= pokeCount; i++) {
        await getPokemon(i)
    }
}
async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemon(data)
}
function createPokemon(pokedata) {
    const name = pokedata.name[0].toUpperCase() + pokedata.name.slice(1)
    const id = pokedata.id.toString().padStart(3, '0')
    const poke_types = pokedata.types.map(type => type.type.name)
    const type = types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    pokemon.style.backgroundColor = color
    pokemon.innerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <span class="name">${name}</span>
        <span class="type">${type}</span>
    </div>
    `
    pokeContainer.appendChild(pokemon)
}
fetchPokemons()