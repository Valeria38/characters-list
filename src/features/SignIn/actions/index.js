import { createAction } from 'redux-actions';

export const setSignInData = createAction('SET_SIGN_IN_DATA', (data) => ({
  data,
}));
export const setSignInError = createAction('SET_SIGN_IN_ERROR', (error) => error);

export const logOut = createAction('LOG_OUT');
