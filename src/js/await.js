import { searchHeroAsync } from "./promises";

const heroesIds = ["captain", "iron", "spider"];

/**
 * Get Heroes ids array.
 * @return {Promise<(void|import("./heroes").Hero)[]>}
 */
export const getHeroesArray = async () => {
  const heroesArray = [];

  for( const id of heroesIds) {
    const hero = await searchHeroAsync( id );
    heroesArray.push( hero );
  }

  return heroesArray;
};