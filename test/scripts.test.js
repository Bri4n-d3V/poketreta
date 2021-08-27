/**
 * @jest-environment jsdom
 */

const {
    fetchPkmn,
    enemyPkmn,
    friendPkmn1,
    friendPkmn2,
    friendPkmn3,
    pickPkmn,
    battleBtn,
    battleCalculator
} = require("../src/script");
 
jest.mock('node-fetch');

const test = {


    id: 413,
    name: "wormadam-plant",
    order: 503,
    form_order: 1,
    is_default: true,
    is_battle_only: false,
    is_mega: false,
    form_name: "plant",
    pokemon: {
        name: "wormadam-plant",
        url: "https://pokeapi.co/api/v2/pokemon/413/"
    },
    sprites: {
        back_default: "http://pokeapi.co/media/sprites/pokemon/back/413.png",
        back_shiny: "http://pokeapi.co/media/sprites/pokemon/back/shiny/413.png",
        front_default: "http://pokeapi.co/media/sprites/pokemon/413.png",
        front_shiny: "http://pokeapi.co/media/sprites/pokemon/shiny/413.png"
    },
    version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
    },
    types: [{
            slot: 1,
            type: {
                name: "grass",
                url: "https://pokeapi.co/api/v2/type/12/"
            }
        },
        {
            slot: 2,
            type: {
                name: "poison",
                url: "https://pokeapi.co/api/v2/type/4/"
            }
        }
    ]
}

describe('check the functioning of the API', () => {
    it('individual return test', async () => {
         fetch = jest.fn().mockResolvedValue({json: () => {
            return test;
        }, });
        expect((await fetchPkmn()).name).toBe("wormadam-plant");
        expect((await fetchPkmn()).spriteFront).toBe("http://pokeapi.co/media/sprites/pokemon/413.png");
        expect((await fetchPkmn()).spriteBack).toBe("http://pokeapi.co/media/sprites/pokemon/back/413.png");
        expect((await fetchPkmn()).type1).toBe("grass");
        expect((await fetchPkmn()).type2).toBe("poison");
    });
});
/* describe('testa a função enemyPkmn', () => {
    it('should ', async () => {
        await enemyPkmn();
    });
});
describe('testa a função friendPkmn', () => {
    it('should ', async () => {
        await friendPkmn1();
    });
    it('verifica dados retornaados', async () => {
        await friendPkmn2()

    })
    it('verifica dados retornaados', async () => {
        await friendPkmn3()

    })
});

describe('testa a função pickPkmn', () => {
    it('should ', async () => {
        await pickPkmn();
    });
});

describe('battleBtn', () => {
    it('should ', async () => {
        await battleBtn();
    });

});

describe('battleCalculator', () => {
    it('should ', async () => {
        await battleCalculator();
    });

});

describe('scoreBoard', () => {
    it('should ', async () => {
       // await scoreBoard();
    });

});

describe('Name of the group', () => {
    it('should ', async () => {
        await battleCalculator();
    });

});

describe('telaPkmn', () => {
    it('should ', async () => {
     //   await telaPkmn();
    });
}); */