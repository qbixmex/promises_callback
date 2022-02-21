import heroes from "./heroes";

/**
 * Search hero by string id.
 * @param {string} id examples: "captain", "iron", "spider"
 * @returns {Promise<import("./heroes").Hero>} Hero Object
 */
const searchHero = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const hero = heroes[id];
    if ( hero ) setTimeout(() => resolve( hero ), 1000);
    else reject(`Hero does not exist with id: "${ id }"`);
  });
};

/**
 * Search hero by string id with Async.
 * @param {string} id examples: "captain", "iron", "spider"
 * @returns {Promise<import("./heroes").Hero|void>} Hero Object
 */
 const searchHeroAsync = async( id ) => {

  const hero = heroes[id];

  if ( hero ) {
    return hero;
  } else {
    throw `Hero does not exist with id: "${ id }"`;
  }

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
  setTimeout( () => { resolve("Fast Promise") }, 1000 );
});

export {
  searchHero,
  searchHeroAsync,
  slowPromise,
  mediumPromise,
  fastPromise,
};