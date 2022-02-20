// @ts-check
import { searchHero, searchHeroAsync } from "./js/promises";
import "./sass/styles.scss";

// searchHero("spider")
//     .then( hero => console.log(`Sending "${ hero.name }" to a mission`))
//     .catch( console.error );

searchHeroAsync("iron")
    .then( hero => console.log(`Sending "${ hero?.name }" to a mission`))
    .catch( console.error );
