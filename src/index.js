// @ts-check

import { searchHero } from "./js/callbacks";
import "./sass/styles.scss";

searchHero("captain", ( hero ) => console.table( hero ));
searchHero("iron", ( hero ) => console.table( hero ));
searchHero("spider", ( hero ) => console.table( hero ));

console.log( "End Program" );
