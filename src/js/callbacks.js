// @ts-check

/**
 * Hero
 * @typedef {Object} Hero
 * @property {number} id - The hero id
 * @property {string} name - The hero name
 * @property {string} power - The power name
 */

/**
 * Heroes Objects
 * @type {{ captain: Hero, iron: Hero, spider: Hero }}
 */
const heroes = {
    captain: {
        id: 1,
        name: "Captain America",
        power: "Super Strength",
    },
    iron: {
        id: 2,
        name: "Iron Man",
        power: "Super Strength",
    },
    spider: {
        id: 3,
        name: "Spiderman",
        power: "Spider Sense",
    }
}

/**
 * Search hero by id
 * @param {string} id examples: "captain", "iron", "spider"
 * @param {(error: string|null, hero: Hero|null) => void} callback
 * @returns {void}
 */
export const searchHero = ( id, callback ) => {
    /** @type {Hero} */
    const hero = heroes[id];

    if ( hero ) {
        callback( null, hero )
    } else {
        callback( `Hero does not exist with id: "${ id }"`, null );
    }
};
