// @ts-check

import { searchHero } from "./js/callbacks";
import "./sass/styles.scss";

const search = "captain";

searchHero(search, ( error, hero ) => {
    if ( error ) {
        console.error( error );
    } else {
        console.table( hero );
    }
});


console.log( "End Program" );
