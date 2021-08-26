// const fetch = require('node-fetch');
// api: https://pokeapi.co/ 

// Gerador de números aleatórios que são usados como os IDs dos Pkmn.
let enemyNumber = Math.floor(Math.random() * 152) + 1;
let friendNumber1 = Math.floor(Math.random() * 152) + 1;
let friendNumber2 = Math.floor(Math.random() * 152) + 1;
let friendNumber3 = Math.floor(Math.random() * 152) + 1;

// armazenamentos.
let armazenamento = [];
let points = 0;
const typesTable = {
  normal: [
    [''],
    ['fighting']
  ],
  fire: [
    ['bug', 'grass', 'ice', 'steel'],
    ['ground', 'rock', 'water']
  ],
  water: [
    ['fire', 'ground', 'rock'],
    ['electric', 'grass']
  ],
  grass: [
    ['ground', 'rock', 'water'],
    ['bug', 'fire', 'flying', 'ice', 'poison']
  ],
  electric: [
    ['flying', 'water'],
    ['ground']
  ],
  ice: [
    ['dragon', 'flying', 'grass', 'ground'],
    ['fighting', 'fire', 'rock', 'steel']
  ],
  fighting: [
    ['dark', 'ice', 'normal', 'rock', 'steel'],
    ['fairy', 'flying', 'psychic']
  ],
  poison: [
    ['fairy', 'grass'],
    ['ground', 'psychic']
  ],
  ground: [
    ['electric', 'fire', 'poison', 'rock', 'steel'],
    ['grass', 'ice', 'water']
  ],
  flying: [
    ['bug', 'fighting', 'grass'],
    ['electric', 'ice', 'rock']
  ],
  psychic: [
    ['fighting', 'poison'],
    ['bug', 'dark', 'ghost']
  ],
  bug: [
    ['dark', 'grass', 'psychic'],
    ['fire', 'flying', 'rock']
  ],
  rock: [
    ['bug', 'fire', 'flying', 'ice'],
    ['fighting', 'grass', 'ground', 'steel', 'water']
  ],
  ghost: [
    ['Ghost', 'Psychic'],
    ['Dark', 'Ghost']
  ],
  dragon: [
    ['dragon'],
    ['dragon', 'fairy', 'ice']
  ],
  dark: [
    ['ghost', 'psychic'],
    ['bug', 'fairy', 'fighting']
  ],
  steel: [
    ['fairy', 'ice', 'rock'],
    ['fighting', 'fire', 'ground']
  ],
  fairy: [
    ['dark', 'dragon', 'fighting'],
    ['poison', 'steel']
  ]



}

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
  enemyType2.innerHTML = '';
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

// Muda calssa SELECTED para que possa mudar a cor do friend pkmn selecionado.
function changeClassSelected() {
  const option = document.querySelectorAll('.option');
  option.forEach(pkmn => {
    pkmn.addEventListener('click', () => {
      for (let j = 0; j < option.length; j += 1) {
        option[j].classList.remove('selected');
      }
      pkmn.classList.add('selected');
    });
  });
};

// Evento de clique que seleciona a DIV do PKMN amigo desejado e joga na função de imprimir no compo de batalha (telaPkmn).
function pickPkmn() {
  const option = document.querySelectorAll('.inventario');

    option.forEach((pkmn, index) => pkmn.addEventListener('click', _ => {
      document.querySelector('#battle-btn').disabled = false;
      telaPkmn(index);
      for (let j = 0; j < option.length; j += 1) {
        option[j].classList.remove('selected');
      }
      pkmn.classList.add('selected');

    }));
}

// executa o jogo ao clicar no botão 'battle'.
function battleBtn() {
  document.querySelector('#battle-btn').addEventListener('click', () => battleCalculator())
}

// calculo da batalha pkmn de acordo com os tipos.
function battleCalculator() {
  // friend pkmn = NORMAL, casos de SUPER EFFECTIVE.
  const posição = armazenamento[4];
  const friendPkmn = armazenamento[posição];
  const enemyPkmn1 = armazenamento[0];
  const type1 = friendPkmn.type1
  const type2 = friendPkmn.type2


  
    // caso de vitoria comparando o type 1 do amigo contra os type 1 e 2 do inimigo 
    if (typesTable[type1][0].some((type) => (type == enemyPkmn1.type1 || type == enemyPkmn1.type2))) { // para todos tipos de acordo com a typesTable  

      let result = `It's super effective! type 1`;
      window.alert(result);
      points += 10;
      enemyNumber = Math.floor(Math.random() * 152) + 1;
      scoreBoard(points);
      enemyPkmn(fetchPkmn, enemyNumber);

      return;
    };
    // caso de vitoria comparando o type 2 do amigo contra os type 1 e 2 do inimigo 

    if (typesTable[type2][0].some((type) => (type == enemyPkmn1.type1 || type == enemyPkmn1.type2))) { // para todos tipos de acordo com a typesTable  

      let result = `It's super effective!`;
      window.alert(result);
      points += 10;
      enemyNumber = Math.floor(Math.random() * 152) + 1;
      scoreBoard(points);
      enemyPkmn(fetchPkmn, enemyNumber);
      return;
    };
    if (friendPkmn.type1 === 'normal') {

      let result = `It's not very effective...`;
      window.alert(result);
      if (Math.floor(Math.random() * 2) === 0) {
        points -= 10;
        scoreBoard(points);
        return;
      } else {
        points += 10;
        enemyNumber = Math.floor(Math.random() * 152) + 1;
        scoreBoard(points);
        enemyPkmn(fetchPkmn, enemyNumber);
        return;
      }

    };
    if (friendPkmn.type2 === 'normal') {

      let result = `It's not very effective...`;
      window.alert(result);
      if (Math.floor(Math.random() * 2) === 0) {
        points -= 10;
        scoreBoard(points);
        return;
      } else {
        points += 10;
        enemyNumber = Math.floor(Math.random() * 152) + 1;
        scoreBoard(points);
        enemyPkmn(fetchPkmn, enemyNumber);
        return;
      }


    };
    
  // caso de detorta comparando o type 1 do amigo contra os type 1 e 2 do inimigo

  if (typesTable[type1][1].some((type) => (type == enemyPkmn1.type1 || type == enemyPkmn1.type2))) { // para todos tipos de acordo com a typesTable  

    let result = `perdeu playboy `;
    window.alert(result);
    points -= 10;

    scoreBoard(points);

    (async (numero) => {
      console.log(numero)
      if (numero == 0) {
        friendNumber1 = Math.floor(Math.random() * 152) + 1;
        await friendPkmn1(fetchPkmn, friendNumber1);
        telaPkmn(numero);

      } else if (numero == 1) {
        friendNumber2 = Math.floor(Math.random() * 152) + 1;
        await friendPkmn2(fetchPkmn, friendNumber2);
        telaPkmn(numero);
      } else if (numero == 2) {
        friendNumber3 = Math.floor(Math.random() * 152) + 1;
        await friendPkmn3(fetchPkmn, friendNumber3);
        telaPkmn(numero);
      }
    })(posição - 1);
    enemyPkmn(fetchPkmn, enemyNumber);
    return;
  };

  if (typesTable[type2][1].some((type) => (type == enemyPkmn1.type1 || type == enemyPkmn1.type2))) { // para todos tipos de acordo com a typesTable  

    let result = `perdeu playboy `;
    window.alert(result);
    points -= 10;

    scoreBoard(points);

    (async (numero) => {
      console.log(numero)
      if (numero == 0) {
        friendNumber1 = Math.floor(Math.random() * 152) + 1;
        await friendPkmn1(fetchPkmn, friendNumber1);
        telaPkmn(numero);

      } else if (numero == 1) {
        friendNumber2 = Math.floor(Math.random() * 152) + 1;
        await friendPkmn2(fetchPkmn, friendNumber2);
        telaPkmn(numero);
      } else if (numero == 2) {
        friendNumber3 = Math.floor(Math.random() * 152) + 1;
        await friendPkmn3(fetchPkmn, friendNumber3);
        telaPkmn(numero);
      }
    })(posição - 1);
    enemyPkmn(fetchPkmn, enemyNumber);
    return;
  };
};

function scoreBoard(points) {
  const score = document.querySelector('#score');
  score.innerHTML = `score: ${points}`;
}

// Chamada das funções ao carregar a página.
window.onload = async _ => {
  await enemyPkmn(fetchPkmn, enemyNumber);
  await friendPkmn1(fetchPkmn, friendNumber1);
  await friendPkmn2(fetchPkmn, friendNumber2);
  await friendPkmn3(fetchPkmn, friendNumber3);
  await changeClassSelected(),
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
  battleCalculator,

};