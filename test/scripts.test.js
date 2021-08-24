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
