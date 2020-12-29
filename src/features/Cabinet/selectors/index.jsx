import { createSelector } from 'reselect';

const characters = (state) => state.cabinet.characters;

export const getCharacters = createSelector(characters, (state) =>
  state.characters.map(
    ({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, vehicles, films, url }) => ({
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
      homeworld,
      vehicles,
      films,
      url,
    })
  )
);
export const getCharactersStatus = createSelector(characters, (state) => state.status);
