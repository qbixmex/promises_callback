// @ts-check
import { getHeroAwait } from "./js/await";
import "./sass/styles.scss";

console.time("await");

getHeroAwait("spider2")
    .then( hero => {
        console.table( hero );
        console.timeEnd("await");
    })
    .catch( console.error );
