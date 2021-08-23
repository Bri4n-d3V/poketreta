const fetch = require('node-fetch');

async function fetchPkmn(name) {

  await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  
}
fetchPkmn('ditto').then(resolve => console.log(resolve));