// const fetch = require('node-fetch');
// api: https://pokeapi.co/ 
// Gerador de números aleatórios que são usados como os IDs dos Pkmn.
// Gera número aleatório que serve de ID para os PKMN.
function randomNumber() {
  return Math.floor(Math.random() * 152) + 1;
}
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
// faz o armazenamento dos dados 
function armazenador(array, obj, index) {
  array
  array[index] = obj;
  return array;
};
// Gera via DOM o Pkmn inimigo aleatório com as informações desejadas.
async function enemyPkmn(callback, param) {
  const enemyName = document.querySelector('#enemy-name');
  const enemySpriteFront = document.querySelector('#enemy-sprite-front');
  const enemyType1 = document.querySelector('#enemy-type1');
  const enemyType2 = document.querySelector('#enemy-type2');

  const pkmn = await callback(param);
  armazenador(armazenamento, pkmn, 0)
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
  armazenador(armazenamento, pkmn, 1)
  friendPkmnName.innerHTML = `<strong> ${pkmn.name} </strong>`;
  friendPkmnSpriteFront.src = pkmn.spriteFront;
  friendPkmnType1.innerHTML = pkmn.type1;
  friendPkmnType2.innerHTML = '';
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
  armazenador(armazenamento, pkmn, 2)
  friendPkmnName.innerHTML = `<strong> ${pkmn.name} </strong>`;
  friendPkmnSpriteFront.src = pkmn.spriteFront;
  friendPkmnType1.innerHTML = pkmn.type1;
  friendPkmnType2.innerHTML = '';
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
  armazenador(armazenamento, pkmn, 3)
  friendPkmnName.innerHTML = `<strong> ${pkmn.name} </strong>`;
  friendPkmnSpriteFront.src = pkmn.spriteFront;
  friendPkmnType1.innerHTML = pkmn.type1;
  friendPkmnType2.innerHTML = '';
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
function pickPkmn() {
  const option = document.querySelectorAll('.option');
  option.forEach((pkmn, index) => pkmn.addEventListener('click', _ => {
    document.querySelector('#battle-btn').disabled = false;
    telaPkmn(index);
    // Muda calssa SELECTED para que possa mudar a cor do friend pkmn selecionado.
    option.forEach(div => {
      div.classList.remove('selected');
    });
    pkmn.classList.add('selected');
  }));
}
// executa o jogo ao clicar no botão 'battle'.
function battleBtn() {
  document.querySelector('#battle-btn').addEventListener('click', () => battleCalculator())
}
//função para simplifica e testa a implementação de alerta
//para troca o alerta por outra função basta fazer aqui a implementação 
function alerta(string) {
  window.alert(string)
}
// calculo da batalha pkmn de acordo com os tipos.
function battleCalculator() {
  const posição = armazenamento[4];
  const friendPkmn = armazenamento[posição];
  const enemyPkmn1 = armazenamento[0];
  const type1 = friendPkmn.type1
  const type2 = friendPkmn.type2
  const bolSuperEffType1 = typesTable[type1][0].some((type) => (type == enemyPkmn1.type1 || type == enemyPkmn1.type2));
  const bolSuperEffType2 = typesTable[type2][0].some((type) => (type == enemyPkmn1.type1 || type == enemyPkmn1.type2));
  const bolVulnerType1 = typesTable[type1][1].some((type) => (type == enemyPkmn1.type1 || type == enemyPkmn1.type2));
  const bolVulnerType2 = typesTable[type2][1].some((type) => (type == enemyPkmn1.type1 || type == enemyPkmn1.type2));
  // caso de vitoria comparando o type 1 do amigo contra os type 1 e 2 do inimigo 
  if (bolSuperEffType1 || bolSuperEffType2) { // para todos tipos de acordo com a typesTable  
    alerta(`It's super effective!`);
    points += 10;
    scoreBoard(points);
    enemyPkmn(fetchPkmn, randomNumber());
    return;
  }
  // caso de detorta comparando o type 1 do amigo contra os type 1 e 2 do inimigo
  if (bolVulnerType1 || bolVulnerType2) { // para todos tipos de acordo com a typesTable  

    alerta(`It's a vulnerable pokémon type...`);
    points -= 20;

    scoreBoard(points); // editar 

    (async (numero) => {
      await friendPkmn1(fetchPkmn, randomNumber());
      await friendPkmn2(fetchPkmn, randomNumber());
      await friendPkmn3(fetchPkmn, randomNumber());
      telaPkmn(numero);
    })(posição - 1);
    return;
  }


  if (type1 === 'normal' || type2 === 'normal') {
    if ((Math.floor(Math.random() * 3) === 0)) {
      let result = `Is very Normal, loser...`;
      window.alert(result);
      points -= 10;
      scoreBoard(points);
      (async (numero) => {
        if (numero == 0) {
          await friendPkmn1(fetchPkmn, randomNumber());
        }
        if (numero == 1) {
          await friendPkmn2(fetchPkmn, randomNumber());
        }
        if (numero == 2) {
          await friendPkmn3(fetchPkmn, randomNumber());
        }
        telaPkmn(numero);
      })(posição - 1);

      alerta(`It's not a very effective... bad lucky for you.`);
      
      alerta

      return;
    } else {
      points += 10
      scoreBoard(points);


      alerta(`It's not a very effective... but you took the advantage!`)
      enemyPkmn(fetchPkmn, randomNumber());
      return;
    }
  } else { // para todos tipos de acordo com a typesTable  
    alerta(`It's a draw.`);
      points -= 0;
    scoreBoard(points);
    (async (numero) => {
      console.log(numero)
      if (numero == 0) {
        await friendPkmn1(fetchPkmn, randomNumber());
        telaPkmn(numero);
      }
      if (numero == 1) {
        await friendPkmn2(fetchPkmn, randomNumber());
        telaPkmn(numero);
      }
      if (numero == 2) {
        await friendPkmn3(fetchPkmn, randomNumber());
        telaPkmn(numero);
      }
    })(posição - 1);
    enemyPkmn(fetchPkmn, randomNumber());
    return;
  }
};

// Imprimi pontuação no header HTML.
function scoreBoard(points) {
  const score = document.querySelector('#score');
  score.innerHTML = `score: ${points}`;
  if (points <= -30) {
    alerta(`You lose...
Please play again anytime soon! :)`)
    document.location.reload();
  }
  if (points >= 100) {
    alerta(`YOU WON!
Thank you for playing! :)`);
    document.location.reload();
  }
}
// Chamada das funções ao carregar a página.
window.onload = async _ => {
  await enemyPkmn(fetchPkmn, randomNumber());
  await friendPkmn1(fetchPkmn, randomNumber());
  await friendPkmn2(fetchPkmn, randomNumber());
  await friendPkmn3(fetchPkmn, randomNumber());
  pickPkmn();
  battleBtn();
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
  scoreBoard,
  telaPkmn,
};