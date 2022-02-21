import heroes from "./heroes";
import { searchHero, searchHeroAsync } from "./promises";

const heroesIds = ["captain", "iron", "spider"];
const heroesPromises = heroesIds.map( id => searchHero( id ) );

/**
 * Get Heroes ids array.
 * @return {Promise<void|import("./heroes").Hero[]>}
 */
export const getHeroesArray = async () => {
  // Long way
  // const heroesArray = [];
  // for( const id of heroesIds ) {
  //   heroesArray.push( searchHero( id ) );
  // }
  // return await Promise.all( heroesArray );

  // Shorthand
  return await Promise.all( heroesIds.map( id => searchHero( id ) ) );
};

/**
 * Get hero by ID from Heroes Object
 * @param {string} id example: "captain", "spider", "iron"
 * @return {Promise<void|import("./heroes").Hero>}
 */
export const getHeroAwait = async ( id ) => {
  try {
    const hero = await searchHeroAsync( id );
    return hero;
  } catch( error ) {
    console.warn( error );
    return {
      id: 0,
      name: "empty",
      power: "empty",
    };
  }
};

/**
 * Process All Heroes Promises
 * @returns {Promise<void>}
 */
export const heroesCycle = async () => {
  console.time("Heroes Cycle");

  // const heroes = await Promise.all( heroesPromises );
  // heroes.forEach( hero => console.log( hero ) );

  // This method process first all function and then resolve all promises
  // heroesPromises.forEach( async ( promise ) => console.log( await promise ) );

  for await ( const hero of heroesPromises) {
    console.log( hero );
  }

  console.timeEnd("Heroes Cycle");
};

/**
 * Get hero by id.
 * @param {string} id example: "captain", "iron", "spider"
 */
export const heroIfAwait = async ( id ) => {
  if ( (await searchHeroAsync( id ))?.name === "Spiderman" ) {
    console.log( "The most popular hero" );
  } else {
    console.log( "It's not the most popular" );
  }
};
