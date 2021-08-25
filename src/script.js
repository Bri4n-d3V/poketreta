// const fetch = require('node-fetch');

// Gerador de números aleatórios que são usados como os IDs dos Pkmn.
const enemyNumber = Math.floor(Math.random() * 152) + 1;
const friendNumber1 = Math.floor(Math.random() * 152) + 1;
const friendNumber2 = Math.floor(Math.random() * 152) + 1;
const friendNumber3 = Math.floor(Math.random() * 152) + 1;

// armazenamentos.
let armazenamento = [];
let points = 0;

// chamada ao API do Pkmn que pega as informações desejadas (nome, spites (frente e costas), nome e tipos (1 e 2)).
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
    return await fetchPkmn(id); //tratar o erro 
  };
};

// Adicionar comentário.
function pcDado(obj, objs, index) {
  obj
  obj[index] = objs;
  return obj;
};


// Gera via DOM o Pkmn inimigo aleatório com as informações desejadas.
async function enemyPkmn(callback, param) {
  const enemyName = document.querySelector('#enemy-name');
  const enemySpriteFront = document.querySelector('#enemy-sprite-front');
  const enemyType1 = document.querySelector('#enemy-type1');
  const enemyType2 = document.querySelector('#enemy-type2');

  const pkmn = await callback(param);
  pcDado(armazenamento, pkmn, 0)
  enemyName.innerHTML = `<strong> ${pkmn.name} </strong>`;
  enemySpriteFront.src = pkmn.spriteFront;
  enemyType1.innerHTML = pkmn.type1;
  if (pkmn.type1 !== pkmn.type2) {
    enemyType2.innerHTML = pkmn.type2
  };
};

// Gera via DOM o Pkmn amigo 1 aleatório com as informações desejadas.
async function friendPkmn1(callback, param) {
  const friendPkmnName = document.querySelector('#friend-name-1');
  const friendPkmnSpriteFront = document.querySelector('#friend-sprite-front-1');
  const friendPkmnType1 = document.querySelector('#friend-type1-1');
  const friendPkmnType2 = document.querySelector('#friend-type2-1');

  const pkmn = await callback(param);
  pcDado(armazenamento, pkmn, 1)
  friendPkmnName.innerHTML = `<strong> ${pkmn.name} </strong>`;
  friendPkmnSpriteFront.src = pkmn.spriteFront;
  friendPkmnType1.innerHTML = pkmn.type1;
  if (pkmn.type1 !== pkmn.type2) {
    friendPkmnType2.innerHTML = pkmn.type2
  };
};

// Gera via DOM o Pkmn amigo 2 aleatório com as informações desejadas.
async function friendPkmn2(callback, param) {
  const friendPkmnName = document.querySelector('#friend-name-2');
  const friendPkmnSpriteFront = document.querySelector('#friend-sprite-front-2');
  const friendPkmnType1 = document.querySelector('#friend-type1-2');
  const friendPkmnType2 = document.querySelector('#friend-type2-2');

  const pkmn = await callback(param);
  pcDado(armazenamento, pkmn, 2)
  friendPkmnName.innerHTML = `<strong> ${pkmn.name} </strong>`;
  friendPkmnSpriteFront.src = pkmn.spriteFront;
  friendPkmnType1.innerHTML = pkmn.type1;
  if (pkmn.type1 !== pkmn.type2) {
    friendPkmnType2.innerHTML = pkmn.type2
  };
};

// Gera via DOM o Pkmn amigo 3 aleatório com as informações desejadas.
async function friendPkmn3(callback, param) {
  const friendPkmnName = document.querySelector('#friend-name-3');
  const friendPkmnSpriteFront = document.querySelector('#friend-sprite-front-3');
  const friendPkmnType1 = document.querySelector('#friend-type1-3');
  const friendPkmnType2 = document.querySelector('#friend-type2-3');

  const pkmn = await callback(param);
  pcDado(armazenamento, pkmn, 3)
  friendPkmnName.innerHTML = `<strong> ${pkmn.name} </strong>`;
  friendPkmnSpriteFront.src = pkmn.spriteFront;
  friendPkmnType1.innerHTML = pkmn.type1;
  if (pkmn.type1 !== pkmn.type2) {
    friendPkmnType2.innerHTML = pkmn.type2
  };
};

// Imprime no campo de batalha o pkmn selecionado com o evento de clique da função pickPkmn.
function telaPkmn(index) {
  const pkmn = armazenamento[`${index + 1}`];
  const friendName = document.querySelector('#friend-name');
  const friendSprite = document.querySelector('#friend-sprite');
  const friendType1 = document.querySelector('#friend-type1');
  const friendType2 = document.querySelector('#friend-type2');

  armazenamento[4] = (index + 1);

  friendName.innerHTML = `<strong> ${pkmn.name} </strong>`;
  friendSprite.src = pkmn.spriteBack;
  friendType1.innerHTML = pkmn.type1;
  friendType2.innerHTML = '';
  if (pkmn.type1 !== pkmn.type2) {
    friendType2.innerHTML = pkmn.type2;
  };
};

// Evento de clique que seleciona a DIV do PKMN amigo desejado e joga na função de imprimir no compo de batalha (telaPkmn).
const pickPkmn = _ => document
  .querySelectorAll('.option')
  .forEach((pkmn, index) => pkmn.addEventListener('click', _ => {
    document.querySelector('#battle-btn').disabled = false;
    telaPkmn(index);
  }));

// executa o jogo ao clicar no botão 'battle'.
function battleBtn() {
  document.querySelector('#battle-btn').addEventListener('click', () => battleCalculator())
}

// calculo da batalha pkmn de acordo com os tipos.
function battleCalculator() {
  // friend pkmn = NORMAL, casos de SUPER EFFECTIVE.
  if (armazenamento[armazenamento[4]].type1 === 'normal' || armazenamento[armazenamento[4]].type2 === 'normal') {

    let result = `It's not very effective...`;
    window.alert(result);
    if(Math.floor(Math.random() * 2) === 0 ) points -= 10;
    else points += 10;
  };

  // friend pkmn = FIRE, casos de SUPER EFFECTIVE.
  if (armazenamento[armazenamento[4]].type1 === 'fire' || armazenamento[armazenamento[4]].type2 === 'fire') {
    const fireSuperEffectiveAgainst = ['bug', 'grass', 'ice', 'steel'];

    let result = `It's not very effective...`;
    fireSuperEffectiveAgainst.forEach(type => {
      if (armazenamento[0].type1 === type || armazenamento[0].type2 === type) {
        result = `It's super effective!`;
        points += 10;
      }
    });
    window.alert(result);
  }
  scoreBoard(points);
};

function scoreBoard(points) {
  const score = document.querySelector('#score');
  score.innerHTML = `score: ${points}`;
}

// Chamada das funções ao carregar a página.
window.onload = async _ => {
  await enemyPkmn(fetchPkmn, 1);
  await friendPkmn1(fetchPkmn, 4);
  await friendPkmn2(fetchPkmn, 20);
  await friendPkmn3(fetchPkmn, friendNumber3);
  await pickPkmn();
  await battleBtn();
};

// exporta funcoes para o arquivo de testes com jest
module.exports = {
  fetchPkmn,
  enemyPkmn,
  friendPkmn1,
  friendPkmn2,
  friendPkmn3,
  pickPkmn,
  battleBtn,
};