import { createAction } from 'redux-actions';

import { statuses } from 'Constants';

export const setCharactersStatus = createAction('SET_CHARACTERS_STATUS', (status) => status);
export const setCharacters = createAction('SET_CHARACTERS', (data) => data);

export const getCharacters = () => (dispatch) => {
  dispatch(setCharactersStatus(statuses.loading));
  fetch(`${process.env.API_URL}people`)
    .then((res) => res.json())
    .then(({ results }) => {
      dispatch(setCharacters(results));
      dispatch(setCharactersStatus(statuses.success));
    });
};
