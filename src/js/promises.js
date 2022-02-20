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
    }, 500);
  });
};

/**
 * Slow Promise
 * @type {Promise<string>}
 */
const slowPromise = new Promise( ( resolve, reject ) => {
  setTimeout( () => { resolve("Slow Promise") }, 2000 );
});

/**
 * Medium Promise
 * @type {Promise<string>}
 */
const mediumPromise = new Promise( ( resolve, reject ) => {
  setTimeout( () => { resolve("Medium Promise") }, 1500 );
});

/**
 * Fast Promise
 * @type {Promise<string>}
 */
const fastPromise = new Promise( ( resolve, reject ) => {
  setTimeout( () => { reject("Fast Promise") }, 1000 );
});

export {
  searchHero,
  slowPromise,
  mediumPromise,
  fastPromise,
};