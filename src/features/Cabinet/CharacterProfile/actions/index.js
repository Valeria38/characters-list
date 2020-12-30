import { createAction } from 'redux-actions';

import { statuses } from 'Constants';

export const setCharacterStatus = createAction('SET_CHARACTER_STATUS', (status) => status);
export const setCharacter = createAction('SET_CHARACTER', (data) => data);
export const setHomeworld = createAction('SET_CHARACTER_HOMEWORLD', (data) => data);
export const setVehicles = createAction('SET_VEHICLES', (data) => data);
export const setFilms = createAction('SET_FILMS', (data) => data);
export const setIsLiked = createAction('SET_IS_LIKED_PROFILE');

export const getCharacter = (url) => (dispatch) => {
  dispatch(setCharacterStatus(statuses.loading));
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCharacter(data));
      dispatch(setCharacterStatus(statuses.success));
    });
};

export const getSearchCharacter = (name) => (dispatch) => {
  dispatch(setCharacterStatus(statuses.loading));
  fetch(`${process.env.API_URL}people?search=${name}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCharacter(data.results[0]));
      dispatch(setCharacterStatus(statuses.success));
    });
};

export const getHomeworld = (homeworldUrl) => (dispatch) => {
  fetch(`${homeworldUrl}`)
    .then((res) => res.json())
    .then(({ name }) => {
      dispatch(setHomeworld(name));
    });
};

export const getVehicles = (urls) => (dispatch) => {
  Promise.all(urls.map((url) => fetchAdditionalInfo(url))).then((data) => {
    dispatch(setVehicles(data));
  });
};

export const getFilms = (urls) => (dispatch) => {
  Promise.all(urls.map((url) => fetchAdditionalInfo(url))).then((data) => {
    dispatch(setFilms(data));
  });
};

const fetchAdditionalInfo = (url) => {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => data);
};
