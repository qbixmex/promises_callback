// @ts-check
import heroes from "./heroes";

/**
 * Search hero by string id.
 * @param {string} id examples: "captain", "iron", "spider"
 * @returns {Promise<import("./heroes").Hero>} Hero Object
 */
const searchHero = ( id ) => {
  const hero = heroes[id];

  return new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      if ( hero ) {
        resolve( hero );
      } else {
        reject(`Hero does not exist with id: "${ id }"`);
      }
    }, 1500);
  });
};

export default searchHero;