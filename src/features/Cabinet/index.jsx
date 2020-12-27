import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CharactersList from 'features/Cabinet/CharactersList';
import Autocomplete from 'features/Cabinet/Autocomplete';

import { getCharacters } from 'features/Cabinet/actions';
import { getCharacters as getCharactersSelector } from 'features/Cabinet/selectors';

const Cabinet = () => {
  const dispatch = useDispatch();
  const characters = useSelector(getCharactersSelector);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div>
      <Autocomplete options={characters} />
      <CharactersList />
    </div>
  );
};

export default Cabinet;
