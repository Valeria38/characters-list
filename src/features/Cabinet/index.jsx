import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CharactersList from 'features/Cabinet/CharactersList';
import Autocomplete from 'features/Cabinet/Autocomplete';
import Header from 'features/Cabinet/components/Header';

import { getCharacters } from 'features/Cabinet/actions';
import { getCharacters as getCharactersSelector } from 'features/Cabinet/selectors';

import './styles.scss';

const Cabinet = () => {
  const dispatch = useDispatch();
  const characters = useSelector(getCharactersSelector);

  useEffect(() => {
    dispatch(getCharacters(1));
  }, []);

  return (
    <div className="cabinet">
      <div className="shadow">
        <Header />
        <Autocomplete options={characters} />
        <CharactersList />
      </div>
    </div>
  );
};

export default Cabinet;
