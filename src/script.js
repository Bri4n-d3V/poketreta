const fetch = require('node-fetch');

const randomNumber = Math.floor(Math.random() * 152);

async function fetchPkmn(id) {
  try {
    const endpoint = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const resolve = await endpoint.json();

    const name = resolve.name;
    const image = resolve.sprites.front_default;
    const type1 = resolve.types[0].type.name;
    let type2 = type1;
    if (resolve.types[1]) type2 = resolve.types[1].type.name;

  } catch (error) {
    await console.log(error);
  }
}
fetchPkmn(25);