import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import character from 'features/Cabinet/CharacterProfile/reducers';

import { statuses } from 'Constants';

import { setCharacters, setCharactersStatus, setHomeworld } from 'features/Cabinet/actions';

const charactersState = {
  characters: [],
  status: statuses.none,
};

const characters = handleActions(
  {
    [setCharacters]: (state, { payload }) => {
      return {
        ...state,
        characters: payload,
      };
    },
    [setCharactersStatus]: (state, { payload }) => ({
      ...state,
      status: payload,
    }),
    [setHomeworld]: (state, { payload: { name, fieldName } }) => {
      const character = state.characters.find((character) => character.name === fieldName);
      character.homeworld = name;
      const characterIndex = state.characters.indexOf(character);
      const newCharacters = [...state.characters];
      newCharacters[characterIndex] = character;

      return {
        ...state,
        characters: newCharacters,
      };
    },
  },
  charactersState
);

export default combineReducers({ characters, character });
