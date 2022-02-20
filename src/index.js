// @ts-check
import { slowPromise, mediumPromise, fastPromise } from "./js/promises";
import "./sass/styles.scss";

// slowPromise.then( console.log );
// mediumPromise.then( console.log );
// fastPromise.then( console.log );

Promise.race([ slowPromise, mediumPromise, fastPromise ])
    .then( console.log )
    .catch( console.error );
