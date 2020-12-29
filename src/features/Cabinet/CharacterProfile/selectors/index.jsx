import { createSelector } from 'reselect';

const character = (state) => state.cabinet.character;

export const getCharacter = createSelector(character, (state) => {
  const {
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
  } = state.character;

  return {
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
  };
});

export const getCharacterStatus = createSelector(character, (state) => state.status);
