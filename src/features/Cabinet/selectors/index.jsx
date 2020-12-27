import { createSelector } from 'reselect';

const cabinet = (state) => state.cabinet;

export const getCharacters = createSelector(cabinet, (state) => state.characters);
export const getCharactersStatus = createSelector(cabinet, (state) => state.status);
