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