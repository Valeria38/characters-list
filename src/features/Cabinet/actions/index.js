import { createAction } from 'redux-actions';

import { statuses } from 'Constants';

export const setCharactersStatus = createAction('SET_CHARACTERS_STATUS', (status) => status);
export const setCharacters = createAction('SET_CHARACTERS', (data) => data);
export const setCharacterStatus = createAction('SET_CHARACTER_STATUS', (status) => status);
export const setCharacter = createAction('SET_CHARACTER', (data) => data);
export const setHomeworld = createAction('SET_HOMEWORLD', (data) => data);
export const setVehicles = createAction('SET_VEHICLES', (data) => data);
export const setFilms = createAction('SET_FILMS', (data) => data);
export const setTotal = createAction('SET_TOTAL', (total) => total);
export const setIsLiked = createAction('SET_IS_LIKED', (name) => name);

export const getCharacters = (page) => (dispatch) => {
  dispatch(setCharactersStatus(statuses.loading));
  fetch(`${process.env.API_URL}people?page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCharacters(data.results));
      dispatch(setTotal(data.count));
      dispatch(setCharactersStatus(statuses.success));
    });
};

export const getCharacter = (name) => (dispatch) => {
  dispatch(setCharacterStatus(statuses.loading));
  fetch(`${process.env.API_URL}people/?search=${name}`)
    .then((res) => res.json())
    .then(({ results }) => {
      dispatch(setCharacter(results[0]));
      dispatch(setCharacterStatus(statuses.success));
    });
};

export const getHomeworld = (homeworldUrl, fieldName) => (dispatch) => {
  fetch(`${homeworldUrl}`)
    .then((res) => res.json())
    .then(({ name }) => {
      dispatch(setHomeworld({ name, fieldName }));
    });
};
