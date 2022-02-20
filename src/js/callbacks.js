// @ts-check
import heroes from "./heroes";

/**
 * Search hero by id
 * @param {string} id examples: "captain", "iron", "spider"
 * @param {(error: string|null, hero: import("./heroes").Hero|null) => void} callback
 * @returns {void}
 */
const searchHero = ( id, callback ) => {
    /** @type {import("./heroes").Hero} */
    const hero = heroes[id];

    if ( hero ) {
        callback( null, hero )
    } else {
        callback( `Hero does not exist with id: "${ id }"`, null );
    }
};
