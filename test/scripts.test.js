/**
 * @jest-environment jsdom
 */

const {
    fetchPkmn,
    enemyPkmn,
    friendPkmn1,
    friendPkmn2,
    friendPkmn3,
} = require("../src/script");

jest.mock("../src/script");

fetchPkmn.mockImplementation(async () => ({


    "id": 413,
    "name": "wormadam-plant",
    "order": 503,
    "form_order": 1,
    "is_default": true,
    "is_battle_only": false,
    "is_mega": false,
    "form_name": "plant",
    "pokemon": {
        "name": "wormadam-plant",
        "url": "https://pokeapi.co/api/v2/pokemon/413/"
    },
    "sprites": {
        "back_default": "http://pokeapi.co/media/sprites/pokemon/back/413.png",
        "back_shiny": "http://pokeapi.co/media/sprites/pokemon/back/shiny/413.png",
        "front_default": "http://pokeapi.co/media/sprites/pokemon/413.png",
        "front_shiny": "http://pokeapi.co/media/sprites/pokemon/shiny/413.png"
    },
    "version_group": {
        "name": "diamond-pearl",
        "url": "https://pokeapi.co/api/v2/version-group/8/"
    },
    "types": [
        {
            "slot": 1,
            "type": {
                "name": "grass",
                "url": "https://pokeapi.co/api/v2/type/12/"
            }
        },
        {
            "slot": 2,
            "type": {
                "name": "poison",
                "url": "https://pokeapi.co/api/v2/type/4/"
            }
        }
    ]
}
))

test('verifica dados retornaados', async () => {
    fetchPkmn(413).then((Pkmn) => {
        expect(Pkmn.name).toEqual('wormadam-plant');
        expect(Pkmn.sprites.front_default).toEqual("http://pokeapi.co/media/sprites/pokemon/413.png");
        expect(Pkmn.sprites.back_default).toEqual("http://pokeapi.co/media/sprites/pokemon/back/413.png")
        expect(Pkmn.types[0].type.name).toEqual("grass");
        expect(Pkmn.types[1].type.name).toEqual("poison");
    })
})