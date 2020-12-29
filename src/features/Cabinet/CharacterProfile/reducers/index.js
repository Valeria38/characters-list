import { handleActions } from 'redux-actions';

import { statuses } from 'Constants';

import {
  setCharacter,
  setCharacterStatus,
  setHomeworld,
  setVehicles,
  setFilms,
} from 'features/Cabinet/CharacterProfile/actions';

const characterState = {
  character: {},
  status: statuses.none,
};

const character = handleActions(
  {
    [setCharacter]: (state, { payload }) => ({
      ...state,
      character: payload,
    }),
    [setCharacterStatus]: (state, { payload }) => ({
      ...state,
      status: payload,
    }),
    [setHomeworld]: (state, { payload }) => {
      return {
        ...state,
        character: { ...state.character, homeworld: payload },
      };
    },
    [setVehicles]: (state, { payload }) => {
      return {
        ...state,
        character: { ...state.character, vehicles: payload },
      };
    },
    [setFilms]: (state, { payload }) => {
      return {
        ...state,
        character: { ...state.character, films: payload },
      };
    },
  },
  characterState
);

export default character;
