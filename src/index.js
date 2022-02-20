// @ts-check
import { getHeroesArray } from "./js/await";
import "./sass/styles.scss";

getHeroesArray()
    .then( console.table )
    .catch( console.error );
