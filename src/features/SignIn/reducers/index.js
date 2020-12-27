import { handleActions } from 'redux-actions';

import { setSignInData, setSignInError, logOut } from 'features/SignIn/actions';

const signInState = {
  isSignedIn: false,
  name: '',
  email: '',
};

const signIn = handleActions(
  {
    [setSignInData]: (
      state,
      {
        payload: {
          data: { name, email },
        },
      }
    ) => ({
      ...state,
      isSignedIn: true,
      name,
      email,
    }),
    [setSignInError]: (state, { payload: { error } }) => ({
      ...state,
      error,
    }),
    [logOut]: (state) => ({
      ...state,
      isSignedIn: false,
      name: '',
      email: '',
    }),
  },
  signInState
);

export default signIn;
