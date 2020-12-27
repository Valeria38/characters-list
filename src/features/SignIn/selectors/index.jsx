import { createSelector } from 'reselect';

const signIn = (state) => state.signIn;

export const getSignInStatus = createSelector(signIn, (state) => state.isSignedIn);
