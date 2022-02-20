// @ts-check
import { getHeroesArray } from "./js/await";
import "./sass/styles.scss";

console.time("await");

getHeroesArray()
    .then( heroes => {
        console.table( heroes );
        console.timeEnd("await");
    })
    .catch( console.error );
