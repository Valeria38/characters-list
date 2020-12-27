import { handleActions } from 'redux-actions';

import { statuses } from 'Constants';

import { setCharacters, setCharactersStatus } from 'features/Cabinet/actions';

const cabinetState = {
  characters: [],
  status: statuses.none,
};

const cabinet = handleActions(
  {
    [setCharacters]: (state, { payload }) => ({
      ...state,
      characters: payload,
    }),
    [setCharactersStatus]: (state, { payload }) => ({
      ...state,
      status: payload,
    }),
  },
  cabinetState
);

export default cabinet;
