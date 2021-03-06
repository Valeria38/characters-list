import { handleActions } from 'redux-actions';

import { setSignInData, setSignInError } from 'features/SignIn/actions';

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
  },
  signInState
);

export default signIn;
