// @ts-check
import { searchHero } from "./js/promises";
import "./sass/styles.scss";

const heroId1 = "captain";
const heroId2 = "iron";

// Callback Hell
// searchHero( heroId1, (error, hero1) => {
//     if ( error ) { return console.error(`Hero with id: "${ heroId1 } does not exist !"`); }
//     searchHero(heroId2, (error, hero2) => {
//         if ( error ) { return console.error(`Hero with id: "${ heroId2 } does not exist !"`); }
//         console.log( `Sending "${ hero1?.name }" and "${ hero2?.name }" to a mission.` );
//     });
// });

// Promise Hell
// searchHero( heroId1 )
//     .then( ( hero1 ) => {
//         searchHero( heroId2 ).then( ( hero2 ) => {
//             console.log( `Sending "${ hero1.name }" and "${ hero2.name }" to a mission.` ); 
//         });
//     });

Promise.all([searchHero(heroId1), searchHero(heroId2)])
    .then( ( [ hero1, hero2 ] ) => {
        console.log( `Sending "${ hero1.name }" and "${ hero2.name }" to a mission.` );
    });

console.log( "End Program" );
