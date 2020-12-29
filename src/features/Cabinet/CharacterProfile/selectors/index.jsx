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
    isLiked,
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
    isLiked,
  };
});

export const getCharacterStatus = createSelector(character, (state) => state.status);
