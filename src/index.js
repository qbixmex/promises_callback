// @ts-check
import searchHero from "./js/promises";
import "./sass/styles.scss";

const heroId1 = "spider";

searchHero( heroId1 )
    .then( hero => console.log( hero ))
    .catch( error => console.error( error ) );

console.log( "End Program" );
