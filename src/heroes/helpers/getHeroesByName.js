import { heroes } from "../data/Heroes";

export const getHeroesByName = (name = "") => {
  try {
    name = name.toLowerCase();
    if (name.length === 0) return [];
     return heroes.filter(  
        (hero) => hero.superhero.toLocaleLowerCase().includes(name)
    );
  } catch (error) {
    console.log(error);
  }
};
