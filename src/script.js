// const fetch = require('node-fetch');

const enemyNumber = Math.floor(Math.random() * 152);
const friendNumber1 = Math.floor(Math.random() * 152);
const friendNumber2 = Math.floor(Math.random() * 152);
const friendNumber3 = Math.floor(Math.random() * 152);

let armazenamento = []

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

function tes(a) {
  let casa;
  casa = 1;
  return casa
}

function pcDado(obj, objs, index) {
  obj
  obj[index] = objs;
  return obj;
};

async function enemyPkmn(callback, param) {
  const enemyName = document.querySelector('#enemy-name');
  const enemySpriteFront = document.querySelector('#enemy-sprite-front');
  const enemyType1 = document.querySelector('#enemy-type1');
  const enemyType2 = document.querySelector('#enemy-type2');

  const pkmn = await callback(param);
  pcDado(armazenamento , pkmn, 0)
  enemyName.innerHTML = pkmn.name;
  enemySpriteFront.src = pkmn.spriteFront;
  enemyType1.innerHTML = pkmn.type1;
  if (pkmn.type1 !== pkmn.type2) {
    enemyType2.innerHTML = pkmn.type2
  }
}

async function friendPkmn1(callback, param) {
  const friendPkmnName = document.querySelector('#friend-name-1');
  const friendPkmnSpriteFront = document.querySelector('#friend-sprite-front-1');
  const friendPkmnType1 = document.querySelector('#friend-type1-1');
  const friendPkmnType2 = document.querySelector('#friend-type2-1');

  const pkmn = await callback(param);
  pcDado(armazenamento , pkmn, 1)
  friendPkmnName.innerHTML = pkmn.name;
  friendPkmnSpriteFront.src = pkmn.spriteFront;
  friendPkmnType1.innerHTML = pkmn.type1;
  if (pkmn.type1 !== pkmn.type2) {
    friendPkmnType2.innerHTML = pkmn.type2
  }
}

async function friendPkmn2(callback, param) {
  const friendPkmnName = document.querySelector('#friend-name-2');
  const friendPkmnSpriteFront = document.querySelector('#friend-sprite-front-2');
  const friendPkmnType1 = document.querySelector('#friend-type1-2');
  const friendPkmnType2 = document.querySelector('#friend-type2-2');

  const pkmn = await callback(param);
  pcDado(armazenamento , pkmn, 2)
  friendPkmnName.innerHTML = pkmn.name;
  friendPkmnSpriteFront.src = pkmn.spriteFront;
  friendPkmnType1.innerHTML = pkmn.type1;
  if (pkmn.type1 !== pkmn.type2) {
    friendPkmnType2.innerHTML = pkmn.type2
  }
}

async function friendPkmn3(callback, param) {
  const friendPkmnName = document.querySelector('#friend-name-3');
  const friendPkmnSpriteFront = document.querySelector('#friend-sprite-front-3');
  const friendPkmnType1 = document.querySelector('#friend-type1-3');
  const friendPkmnType2 = document.querySelector('#friend-type2-3');

  const pkmn = await callback(param);
  pcDado(armazenamento , pkmn, 3)
  friendPkmnName.innerHTML = pkmn.name;
  friendPkmnSpriteFront.src = pkmn.spriteFront;
  friendPkmnType1.innerHTML = pkmn.type1;
  if (pkmn.type1 !== pkmn.type2) {
    friendPkmnType2.innerHTML = pkmn.type2
  }
}
function telaPok(param) {
  const srct = armazenamento[`${param + 1}`].spriteBack;
  const friendPkmnSpriteBrack = document.querySelector('#imagem');
  friendPkmnSpriteBrack.src = srct;
  
}

/* Tente pegar o pokemon do intenario e coloque na div '.ally-container' */
const pickPokemon = () => document
  .querySelectorAll('.option')
  .forEach((elemento, index) => elemento.addEventListener('click', (event) =>
  telaPok(index)));

window.onload = async () => {
  await enemyPkmn(fetchPkmn, enemyNumber);
  await friendPkmn1(fetchPkmn,friendNumber1);
  await friendPkmn2(fetchPkmn,friendNumber2);
  await friendPkmn3(fetchPkmn,friendNumber3);
  await pickPokemon();
};