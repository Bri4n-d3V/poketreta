// const fetch = require('node-fetch');

const randomNumber = Math.floor(Math.random() * 152);

async function fetchPkmn(id) {
  try {
    const endpoint = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const resolve = await endpoint.json();

    const name = resolve.name;
    const spriteFront = resolve.sprites.front_default;
    const spriteBack = resolve.sprites.back_default;
    const type1 = resolve.types[0].type.name;
    let type2 = type1;
    if (resolve.types[1]) type2 = resolve.types[1].type.name;

    return {
      name,
      spriteFront,
      spriteBack,
      type1,
      type2,
    }
  } catch (error) {
    await console.log(error);
  }
}
// fetchPkmn(randomNumber);

async function enemyPkmn(callback, param) {
  const enemyName = document.querySelector('#enemy-name');
  const enemySpriteFront = document.querySelector('#enemy-sprite-front');
  const enemyType1 = document.querySelector('#enemy-type1');
  const enemyType2 = document.querySelector('#enemy-type2');

  const pkmn = await callback(param);

  enemyName.innerHTML = pkmn.name;
  enemySpriteFront.src = pkmn.spriteFront;
  enemyType1.innerHTML = pkmn.type1;
  if (pkmn.type1 !== pkmn.type2) {
    enemyType2.innerHTML = pkmn.type2
  }
}

window.onload = async () => {
  await enemyPkmn(fetchPkmn, randomNumber)
};

