import { handleActions } from 'redux-actions';

import { statuses } from 'Constants';

import {
  setCharacter,
  setCharacterStatus,
  setHomeworld,
  setVehicles,
  setFilms,
  setIsLiked,
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
    [setIsLiked]: (state) => {
      localStorage.setItem(state.character.name, !localStorage.getItem(state.character.name) ? 'isLiked' : '');
      return {
        ...state,
        character: { ...state.character, isLiked: !state.character.isLiked },
      };
    },
  },
  characterState
);

export default character;
