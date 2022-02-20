// @ts-check

import { searchHero } from "./js/callbacks";
import "./sass/styles.scss";

const heroId1 = "captain";
const heroId2 = "spider";

searchHero( heroId1, ( error, hero1 ) => {
    if ( error ) { return console.error( error ); }

    searchHero(heroId2, ( error, hero2 ) => {

        if ( error ) { return console.error( error ); }

        console.log(`Sending hero ${ hero1?.name },\n and ${ hero2?.name } to a mission.`);

    });

});

console.log( "End Program" );
