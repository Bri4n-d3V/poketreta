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

async function enemyPkmn(callback) {
  const enemyName = document.querySelector('#enemy-name');
  const enemySpriteFront = document.querySelector('#enemy-sprite-front');
  const enemyType1 = document.querySelector('#enemy-type1');
  const enemyType2 = document.querySelector('#enemy-type2');

  enemyName.innerHTML = await callback(randomNumber).then(use => use.name);
  enemySpriteFront.src = await callback(randomNumber).then(use => use.spriteFront);
  enemyType1.innerHTML = await callback(randomNumber).then(use => use.type1)
  enemyType2.innerHTML = await callback(randomNumber).then(use => use.type2)

}

window.onload = async () => {
  await enemyPkmn(fetchPkmn)
};

