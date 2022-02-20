import { searchHero, searchHeroAsync } from "./promises";

const heroesIds = ["captain", "iron", "spider"];

/**
 * Get Heroes ids array.
 * @return {Promise<(void|import("./heroes").Hero)[]>}
 */
export const getHeroesArray = async () => {
  // Long way
  // const heroesArray = [];
  // for( const id of heroesIds) {
  //   heroesArray.push(searchHero( id ));
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
