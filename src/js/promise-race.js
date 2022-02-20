import { fastPromise, mediumPromise, slowPromise } from "./promises";

Promise.race([ slowPromise, mediumPromise, fastPromise ])
    .then( console.log )
    .catch( console.error );