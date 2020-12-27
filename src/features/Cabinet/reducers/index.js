import { handleActions } from 'redux-actions';

import { statuses } from 'Constants';

import { setCharacters, setCharactersStatus, setCharacter, setCharacterStatus } from 'features/Cabinet/actions';

const cabinetState = {
  characters: [],
  status: statuses.none,
  character: {},
  characterStatus: statuses.none,
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
    [setCharacter]: (state, { payload }) => ({
      ...state,
      character: payload,
    }),
    [setCharacterStatus]: (state, { payload }) => ({
      ...state,
      characterStatus: payload,
    }),
  },
  cabinetState
);

export default cabinet;
