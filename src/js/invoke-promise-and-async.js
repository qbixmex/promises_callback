import { searchHero, searchHeroAsync } from "./promises";

searchHero("spider")
  .then((hero) => console.log(`Sending "${hero.name}" to a mission`))
  .catch(console.error);

searchHeroAsync("iron")
  .then((hero) => console.log(`Sending "${hero?.name}" to a mission`))
  .catch(console.error);
